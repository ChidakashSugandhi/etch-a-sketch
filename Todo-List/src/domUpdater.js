import { projectStorage } from './localStorage';
import {createProjectDom} from './uiHandler';

const container = document.querySelector("#main-container");

export function render() {
    const projects = projectStorage.getProjects();
    for (let i = 0; i <projects.length; i++) {
        container.innerHTML += createProjectDom(projects[i]);
    }
}