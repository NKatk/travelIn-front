import React from 'react';
import {Link} from 'react-router-dom';

import './recommendArticles.css';

const RecommendNextArticles = ({recommendArticles}) =>(
    <div className='recommendNextArticles'>
        <div className='recommendNextArticlesText'>YOU MAY ALSO LIKE</div>
        <div className='recommendNextArticlesBlock'>
            {
                recommendArticles.map((item, i)=>(
                    <div key={i}  className='recommendNextArticleOne'>
                        <Link to={`/blog/${item.id}`}>
                        <img src={item.image} alt={item.title}  className='recommendNextArticleImg'/>
                            <h3 className='recommendNextArticleTitle'>{item.title}</h3>
                        </Link>
                    </div>
                ))
            }
        </div>
    </div>
);

export {RecommendNextArticles};