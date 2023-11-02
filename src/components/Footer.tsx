import React from 'react'

import tiktokIcon from '../assets/tiktok-24.png'
import instagramIcon from '../assets/instagram-6-24.png'
import xIcon from '../assets/twitter-x.png'
import facebookIcon from '../assets/facebook-3-24.png'
import youtubeIcon from '../assets/youtube-6-24.png'

const Footer = () => {
    return (
        <>
            <footer className="footer footer-center p-10 text-base-content rounded">
                <nav>
                    <p className='text-accent font-roboto'>More from Star Wars:</p>
                    <div className="grid grid-flow-col gap-4">
                        <a href="#"><img src={tiktokIcon} alt="TikTok Icon" width='20px' height='20px' /></a>
                        <a href="#"><img src={instagramIcon} alt="TikTok Icon" width='20px' height='20px' /></a>
                        <a href="#"><img src={xIcon} alt="TikTok Icon" width='20px' height='20px' /></a>
                        <a href="#"><img src={facebookIcon} alt="TikTok Icon" width='20px' height='20px' /></a>
                        <a href="#"><img src={youtubeIcon} alt="TikTok Icon" width='20px' height='20px' /></a>
                    </div>
                </nav>
                <nav className="grid grid-flow-col gap-4 text-accent font-roboto">
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <aside>
                    <p className='text-accent font-roboto'>Copyright © 2023 - All rights reserved by Lucasfilm ltd.</p>
                </aside>
            </footer>
        </>
    )
}

export default Footer