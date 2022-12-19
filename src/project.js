export class Project {
    constructor(projName) {
        this.name = projName;
        this.taskList = [];
    }
    
    getName() {
        return this.name;
    }
    
    addTask(task) {
        this.taskList.push(task);
    }
}