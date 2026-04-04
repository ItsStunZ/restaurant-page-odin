import './styles.css';
import { load_home } from './modules/pages/home.js';
import { load_menu } from './modules/pages/menu.js';
import { load_about } from './modules/pages/about.js';

const contentElement = document.querySelector('.content');

const navHomeBtn = document.querySelector('#nav-home-btn');
const navMenuBtn = document.querySelector('#nav-menu-btn');
const navAboutBtn = document.querySelector('#nav-about-btn');

// Nav Button events
navHomeBtn.addEventListener('click', switchPage);
navMenuBtn.addEventListener('click', switchPage);
navAboutBtn.addEventListener('click', switchPage);

let activeButton = null;

function switchPage(e) {
    const buttonTextContent = e.target.textContent; // Determine what button was pressed

    if (activeButton !== null) {
        activeButton.classList.remove('active');
        activeButton = null;
    }
    
    // clear current content
    contentElement.innerHTML = '';

    if (buttonTextContent === 'Home') {
        e.target.classList.add('active');
        activeButton = e.target;
        load_home();
    } else if (buttonTextContent ==='Menu') {
        e.target.classList.add('active');
        activeButton = e.target;
        load_menu();
    } else if (buttonTextContent === 'About') {
        e.target.classList.add('active');
        activeButton = e.target;
        load_about();
    }


};

// Default load home
// (() => {
//     contentElement.innerHTML = '';
//     navHomeBtn.classList.add('active');
//     activeButton = navHomeBtn;
// })();