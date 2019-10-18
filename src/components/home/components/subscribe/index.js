import React from 'react';

import FeatherIcon from 'feather-icons-react';
import './subscribe.css'

const Subscribe = () =>{

    return(
        <div className='subscribeBlock'>
            <h3 className='subscribeTitle'>Sing up for our newsletter!</h3>
            <div className='formSubscribe'>
                <input className='inputSubscribe' type="text" placeholder='Enter a valid email address'/>
                <FeatherIcon icon='navigation-2' className='subscribeSend'/>
            </div>
        </div>
    )
};

export {Subscribe};