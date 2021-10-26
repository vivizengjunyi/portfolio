import React from 'react';
import {BsGithub} from 'react-icons/bs';
import {AiFillLinkedin, AiOutlineMail} from 'react-icons/ai';


const contact = () => {
    return (
        <section className='contact'>
            <p>Contact Me</p>
            <AiOutlineMail />
            <BsGithub />
            <AiFillLinkedin />
            
        </section>
    )
}

export default contact
