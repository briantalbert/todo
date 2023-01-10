import { Project, getProjList, getProjByName } from './project';
import { createBlankMainPage } from './home';
import { saveState } from './index';
const { format } = require('date-fns');

export class Task {
  constructor(taskName, project, dueDate) {
    this.name = taskName;
    this.project = project;
    this.dueDate = dueDate;
  }

}

export function buildNewTaskWindow(proj) {
  const container = document.querySelector('.createnewwindow');
  container.innerHTML = '';

  const template = document.querySelector('.newtaskform');
  const clone = template.content.cloneNode(true);

  // add projects to select list
  const projList = getProjList();
  const select = clone.querySelector('#projects');

  projList.forEach((proj) => {
    const listItem = proj.getName();
    const option = document.createElement('option');
    option.value = listItem;
    option.text = listItem;

    select.appendChild(option);
  });

  container.appendChild(clone);

  addEventListeners();
}

function addEventListeners() {
  const createNewButton = document.getElementById('addtoproject');
  createNewButton.addEventListener('click', (e) => {
    e.preventDefault();
    const taskName = document.getElementById('taskname').value;
    const projName = document.getElementById('projects').value;
    const attachedProject = getProjByName(projName);
    let dueDate = new Date();
    dueDate = document.getElementById('duedate').value;

    if (taskName != '' && projName != 'new') {
      const newTask = new Task(taskName, attachedProject, dueDate);
      attachedProject.addTask(newTask);
      attachedProject.sortTasks()
      saveState();
      createBlankMainPage();
    }
  });
}
