import { Project, buildNewProjectWindow } from "./project";
import css from './style.css';
import { generateProjects } from "./testdata";

import { Task, buildNewTaskWindow} from "./task.js";

let projList = generateProjects();

function createBlankMainPage() {
    const container = document.querySelector('.container');
    const blankMainPageDiv = document.createElement('div');
    blankMainPageDiv.classList.add('blankhomepage');

    const createNew = document.createElement('div');
    createNew.classList.add('createnewwindow');

    const newProjSpan = document.createElement('span');
    newProjSpan.classList.add('newproject');
    newProjSpan.textContent = 'New Project';

    const newTaskSpan = document.createElement('span');
    newTaskSpan.classList.add('newtask');
    newTaskSpan.textContent = 'New Task';

    createNew.appendChild(newProjSpan);
    createNew.appendChild(newTaskSpan);

    blankMainPageDiv.appendChild(createNew);
    container.appendChild(blankMainPageDiv);
}

function addProjectsToPage() {
    //for testing purposes, generic list of project names
    projList.forEach(project => {
        let listItem = document.createElement('li');
        listItem.textContent = project.getName();
        let listContainer = document.querySelector('.projectitems');
        listContainer.appendChild(listItem);
    });
}

function addNewButtonEventListeners() {
    const newProjOrTask = document.querySelectorAll('.createnewwindow span');
    newProjOrTask.forEach(button => {
        button.addEventListener('mousedown', (e) => {
            button.classList.add('clicked')
        })

        button.addEventListener('mouseup', (e) => {
            button.classList.remove('clicked');
            switch (e.target.classList[0]) {
                case "newproject":
                    buildNewProjectWindow();
                    break;
            
                case "newtask":
                    buildNewTaskWindow();
                    break;
            
                default:
                    break;
            }
        })
    });
}

function addProjectToList(project) {
    projList.push(project);
}

createBlankMainPage();
addProjectsToPage();
addNewButtonEventListeners();

