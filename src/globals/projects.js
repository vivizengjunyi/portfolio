import gomovie from '../images/movie-three-device.png';
import portfolio from '../images/portfolio-three-device.png';
import capstone from '../images/capstone-three-device.png';
import gomovieVideo from '../videos/movie-video.mp4';
import capstoneVideo from '../videos/capstone-video.mp4';
import portfolioVideo from '../videos/portfolio-video.mp4';
import {FaReact, FaSass, FaWordpress} from 'react-icons/fa';
import {DiJavascript1, DiPhp} from 'react-icons/di';
import {SiAdobexd} from 'react-icons/si';
import {IoLogoFigma} from 'react-icons/io5';

const projects = [
    {
        'name': 'React Movie Database',
        'briefIntro': 'This is a website showing movie databases. It allows users to search movies, gather information, and add favorite movies. Developed with React JS using the Movie Database API.',
        'image':gomovie,
        'video': gomovieVideo,
        'iframe': '//jsfiddle.net/vivizeng/L6xbp5te/4/embedded/',
        'overview':'Gomovie was a movie database app that allows users to search movies and get relevant information and even favorite movies that were stored in the local storage. Gomovie was created using React JS Frameworks and was created by myself from scratch. The Movie Database API was used to fetch the data and information pertaining to the movies such as poster images, movie ratings, and other detailed information.',
        'code' : 'Favorite movie was a special feature. Using react hooks like useState and useEffect was very easy to implement the feature.',
        'reflection': 'This is my first React JS project, I found I loved React JS when I started this project, so in the rest projects in this course, I prefer to use React JS as a framework to build the project. In this project, it is my first time to use an external API to fetch data and use it in React.',
        'tool': [FaReact, DiJavascript1, FaSass, SiAdobexd],
        'date': 'Sep 2021',
        'role':'Developer & Designer',
        'projectLink':'https://movie.junyizeng.me',
        'gitHubLink':'https://github.com/vivizengjunyi/BCIT-Movie',
    },
    {
        'name': 'React Portfolio',
        'briefIntro': 'This portfolio was designed and developed as a platform to showcase the overall development skills that I learned within the TWD program, based on React JS.',
        'image':portfolio,
        'video': portfolioVideo,
        'iframe':'//jsfiddle.net/vivizeng/L6xbp5te/8/embedded/',
        'overview':'The purpose of the portfolio site was to create a clean, simple, and focusing website that showcases what I had learned in the FWD program. This project was created with React JS from scratch.',
        'code' : 'I separated the data layer into a configure file so it was decoupled from the UI layer which is better for maintenance.',
        'reflection': 'This was my second React JS project. This project made me more familiar with React components, hooks, and the library. In this project, I implemented theme feature as well, it is a very cool feature and I made it without using any library. I separated the data layer into a configure file so it was decoupled from the UI layer which was better for maintenance. There was also a big challenge that displays the animation when scrolling to the project section, I had made a lot of solutions and efforts, finally, I successfully solved some issues and implement the idea I had at the beginning.',
        'tool': [FaReact, DiJavascript1, SiAdobexd],
        'date': 'Nov 2021',
        'role':' Developer & Designer',
        'projectLink':'https://junyizeng.me',
        'gitHubLink':'https://github.com/vivizengjunyi/portfolio',
    }/* ,
    {
        'name': 'Capstone Project',
        'briefIntro': 'This is a WordPress and Woocommerce project.',
        'image':capstone,
        'video': capstoneVideo,
        'overview':'comming soon',
        'code' : 'comming soon',
        'reflection': 'comming soon',
        'tool': [FaWordpress, DiPhp, DiJavascript1, FaSass, IoLogoFigma],
        'date': 'Nov 2021',
        'role': 'Team up with three classmates',
        'projectLink':'https://tranquiltofino.bcitwebdeveloper.ca/',
        'gitHubLink':'https://github.com/vivizengjunyi/tranquil-tofino',
    } */
]

export default projects
