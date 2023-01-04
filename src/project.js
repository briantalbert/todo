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

let projList = [];

export function buildNewProjectWindow() {
    const container = document.querySelector('.createnewwindow');
    container.innerHTML = "";
    const template = document.querySelector(".newprojectform");
    const clone = template.content.cloneNode(true);

    container.appendChild(clone);
    
    addEventListeners();
}

function addEventListeners () {
    const createNewButton = document.querySelector('button.createnew');
    const createAndAddButton = document.querySelector('button.createandadd');

    createNewButton.addEventListener('click', (e) => {
        e.preventDefault();
        var projectName = document.getElementById("projectname").value;
        const newProj = new Project(projectName);
        projList.push(newProj);
        addProjectsToPage(newProj);
    })
}

function addProjectsToPage(newProj) {
    let listItem = document.createElement('li');
    listItem.textContent = newProj.getName();
    let listContainer = document.querySelector('.projectitems');
    listContainer.appendChild(listItem);
}

export function getProjList() {
    return projList;
}