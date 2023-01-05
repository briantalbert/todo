/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBlankMainPage": () => (/* binding */ createBlankMainPage)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/task.js");



function createBlankMainPage() {
    if (document.querySelector('.blankhomepage')) {
        document.querySelector('.blankhomepage').innerHTML = "";
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
                    (0,_project__WEBPACK_IMPORTED_MODULE_0__.buildNewProjectWindow)();
                    break;
            
                case "newtask":
                    (0,_task_js__WEBPACK_IMPORTED_MODULE_1__.buildNewTaskWindow)();
                    break;
            
                default:
                    break;
            }
        })
    });
}

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "buildNewProjectWindow": () => (/* binding */ buildNewProjectWindow),
/* harmony export */   "getProjList": () => (/* binding */ getProjList)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");


class Project {
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

function buildNewProjectWindow() {
    const container = document.querySelector('.createnewwindow');
    container.innerHTML = "";
    const template = document.querySelector(".newprojectform");
    const clone = template.content.cloneNode(true);

    container.appendChild(clone);
    
    addEventListeners();
}

function getProjList() {
    return projList;
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
        }
        
    })
}

function addProjectToPage(newProj) {
    let listItem = document.createElement('li');
    listItem.textContent = newProj.getName();
    let listContainer = document.querySelector('.projectitems');
    listContainer.appendChild(listItem);
    (0,_home__WEBPACK_IMPORTED_MODULE_0__.createBlankMainPage)();
}


/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task),
/* harmony export */   "buildNewTaskWindow": () => (/* binding */ buildNewTaskWindow)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");



class Task {
    constructor(taskName, project, dueDate) {
        this.name = taskName;
        this.project = project;
        this.dueDate = dueDate;
    }
}

