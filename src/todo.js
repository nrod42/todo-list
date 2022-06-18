import project from "./project";
import task from "./task";

const todo = () => {
    return {
        projects: [project('Inbox'), project('Today'), project('Upcoming')],
        
        setProjects (project) {
            this.projects  = project;
        },

        getProjects () {
            return this.projects;
        },

        getProject (projectName) {
            return this.projects.find((project) => project.getName() === projectName)
        },

        addProject (newProject) {
            if (this.projects.find((project) => project.getName() === newProject.getName())) return;
            this.projects.push(newProject);
        }
    }
}

export default todo;