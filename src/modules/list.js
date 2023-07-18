export default class List {
    constructor () {
        this.projects = [];
    }

    getLength() {
        return this.projects.length;
    }

    addProject(project) {
        this.projects.push(project);
    }

    removeProject(index) {
        delete this.projects[index];
    }

    getLength() {
        return this.projects.length;
    }
}