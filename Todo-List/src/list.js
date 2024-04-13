
export function createList(projectId, taskList){    
    return {projectId, taskList}
}

export function createTask(name, id, listContent, priority) {
    return {name, id, listContent, priority}
}

