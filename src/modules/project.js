export default class Project {
    constructor(name, id) {
        this.name = name;
        this.tasks = [];
        this.id = id;
        this.current = 0;
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

    get getCurrent() {
        return this.current;
    }

    set setCurrent(index) {
        this.current = index;
    }

    addTask(task) {
        this.tasks.push(task);
    }

    removeTask(index) {
        delete this.tasks[index];
    }

    getTask(index) {
        return this.tasks[index];
    }

    getLength() {
        return this.tasks.length;
    }
}