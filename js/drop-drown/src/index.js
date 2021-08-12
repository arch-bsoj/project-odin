const content = document.getElementById('content');

function createContainer(tag, clss) {
    const container = document.createElement(tag);
    container.className = clss;

    return container;
}

function createTab(id) {
    const container = document.createElement('ul');
    container.id = id;
    
    return container;
}

function createNavBar() {
    const navContainer = createContainer('nav', 'nav-container');
    const tabContainer = createTab('tab-container');
    
    navContainer.appendChild(tabContainer);
    return navContainer;
}

content.appendChild(createNavBar());