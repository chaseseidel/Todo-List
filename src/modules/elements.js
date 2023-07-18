import Logo from '../img/checklist.png';
import todayPNG from '../img/today.png';
import weekPNG from '../img/week.png';
import projectIcon from '../img/project.png';
import deleteIcon from '../img/trash.png'

export default class DOM {

    static loadHomePage() {
        const content = document.getElementById('content');
        DOM.createTopBar(content);
        DOM.createMainContent(content);
        DOM.createSideBar();
        DOM.createProjectModal(content);
    }

    static createTopBar(element) {
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

    static createMainContent(element) {
        const container = document.createElement('div');
        const sidebar = document.createElement('nav');
        const projects = document.createElement('div');

        sidebar.setAttribute('id', 'sidebar');
        projects.setAttribute('id', 'projects');
        container.setAttribute('id', 'container');

        container.appendChild(sidebar);
        container.appendChild(projects);

        element.appendChild(container);
    }

    static createSideBar() {
        const sidebar = document.getElementById('sidebar');
        const defaultProjects = document.createElement('div');
        const header = document.createElement('h1');
        const userProjects = document.createElement('div');
        const addProject = document.createElement('button');

        //----------------------Default Projects----------------------//
        const today = document.createElement('button');
        const todayIcon = new Image();
        const todayText = document.createElement('p');

        todayIcon.src = todayPNG;
        todayIcon.alt = 'Today Icon';
        today.classList.add('project');
        todayText.textContent = 'Today';

        today.appendChild(todayIcon);
        today.appendChild(todayText);

        const week = document.createElement('button');
        const weekIcon = new Image();
        const weekText = document.createElement('p');

        weekIcon.src = weekPNG;
        weekIcon.alt = 'Week Icon';
        week.classList.add('project');
        weekText.textContent = 'This Week';

        week.appendChild(weekIcon);
        week.appendChild(weekText);

        defaultProjects.setAttribute('id', 'default-projects');
        defaultProjects.appendChild(today)
        defaultProjects.appendChild(week);

        //----------------------Header----------------------//
        header.textContent = 'Projects';
        header.setAttribute('id', 'header-text');

        //----------------------User Projects----------------------//
        userProjects.setAttribute('id', 'user-projects');

        //----------------------Add Project----------------------//
        addProject.classList.add('project');
        addProject.setAttribute('id', 'add-project');
        addProject.textContent = '+ Add Project';

        //----------------------Sidebar----------------------//
        sidebar.appendChild(defaultProjects);
        sidebar.appendChild(header);
        sidebar.appendChild(userProjects);
        sidebar.appendChild(addProject);
    }

    static createProjectModal(element) {
        const modal = document.createElement('div');
        const overlay = document.createElement('div');
        const formContainer = document.createElement('div');

        modal.classList.add('add-project-modal');
        overlay.classList.add('overlay');
        overlay.setAttribute('id', 'project-overlay');
        formContainer.classList.add('add-project-form');
        
        //----------------------Form Variables----------------------//
        const title = document.createElement('div');
        const closeBtn = document.createElement('div');
        const form = document.createElement('form');
        const inputBox = document.createElement('div');
        const input = document.createElement('input');
        const submitBtn = document.createElement('button');

        title.textContent = 'Add New Project';
        closeBtn.classList.add('close-btn');
        closeBtn.textContent = '\xD7';
        form.setAttribute('action', '#');
        form.classList.add('form');
        
        inputBox.classList.add('input');
        input.type = 'text';
        input.name = 'name';
        input.placeholder = 'Name';
        input.setAttribute('id', 'name');
        inputBox.appendChild(input);

        form.appendChild(inputBox);

        submitBtn.setAttribute('type', 'submit');
        submitBtn.setAttribute('id', 'submit-btn');
        submitBtn.textContent = 'Add';

        formContainer.appendChild(title);
        formContainer.appendChild(closeBtn);
        formContainer.appendChild(form);
        formContainer.appendChild(submitBtn);

        modal.appendChild(overlay);
        modal.appendChild(formContainer);

        element.appendChild(modal);
    }

    static toggleProjectModal () {
        const modal = document.querySelector('.add-project-modal');
        modal.classList.toggle('active');
    }

    static createProject() {
        const userProjects = document.getElementById('user-projects');
        const project = document.createElement('button');
        const image = new Image();
        const name = document.createElement('p');
        const projectName = document.getElementById('name');
        const deleteBtn = new Image()

        project.className = 'user-project project';
        image.src = projectIcon;
        image.alt = 'Project Icon';
        name.textContent = projectName.value;
        deleteBtn.src = deleteIcon;
        deleteBtn.alt = 'Delete Icon';
        deleteBtn.classList.add('delete');

        project.appendChild(image);
        project.appendChild(name);
        project.appendChild(deleteBtn);

        userProjects.appendChild(project);
        projectName.value = '';
    }
}