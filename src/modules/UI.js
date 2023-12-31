import Project from "./project";
import Task from "./task";
import List from "./list";
import DOM from './elements';
import Storage from "./storage";

export default class UI {
    static loadUI() {
        UI.loadStorage();
        UI.Project();
        UI.Task();
    }

    static loadStorage() {
        const list = Storage.getList();
        const projects = list.getProjects;
        projects.forEach(project => {
            if (project === null || project.getName === 'Today' || project.getName === 'This Week') {
                return;
            }

            DOM.createStorageProject(project);

            const deleteBtn = document.getElementById('user-projects').lastChild.lastChild;
            deleteBtn.addEventListener('click', () => {
                list.removeProject(project.getID);
                deleteBtn.parentNode.parentNode.removeChild(deleteBtn.parentNode);
                Storage.saveData(list);
            })

            const thisProject = document.getElementById('user-projects').lastChild;
            thisProject.addEventListener('click', () => {
                const currentList = Storage.getList()
                currentList.setCurrentProject = project.getID;
                Storage.saveData(currentList);
                DOM.removeTasks();

                const newList = Storage.getList();
                UI.loadTasks(newList.getProject(newList.getCurrentProject));
            })
        })

        const projectBox = document.getElementById('user-projects');
        if (projectBox.lastChild === null) {
            Storage.clearStorage();
        }
    }

    static Project() {
        UI.addProject();
        UI.createProject();
        UI.loadDefaultProjects();
    }

    static Task() {
        UI.addTask();
        UI.createTask();
        UI.editTask();
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

    static createProject() {
        const submitBtn = document.getElementById('project-submit');

        submitBtn.addEventListener('click', () => {
            const list = Storage.getList();
            const name = document.getElementById('name');
            const project = new Project(name.value, list.getLength());
            list.addProject(project);
            list.setCurrentProject = list.getLength() - 1;
            Storage.saveData(list);

            DOM.removeTasks();
            DOM.createProject();
            DOM.toggleProjectModal();

            const deleteBtn = document.getElementById('user-projects').lastChild.lastChild;
            deleteBtn.addEventListener('click', () => {
                list.removeProject(project.getID);
                deleteBtn.parentNode.parentNode.removeChild(deleteBtn.parentNode);
                Storage.saveData(list);
            })

            const thisProject = document.getElementById('user-projects').lastChild;
            thisProject.addEventListener('click', () => {
                const currentList = Storage.getList()
                currentList.setCurrentProject = project.getID;
                Storage.saveData(currentList);
                DOM.removeTasks();

                const newList = Storage.getList();
                UI.loadTasks(newList.getProject(newList.getCurrentProject));
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

    static createTask() {
        const submitBtn = document.getElementById('task-submit');

        submitBtn.addEventListener('click', () => {
            const list = Storage.getList();
            const title = document.getElementById('title');
            const description = document.getElementById('description');
            const date = document.getElementById('date');
            const priority = document.getElementById('priority');

            const project = list.getProject(list.getCurrentProject);
            const task = new Task(title.value, description.value, date.value, priority.value, project.getLength());
            project.addTask(task);
            Storage.saveData(list);
            console.log(Storage.getList());

            DOM.toggleTaskModal();
            DOM.createTask(title.value, task.getDateFormatted(), priority.value, false);

            UI.addIconListeners(project, task);
        })
    }

    static loadTasks(project) {
        if (project === null) {
            return;
        }

        const tasks = project.getTasks;

        if (project.getLength() === 0) {
            return;
        }

        tasks.forEach(task => {
            if (task === null) {
                return
            }

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

    static editTask() {
        const submitBtn = document.getElementById('edit-submit');
        const closeBtn = document.getElementById('edit-close');
        const overlay = document.getElementById('edit-overlay');

        const formTitle = document.getElementById('taskTitle');
        const formDescription = document.getElementById('taskDescription');
        const formDate = document.getElementById('taskDate');
        const formPriority = document.getElementById('taskPriority');

        submitBtn.addEventListener('click', () => {
            const list = Storage.getList();
            const currentProject = list.getProject(list.getCurrentProject);
            const currentTaskIndex = currentProject.getCurrent;
            const currentTask = currentProject.getTask(currentTaskIndex);
                        
            currentTask.setTitle = formTitle.value;
            currentTask.setDescription = formDescription.value;
            currentTask.setDate = formDate.value;
            currentTask.setPriority = formPriority.value;
            Storage.saveData(list);

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

    static addIconListeners(projectObject, taskObject) {
        const list = Storage.getList();
        const project = list.getProject(projectObject.getID);
        const task = project.getTask(taskObject.getID);

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
            Storage.saveData(list);
        })

        complete.addEventListener('click', () => {
            if (task.completed === false) {
                task.completeTask();
                currentTask.className = 'task complete-task';
            } else {
                task.undoCompletion();
                currentTask.className = `task ${task.getPriority}`;
            }

            Storage.saveData(list);
        })

        remove.addEventListener('click', () => {
            project.removeTask(task.getID);
            tasks.removeChild(currentTask);

            Storage.saveData(list);
        })
    }

    static loadDefaultProjects() {
        const today = document.getElementById('today');
        const week = document.getElementById('week');

        today.addEventListener('click', () => {
            const list = Storage.getList()
            const todayProject = list.getProject(0);
            DOM.removeTasks();
            list.updateTodayProject();
            Storage.saveData(list);
            UI.loadStrippedTasks(todayProject);
        })

        week.addEventListener('click', () => {
            const list = Storage.getList()
            const weekProject = list.getProject(1);
            DOM.removeTasks();
            list.updateThisWeekProject();
            Storage.saveData(list);
            UI.loadStrippedTasks(weekProject);
        })
    }
}