import React from 'react';
import {Link} from 'react-router-dom';

import FeatherIcon from 'feather-icons-react';

import './footer.css'

const Footer = () =>{

    return(
        <div className='footerBlock'>
            <div className="regulations">
                <Link to="/" className="linkRegulations">Terms and conditions</Link>
                <Link to="/" className="linkRegulations">Privacy</Link>
            </div>
            <div className="networks">
                <span>Folow</span>
                <a href="/"><FeatherIcon icon='facebook' className='linkNetworks'/></a>
                <a href="/"><FeatherIcon icon='twitter' className='linkNetworks'/></a>
                <a href="/"><FeatherIcon icon='instagram' className='linkNetworks'/></a>
            </div>
        </div>
    )
};

export default Footer;