import Logo from '../img/checklist.png';
import todayPNG from '../img/today.png';
import weekPNG from '../img/week.png';
import projectIcon from '../img/project.png';
import deleteIcon from '../img/trash.png';
import editIcon from '../img/edit.png';
import completeIcon from '../img/checkmark.png';

export default class DOM {

    static loadHomePage() {
        const content = document.getElementById('content');
        DOM.createTopBar(content);
        DOM.createMainContent(content);
        DOM.createSideBar();
        DOM.createTaskButton();
        DOM.createProjectModal(content);
        DOM.createTaskModal(content);
        DOM.createEditModal(content);
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
        projects.setAttribute('id', 'project-content');
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
        today.setAttribute('id', 'today');
        todayText.textContent = 'Today';

        today.appendChild(todayIcon);
        today.appendChild(todayText);

        const week = document.createElement('button');
        const weekIcon = new Image();
        const weekText = document.createElement('p');

        weekIcon.src = weekPNG;
        weekIcon.alt = 'Week Icon';
        week.classList.add('project');
        week.setAttribute('id', 'week');
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
        closeBtn.setAttribute('id', 'project-close');
        closeBtn.classList.add('close-btn')
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
        submitBtn.setAttribute('id', 'project-submit');
        submitBtn.classList.add('submit-btn');
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

    static createStorageProject(object) {
        const userProjects = document.getElementById('user-projects');
        const project = document.createElement('button');
        const image = new Image();
        const name = document.createElement('p');
        const projectName = document.getElementById('name');
        const deleteBtn = new Image()

        project.className = 'user-project project';
        image.src = projectIcon;
        image.alt = 'Project Icon';
        name.textContent = object.name;
        deleteBtn.src = deleteIcon;
        deleteBtn.alt = 'Delete Icon';
        deleteBtn.classList.add('delete');

        project.appendChild(image);
        project.appendChild(name);
        project.appendChild(deleteBtn);

        userProjects.appendChild(project);
        projectName.value = '';
    }

    static createTaskModal(element) {
        const modal = document.createElement('div');
        const overlay = document.createElement('div');
        const formContainer = document.createElement('div');

        modal.classList.add('add-task-modal');
        overlay.classList.add('overlay');
        overlay.setAttribute('id', 'task-overlay');
        formContainer.classList.add('add-task-form');
        
        //----------------------Form Variables----------------------//
        const title = document.createElement('div');
        const closeBtn = document.createElement('div');
        const form = document.createElement('form');

        title.textContent = 'Add New Project';
        closeBtn.setAttribute('id', 'task-close');
        closeBtn.classList.add('close-btn');
        closeBtn.textContent = '\xD7';
        form.setAttribute('action', '#');
        form.setAttribute('id', 'task-form');

        //----------------------Input Variables----------------------//
        const titleInput = document.createElement('input');
        const descriptionInput = document.createElement('textarea');
        const dateLabel = document.createElement('label');
        const dateInput = document.createElement('input');
        const priorityLabel = document.createElement('label');
        const priorityInput = document.createElement('select');
        const lowOption = document.createElement('option');
        const mediumOption = document.createElement('option');
        const highOption = document.createElement('option');
        const submitBtn = document.createElement('button');
        
        titleInput.type = 'text';
        titleInput.name = 'title';
        titleInput.placeholder = 'Title';
        titleInput.setAttribute('id', 'title');
        form.appendChild(titleInput);

        descriptionInput.rows = 5;
        descriptionInput.cols = 50;
        descriptionInput.name = 'description';
        descriptionInput.placeholder = 'Description';
        descriptionInput.setAttribute('id', 'description');
        form.appendChild(descriptionInput);

        dateLabel.setAttribute('for', 'date');
        dateLabel.textContent = 'Due Date';
        form.appendChild(dateLabel);

        dateInput.type = 'date';
        dateInput.name = 'date';
        dateInput.setAttribute('id', 'date');
        form.appendChild(dateInput);

        priorityLabel.setAttribute('for', 'priority');
        priorityLabel.textContent = 'Priority';
        form.appendChild(priorityLabel);

        priorityInput.name = 'priority'
        priorityInput.setAttribute('id', 'priority');
        lowOption.value = 'Low';
        lowOption.textContent = 'Low';
        mediumOption.value = 'Medium';
        mediumOption.textContent = 'Medium';
        highOption.value = 'High';
        highOption.textContent = 'High';
        priorityInput.appendChild(lowOption);
        priorityInput.appendChild(mediumOption);
        priorityInput.appendChild(highOption);
        form.appendChild(priorityInput);

        submitBtn.setAttribute('type', 'submit');
        submitBtn.setAttribute('id', 'task-submit');
        submitBtn.classList.add('submit-btn');
        submitBtn.textContent = 'Add';

        formContainer.appendChild(title);
        formContainer.appendChild(closeBtn);
        formContainer.appendChild(form);
        formContainer.appendChild(submitBtn);

        modal.appendChild(overlay);
        modal.appendChild(formContainer);

        element.appendChild(modal);
    }

    static toggleTaskModal () {
        const modal = document.querySelector('.add-task-modal');
        modal.classList.toggle('active');
    }

    static createTaskButton() {
        const container = document.getElementById('container');
        const projectContent = document.getElementById('project-content');
        const addTaskBtn = document.createElement('button');
        const tasks = document.createElement('div');

        addTaskBtn.setAttribute('id', 'add-task');
        addTaskBtn.textContent = '+ Add Task';

        tasks.setAttribute('id', 'tasks');

        projectContent.appendChild(addTaskBtn);
        projectContent.appendChild(tasks);

        container.appendChild(projectContent);
    }

    static createTask(title, date, priority, completed) {
        const taskContainer = document.getElementById('tasks');
        const task = document.createElement('div');
        const top = document.createElement('div');

        //----------------------Top Bar----------------------//
        const taskTitle = document.createElement('h2');
        const icons = document.createElement('div');
        const edit = new Image();
        const complete = new Image();
        const deleteBtn = new Image()

        taskTitle.textContent = title;
        taskTitle.classList.add('task-title');
        edit.src = editIcon;
        edit.alt = 'Edit Icon';
        edit.classList.add('edit');

        complete.src = completeIcon;
        complete.alt = 'Complete Icon';
        complete.classList.add('complete');

        deleteBtn.src = deleteIcon;
        deleteBtn.alt = 'Delete Icon';
        deleteBtn.classList.add('task-delete');

        icons.classList.add('task-icons');
        icons.appendChild(edit);
        icons.appendChild(complete);
        icons.appendChild(deleteBtn);

        top.classList.add('task-top-bar');
        top.appendChild(taskTitle);
        top.appendChild(icons);

        //----------------------Bottom----------------------//
        const dateText = document.createElement('p');
        dateText.classList.add('date');
        dateText.textContent = 'Due: ' + date;

        //----------------------Task Box----------------------//
        task.classList.add('task');

        if (completed === false) {
            task.classList.add(priority);
        } else {
            task.classList.add('complete-task');
        }

        task.appendChild(top);
        task.appendChild(dateText);

        taskContainer.appendChild(task);

        //----------------------Form Variables----------------------//
        const formTitle = document.getElementById('title');
        const formDescription = document.getElementById('description');
        const formDate = document.getElementById('date');
        const formPriority = document.getElementById('priority');

        formTitle.value = '';
        formDescription.value = '';
        formDate.value = '';
        formPriority.value = 'Low';
    }

    static createStrippedTask(title, date, priority, completed) {
        const taskContainer = document.getElementById('tasks');
        const task = document.createElement('div');
        const top = document.createElement('div');

        //----------------------Top Bar----------------------//
        const taskTitle = document.createElement('h2');

        taskTitle.textContent = title;
        taskTitle.classList.add('task-title');

        top.classList.add('task-top-bar');
        top.appendChild(taskTitle);

        //----------------------Bottom----------------------//
        const dateText = document.createElement('p');
        dateText.classList.add('date');
        dateText.textContent = 'Due: ' + date;

        //----------------------Task Box----------------------//
        task.classList.add('task');

        if (completed === false) {
            task.classList.add(priority);
        } else {
            task.classList.add('complete-task');
        }

        task.appendChild(top);
        task.appendChild(dateText);

        taskContainer.appendChild(task);
    }

    static removeTasks() {
        const taskContainer = document.getElementById('tasks');

        while (taskContainer.firstChild) {
            taskContainer.removeChild(taskContainer.firstChild);
        }
    }

    static createEditModal(element) {
        const modal = document.createElement('div');
        const overlay = document.createElement('div');
        const formContainer = document.createElement('div');

        modal.classList.add('edit-modal');
        overlay.classList.add('overlay');
        overlay.setAttribute('id', 'edit-overlay');
        formContainer.classList.add('edit-form');
        
        //----------------------Form Variables----------------------//
        const title = document.createElement('div');
        const closeBtn = document.createElement('div');
        const form = document.createElement('form');

        title.textContent = 'Edit Project';
        closeBtn.setAttribute('id', 'edit-close');
        closeBtn.classList.add('close-btn');
        closeBtn.textContent = '\xD7';
        form.setAttribute('action', '#');
        form.setAttribute('id', 'edit-form');

        //----------------------Input Variables----------------------//
        const titleInput = document.createElement('input');
        const descriptionInput = document.createElement('textarea');
        const dateLabel = document.createElement('label');
        const dateInput = document.createElement('input');
        const priorityLabel = document.createElement('label');
        const priorityInput = document.createElement('select');
        const lowOption = document.createElement('option');
        const mediumOption = document.createElement('option');
        const highOption = document.createElement('option');
        const submitBtn = document.createElement('button');
        
        titleInput.type = 'text';
        titleInput.name = 'title';
        titleInput.placeholder = 'Title';
        titleInput.setAttribute('id', 'taskTitle');
        form.appendChild(titleInput);

        descriptionInput.rows = 5;
        descriptionInput.cols = 50;
        descriptionInput.name = 'description';
        descriptionInput.placeholder = 'Description';
        descriptionInput.setAttribute('id', 'taskDescription');
        form.appendChild(descriptionInput);

        dateLabel.setAttribute('for', 'date');
        dateLabel.textContent = 'Due Date';
        form.appendChild(dateLabel);

        dateInput.type = 'date';
        dateInput.name = 'date';
        dateInput.setAttribute('id', 'taskDate');
        form.appendChild(dateInput);

        priorityLabel.setAttribute('for', 'priority');
        priorityLabel.textContent = 'Priority';
        form.appendChild(priorityLabel);

        priorityInput.name = 'priority'
        priorityInput.setAttribute('id', 'taskPriority');
        lowOption.value = 'Low';
        lowOption.textContent = 'Low';
        mediumOption.value = 'Medium';
        mediumOption.textContent = 'Medium';
        highOption.value = 'High';
        highOption.textContent = 'High';
        priorityInput.appendChild(lowOption);
        priorityInput.appendChild(mediumOption);
        priorityInput.appendChild(highOption);
        form.appendChild(priorityInput);

        submitBtn.setAttribute('type', 'submit');
        submitBtn.setAttribute('id', 'edit-submit');
        submitBtn.classList.add('submit-btn');
        submitBtn.textContent = 'Submit';

        formContainer.appendChild(title);
        formContainer.appendChild(closeBtn);
        formContainer.appendChild(form);
        formContainer.appendChild(submitBtn);

        modal.appendChild(overlay);
        modal.appendChild(formContainer);

        element.appendChild(modal);
    }

    static toggleEditModal () {
        const modal = document.querySelector('.edit-modal');
        modal.classList.toggle('active');
    }
}