import Project from "./project";
import Task from "./task";
import List from "./list";
import DOM from './elements';

export default class UI {
    static loadUI() {
        const ToDoList = new List();

        UI.Project(ToDoList);
    }

    static Project(list) {
        UI.addProject();
        UI.createProject(list);
    }

    static addProject() {
        const addProject = document.getElementById('add-project');
        const closeBtn = document.querySelector('.close-btn');
        const overlay = document.getElementById('project-overlay');

        addProject.addEventListener('click', () => {
            DOM.toggleProjectModal();
        });

        closeBtn.addEventListener('click', () => {
            DOM.toggleProjectModal();
        });

        overlay.addEventListener('click', () => {
            DOM.toggleProjectModal();
        });
    }

    static createProjectElement(list) {
        const submitBtn = document.getElementById('submit-btn');

        submitBtn.addEventListener('click', () => {
            DOM.createProject();
            DOM.toggleProjectModal();

            const deleteBtn = document.getElementById('user-projects').lastChild.lastChild;
            deleteBtn.addEventListener('click', () => {
                list.removeProject()
            })
        })
    } 

    static createProject(list) {
        const submitBtn = document.getElementById('submit-btn');

        submitBtn.addEventListener('click', () => {
            const name = document.getElementById('name');
            const project = new Project(name.value, list.getLength());
            list.addProject(project);

            DOM.createProject();
            DOM.toggleProjectModal();

            const deleteBtn = document.getElementById('user-projects').lastChild.lastChild;
            deleteBtn.addEventListener('click', () => {
                list.removeProject(project.getID);
                deleteBtn.parentNode.parentNode.removeChild(deleteBtn.parentNode);
            })
        })
    }
}