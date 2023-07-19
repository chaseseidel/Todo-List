export default class Task {
    constructor(title, description, date, priority) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.completed = false;
    }

    get getTitle() {
        return this.title;
    }

    set setTitle(title) {
        this.title = title;
    }

    get getDescription() {
        return this.description;
    }

    set setDescription(description) {
        this.description = description;
    }

    get getDate() {
        return this.date;
    }

    set setDate(date) {
        this.date = date;
    }

    get getPriority() {
        return this.priority;
    }

    set setPriority(priority) {
        this.priority = priority;
    }
}