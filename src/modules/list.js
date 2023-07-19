export default class List {
    constructor () {
        this.projects = [];
        this.current = 0;
    }

    getLength() {
        return this.projects.length;
    }

    set setCurrentProject(index) {
        this.current = index;
    }

    get getCurrentProject() {
        return this.current;
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
}