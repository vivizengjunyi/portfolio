import React, { useEffect } from 'react';
import projects from '../../globals/projects';
import { useParams } from "react-router-dom";
import Contact from '../../components/Contact';
import "./index.css";

const PageProject = () => {
    let { id } = useParams();
    const singleProject = projects[id];

    useEffect(() => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }, [])
    return (
        <>
            <div className='single-project-page'>
                <section className='video-section'>
                    <video>
                        <source playinline autoplay loop muted src={singleProject.video} type="video/mp4" />
                    </video>
                    <div className='links'>
                        <a href={singleProject.projectLink}>View Live Site</a>
                        <a href={singleProject.gitHubLink}>View on gitHub</a>
                    </div>
                </section>
                <h1>{singleProject.name}</h1>
                <section className='overview-section'>
                    <div className='project-date'>
                        <h3>BCIT School Project</h3>
                        <p>{singleProject.date}</p>
                    </div>
                    <div className='tool'>
                        <h3>Tools</h3>

                        {singleProject.tool.map((SingleTool) =>
                            <SingleTool className='tool-icon' />
                        )}
                    </div>
                    <div className='overview'>
                        <p>{singleProject.overview}</p>
                    </div>
                </section>
                <section className='planing-section'>
                    <h3>Planning Stage</h3>
                    <p>{singleProject.planning}</p>
                </section>
                <section className='code-section'>
                    <h3>Code</h3>
                    <p>{singleProject.code}</p>
                </section>
                <section className='reflection-section'>
                    <h3>Reflection</h3>
                    <p>{singleProject.reflection}</p>
                </section>
            </div>
            <Contact />
        </>
    )
}

export default PageProject
