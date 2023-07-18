import Project from "./project";
import Task from "./task";
import List from "./list";
import DOM from './elements';

export default class UI {
    static loadUI() {
        const ToDoList = new List();

        UI.Project(ToDoList);
        UI.addTask();
    }

    static Project(list) {
        UI.addProject();
        UI.createProject(list);
    }

    static addProject() {
        const addProject = document.getElementById('add-project');
        const closeBtn = document.getElementById('project-close');
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

    static createProject(list) {
        const submitBtn = document.getElementById('project-submit');

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

            const thisProject = document.getElementById('user-projects').lastChild;
            thisProject.addEventListener('click', () => {
                console.log(project.getID);
            })
        })
    }

    static addTask() {
        const addTask = document.getElementById('add-task');
        const closeBtn = document.getElementById('task-close');
        const overlay = document.getElementById('task-overlay');

        addTask.addEventListener('click', () => {
            DOM.toggleTaskModal();
        });

        closeBtn.addEventListener('click', () => {
            DOM.toggleTaskModal();
        });

        overlay.addEventListener('click', () => {
            DOM.toggleTaskModal();
        });
    }
}