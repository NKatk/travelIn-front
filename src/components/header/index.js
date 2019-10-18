import React from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import {Link} from 'react-router-dom';

import './index.css';
import 'typeface-inconsolata';
import 'typeface-playfair-display'

const Header = ({menuOpen, stateMenu}) =>{
    return(
        <div className='header'>
            <div className="header_section">
                <div className="header_brand">
                    <Link to="/">TRAVELIN</Link>
                </div>
            </div>

            <TransitionGroup component={null}>
                {stateMenu && (
                    <CSSTransition classNames='submenu_link' timeout={400}>
                        <div className="submenu_section">
                            <div className="submenu_link"><Link to="/">HOME</Link></div>
                            <div className="submenu_link"><Link to="/blog">BLOG</Link></div>
                            <div className="submenu_link"><Link to="/photo">PHOTO</Link></div>
                            <div className="submenu_link"><Link to="/about">ABOUT US</Link></div>
                        </div>
                    </CSSTransition>
                )}
            </TransitionGroup>


            <div className="menu_section">
                <div className="header_link"><Link to="/">HOME</Link></div>
                <div className="header_link"><Link to="/blog">BLOG</Link></div>
                <div className="header_link"><Link to="/photo">PHOTO</Link></div>
                <div className="header_link"><Link to="/about">ABOUT US</Link></div>
            </div>

            <div className='icoMenu' onClick={menuOpen}>
                &#9776;
            </div>

        </div>
    )
};

export default Header;