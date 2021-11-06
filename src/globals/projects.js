import gomovie from '../images/gomovie-three-device.png';
import video1 from '../videos/train.mp4';
import {FaReact, FaSass, FaWordpress} from 'react-icons/fa';
import {DiJavascript1, DiPhp} from 'react-icons/di';

const projects = [
    {
        'id': 1,
        'name': 'Capstone Project',
        'briefIntro': 'This is a WordPress and Woocommerce project',
        'image':gomovie,
        'video': video1,
        'overview':'Screen Play was developed with React using the Movie Database API. This responsive web application allows users to browse and filter through a database of movies that are new releases, popular or upcoming. It has the functionalities to select favourite movies and add them to a watch list.',
        'planning': 'We used Figma for collaborating on wireframes and mockups. We made sure to incorporate the most useful information when a user looks for a movie. We took inspiration.',
        'code' : 'The special features of saving the favourite movies and watchlist to local storage are developed with the code below. In the individual movie cards, we have functionalities to check if local storage has the array available, if it is we will save it to that list when selecting the heart icon/3d glasses icon.',
        'reflection': 'We are very happy with the results of this project. It was certainly not easy but a lot of fun to develop and design. Check out Screen Play!',
        'tool': [FaWordpress, DiPhp, DiJavascript1, FaSass],
        'date': 'Nov 2021',
        'role': ['Responsed for Sass. Finished 95% of the website layout', 'Used JavaScript to implement some new features', 'Designed the cabin card section, single cabin page, about page and fotter'],
        'projectLink':'',
        'gitHubLink':'',
    },
    {
        'id': 2,
        'name': 'React Movie Database',
        'projectPage': '',
        'briefIntro': 'This is a React project',
        'image':gomovie,
        'video': video1,
        'overview':'Screen Play was developed with React using the Movie Database API. This responsive web application allows users to browse and filter through a database of movies that are new releases, popular or upcoming. It has the functionalities to select favourite movies and add them to a watch list.',
        'planning': 'We used Figma for collaborating on wireframes and mockups. We made sure to incorporate the most useful information when a user looks for a movie. We took inspiration.',
        'code' : 'The special features of saving the favourite movies and watchlist to local storage are developed with the code below. In the individual movie cards, we have functionalities to check if local storage has the array available, if it is we will save it to that list when selecting the heart icon/3d glasses icon.',
        'reflection': 'We are very happy with the results of this project. It was certainly not easy but a lot of fun to develop and design. Check out Screen Play!',
        'tool': [FaReact, DiJavascript1, FaSass],
        'date': 'Sep 2021',
        'role':'Designer & Developer',
        'link':'movie.junyizeng.me',
        'gitHubLink':'',
    },
    {
        'id': 3,
        'name': 'React Portfolio',
        'briefIntro': 'This is a React project',
        'image':gomovie,
        'video': video1,
        'overview':'Screen Play was developed with React using the Movie Database API. This responsive web application allows users to browse and filter through a database of movies that are new releases, popular or upcoming. It has the functionalities to select favourite movies and add them to a watch list.',
        'planning': 'We used Figma for collaborating on wireframes and mockups. We made sure to incorporate the most useful information when a user looks for a movie. We took inspiration.',
        'code' : 'The special features of saving the favourite movies and watchlist to local storage are developed with the code below. In the individual movie cards, we have functionalities to check if local storage has the array available, if it is we will save it to that list when selecting the heart icon/3d glasses icon.',
        'reflection': 'We are very happy with the results of this project. It was certainly not easy but a lot of fun to develop and design. Check out Screen Play!',
        'tool': [FaReact, DiJavascript1],
        'date': 'Nov 2021',
        'role':'Designer & Developer',
        'link':'',
        'gitHubLink':'',
    }
]

export default projects
