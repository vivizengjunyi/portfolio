import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import './index.css';


const contact = () => {
    return (
        <section className='contact'>
            <div className='button'>
                <h2>Reach Out to Me</h2>
                <div className='social-icons'>
                    <a href="google.com"><AiOutlineMail /></a>
                    <a href="google.com"><BsGithub /></a>
                    <a href="google.com"><AiFillLinkedin /></a>
                </div>
                <div class="button__horizontal"></div>
                <div class="button__vertical"></div>
            </div>
        </section>
    )
}

export default contact
