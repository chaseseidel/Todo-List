export default class List {
    constructor () {
        this.projects = [];
    }

    addProject(project) {
        this.projects.push(project);
    }

    deleteProject(index) {
        delete this.projects[index];
    }
}