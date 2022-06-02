import {createProjectForm, clearProjectForm} from './forms.js';
import { createPage } from './pages.js';
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
    inbox.addEventListener('click', showInboxSection);
    
    const today = document.createElement('button');
    today.textContent = 'Today';
    today.addEventListener('click', showTodaySection);

    const upcoming = document.createElement('button');
    upcoming.textContent = 'Upcoming';
    
    const completed = document.createElement('button');
    completed.textContent = 'Completed';
    completed.addEventListener('click', showCompletedSection);

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
        const cardSection = document.querySelector('.cardSection');
        const todaySection = document.querySelector('.todaySection');
        const completedTasksSection = document.querySelector('.completedTasksSection');
        const newPage = document.querySelector('.newPage');
        cardSection.style.display = 'flex';
        todaySection.style.display = 'none';
        completedTasksSection.style.display = 'none';
        newPage.style.display = 'none';
    }

    function showTodaySection () {
        const todaySection = document.querySelector('.todaySection');
        const cardSection = document.querySelector('.cardSection');
        const completedTasksSection = document.querySelector('.completedTasksSection');
        const newPage = document.querySelector('.newPage');
        getTodayCards();
        todaySection.style.display = 'flex';
        cardSection.style.display = 'none';
        completedTasksSection.style.display = 'none';
        newPage.style.display = 'none';
    }

    function showCompletedSection () {
        const completedTasksSection = document.querySelector('.completedTasksSection');
        const cardSection = document.querySelector('.cardSection');
        const todaySection = document.querySelector('.todaySection');
        const newPage = document.querySelector('.newPage');
        completedTasksSection.style.display = 'flex';
        cardSection.style.display = 'none';
        todaySection.style.display = 'none';
        newPage.style.display = 'none';
    }

    function getTodayCards () {
        const todaySection = document.querySelector('.todaySection');
        const allCards = Array.from(document.querySelectorAll('.card'));
        //const cardDates = Array.from(document.querySelectorAll('.cardDate'));
        allCards.forEach(card => {
            if (card.querySelector('.cardDate').textContent.slice(10,20) == new Date().toISOString().slice(0, 10)) {
                todaySection.appendChild(card)
            };
        });
    }

    return sidebar;
};

const createProjectGroup = (e) => {
    e.preventDefault();
    const sidebar = document.querySelector('.sidebar');
    const projectForm = document.getElementById('projectForm');
    const mainWrapper = document.querySelector('.mainWrapper');

    const projectGroup = document.createElement('div');
    projectGroup.classList.add('projectGroup');
    projectGroup.classList.add(projectForm.projectName.value)

    const projectName = document.createElement('button');
    projectName.textContent = projectForm.projectName.value;

    const newPage = createPage();
    newPage.setAttribute('id', projectForm.projectName.value)
    mainWrapper.appendChild(newPage);

    projectName.addEventListener('click', (e) => {
        const projectPage = document.getElementById(e.target.textContent);
        const completedTasksSection = document.querySelector('.completedTasksSection');
        const cardSection = document.querySelector('.cardSection');
        const todaySection = document.querySelector('.todaySection');

        const allGroups = Array.from(document.querySelectorAll('.newPage'));
        allGroups.forEach(group => {
            let groupPage = document.getElementById(group.id);
            groupPage.style.display = 'none';
        })
        projectPage.style.display = 'flex';

        completedTasksSection.style.display = 'none';
        cardSection.style.display = 'none';
        todaySection.style.display = 'none';
    })

    projectGroup.appendChild(projectName);
    sidebar.appendChild(projectGroup);
    clearProjectForm();
}

export { createSidebar, createProjectGroup };