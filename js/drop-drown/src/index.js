import './styles/style.css';

const content = document.getElementById('content');

function insertChildren(parent, children){
    children.forEach( node => parent.appendChild(node) );
}

function createContainer(tag, clss) {
    const container = document.createElement(tag);
    container.className = clss;

    return container;
}

function createTab(text, id) {
    const tab = document.createElement('li')
    tab.id = id;
    tab.className = "nav-tab";
    tab.textContent = text;

    tab.onclick = function() {
        document.getElementsByClassName('nav-tab active')[0].classList.remove('active');
        console.log(this.offsetLeft);
        document.getElementById('active-tab-indicator').style.left = `${this.offsetLeft + 20}px`;
        this.classList.add('active');
    }
    
    return tab;
}



function createNavBar() {
    const navContainer = createContainer('nav', 'nav-container');
    const tabContainer = createContainer('ul', 'tab-container');
    const indicator = document.createElement('span');
    indicator.id = "active-tab-indicator";

    const home = createTab("Home", 'tab-home');
    home.classList.add('active');

    const tab1 = createTab("tab1", 'tab-1');
    const tab2 = createTab("tab2", 'tab-2');
    const tab3 = createTab("tab3", 'tab-3');
    const tab4 = createTab("tab4", 'tab-3');
    
    insertChildren(tabContainer, [indicator,home, tab1, tab2, tab3, tab4])
    navContainer.appendChild(tabContainer);
    return navContainer;
}

content.appendChild(createNavBar());