import React, {useState} from 'react'
import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import data from '../util/data';

const Question = ({answer}) => {
    const [showInfo,setShowInfo] = useState(false)
    return (
        <article className='question'>
            <header>
                <button className='btn' onClick={()=>setShowInfo(!showInfo)}>
                    {showInfo ? <AiOutlineMinus/> : <AiOutlinePlus/>}
                </button>
            </header>
            {showInfo && <p>{answer}</p>}
        </article>
    );
};

export default Question
