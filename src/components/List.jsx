import React, { useState } from 'react'
import data from '../util/data';
import Question from '../components/Question';

const List =({}) => {
    const [isTog, setisTog] = useState(false);
    return data.map((simply)=>{
        const {id, question, answer}=simply
        const toggle = () => {
            setisTog(!isTog)
        }
        return(
            <article key={id} className='list'>
                <div key={id} style={{position:'relative'}}>
                    <h3>{question}</h3>
                    <Question answer={answer}/>
                </div>
            </article>
        )
    })
}

export default List