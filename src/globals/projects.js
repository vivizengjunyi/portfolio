import gomovie from '../images/gomovie-three-device.png';
import portfolio from '../images/portfolio-three-device.png';
import gomovieVideo from '../videos/gomovie-video.mp4';
import {FaReact, FaSass, FaWordpress} from 'react-icons/fa';
import {DiJavascript1, DiPhp} from 'react-icons/di';
import {SiAdobexd} from 'react-icons/si';
import {IoLogoFigma} from 'react-icons/io5';

const projects = [
    {
        'name': 'Capstone Project',
        'briefIntro': 'This is a WordPress and Woocommerce project.',
        'image':gomovie,
        'video': gomovieVideo,
        'overview':'comming soon',
        'code' : 'comming soon',
        'reflection': 'comming soon',
        'tool': [FaWordpress, DiPhp, DiJavascript1, FaSass, IoLogoFigma],
        'date': 'Nov 2021',
        'role': 'Team up with three classmates',
        'projectLink':'',
        'gitHubLink':'',
    },
    {
        'name': 'React Movie Database',
        'briefIntro': 'This is a website showing movie databases. It allows users to search movies, gather information, and add favorite movies. Developed with React JS using the Movie Database API.',
        'image':gomovie,
        'video': gomovieVideo,
        'iframe': '//jsfiddle.net/vivizeng/L6xbp5te/4/embedded/',
        'overview':'Gomovie is a movie database app that allows users to search movies and read much relevant information and even add favourite movies to be stored into the local storage. Gomovie was created using React JS Frameworks and was created by myself. The Movie Database API was used to gather all the data and information pertaining to the movies such as poster image, movie rating and other relevant movie information.',
        'code' : 'Saving favorite movies to the local storage is a special feature. React hooks like useState and useEffect,  provide convenience ways to favorite movies. ',
        'reflection': 'We are very happy with the results of this project. It was certainly not easy but a lot of fun to develop and design.',
        'tool': [FaReact, DiJavascript1, FaSass, SiAdobexd],
        'date': 'Sep 2021',
        'role':'Developer & Designer',
        'link':'movie.junyizeng.me',
        'gitHubLink':'',
    },
    {
        'name': 'React Portfolio',
        'briefIntro': 'This portfolio was designed and developed as a platform to showcase the overall development skills that I learned within the TWD program, based on React JS.',
        'image':portfolio,
        'video': gomovieVideo,
        'iframe':'//jsfiddle.net/vivizeng/L6xbp5te/8/embedded/',
        'overview':'The purpose of the portfolio site was to create a clean, simple, and focusing website that showcases what I had learned in the FWD program. This project was created with React JS. There were two databases in local storage. All data could be rendered to a specific section of the site to make my code more concise and easy to read.',
        'code' : '',
        'reflection': '',
        'tool': [FaReact, DiJavascript1, SiAdobexd],
        'date': 'Nov 2021',
        'role':' Developer & Designer',
        'link':'',
        'gitHubLink':'',
    }
]

export default projects
