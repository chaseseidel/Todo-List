import Project from "./project";
import Task from "./task";
import List from "./list";
import DOM from './elements';

export default class UI {
    static loadUI() {
        const ToDoList = new List();

        UI.Project(ToDoList);
        UI.Task(ToDoList);

        // const today = document.getElementById('default-projects');
        // today.addEventListener('click', () => {
        //     console.log(ToDoList.updateThisWeekProject());
        // })
    }

    static Project(list) {
        UI.addProject();
        UI.createProject(list);
        UI.loadDefaultProjects(list);
    }

    static Task(list) {
        UI.addTask();
        UI.createTask(list);
        UI.editTask(list);
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
            list.setCurrentProject = list.getLength() - 1;
        
            DOM.createProject();
            DOM.toggleProjectModal();

            const deleteBtn = document.getElementById('user-projects').lastChild.lastChild;
            deleteBtn.addEventListener('click', () => {
                list.removeProject(project.getID);
                deleteBtn.parentNode.parentNode.removeChild(deleteBtn.parentNode);
            })

            const thisProject = document.getElementById('user-projects').lastChild;
            thisProject.addEventListener('click', () => {
                list.setCurrentProject = project.getID;
                DOM.removeTasks();
                UI.loadTasks(project);
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

    static createTask(list) {
        const submitBtn = document.getElementById('task-submit');

        submitBtn.addEventListener('click', () => {
            const title = document.getElementById('title');
            const description = document.getElementById('description');
            const date = document.getElementById('date');
            const priority = document.getElementById('priority');

            const project = list.getProject(list.getCurrentProject);
            const task = new Task(title.value, description.value, date.value, priority.value, project.getLength());
            project.addTask(task);

            DOM.toggleTaskModal();
            DOM.createTask(title.value, task.getDateFormatted(), priority.value, false);

            UI.addIconListeners(project, task);
        })
    }

    static loadTasks(project) {
        const tasks = project.getTasks;

        if (project.getLength() === 0) {
            return;
        }

        tasks.forEach(task => {
            DOM.createTask(task.getTitle, task.getDateFormatted(), task.getPriority, task.getCompletion);
            UI.addIconListeners(project, task);
        })
    }

    static loadStrippedTasks(project) {
        const tasks = project.getTasks;

        if (project.getLength() === 0) {
            return;
        }

        tasks.forEach(task => {
            DOM.createStrippedTask(task.getTitle, task.getDateFormatted(), task.getPriority, task.getCompletion);
        })
    }

    static editTask(list) {
        const submitBtn = document.getElementById('edit-submit');
        const closeBtn = document.getElementById('edit-close');
        const overlay = document.getElementById('edit-overlay');

        const formTitle = document.getElementById('taskTitle');
        const formDescription = document.getElementById('taskDescription');
        const formDate = document.getElementById('taskDate');
        const formPriority = document.getElementById('taskPriority');

        submitBtn.addEventListener('click', () => {
            const currentProject = list.getProject(list.getCurrentProject);
            const currentTaskIndex = currentProject.getCurrent;
            const currentTask = currentProject.getTask(currentTaskIndex);
                        
            currentTask.setTitle = formTitle.value;
            currentTask.setDescription = formDescription.value;
            currentTask.setDate = formDate.value;
            currentTask.setPriority = formPriority.value;

            DOM.removeTasks();
            UI.loadTasks(currentProject);

            DOM.toggleEditModal();
        })

        closeBtn.addEventListener('click', () => {
            DOM.toggleEditModal();
        });

        overlay.addEventListener('click', () => {
            DOM.toggleEditModal();
        });
    }
    
    static addIconListeners(project, task) {
        const tasks = document.getElementById('tasks');
        const currentTask = tasks.lastChild;

        const edit = currentTask.querySelector('.edit');
        const complete = currentTask.querySelector('.complete');
        const remove = currentTask.querySelector('.task-delete');

        const formTitle = document.getElementById('taskTitle');
        const formDescription = document.getElementById('taskDescription');
        const formDate = document.getElementById('taskDate');
        const formPriority = document.getElementById('taskPriority');
        
        edit.addEventListener('click', () => {
            DOM.toggleEditModal();

            formTitle.value = task.getTitle;
            formDescription.value = task.getDescription;
            formDate.value = task.getDate;
            formPriority.value = task.getPriority;

            project.setCurrent = task.getID;
        })

        complete.addEventListener('click', () => {
            if (task.completed === false) {
                task.completeTask();
                currentTask.className = 'task complete-task';
            } else {
                task.undoCompletion();
                currentTask.className = `task ${task.getPriority}`;
            }
        })

        remove.addEventListener('click', () => {
            project.removeTask(task.getID)
            tasks.removeChild(currentTask);
        })
    }

    static loadDefaultProjects(list) {
        const today = document.getElementById('today');
        const week = document.getElementById('week');
        const todayProject = list.getProject(0);
        const weekProject = list.getProject(1);

        today.addEventListener('click', () => {
            DOM.removeTasks();
            list.updateTodayProject();
            UI.loadStrippedTasks(todayProject);
        })

        week.addEventListener('click', () => {
            DOM.removeTasks();
            list.updateThisWeekProject();
            UI.loadStrippedTasks(weekProject);
        })
    }
}