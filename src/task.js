import "./project.js"
import { getProjList } from "./project.js";

export class Task {
    constructor(taskName, project, dueDate) {
        this.name = taskName;
        this.project = project;
        this.dueDate = dueDate;
    }
}

export function buildNewTaskWindow(proj) {
    const container = document.querySelector('.createnewwindow');
    container.innerHTML = "";

    const template = document.querySelector(".newtaskform");
    const clone = template.content.cloneNode(true);

    //add projects to select list
    const projList = getProjList();
    const select = clone.querySelector("#projects");

    let newOption = document.createElement('option');
    newOption.value = 'new';
    newOption.text = '--Create New--';
    select.appendChild(newOption);

    projList.forEach(proj => {
        let listItem = proj.getName();
        let option = document.createElement('option');
        option.value = listItem;
        option.text = listItem;

        select.appendChild(option);
    });

    container.appendChild(clone);

    addEventListeners();
}

function addEventListeners() {
    const createNewButton = document.getElementById("addtoproject");
    createNewButton.addEventListener('click', (e) => {
        e.preventDefault();
        var taskName = document.getElementById("taskname").value;
        var projName = document.getElementById("projects").value;
        let attachedProject = getProjByName(projName);
        if (taskName != "" && projName != "new") {
            const newTask = new Task()
        }
    })
}

function getProjByName(name) {
    projList = getProjList();
    projList.forEach(project => {
        if (project.getName() == name) {
            return project;
        }
    });

    alert('somethin went wrong');
}