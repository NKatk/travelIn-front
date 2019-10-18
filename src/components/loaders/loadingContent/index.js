import React from 'react';

import './loading.css';

const LoadingContent = () =>(
    <div className='loading'>
        <div className="spinner">
            <div className="cube1"> </div>
            <div className="cube2"> </div>
        </div>
    </div>
);

export {LoadingContent};