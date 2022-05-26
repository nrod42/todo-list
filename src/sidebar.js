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
    addProjectBtn.addEventListener('click', showProjectForm);
    projectForm.addEventListener('submit', createProjectGroup);

    const mainGroup = document.createElement('div');
    mainGroup.classList.add('mainGroup');

    const inbox = document.createElement('button');
    inbox.textContent = 'Inbox';
    
    const today = document.createElement('button');
    today.textContent = 'Today';

    const upcoming = document.createElement('button');
    upcoming.textContent = 'Upcoming';
    
    const completed = document.createElement('button');
    completed.textContent = 'Completed';


    sidebar.appendChild(addProjectBtn);
    sidebar.appendChild(mainGroup);
    mainGroup.appendChild(inbox);
    mainGroup.appendChild(today);
    mainGroup.appendChild(upcoming);
    mainGroup.appendChild(completed);

    function showProjectForm () {
        projectForm.style.display = 'flex';
        sidebar.appendChild(projectForm);
    }

    function showInboxSection () {
        const mainWrapper = document.querySelector('.mainWrapper');
        const completedTasksSection = document.querySelector('.completedTasksSection');

    }

    function showCompletedSection () {
        const mainWrapper = document.querySelector('.mainWrapper');
        const cardSection = document.querySelector('.cardSection');

    }

    return sidebar;
};

const createProjectGroup = (e) => {
    e.preventDefault();
    const sidebar = document.querySelector('.sidebar');
    const projectForm = document.getElementById('projectForm');

    const projectGroup = document.createElement('div');
    projectGroup.classList.add('projectGroup');
    const projectName = document.createElement('button');
    projectName.textContent = projectForm.projectName.value;

    projectGroup.appendChild(projectName);
    sidebar.appendChild(projectGroup);
    clearProjectForm();
}


export { createSidebar, createProjectGroup };