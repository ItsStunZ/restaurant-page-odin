import './styles.css';
import { load_home } from './modules/pages/home.js';
import { load_menu } from './modules/pages/menu.js';
import { load_about } from './modules/pages/about.js';

(() => {
    const contentElement = document.querySelector('#content');

    const switch_tab = (tab) => {
        // clear current content
        contentElement.innerHTML = '';

        // load next tab
        tab();
    };
})();