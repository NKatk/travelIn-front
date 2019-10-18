import React from 'react';
import {Link} from 'react-router-dom';

import './postArticle.css';

const PostArticle = ({image, title, body}) =>(
    <div className='postArticle'>
        <div className='blockPostArticleImg'>
            <img className='postArticleImg' src={image} alt={title}/>
        </div>
        <div className='blockPostBodyArticle'>
            <Link className='linkArticlePhoto' to='/photo'>PHOTODIARY</Link>
            <h3 className='postTitle'>{title}</h3>
            <div className='postBodyArticle' dangerouslySetInnerHTML={{__html: body}}/>
        </div>
    </div>
);

export {PostArticle};