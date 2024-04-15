import { projectStorage } from './localStorage';
import { createProjectHtml, createTaskHtml} from './createDom';
import { updateTaskListners } from './main';

const container = document.querySelector("#main-container");

export function render() {
    const projects = projectStorage.getProjects();
    for (let i = 0; i <projects.length; i++) {
        container.innerHTML += createProjectDom(projects[i]);
        // for (let i = 0; i<projects[i].t)
        const projectList = projectStorage.getProjectList(projects[i].id);
        const taskList = document.querySelector(`#taskList-${projects[i].id}`);
        for (let i = 0; i<projectList.length; i++){
            // createTaskDom
            console.log(projectList[i]);
            console.log(createTaskDom(projectList[i]));
            taskList.innerHTML += createTaskDom(projectList[i]);
        }
    }
    // const project = projectStorage.getProject(projectId);    

}

export function updateProjectDom() {
    const container = document.querySelector("#main-container");
    container.innerHTML = ""
    const projectList = projectStorage.getProjects();
    for (const projectId in projectList) {
        container.innerHTML += createProjectHtml(projectId, projectList[projectId].name);
      }
    updateTaskListners();
}

export function updateDom() {
    // const listContainer = document.querySelector(`#task-list-${projectId}`);
    // const taskList = projectStorage.getTaskList(projectId);
    // for (const taskId in taskList) {
    //     listContainer.innerHTML += createTaskHtml(taskId, taskList[taskId].name);
    //     console.log(taskList[taskId]);
    //   } 
    const container = document.querySelector("#main-container");
    container.innerHTML = ""
    const projectList = projectStorage.getProjects();
    for (const projectId in projectList) {
        container.innerHTML += createProjectHtml(projectId, projectList[projectId].name);
        const listContainer = document.querySelector(`#task-list-${projectId}`);
        const taskList = projectStorage.getTaskList(projectId);
        for (const taskId in taskList) {
            listContainer.innerHTML += createTaskHtml(taskId, taskList[taskId].name);
            // console.log(taskList[taskId]);
          }  
    } 
    updateTaskListners();
}



