import React from 'react';
import './footer.css';
import Link from 'next/link';
import Fireflies from './Fireflies';

const Footer = () => {
    const now = new Date();
    const year = now.getFullYear();
    return (
        <div className='footer'>
            <Fireflies />
            <div className="left">
                <div className="creator">
                    <span className="text">Made with</span>
                    <span className="heart">❤️</span>
                    <span className="by">by</span>
                    <span className="name">Neel</span>
                </div>
                <p className="copyright">copyright © {year}</p>
            </div>
            <div className="middle">
                <h1>Start Automating Your Home Today</h1>
                <p>Get started now and transform your home into a smart, efficient, and comfortable living space.</p>
            </div>
            <div className="right">
                <Link href="/new_connection" className='link_get_started'>
                    <span>GET STARTED</span>
                </Link>
            </div>
        </div>
    )
}

export default Footer;