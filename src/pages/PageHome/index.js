import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Typewriter from "typewriter-effect";
import projects from '../../globals/projects';
import about from '../../globals/about';
import Contact from '../../components/Contact';
import { MdDoubleArrow } from "react-icons/md";
import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import "./index.css";
import me from '../../images/IMG_0751.jpg';

const PageHome = () => {
    const [showWorks, setShowWorks] = useState(false);

    useEffect(() => {
        
        document.addEventListener('scroll', function (e) {
            const clientHeight = document.documentElement.clientHeight
            const scrollTop = document.documentElement.scrollTop
            console.log(scrollTop)
            const sections = document.getElementsByTagName("section");
            if (sections[0] && sections[1]) {
                const section1Height = sections[0].clientHeight
                const section2Height = 350
                const showWorks = clientHeight + scrollTop > section1Height + section2Height;
                setShowWorks(showWorks)
            }
        });


    })
    return (
        <div>
            <section className="banner">
                <p className="animate__animated animate__bounce">Hello!</p>
                <div className='flex-container'>
                    <p>I am </p>
                    <p className='iteration'><Typewriter
                        onInit={(Typewriter) => {
                            Typewriter
                                .typeString('Junyi(Vivi) Zeng.')
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString('a front-end web developer.')
                                .start();
                        }}
                    /></p>
                </div>
                <div className='social-icons'>
                    <a href="google.com"><AiOutlineMail /></a>
                    <a href="google.com"><BsGithub /></a>
                    <a href="google.com"><AiFillLinkedin /></a>
                </div>
                <HashLink smooth to="#works"><MdDoubleArrow className='arrow' /></HashLink>
            </section>
            <section className="works" id="works">
                <h2>My Projects</h2>
                <div className="projects">
                    {
                        showWorks && projects.map((singleProject, i) =>
                            <div key={i} className='project-card'>
                                <div className='project-img'>
                                    <img src={singleProject.image} alt={singleProject.name} />
                                </div>
                                <div className='project-info'>
                                    <h3>{singleProject.name}</h3>
                                    <p>{singleProject.briefIntro}</p>
                                    <div className='tool-list'>
                                        <h4>Tools</h4>
                                        {singleProject.tool.map((SingleTool) =>
                                            <SingleTool className='tool-icon' />
                                        )}
                                    </div>
                                </div>
                                <div className='links'>
                                    <a href={singleProject.projectLink}>View Live Site</a>
                                    <Link to={`/project/` + i}>More Info</Link>
                                    <a href={singleProject.gitHubLink}>View on gitHub</a>
                                </div>
                            </div>
                        )
                    }
                </div>
            </section>
            <section className="about" id="about">
                <h2>About Me</h2>
                <div className='about-wrapper'>
                    <img src={me} alt='my' />
                    {about.map((singleAbout, i) =>
                        <div className='about-content'>
                            <p>{singleAbout.content}</p>
                        </div>
                    )}
                </div>
            </section>
            <Contact />
        </div>
    )
}

export default PageHome;