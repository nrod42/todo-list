import createCard from "./card";

const projectBtns = (newProject) => {
  const sidebar = document.querySelector(".sidebar");
  const projectBtn = document.createElement("button");
  projectBtn.classList.add("projectBtn");
  projectBtn.textContent = newProject.getName();
  sidebar.appendChild(projectBtn);
};
// Generates tab page
const render = (name, tasks) => {
  const currentProject = document.querySelector(".currentProject");
  while (currentProject.firstChild) {
    currentProject.firstChild.remove();
  }
  // currentProject.classList.toggle() change from rander = (name, taks) to render (project, tasks).
  // this way we have project.getName which we can feed to toggle class.
  // Then, we can use class name in index to immidiately render the page depending on what current page is displayed
  // If we're on todays tasks screen and we add a new task thats due today, ti should refresh immidiately
  const heading = document.createElement("h1");
  heading.textContent = name;
  currentProject.appendChild(heading);

  tasks.forEach((task) => {
    currentProject.appendChild(createCard(task));
  });
};

export { projectBtns, render };
