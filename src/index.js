import { Project } from "./project";
import css from './style.css';
import { generateProjects } from "./testdata";

function createMainPageBlank() {
    const container = document.querySelector('.container');
    const blankMainPageDiv = document.createElement('div');
    blankMainPageDiv.classList.add('blankhomepage');

    const template = document.querySelector("#createnew");
    const clone = template.content.cloneNode(true);
    
    blankMainPageDiv.appendChild(clone);
    container.appendChild(blankMainPageDiv);
}


function addProjectsToList() {
    //for testing purposes, generic list of project names
    let projectList = generateProjects();

    projectList.forEach(project => {
        const template = document.querySelector('#project');
        const clone = template.content.cloneNode(true);
        let listItem = clone.querySelector('li');
        listItem.textContent = project.getName();
        let listContainer = document.querySelector('.projectitems');
        listContainer.appendChild(listItem);
    });
}

createMainPageBlank();
addProjectsToList();
