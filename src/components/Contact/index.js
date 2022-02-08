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
                    <a href="mailto:vivizengjunyi@gmail.com" target="_blank"><AiOutlineMail /></a>
                    <a href="https://github.com/vivizengjunyi" target="_blank"><BsGithub /></a>
                    <a href="https://www.linkedin.com/in/junyi-vivi-zeng-266b811a1/" target="_blank"><AiFillLinkedin /></a>
                </div>
                <div class="button__horizontal"></div>
                <div class="button__vertical"></div>
            </div>
        </section>
    )
}

export default contact
