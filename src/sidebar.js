import {createProjectForm, clearProjectForm} from './forms.js';
import { completedSection } from './completed.js';
import { createTaskSection } from './tasks.js';

const createSidebar = () => {
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');

    const addProjectBtn = document.createElement('button');
    addProjectBtn.classList.add('addProjectBtn');
    addProjectBtn.textContent = 'New Project';

    const projectForm = createProjectForm();
    addProjectBtn.addEventListener('click', () => {
        projectForm.style.display = 'flex';
        sidebar.appendChild(projectForm);
    });

    projectForm.addEventListener('submit', createProjectGroup);

    const mainGroup = document.createElement('div');
    mainGroup.classList.add('mainGroup');

    const inbox = document.createElement('button');
    inbox.textContent = 'Inbox';
    inbox.addEventListener('click', () => {
        const mainWrapper = document.querySelector('.mainWrapper')
        const completedTasksSection = document.querySelector('.completedTasksSection');
        mainWrapper.appendChild(createTaskSection());
        completedTasksSection.remove();
    });
    
    const today = document.createElement('li');
    today.textContent = 'Today';

    const upcoming = document.createElement('li');
    upcoming.textContent = 'Upcoming';
    
    const completed = document.createElement('button');
    completed.textContent = 'Completed';
    completed.addEventListener('click', () => {
        const mainWrapper = document.querySelector('.mainWrapper')
        const taskSection = document.querySelector('.cardSection');
        mainWrapper.appendChild(completedSection());
        taskSection.remove();
    });
    
    sidebar.appendChild(addProjectBtn);
    sidebar.appendChild(mainGroup);
    mainGroup.appendChild(inbox);
    mainGroup.appendChild(today);
    mainGroup.appendChild(upcoming);
    mainGroup.appendChild(completed);

    return sidebar;
};

const createProjectGroup = (e) => {
    e.preventDefault();
    const sidebar = document.querySelector('.sidebar');
    const projectForm = document.getElementById('projectForm');

    const projectGroup = document.createElement('div');
    projectGroup.classList.add('projectGroup');
    const projectName = document.createElement('ul');
    projectName.textContent = projectForm.projectName.value;

    projectGroup.appendChild(projectName);
    sidebar.appendChild(projectGroup);
    clearProjectForm();
}


export { createSidebar, createProjectGroup };