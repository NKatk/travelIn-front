import React from 'react';

import './pageButtons.css'

const PageButtons = ({finishContent, page, choicePage}) =>{
    return(
        <div className='buttonsPage'>
            {
                finishContent.map((item, i)=>(
                    <span className={i===page?'buttonNumberPageActive':'buttonNumberPage'} key={i} onClick={()=>choicePage(i)}>{i+1}</span>
                ))
            }
        </div>
    )
};

export {PageButtons};