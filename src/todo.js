import project from './project';

const todo = () => ({
  projects: [project('Inbox')],

  setProjects(project) {
    this.projects = project;
  },

  getProjects() {
    return this.projects;
  },

  getProject(projectName) {
    return this.projects.find((project) => project.getName() === projectName);
  },

  addProject(newProject) {
    if (this.projects.find((project) => project.getName() === newProject.getName())) {
      return;
    }
    this.projects.push(newProject);
  },

  delProject(projectName) {
    this.projects = this.projects.filter((project) => project.getName() !== projectName);
  },
});

export default todo;
