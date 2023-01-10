import { createBlankMainPage } from './home';
import { buildNewTaskWindow } from './task';
import { saveState } from './index';

const projList = [];

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

  sortTasks() {
    const list = this.taskList;
    list.sort((a, b) => (a.dueDate, b.dueDate) ? 1 : -1);
    this.taskList = list;
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
  container.innerHTML = '';
  const template = document.querySelector('.newprojectform');
  const clone = template.content.cloneNode(true);

  container.appendChild(clone);

  addEventListeners();
}

export function createProjectView(project) {
  const container = document.querySelector('.createnewwindow');
  container.innerHTML = '';
  container.classList.add('projectview');
  const template = document.querySelector('template.projectview');
  const clone = template.content.cloneNode(true);
  const projName = project.name;
  clone.querySelector('.projectname').textContent = projName;
  const tasks = project.taskList;
  const taskList = clone.querySelector('.tasklist');

  tasks.forEach(item => {
    const newListItem = document.createElement('li');
    newListItem.innerText = item.name + ' - Due: ' + item.dueDate;
    taskList.appendChild(newListItem);
  });

  container.appendChild(clone);
}

function addEventListeners() {
  const createNewButton = document.querySelector('button.createnew');
  const createAndAddButton = document.querySelector('button.createandadd');

  createNewButton.addEventListener('click', (e) => {
    e.preventDefault();
    const projectName = document.getElementById('projectname').value;
    if (projectName != '') {
      const newProj = new Project(projectName);
      projList.push(newProj);
      document.getElementById('projectname').value = '';
      addProjectToPage(newProj);
      saveState();
      createBlankMainPage();
    }
  });

  createAndAddButton.addEventListener('click', (e) => {
    e.preventDefault();
    const projectName = document.getElementById('projectname').value;
    if (projectName != '') {
      const newProj = new Project(projectName);
      projList.push(newProj);
      document.getElementById('projectname').value = '';
      addProjectToPage(newProj);
      saveState();
      buildNewTaskWindow(newProj);
    }
  });
}

function addProjectToPage(newProj) {
  const listItem = document.createElement('li');
  listItem.textContent = newProj.getName();
  const listContainer = document.querySelector('.projectitems');
  listContainer.appendChild(listItem);

  projectLinks();
}

function projectLinks() {
  const links = document.querySelectorAll('.projectitems li');
  links.forEach((link) => {
    const projName = link.textContent;
    const thisProject = getProjByName(projName);
    link.addEventListener('click', (e) => {
      createProjectView(thisProject);
    });
  });
}
