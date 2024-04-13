// localStorage.setItem("colorSetting", "#a4509b");
// localStorage.getItem("") 

export const projectStorage = function (){
    const projects = [];

    function addProject(project) {
        projects.push(project);
    };
    
    function getProjects() {
        return projects;
    }
    return {addProject, getProjects}
}();
