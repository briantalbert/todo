import css from './style.css';

function createHomePage() {
    alert('calling createhomepage');
    const main = document.querySelector('.container');
    main.appendChild(createHeader());
}

function createHeader() {
    const header = document.createElement('div');
    header.classList.add('header');
    const title = document.createElement('span');
    title.classList.add('title');
    title.textContent = "Get To-Doing!";
    header.appendChild(title);
    return header;
}

createHomePage();

/* function fillTemplate(text) {
    const body = document.querySelector('body');
    const template = document.querySelector('#card');
    const clone = template.content.cloneNode(true);
    let content = clone.querySelector('.cardcontent');
    content.textContent = text;
    return content;

} */