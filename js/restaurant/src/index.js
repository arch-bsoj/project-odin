import './styles/style.css';
import './styles/contact.css';
import './styles/menu.css';
import './styles/home.css';
import createHome from './scripts/home.js';
import createMenu from './scripts/menu.js';
import createContact from './scripts/contact.js';
import * as util from './scripts/util.js';
import log from './images/logo2.png';
import gh from './images/github-64.png';



let tabFunction = {
    home: createHome,
    menu: createMenu,
    contact: createContact
}
function createFooter(){
    const footer = document.createElement('div');
    footer.className = "footer";

    const credits = document.createElement('p');
    credits.textContent = 'Icons designed by ';
    credits.className = 'credits';
    const creditLink = document.createElement('a');
    creditLink.href = "https://www.freepik.com/vectors/logo"
    creditLink.textContent = 'roserodionova / Freepik';

    const github = new Image()
    const about = document.createElement('a');
    about.href = "https://arch-bsoj.github.io/project-odin/";
    about.target = "_blank"
    github.className = 'github';
    github.src = gh;
    github.setAttribute('align', 'right')
    about.appendChild(github)
    credits.appendChild(creditLink);
    footer.appendChild(credits);
    footer.appendChild(about);
    return footer
}

function initiatePage(){
    // get div#content
    const body = document.getElementById('content');
    
    // create container for the header
    const container = document.createElement('div');

    // container for links to center the text 
    const linkContainer = document.createElement('div'); 
    // links subcontainer, use for not affecting the other link when hovering
    const links = document.createElement('div');
    linkContainer.className = "link-container";
    links.id = "links";
    container.id = "header";

    // create logo template for the webpage
    const logoText = document.createElement('h1');
    logoText.className = "logoText";
    const logo = new Image();
    logoText.textContent = "Borgir Fever";
    logo.className = "logo";
    logo.src = log

    // create the element for the links
    const home = document.createElement('a');
    const menu = document.createElement('a');
    const contact = document.createElement('a');
    home.id = "home";
    menu.id = "menu";
    contact.id = "contact";
    home.textContent = "Home";
    menu.textContent = "Menu";
    contact.textContent = "Contact";
    const tabList = {home,menu, contact}

    // insert the elements to an object so other scripts will be able to access the elements.
    tabList[util.current].classList.add('active');

    // set onclick functionality for the link
    Object.values(tabList).forEach((link) => {
        link.onclick = () => {
            if(!link.classList.contains('active')){
                util.setCurrent(link.id);
                util.removeClass(Object.values(tabList), 'active');
                link.classList.add('active')
                tabFunction[util.current]();
            }
        }
    });
    // add the links to the subcontainer
    Object.values(tabList).forEach((link) => {
        links.appendChild(link);
    });


    // Create container for the content of each tab
    const main = document.createElement('div');
    main.id = "main-container";

    // add the subcontainer to the main link container
    linkContainer.appendChild(links)
    container.appendChild(logo); // add the logo in a container to center
    container.appendChild(logoText); 

    body.appendChild(container); // add the logo first because
    body.appendChild(linkContainer); // insert the links after
    body.appendChild(main);
    body.appendChild(createFooter());
}   


initiatePage();
tabFunction[util.current]();

