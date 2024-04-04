import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from "typewriter-effect";
import projects from '../../globals/projects';
import about from '../../globals/about';
import Contact from '../../components/Contact';
import Weather from '../../components/Weather';
import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import "./index.css";
import myPhoto from '../../images/portfolio-me.jpg';
import myPhotoBig from '../../images/portfolio-me-bigger.JPG';
import weatherProject from '../../images/weather-forecast.png';
import chatbotai from '../../images/chatbotai.png';
import { SiRedux, SiTypescript } from 'react-icons/si';
import { FaReact, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss } from "react-icons/si";

const PageHome = () => {
    // const [showWorks, setShowWorks] = useState(false);

    // useEffect(() => {

    //     document.addEventListener('scroll', function (e) {
    //         const clientHeight = document.documentElement.clientHeight
    //         const scrollTop = document.documentElement.scrollTop
    //         console.log(scrollTop)
    //         const sections = document.getElementsByTagName("section");
    //         if (sections[0] && sections[1]) {
    //             const section1Height = sections[0].clientHeight;
    //             const section2Height = sections[1].clientHeight;
    //             const section3Height = 350;
    //             const showWorks = clientHeight + scrollTop > section1Height + section2Height + section3Height;
    //             setShowWorks(showWorks);
    //         }
    //     });
    // })
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
                    <a href="mailto:vivizengjunyi@gmail.com" target="_blank"><AiOutlineMail /></a>
                    <a href="https://github.com/vivizengjunyi" target="_blank"><BsGithub /></a>
                    <a href="https://www.linkedin.com/in/junyi-vivi-zeng-266b811a1/" target="_blank"><AiFillLinkedin /></a>
                </div>
                <div className='weather'>
                    <Weather />
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
                        <p key={i}>{singleAbout.content}</p>
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


                    <div className='project-card' id='project-card-weather'>
                        <div className='project-img'>
                            <a href='https://vivizengjunyi.github.io/chatbotai/' target="_blank"><img src={chatbotai} className='weather-forecast-img' alt="react redux typescript chatbotai project" /></a>
                        </div>
                        <div className='project-info'>
                            <h3>Chatbot AI - React, Redux, TypeScript and Tailwind </h3>
                            <p>Chatbot AI is a dynamic tool designed to simplify the completion of forms and questionnaires. It guarantees efficient and precise completion of forms, significantly enhancing the user experience through a suite of innovative features:</p>
                            <ul className='features-list'>
                                <li>Streamlines form completion with conversational assistance.</li>
                                <li>Initiates tailored conversation flows based on user responses.</li>
                                <li>Accommodates a variety of answer types, including dropdowns, date picker, phone numbers, boolean, email, and more.</li>
                                <li>Issues a warning if a provided answer does not match the expected answer type.</li>
                                <li>Modifying responses adjusts the conversation flow for seamless interactions.</li>
                                <li>Enables users to address looped questions multiple times as required.</li>
                                <li>Presents responses in a structured table format for straightforward review.</li>
                            </ul>
                            <div className='tool-list'>
                                <h4>Tools</h4>
                                <FaReact className='tool-icon' />
                                <SiRedux className='tool-icon' />
                                <SiTypescript className='tool-icon' />
                                <SiTailwindcss className='tool-icon' />
                            </div>
                        </div>
                        <div className='links'>
                            <a href='https://junyizeng.me/chatbotai/' target="_blank">View Live Site</a>
                            <a href='https://github.com/vivizengjunyi/chatbot' target="_blank">View on gitHub</a>
                        </div>
                    </div>


                    <div className='project-card' id='project-card-weather'>
                        <div className='project-img'>
                            <a href='https://vivizengjunyi.github.io/weather/' target="_blank"><img src={weatherProject} className='weather-forecast-img' alt="react redux weather forecast project" /></a>
                        </div>
                        <div className='project-info'>
                            <h3>React, Redux and TypeScript Weather Forecast</h3>
                            <p>This weather forecast project was created with React, Redux and TypeScript, using the openweathermap database API. Special features are below: </p>
                            <ul className='features-list'>
                                <li>Search keyword to get location.</li>
                                <li>List selected location's current weather and 5 days forecast weather.</li>
                                <li>Save selected location to localstorage.</li>
                                <li>List recently selected locations.</li>
                                <li>Change background image based on location's main weather</li>
                            </ul>
                            <div className='tool-list'>
                                <h4>Tools</h4>
                                <FaReact className='tool-icon' />
                                <SiRedux className='tool-icon' />
                                <SiTypescript className='tool-icon' />
                                <FaBootstrap className='tool-icon' />
                            </div>
                        </div>
                        <div className='links'>
                            <a href='https://vivizengjunyi.github.io/weather/' target="_blank">View Live Site</a>
                            <a href='https://github.com/vivizengjunyi/react-redux-weather' target="_blank">View on gitHub</a>
                        </div>
                    </div>
                    {
                        projects.map((singleProject, i) =>
                            <div key={i} className='project-card'>
                                <div className='project-img'>
                                    <a href={singleProject.projectLink} target="_blank"><img src={singleProject.image} alt={singleProject.name} /></a>
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
                                    <a href={singleProject.projectLink} target="_blank">View Live Site</a>
                                    <Link to={`/project/` + i}>More Info</Link>
                                    <a href={singleProject.gitHubLink} target="_blank">View on gitHub</a>
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