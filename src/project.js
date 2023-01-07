import { createBlankMainPage } from './home';
import { buildNewTaskWindow } from "./task";

let projList = [];

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

export function getProjList() {
    return projList;
}

export function getProjByName(name) {
    for (const proj of projList) {
        if (proj.name == name) {
            return proj;
        }
    }
}

export function buildNewProjectWindow() {
    const container = document.querySelector('.createnewwindow');
    container.innerHTML = "";
    const template = document.querySelector(".newprojectform");
    const clone = template.content.cloneNode(true);

    container.appendChild(clone);
    
    addEventListeners();
}

export function createProjectView(project) {
    console.log(project.name);
    console.log(project.taskList);
}

function addEventListeners () {
    const createNewButton = document.querySelector('button.createnew');
    const createAndAddButton = document.querySelector('button.createandadd');

    createNewButton.addEventListener('click', (e) => {
        e.preventDefault();
        var projectName = document.getElementById("projectname").value;
        if (projectName != "") {    
            const newProj = new Project(projectName);
            projList.push(newProj);
            document.getElementById("projectname").value = "";
            addProjectToPage(newProj);
            createBlankMainPage();
        }
        
    })

    createAndAddButton.addEventListener('click', (e) => {
        e.preventDefault();
        var projectName = document.getElementById("projectname").value;
        if (projectName != "") {    
            const newProj = new Project(projectName);
            projList.push(newProj);
            document.getElementById("projectname").value = "";
            addProjectToPage(newProj);
            buildNewTaskWindow(newProj);
        }
    })
}

function addProjectToPage(newProj) {
    let listItem = document.createElement('li');
    listItem.textContent = newProj.getName();
    let listContainer = document.querySelector('.projectitems');
    listContainer.appendChild(listItem);

    projectLinks();
}

function projectLinks() {
    let links = document.querySelectorAll('.projectitems li');
    links.forEach(link => {
        const projName = link.textContent;
        const thisProject = getProjByName(projName);
        link.addEventListener('click', (e) => {
            createProjectView(thisProject);
        })
    });
}
