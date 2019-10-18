import React from 'react';
import FeatherIcon from 'feather-icons-react';

import './commentsArticle.css';

const CommentsArticle = ({comments}) =>(
    <div className='commentsBlock'>
        <div className='commentsHelpText'>{comments.length} COMMENTS</div>
        <div className='commentsListBlock'>
            {
                comments.map((item)=>(
                    <div key={item.id} className='commentOne'>
                        <div>
                            <img src={item.image} alt={item.name} className='commentImage'/>
                        </div>
                        <div  className='commentOneBody'>
                            <h4 className='commentName'>{item.name}</h4>
                            <p className='commentMessage'>{item.textBody}</p>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className='commentInputBlock'>
            <img className='commentImageInput' src="https://t4.ftcdn.net/jpg/02/38/86/89/500_F_238868953_D6dfKSahj9HBXzzNleaPmfQI8gtN1jq5.jpg" alt="anonim"/>
            <div className='commentInputSend'>
                <textarea className='commentInput' type="text" placeholder='JOIN THE DISCUSSION'/>
                <div className='commentTextLink'>
                <span className='commentsHelpTextLink'>CONNECTED WITH</span>
                    <FeatherIcon className='commentLinkIcon' icon='facebook'/>
                    <FeatherIcon className='commentLinkIcon' icon='twitter'/>
                </div>
            </div>
        </div>
    </div>
);

export {CommentsArticle};