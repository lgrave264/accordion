import React, {useState} from 'react';
import data from './util/data';
import List from './components/List';

function App(){
    
    return(
        <main>
            <section className='container'>
                <h3>Simply jokes</h3>
                <List />
            </section>
        </main>
    )
}

export default App