function buildNewTaskWindow() {
    const container = document.querySelector('.createnewwindow');
    container.innerHTML = "";

    const template = document.querySelector(".newtaskform");
    const clone = template.content.cloneNode(true);

    //add projects to select list
    const projList = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.getProjList)();
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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/project.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNFO0FBQ3BEO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsK0RBQXFCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0REFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEQ2QztBQUM3QztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBEQUFtQjtBQUN2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRHFCO0FBQ3NCO0FBQzNDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsd0RBQVc7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7Ozs7OztVQ3JDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYnVpbGROZXdQcm9qZWN0V2luZG93IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xyXG5pbXBvcnQgeyBUYXNrLCBidWlsZE5ld1Rhc2tXaW5kb3d9IGZyb20gXCIuL3Rhc2suanNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCbGFua01haW5QYWdlKCkge1xyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibGFua2hvbWVwYWdlJykpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmxhbmtob21lcGFnZScpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBibGFua01haW5QYWdlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBibGFua01haW5QYWdlRGl2LmNsYXNzTGlzdC5hZGQoJ2JsYW5raG9tZXBhZ2UnKTtcclxuXHJcbiAgICBjb25zdCBjcmVhdGVOZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNyZWF0ZU5ldy5jbGFzc0xpc3QuYWRkKCdjcmVhdGVuZXd3aW5kb3cnKTtcclxuXHJcbiAgICBjb25zdCBuZXdQcm9qU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIG5ld1Byb2pTcGFuLmNsYXNzTGlzdC5hZGQoJ25ld3Byb2plY3QnKTtcclxuICAgIG5ld1Byb2pTcGFuLnRleHRDb250ZW50ID0gJ05ldyBQcm9qZWN0JztcclxuXHJcbiAgICBjb25zdCBuZXdUYXNrU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIG5ld1Rhc2tTcGFuLmNsYXNzTGlzdC5hZGQoJ25ld3Rhc2snKTtcclxuICAgIG5ld1Rhc2tTcGFuLnRleHRDb250ZW50ID0gJ05ldyBUYXNrJztcclxuXHJcbiAgICBjcmVhdGVOZXcuYXBwZW5kQ2hpbGQobmV3UHJvalNwYW4pO1xyXG4gICAgY3JlYXRlTmV3LmFwcGVuZENoaWxkKG5ld1Rhc2tTcGFuKTtcclxuXHJcbiAgICBibGFua01haW5QYWdlRGl2LmFwcGVuZENoaWxkKGNyZWF0ZU5ldyk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYmxhbmtNYWluUGFnZURpdik7XHJcbiAgICBhZGROZXdCdXR0b25FdmVudExpc3RlbmVycygpO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkTmV3QnV0dG9uRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICBjb25zdCBuZXdQcm9qT3JUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNyZWF0ZW5ld3dpbmRvdyBzcGFuJyk7XHJcbiAgICBuZXdQcm9qT3JUYXNrLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUpID0+IHtcclxuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NsaWNrZWQnKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKGUpID0+IHtcclxuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrZWQnKTtcclxuICAgICAgICAgICAgc3dpdGNoIChlLnRhcmdldC5jbGFzc0xpc3RbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJuZXdwcm9qZWN0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgYnVpbGROZXdQcm9qZWN0V2luZG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY2FzZSBcIm5ld3Rhc2tcIjpcclxuICAgICAgICAgICAgICAgICAgICBidWlsZE5ld1Rhc2tXaW5kb3coKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG59IiwiaW1wb3J0IHsgY3JlYXRlQmxhbmtNYWluUGFnZSB9IGZyb20gJy4vaG9tZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9qTmFtZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHByb2pOYW1lO1xyXG4gICAgICAgIHRoaXMudGFza0xpc3QgPSBbXTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRhc2sodGFzaykge1xyXG4gICAgICAgIHRoaXMudGFza0xpc3QucHVzaCh0YXNrKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmxldCBwcm9qTGlzdCA9IFtdO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTmV3UHJvamVjdFdpbmRvdygpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVuZXd3aW5kb3cnKTtcclxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld3Byb2plY3Rmb3JtXCIpO1xyXG4gICAgY29uc3QgY2xvbmUgPSB0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvbmUpO1xyXG4gICAgXHJcbiAgICBhZGRFdmVudExpc3RlbmVycygpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvakxpc3QoKSB7XHJcbiAgICByZXR1cm4gcHJvakxpc3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcclxuICAgIGNvbnN0IGNyZWF0ZU5ld0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5jcmVhdGVuZXcnKTtcclxuICAgIGNvbnN0IGNyZWF0ZUFuZEFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5jcmVhdGVhbmRhZGQnKTtcclxuXHJcbiAgICBjcmVhdGVOZXdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RuYW1lXCIpLnZhbHVlO1xyXG4gICAgICAgIGlmIChwcm9qZWN0TmFtZSAhPSBcIlwiKSB7ICAgIFxyXG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qID0gbmV3IFByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gICAgICAgICAgICBwcm9qTGlzdC5wdXNoKG5ld1Byb2opO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RuYW1lXCIpLnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgYWRkUHJvamVjdFRvUGFnZShuZXdQcm9qKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQcm9qZWN0VG9QYWdlKG5ld1Byb2opIHtcclxuICAgIGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBsaXN0SXRlbS50ZXh0Q29udGVudCA9IG5ld1Byb2ouZ2V0TmFtZSgpO1xyXG4gICAgbGV0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdGl0ZW1zJyk7XHJcbiAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcclxuICAgIGNyZWF0ZUJsYW5rTWFpblBhZ2UoKTtcclxufVxyXG4iLCJpbXBvcnQgXCIuL3Byb2plY3QuanNcIlxyXG5pbXBvcnQgeyBnZXRQcm9qTGlzdCB9IGZyb20gXCIuL3Byb2plY3QuanNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUYXNrIHtcclxuICAgIGNvbnN0cnVjdG9yKHRhc2tOYW1lLCBwcm9qZWN0LCBkdWVEYXRlKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gdGFza05hbWU7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYnVpbGROZXdUYXNrV2luZG93KCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZW5ld3dpbmRvdycpO1xyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld3Rhc2tmb3JtXCIpO1xyXG4gICAgY29uc3QgY2xvbmUgPSB0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcclxuXHJcbiAgICAvL2FkZCBwcm9qZWN0cyB0byBzZWxlY3QgbGlzdFxyXG4gICAgY29uc3QgcHJvakxpc3QgPSBnZXRQcm9qTGlzdCgpO1xyXG4gICAgY29uc3Qgc2VsZWN0ID0gY2xvbmUucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0c1wiKTtcclxuXHJcbiAgICBsZXQgbmV3T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICBuZXdPcHRpb24udmFsdWUgPSAnbmV3JztcclxuICAgIG5ld09wdGlvbi50ZXh0ID0gJy0tQ3JlYXRlIE5ldy0tJztcclxuICAgIHNlbGVjdC5hcHBlbmRDaGlsZChuZXdPcHRpb24pO1xyXG5cclxuICAgIHByb2pMaXN0LmZvckVhY2gocHJvaiA9PiB7XHJcbiAgICAgICAgbGV0IGxpc3RJdGVtID0gcHJvai5nZXROYW1lKCk7XHJcbiAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IGxpc3RJdGVtO1xyXG4gICAgICAgIG9wdGlvbi50ZXh0ID0gbGlzdEl0ZW07XHJcblxyXG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNsb25lKTtcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcHJvamVjdC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==