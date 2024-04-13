import { createList } from './list';
import { createProject } from './project';
import {projectStorage} from './localStorage'
import './style.css';
import { render } from './domUpdater';
import { createTaskDom } from './uiHandler';


document.querySelector('#add-project-button').addEventListener('click', ()=> {
    const id = (new Date()).getTime();
    const name = document.querySelector('#project-name-input').value;
    const taskList = createList(id, []);
    const newProject = createProject(name, id, taskList);
    projectStorage.addProject(newProject);
    console.log(Array.from(document.querySelectorAll('.add-task-button')));
    render();
    const buttonArray = Array.from(document.querySelectorAll('.add-task-button'))
    buttonArray.map((button) => {
    button.addEventListener('click', ()=> {
        
        createTask(name, id, listContent, priority);

        const takId  =( new Date()).getTime();
        console.log(createTaskDom())
    })
})
});