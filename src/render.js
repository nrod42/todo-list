import createCard from "./card";

const projectBtns = (newProject) => {
  const sidebar = document.querySelector(".sidebar");
  const projectBtn = document.createElement("button");
  projectBtn.classList.add("projectBtn");
  projectBtn.textContent = newProject.getName();
  sidebar.appendChild(projectBtn);
};

const render = (project) => {
  const currentProject = document.querySelector(".currentProject");
  while (currentProject.firstChild) {
    currentProject.firstChild.remove();
  }
  project.getTasks().forEach((task) => {
    currentProject.appendChild(createCard(task));
  });
};

export { projectBtns, render };
