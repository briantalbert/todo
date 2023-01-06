import "./project.js"
import { getProjList } from "./project.js";
const {format} = require('date-fns');
import { createBlankMainPage } from './home';

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
        let taskName = document.getElementById("taskname").value;
        let projName = document.getElementById("projects").value;
        let attachedProject = getProjByName(projName);
        let dueDate = new Date();
        dueDate = document.getElementById("duedate").value;

        if (taskName != "" && projName != "new") {
            const newTask = new Task(taskName, attachedProject, dueDate);
            attachedProject.addTask(newTask);
            createBlankMainPage();
        }
    })
}

function getProjByName(name) {
    const projList = getProjList();
    
    for (const proj of projList) {
        if (proj.name == name) {
            return proj;
        }
    }
}

