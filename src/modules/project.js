export default class Project {
    constructor(name, id) {
        this.name = name;
        this.tasks = [];
        this.id = id;
    }

    get getName() {
        return this.name;
    }

    get getTasks() {
        return this.tasks;
    }

    get getID() {
        return this.id;
    }

    addTask(task) {
        this.tasks.push(task);
    }

    removeTask(index) {
        delete this.tasks[index];
    }

    getLength() {
        return this.tasks.length;
    }
}