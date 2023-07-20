import Project from "./project";

export default class List {
    constructor () {
        this.projects = [];
        this.projects.push(new Project('Today', 0));
        this.projects.push(new Project('This Week', 1));
        this.current = 2;
    }

    set setCurrentProject(index) {
        this.current = index;
    }

    get getCurrentProject() {
        return this.current;
    }

    set setProjects(projects) {
        this.projects = projects;
    }

    get getProjects() {
        return this.projects;
    }

    addProject(project) {
        this.projects.push(project);
    }

    removeProject(index) {
        delete this.projects[index];
    }

    getProject(index) {
        return this.projects[index];
    }

    getLength() {
        return this.projects.length;
    }

    updateTodayProject() {
        this.projects[0].tasks = [];

        this.projects.forEach(project => {
            if (project === null || project.getName === 'Today' || project.getName == 'This Week') {
                return
            }

            const tasks = project.getTasksToday();

            tasks.forEach(task => {
                this.projects[0].addTask(task);
            })
        })
    }

    updateThisWeekProject() {
        this.projects[1].tasks = [];

        this.projects.forEach(project => {
            if (project === null || project.getName === 'Today' || project.getName == 'This Week') {
                return
            }

            const tasks = project.getTasksThisWeek();

            tasks.forEach(task => {
                this.projects[1].addTask(task);
            })
        })
    }
}