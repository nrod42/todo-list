import createCard from './card';

const projectBtn = (newProject) => {
  const newProjectBtn = document.createElement('button');
  newProjectBtn.classList.add('projectBtn');
  newProjectBtn.textContent = newProject.getName();

  return newProjectBtn;
};

// Generates tab page
const render = (name, project, tasks) => {
  const currentProject = document.querySelector('.currentProject');
  currentProject.setAttribute('data-id', project.getId());
  while (currentProject.firstChild) {
    currentProject.firstChild.remove();
  }

  const heading = document.createElement('h1');
  heading.textContent = name;
  currentProject.appendChild(heading);

  tasks.forEach((task) => {
    currentProject.appendChild(createCard(project, task));
  });
};

export { projectBtn, render };
