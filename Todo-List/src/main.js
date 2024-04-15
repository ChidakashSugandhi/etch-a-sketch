import { createProject } from './project';
import {projectStorage} from './localStorage'
import { createTask } from './list';
import './style.css';
import { updateDom, updateProjectDom, updateTaskListDom } from './updateDom';



// function updateTaskListners() {
//     const buttonArray = Array.from(document.querySelectorAll('.add-task-button'));
//     buttonArray.map((button) => {
//     button.addEventListener('click', (event) => {
//         const taskId = (new Date()).getTime();
//         const projectId = event.target.id.split("-")[1];
//         const name = document.querySelector(`#task-name-input-${projectId}`).value;
//         const listContent = "";
//         const priority = "";
//         const newTask = createTask(name, projectId, taskId, listContent, priority);
//         projectStorage.addTask(projectId, newTask);
//         const projectList = projectStorage.getProjectList(projectId);
//         console.log(projectStorage.getProjects());
// });
// });
// }

export function screenController() {
    document.querySelector('#add-project-button').addEventListener('click', ()=> {
        const id = (new Date()).getTime();
        const name = document.querySelector('#project-name-input').value;
        const newProject = createProject(name, {});
        projectStorage.addProject(id, newProject);
        updateProjectDom();
    });
}

export function updateTaskListners() {
    const AddtaskButtonArray = Array.from(document.querySelectorAll(".add-task-button"));
    AddtaskButtonArray.forEach(addButton => addButton.addEventListener("click", function () {
        const projectId = this.id.split("-")[2];
        const taskId = (new Date()).getTime();
        const taskName = document.querySelector(`#task-input-${projectId}`).value;
        const newTask = createTask(taskName, false);
        projectStorage.addTask(projectId, taskId, newTask);
        console.log(projectStorage.getProjects());        
    }));
}



// export function listenTask() {
//     const buttonArray = Array.from(document.querySelectorAll('.add-task-button'));
//     buttonArray.map((button) => {
//         button.addEventListener('click', (event) => {
//             console.log("test")
//             const taskId = (new Date()).getTime();
//             const name = document.querySelector('#project-name-input').value;
//             const listContent = "";
//             const priority = "";
//             const projectId = event.target.id.split("-")[1];
//             const newTask = createTask(name, projectId, taskId, listContent, priority);
//             projectStorage.addTask(projectId, newTask);
//             render();
//     });
//     })
// }

// export function listenProject() {
//     document.querySelector('#add-project-button').addEventListener('click', ()=> {
//         const id = (new Date()).getTime();
//         const name = document.querySelector('#project-name-input').value;
//         const taskList = [];
//         const newProject = createProject(name, id, taskList);
//         projectStorage.addProject(newProject);
//         render();
//         const buttonArray = Array.from(document.querySelectorAll('.add-task-button'));
//         buttonArray.map((button) => {
//             button.addEventListener('click', (event) => {
//                 console.log("test")
//                 const taskId = (new Date()).getTime();
//                 const name = document.querySelector('#project-name-input').value;
//                 const listContent = "";
//                 const priority = "";
//                 const projectId = event.target.id.split("-")[1];
//                 const newTask = createTask(name, projectId, taskId, listContent, priority);
//                 projectStorage.addTask(projectId, newTask);
//                 render();
//         });
//         })
//     });
// }
