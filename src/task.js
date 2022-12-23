import "./project.js"
import { generateProjects } from "./testdata";

export class Task {
    constructor(taskName, project, dueDate) {
        this.name = taskName;
        this.project = project;
        this.dueDate = dueDate;
    }
}

export function buildNewTaskWindow() {
    const container = document.querySelector('.createnewwindow');
    container.innerHTML = "";

    const template = document.querySelector(".newtaskform");
    const clone = template.content.cloneNode(true);

    //add projects to select list
    const projList = generateProjects();
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
}