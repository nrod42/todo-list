import { createNav, createSidebar, createProjectGroup, createProject } from './pages.js';
import { createTask } from './createTask.js';
import { createTaskForm, createProjectForm, clearForm} from './forms.js';
import './styles.css';

const mainWrapper = document.querySelector('.mainWrapper');

//Renders all needed DOM elements
const nav = createNav();
const sidebar = createSidebar();
const taskForm = createTaskForm();
const projectForm = createProjectForm();
const inbox = createProject();
const today = createProject();
const upcoming = createProject();
const completed = createProject();

inbox.classList.add('inbox');
today.classList.add('today');
upcoming.classList.add('upcoming');
completed.classList.add('completed');

const addTaskBtn = document.createElement('button');
addTaskBtn.textContent = 'Add New Task'
addTaskBtn.classList.add('addTaskBtn')

mainWrapper.appendChild(nav);
mainWrapper.appendChild(sidebar);
mainWrapper.appendChild(addTaskBtn);
mainWrapper.appendChild(taskForm);
mainWrapper.appendChild(projectForm);
mainWrapper.appendChild(inbox);
mainWrapper.appendChild(today);
mainWrapper.appendChild(upcoming);
mainWrapper.appendChild(completed);

const inboxBtn = document.querySelector('.inboxBtn');
const todayBtn = document.querySelector('.todayBtn');
const upcomingBtn = document.querySelector('.upcomingBtn');
const completedBtn = document.querySelector('.completedBtn');
const addProjectBtn = document.querySelector('.addProjectBtn');

const addToCompletedBtn = document.querySelector('.addToCompletedBtn');


//initializes main task array
let taskList = [];

//Gets current date in ISO format
let currentDate = new Date();
let dd = String(currentDate.getDate()).padStart(2, '0');
let mm = String(currentDate.getMonth() + 1).padStart(2, '0');
let yyyy = currentDate.getFullYear();
currentDate = yyyy + '-' + mm + '-' + dd;

//Adds default example task to To-Do list
const defaultTask = createTask('First', 'This is my first task', currentDate, 'high', 'Project1');
taskList.push(defaultTask);
taskList.forEach(task => {
    inbox.appendChild(task.createCard())
});


/** ------------------------------ EVENT LISTENERS ----------------------------- **/

//Shows Task Form
addTaskBtn.addEventListener('click', () => {
    taskForm.style.display = 'flex';
});

//Shows Project Form
addProjectBtn.addEventListener('click', () => {
    projectForm.style.display = 'flex';
})

//Task Form Submit Event Listener - Adds new tasks to inbox section
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    while (inbox.firstChild) {
        inbox.firstChild.remove()
    };
    const newTask = createTask(taskForm.title.value, taskForm.description.value, taskForm.dueDate.value, taskForm.priority.value);
    taskList.push(newTask);
    taskList.forEach(task => inbox.appendChild(task.createCard()));
    clearForm(taskForm);
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
})

//Shows inbox section which shows all imcomplete tasks regardless of date
inboxBtn.addEventListener('click', () => {
    inbox.style.display = 'flex';
    today.style.display = 'none';
    upcoming.style.display = 'none';
    completed.style.display = 'none';
});

//Shows only todays tasks
todayBtn.addEventListener('click', (e) => {
    //wipes old array and replaces it with most current one
    while (today.firstChild) {
        today.firstChild.remove()
    };
    let todayTasks = taskList.filter(task => task.dueDate == currentDate);
    todayTasks.forEach(task => today.appendChild(task.createCard()));
    today.style.display = 'flex';
    inbox.style.display = 'none';
    upcoming.style.display = 'none';
    completed.style.display = 'none';
});

//Shows tasks sorted by due date, from soonest to latest.
upcomingBtn.addEventListener('click', () => {
    while (upcoming.firstChild) {
        upcoming.firstChild.remove()
    };
    let sortedTasks = taskList.slice().sort((a,b) => {
        return new Date(a.dueDate) - new Date(b.dueDate)
    });
    sortedTasks.forEach(task => {
        //if task has no due date, skips it
        if (task.dueDate == '') return
        upcoming.appendChild(task.createCard())
    });
    upcoming.style.display = 'flex';
    inbox.style.display = 'none';
    today.style.display = 'none';
    completed.style.display = 'none';
});

//Shows completed section with all completed tasks
completedBtn.addEventListener('click', () => {
    while (completed.firstChild) {
        completed.firstChild.remove()
    };
    taskList.forEach(task => {
        if (task.completionStatus == 'yes') {
            completed.appendChild(task.createCard())
        }
    });
    completed.style.display = 'flex';
    inbox.style.display = 'none';
    today.style.display = 'none';
    upcoming.style.display = 'none';
});




//scratch that, couldnt we have simply made the card format function as function property of each obj?
//the card making function could be a seperater module which wouyld reference "this"
//ex: if i make an object from info from a form, i could then call that objects "make card" prop which would return an html "card";
//note: this card function should create a card in the "closed state" and then when we click on an arrow lets sat, it will expand open revealing its contents

//each generated card should be added to a main array.
//then, i could have a single module which could export every page needed.
//THEN forEach obj in the array, run the makeCard function and append them to the default inbox section

//as for action buttons, i want which buttons available to depend on what page the task in on. 
//for ex, if on inbox, complete, edit, delete and add to project
//but if on completed page, then we would want it to only have a "mark as incomplete" button which would re-add it to the main array.
//to do this, we can make a function which checks to see the parent of the card (which should be the page) and append the buttons accordingly.

//when edit is clicked, maybe a new copy of the main form can be opened and when submit is hit these could "set" the properties of that object
//if obj.completed == 'yes' we can then run obj.makeCard and append it to the completed page

//when today is clicked, a function should be run which loops through the main array, checks each obj in it and checks obj.duedate. if its today, append it to this seciton
//note: each sidebar button should have an even listener so that every time we click it is essentially rescanning the main array and everything is up to date


//todo:
//move task card function to seperate module
//add the action btns, probably on the task card itself
//make complete status part of obj
//can we do set for this? like if button clicked, set obj.status to 'complete'