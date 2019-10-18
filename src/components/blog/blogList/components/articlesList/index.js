import React from 'react';
import {Link} from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

import './articlesList.css'

const ArticlesList = ({finishContent, page}) =>(
    <div className='articlesBlog'>
        {
            finishContent[page].map((item, i)=>(
                <div key={i} className='articleB'>
                    <img src={item.image} alt={item.title} className='imgB'/>
                    <Link className='linkLN' to='/photo'>PHOTODIARY</Link>
                    <h3 className='titleB'>{item.title}</h3>
                    <div className='bodyB'>{item.body}</div>
                    <div className='linkArticleAndStatistics'>
                        <div className='linkArticle'>
                            <Link className='linkLN' to={`/blog/${item.id}`}>READ MORE...</Link>
                        </div>
                        <div className='blogStatics'>
                            <div>
                                <FeatherIcon icon='calendar' className='blogStaticsIcon'/>
                                <span className='blogStaticsData'>{item.date.slice(0, 10)}</span>
                            </div>
                            <div>
                                <FeatherIcon icon='eye' className='blogStaticsIcon'/>
                                <span className='blogStaticsData'>{item.views}</span>
                            </div>
                            <div>
                                <FeatherIcon icon='message-square' className='blogStaticsIcon'/>
                                <span className='blogStaticsData'>{item.comments}</span>
                            </div>
                        </div>
                    </div>
                </div>

            ))
        }
    </div>
);

export {ArticlesList};