// localStorage.setItem("colorSetting", "#a4509b");
// localStorage.getItem("") 

export const projectStorage = function (){
    const projects = {};
    // const projects = [];
    function addProject(projectId, newProject) {
        // projects.push(project);
        projects[projectId] = newProject;
    };
    
    function addTask(projectId, taskId, task) {
        projects[projectId].taskList[taskId] = task;
    }

    function getProjects() {
        return projects;
    };

    function getTaskList(projectId) {
       return projects[projectId].taskList
    }
    return {addProject, addTask, getTaskList, getProjects}
}();
