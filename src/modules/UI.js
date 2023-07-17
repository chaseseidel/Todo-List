import Logo from '../img/checklist.png';

export default function createUI() {
    const content = document.getElementById('content');

    createTopBar(content);
    createMainContent(content);
}

function createTopBar(element) {
    const topbar = document.createElement('div');
    const header = document.createElement('h1');
    const image = new Image();

    image.setAttribute('id', 'logo');
    image.alt = "Checklist";
    image.src = Logo;

    header.setAttribute('id', 'logo-name');
    header.textContent = 'ToDo List';

    topbar.setAttribute('id', 'topbar');

    topbar.appendChild(image);
    topbar.appendChild(header);

    element.appendChild(topbar);
}

function createMainContent(element) {
    const container = document.createElement('div');
    const sidebar = document.createElement('div');
    const projects = document.createElement('div');

    sidebar.setAttribute('id', 'sidebar');
    projects.setAttribute('id', 'projects');
    container.setAttribute('id', 'container');

    container.appendChild(sidebar);
    container.appendChild(projects);

    element.appendChild(container);
}