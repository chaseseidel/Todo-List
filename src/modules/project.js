import { toDate, isToday, isThisWeek, subDays } from 'date-fns';

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

    set setTasks(tasks) {
        this.tasks = tasks;
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

    getTasksToday() {
        return this.tasks.filter(task => {
            if (task === null) {
                return
            }

            const date = new Date(task.getDateFormatted());
            return isToday(toDate(date));
        })
    }

    getTasksThisWeek() {
        return this.tasks.filter(task => {
            if (task === null) {
                return
            }
            
            const date = new Date(task.getDateFormatted());
            return isThisWeek(toDate(date));
        })
    }
}