
export function createProjectHtml(projectId, projectName) {
    const projectHtml = 
    `
    <div class="project">
        <div class="project-header">
            <h2 class="project-name"> ${projectName} </h2>
            <button type="button" id="delete-project-${projectId}">Delete</button>
        </div>
        <form>
            <!-- <label for="task-input-${projectId}"></label> -->
            <input type = "text" placeholder="task name" name="task-input-field" id = "task-input-${projectId}">
            <button type="button" class="add-task-button" id="add-task-${projectId}" >Add</button>
        </form>
        <ul id = "task-list-${projectId}"></ul>            
    </div>
    `
    return projectHtml;
}

export function createTaskHtml(taskId, taskName) {
    // button.id.split("-")[1])
    const taskHtml = `
    <li class = "task">
        <p class = "task-name">${taskName}</p>
        <button type="button" id ="deleteTask-${taskId}">Done</button>
    </li>
    `
    return taskHtml;
}


// <!-- <li class = "task" id = "projectId-${projectId}"> -->
