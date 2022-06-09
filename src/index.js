import { createNav, createSidebar, createProjectGroup, createPage, actionBtns } from './render.js';
import { createTask } from './createTask.js';
import { createTaskForm, createProjectForm, clearForm, createSelectProjectForm} from './forms.js';
import { markComplete, del, showAddToProjectForm, addProjectPages } from './buttons.js';
import './styles.css';

const mainWrapper = document.querySelector('.mainWrapper');

//Renders all needed DOM elements
const nav = createNav();
const sidebar = createSidebar();
const taskForm = createTaskForm();
const projectForm = createProjectForm();
const selectProjectForm = createSelectProjectForm();
const inbox = createPage();
const today = createPage();
const upcoming = createPage();
const completed = createPage();

inbox.classList.add('inbox');
today.classList.add('today');
upcoming.classList.add('upcoming');
completed.classList.add('completed');

const addTaskBtn = document.createElement('button');
addTaskBtn.textContent = 'Add New Task';
addTaskBtn.classList.add('addTaskBtn');

mainWrapper.appendChild(nav);
mainWrapper.appendChild(sidebar);
mainWrapper.appendChild(addTaskBtn);
mainWrapper.appendChild(taskForm);
mainWrapper.appendChild(projectForm);
mainWrapper.appendChild(selectProjectForm);
mainWrapper.appendChild(inbox);
mainWrapper.appendChild(today);
mainWrapper.appendChild(upcoming);
mainWrapper.appendChild(completed);

const inboxBtn = document.querySelector('.inboxBtn');
const todayBtn = document.querySelector('.todayBtn');
const upcomingBtn = document.querySelector('.upcomingBtn');
const completedBtn = document.querySelector('.completedBtn');
const addProjectBtn = document.querySelector('.addProjectBtn');

//initializes main task array
let taskList = [];
let completedTasks = [];

//Gets current date in ISO format
let currentDate = new Date();
let dd = String(currentDate.getDate()).padStart(2, '0');
let mm = String(currentDate.getMonth() + 1).padStart(2, '0');
let yyyy = currentDate.getFullYear();
currentDate = yyyy + '-' + mm + '-' + dd;

//Inbox heading
const inboxHeading = document.createElement('h1');
inboxHeading.textContent = 'All Tasks';
inbox.appendChild(inboxHeading);

//Adds default example task to To-Do list
const defaultTask = createTask('First', 'This is my first task', currentDate, 'high', 'Project1');
taskList.push(defaultTask);
taskList.forEach(task => {
    let card = task.createCard();
    card.appendChild(actionBtns());
    inbox.appendChild(card);
    markComplete(taskList, completedTasks);
    del(taskList);
    showAddToProjectForm(taskList);
});

/** ------------------------------ EVENT LISTENERS ----------------------------- **/

//Shows Task Form
addTaskBtn.addEventListener('click', () => {
    taskForm.style.display = 'flex';
});

//Shows Project Form
addProjectBtn.addEventListener('click', () => {
    projectForm.style.display = 'flex';
});



//Task Form Submit Event Listener - Adds new tasks to inbox section
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    while (inbox.firstChild) {
        inbox.firstChild.remove();
    };
    inbox.appendChild(inboxHeading);
    const newTask = createTask(taskForm.title.value, taskForm.description.value, taskForm.dueDate.value, taskForm.priority.value);
    taskList.push(newTask);
    taskList.forEach(task => {
        let card = task.createCard();
        card.appendChild(actionBtns());
        
        inbox.appendChild(card);
    });
    clearForm(taskForm);
    markComplete(taskList, completedTasks);
    del(taskList);
    showAddToProjectForm(taskList);
})

