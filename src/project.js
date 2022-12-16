export class Project {
    constructor(projName) {
        this.name = projName;
        this.taskList = [];
    }

    addTask(task) {
        this.taskList.push(task);
    }
}