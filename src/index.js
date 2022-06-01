import createNav from './nav.js';
import { createTaskForm, createProjectForm, clearProjectForm} from './forms.js';
import { createSidebar } from './sidebar.js';
import { createTaskSection } from './tasks.js';
import { createTodaySection } from './today.js';
import { completedSection } from './completed.js';
import './styles.css';

const mainWrapper = document.querySelector('.mainWrapper');

const nav = createNav();

const sidebar = createSidebar();
const taskSection = createTaskSection();
const today = createTodaySection();
const completed = completedSection();


mainWrapper.appendChild(nav);
mainWrapper.appendChild(sidebar);
mainWrapper.appendChild(taskSection);
mainWrapper.appendChild(today);
mainWrapper.appendChild(completed);




//COMPLETED BUTTON SHOULD CHANGE THE TASK PROPERTY TO COMPLETED
//EDIT SHOULD OPEN THE FORM BUT WITH THE TASK PROPERTIES PRE FILLED
//DELETE SHOULD DELETE THE TASK FROM THE TASK ARRAY


/*
every page should be generated blank and with display = 'none'
every card is made from the test obj which includes the following:
title
description
duedate
priority
*/


//one of the modules should be in charge of creating the different pages (tasks, completed, today, upcoming...)

//BRUH, couldnt you make the facotry function spit out the individual html elements? Like obj.title would make the value of the title property to a p'p' element!