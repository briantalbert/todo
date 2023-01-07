import { buildNewProjectWindow, getProjList, getProjByName } from "./project";
import { Task, buildNewTaskWindow} from "./task.js";


export function createBlankMainPage() {
    
    if (document.querySelector('.blankhomepage')) {
        const homePage = document.querySelector('.blankhomepage');
        homePage.parentNode.removeChild(homePage);
    }

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

    if (getProjList().length == 0) {
        newTaskSpan.classList.add('unclickable');
    } else {
        newTaskSpan.classList.remove('unclickable');
    }
    addNewButtonEventListeners();

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
                    if (button.classList.contains('unclickable')) {
                        break;
                    } else {
                        buildNewTaskWindow();
                    }
                    break;
            
                default:
                    break;
            }
        })
    });
}