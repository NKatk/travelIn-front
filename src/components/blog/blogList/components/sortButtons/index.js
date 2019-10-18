import React from 'react';
import FeatherIcon from 'feather-icons-react';

import './sortButtons.css';

const SortButtons = ({sortList, sortType, sortTop}) =>{
    return(
        <div className='sortList'>
            <div className='variableSort' onClick={()=>sortList('date')} title='Sort by date'>
                <FeatherIcon icon='calendar' className={(sortType === 'date')?'iconSortActive':'iconSort'}/>
                <FeatherIcon icon={(sortType === 'date' && sortTop === 'down')?'chevron-down':'chevron-up'} className={(sortType === 1)?'iconSortActive':'iconSort'}/>
            </div>
            <div className='variableSort' onClick={()=>sortList('views')} title='Sort by views'>
                <FeatherIcon icon='eye' className={(sortType === 'views')?'iconSortActive':'iconSort'}/>
                <FeatherIcon icon={(sortType === 'views' && sortTop === 'down')?'chevron-down':'chevron-up'} className={(sortType === 2)?'iconSortActive':'iconSort'}/>
            </div>
            <div className='variableSort' onClick={()=>sortList('comments')} title='Sort by comments'>
                <FeatherIcon icon='message-square' className={(sortType === 'comments')?'iconSortActive':'iconSort'}/>
                <FeatherIcon icon={(sortType === 'comments' && sortTop === 'down')?'chevron-down':'chevron-up'} className={(sortType === 3)?'iconSortActive':'iconSort'}/>
            </div>
        </div>
    )
};

export {SortButtons};