import { projectStorage } from "./localStorage";
import { createProjectHtml, createTaskHtml } from "./createDom";
import { updateTaskListners } from "./main";

export function updateDom() {
  const container = document.querySelector("#main-container");
  container.innerHTML = "";
  const projectList = projectStorage.getProjects();
  for (const projectId in projectList) {
    container.innerHTML += createProjectHtml(
      projectId,
      projectList[projectId].name
    );

    const listContainer = document.querySelector(`#task-list-${projectId}`);
    const taskList = projectStorage.getTaskList(projectId);
    for (const taskId in taskList) {
      listContainer.innerHTML += createTaskHtml(taskId, taskList[taskId].name);
      // console.log(taskList[taskId]);
    }
  }
  updateTaskListners();
}
