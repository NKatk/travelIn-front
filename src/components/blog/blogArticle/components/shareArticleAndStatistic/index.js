import React from 'react';
import FeatherIcon from 'feather-icons-react';

import './shareArticle.css';

const ShareArticleAndStatistic = ({date, views}) =>(
    <div className='shareArticle'>
        <div className='staticBlock'>
            <div className='staticData'>
                <FeatherIcon icon='calendar' className='staticBlockIcon'/>
                <span  className='staticBlockText'>{date.slice(0, 10)}</span>
            </div>
            <div className='staticData'>
                <FeatherIcon icon='eye' className='staticBlockIcon'/>
                <span  className='staticBlockText'>{views}</span>
            </div>
        </div>
        <div className='shareArticleBlock'>
            <span className='shareArticleText'>SHARE</span>
            <FeatherIcon icon='facebook' className='shareArticleIcon'/>
            <FeatherIcon icon='twitter' className='shareArticleIcon'/>
            <FeatherIcon icon='instagram' className='shareArticleIcon'/>
            <FeatherIcon icon='linkedin' className='shareArticleIcon'/>
        </div>
    </div>
);

export {ShareArticleAndStatistic};