//Project Form Submit Event Listener - Adds a new group section with corresponding button
projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const group = createProjectGroup();
    const projectGroupBtn = document.createElement('button');
    projectGroupBtn.classList.add('projectGroupBtn');

    projectGroupBtn.textContent = projectForm.projectName.value;
    group.appendChild(projectGroupBtn);
    sidebar.appendChild(group);
    clearForm(projectForm);

    const projectPage = createPage();
    projectPage.setAttribute('id', projectGroupBtn.textContent);

    const heading = document.createElement('h1');
    heading.textContent = projectGroupBtn.textContent;

    projectPage.appendChild(heading);
    mainWrapper.appendChild(projectPage);
    
    addProjectPages();
});

//Shows inbox section which shows all imcomplete tasks regardless of date
inboxBtn.addEventListener('click', () => {
    const allProjects = document.querySelectorAll('.project');
    allProjects.forEach(project => project.style.display = 'none');
    inbox.style.display = 'flex';
});

//Shows only todays tasks
todayBtn.addEventListener('click', (e) => {
    //wipes old array and replaces it with most current one
    while (today.firstChild) {
        today.firstChild.remove();
    };
    const heading = document.createElement('h1');
    heading.textContent = 'Today\'s Tasks';
    today.appendChild(heading);
    let todayTasks = taskList.filter(task => task.dueDate == currentDate);
    todayTasks.forEach(task => {
        if (task.completionStatus == 'yes') {
            return;
        } else {    
            today.appendChild(task.createCard());
        };
    });
    const allProjects = document.querySelectorAll('.project');
    allProjects.forEach(project => project.style.display = 'none');
    today.style.display = 'flex';
});

//Shows tasks sorted by due date, from soonest to latest.
upcomingBtn.addEventListener('click', () => {
    while (upcoming.firstChild) {
        upcoming.firstChild.remove();
    };
    const heading = document.createElement('h1');
    heading.textContent = 'Upcoming Tasks';
    upcoming.appendChild(heading);
    let sortedTasks = taskList.slice().sort((a,b) => {
        return new Date(a.dueDate) - new Date(b.dueDate);
    });
    sortedTasks.forEach(task => {
        if (task.completionStatus == 'yes') {
            return;
        } else {
        //if task has no due date, skips it
            if (task.dueDate == '') return;
            upcoming.appendChild(task.createCard());
        };
    });
    const allProjects = document.querySelectorAll('.project');
    allProjects.forEach(project => project.style.display = 'none');
    upcoming.style.display = 'flex';
});

//Shows completed section with all completed tasks
completedBtn.addEventListener('click', () => {
    while (completed.firstChild) {
        completed.firstChild.remove();
    };
    const heading = document.createElement('h1');
    heading.textContent = 'Completed Tasks';
    completed.appendChild(heading);
    completedTasks.forEach(task => {
        completed.appendChild(task.createCard());
    });
    const allProjects = document.querySelectorAll('.project');
    allProjects.forEach(project => project.style.display = 'none');
    completed.style.display = 'flex';
});







//EVERY EVENT LISTENER CAN BE A APRT OF AN EVENT LISTENER OBJ WHERE WE PASS IT THE MAIN AND COMPLETE ARRAYS AND THEN WE JUST CALL THE OBJ FUNCTION IN HERE, INDEX.
//EX: OBJ.UPCOMING WOULD STILL DO EVERYYTHING IT DOES HERE BUT NOW ITS NOTE HERE ATT ALL. THERE SHOULD BE NO ISSUES BECAUSE, IT STILL HAS ACCESS TO MAIN ARRAY.

//note: this card function should create a card in the "closed state" and then when we click on an arrow lets sat, it will expand open revealing its contents


//then, i could have a single module which could export every page needed.
//THEN forEach obj in the array, run the makeCard function and append them to the default inbox section

//as for action buttons, i want which buttons available to depend on what page the task in on. 
//for ex, if on inbox, complete, edit, delete and add to project
//but if on completed page, then we would want it to only have a "mark as incomplete" button which would re-add it to the main array.
//to do this, we can make a function which checks to see the parent of the card (which should be the page) and append the buttons accordingly.

//when edit is clicked, maybe a new copy of the main form can be opened and when submit is hit these could "set" the properties of that object





//todo:
//move task card function to seperate module
