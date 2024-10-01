import React from 'react'
import logo from '../assets/image/Logo.png'
import email from '../assets/image/email.png'
import twitter from '../assets/image/Twitter.png'
import linnkedin from '../assets/image/LinkedIn.png'
import youtube from '../assets/image/YouTube.png'
import facebook from '../assets/image/Facebook.png'
import Dropdown from './Dropdown'
import '../App.css'



export default function Footer() {
    const options =['English']
    return (
        <footer className='footer'>
            <div className='container'>
                <div className="flexbox alignstart">
                    <img src={logo} alt="" />
                    <div className="footerdetails">
                        <a href='/' className="text20">Product</a>
                        <a href='/'>Features</a>
                        <a href='/'>Pricing</a>
                    </div>
                    <div className="footerdetails">
                        <a href='/' className="text20">Resources</a>
                        <a href='/'>Blog</a>
                        <a href='/'>User guides</a>
                        <a href='/'>Webinars</a>
                    </div>
                    <div className="footerdetails">
                        <a href='/' className="text20">Company</a>
                        <a href='/'>About</a>
                        <a href='/'>Join us</a>
                    </div>

                    <div className="footerinfo">
                        <p className="text20 bluetext">Subscribe to our newsletter</p>
                        <p className='text12'>For product announcements and exclusive insights</p>
                        <div className="inputwrapper flexbox">
                            <img src={email} />
                            <input type="email" placeholder="Enter your email" />
                            <div className="primarybtn">Subscribe</div>

                        </div>
                    </div>
                </div>

                <div className="bootom flexbox">
                    <Dropdown options={options} name={'English'}/>
                    <div className="flexbox">
                        <a href='/' className="text14">© 2022 Brand, Inc.</a>
                        <span>•</span>
                        <a href='/' className="text14">Privacy</a>
                        <span>•</span>
                        <a href='/' className="text14">Terms</a>
                        <span>•</span>
                        <a href='/' className="text14">Sitemap</a>
                    </div>
                    <div className="flexbox gap15">
                        <a href="/"><img src={twitter} /></a>
                        <a href="/"><img src={facebook} /></a>
                        <a href="/"><img src={linnkedin} /></a>
                        <a href="/"><img src={youtube} /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
