import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Typewriter from "typewriter-effect";
import projects from '../../globals/projects';
import about from '../../globals/about';
import Contact from '../../components/Contact';
import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import "./index.css";
import myPhoto from '../../images/portfolio-me.jpg';
import myPhotoBig from '../../images/portfolio-me-bigger.JPG';



const PageHome = () => {
    const [showWorks, setShowWorks] = useState(false);

    useEffect(() => {

        document.addEventListener('scroll', function (e) {
            const clientHeight = document.documentElement.clientHeight
            const scrollTop = document.documentElement.scrollTop
            console.log(scrollTop)
            const sections = document.getElementsByTagName("section");
            if (sections[0] && sections[1]) {
                const section1Height = sections[0].clientHeight;
                const section2Height = sections[1].clientHeight;
                const section3Height = 350;
                const showWorks = clientHeight + scrollTop > section1Height + section2Height + section3Height;
                setShowWorks(showWorks);
            }
        });
    })
    return (
        <div>
            <section className="banner">
                <p className
                    ='intro'><span className="animate__animated animate__bounce">Hello!</span> I am </p>
                <div className='flex-container'>
                    <p className='iteration'><Typewriter
                        onInit={(Typewriter) => {
                            Typewriter
                                .typeString('Junyi(Vivi) Zeng.')
                                .pauseFor(1000)
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
            </section>

            <section className="about" id="about">
                <h2>About Me</h2>
                <picture>
                    <source media="(min-width:99rem)" srcset={myPhotoBig} />
                    <img src={myPhoto} alt="my photo" />
                </picture>
                <div className='about-info'>
                    {about.map((singleAbout, i) =>
                        <p>{singleAbout.content}</p>
                    )}
                </div>
                <div className='stack'>
                    <div className='teck-stack'>
                        <h3>Teck Stack</h3>
                        <div className='stack-list'>
                            {about[3].teckStack.map(singleTeckStack =>
                                <span>{singleTeckStack}</span>
                            )}
                        </div>
                    </div>
                    <div className='design-stack'>
                        <h3>Design Stack</h3>
                        <div className='stack-list'>
                            {about[4].designStack.map(singleDesignStack =>
                                <span>{singleDesignStack}</span>
                            )}
                        </div>
                    </div>
                </div>
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
            <Contact />
        </div>
    )
}

export default PageHome;