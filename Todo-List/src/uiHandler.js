
export function createProjectDom(project) {
    const projectHtml = 
    `
    <div class="project">
        <div class="project-header">
            <h2 class="project-heading">${project.name}</h2>
            <button type="button" id="${project.id}">Delete</button>
        </div>
        <form>
            <label for="task-name-input"></label>
            <input type = "text" id = "task-name-input" name="task-name-input" placeholder="task name">
            <button type="button" class = "add-task-button" id="addTask-${project.id}" >Add</button>
        </form>
        <div class="tasks-list">
            <ul id = "taskList-${project.id}"></ul>            
        </div>
    </div>
    `
    return projectHtml;
}

export function createTaskDom(task) {
    // button.id.split("-")[1])
    const taskHtml = `
    <li class = "task" id = "${task.id}">
        <p class = "task-name">${task.name}</p>
        <button type="button" id ="deleteTask-${task.id}">Done</button>
    </li>
    `
    return {taskHtml}
}