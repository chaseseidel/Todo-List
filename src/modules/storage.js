import Project from "./project";
import Task from "./task";
import List from "./list";

export default class Storage {
    static saveData(data) {
        localStorage.setItem('ToDoList', JSON.stringify(data));
    }

    static getList() {
        const ToDoList = Object.assign(
            new List(),
            JSON.parse(localStorage.getItem('ToDoList'))
        )

        const projects = ToDoList.getProjects;

        projects.forEach(project => {
            if (project === null) {
                return;
            }

            projects[project.id] = Object.assign(new Project(), projects[project.id]);
        });

        projects.forEach(project => {
            if (project === null) {
                return;
            }

            const tasks = project.getTasks;

            tasks.forEach(task => {
                if (task === null) {
                    return;
                }

                tasks[task.id] = Object.assign(new Task(), tasks[task.id])
            })

            project.setTasks = tasks;
        });

        ToDoList.setProjects = projects;

        return ToDoList;
    }

    static consoleLog() {
        const ToDoList = Storage.getList();
        console.log(ToDoList);
    }

    static clearStorage() {
        localStorage.clear();
    }
}