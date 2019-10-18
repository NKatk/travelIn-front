import React from 'react'
import {Link} from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import './lastNews.css'

const LastNew = ({article}) =>{
    return(
        <div className='lastNew'>
            <div className='imgBlockLN'>
                <img className='imgLastNew' src={article.image} alt={article.title}/>
            </div>
            <div className='descriptionLN'>
                <Link className='linkLN' to='/photo'>PHOTODIARY</Link>
                <h3 className='titleLastNew'>{article.title}</h3>
                <div className='bodyLastNew'>{article.body}</div>
                <div className='linkArticleAndStatistics'>
                    <div className='linkArticle'>
                        <Link className='linkLN' to={`/blog/${article.id}`}>READ MORE...</Link>
                    </div>
                    <div className='blogStatics'>
                        <div>
                            <FeatherIcon icon='calendar' className='blogStaticsIcon'/>
                            <span className='blogStaticsData'>{article.date.slice(0, 10)}</span>
                        </div>
                        <div>
                            <FeatherIcon icon='eye' className='blogStaticsIcon'/>
                            <span className='blogStaticsData'>{article.views}</span>
                        </div>
                        <div>
                            <FeatherIcon icon='message-square' className='blogStaticsIcon'/>
                            <span className='blogStaticsData'>{article.comments}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export {LastNew};
