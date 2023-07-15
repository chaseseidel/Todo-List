import './css/style.css';

class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    complete() {
        this.priority = 0;
    }

    changePriority(level) {
        this.priority = level;
    }
}

class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getTasks() {
        return this.tasks;
    }

    setTasks(tasks) {
        this.tasks = tasks;
    }

    addTask(task) {
        this.tasks.push(task);
    }

    removeTask(index) {
        delete this.tasks[index];
    }

    getTask(name) {
        return this.tasks[index];
    }
}