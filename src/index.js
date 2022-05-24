import nav from './nav.js';
import makeSidebar from './sidebar.js';
import makeForm from './taskForm.js';
import {taskHandler, clearForm} from './taskHandler.js';
import makeCard from './makeCard.js';
import Task from './makeTask.js';
import './styles.css';

const mainWrapper = document.querySelector('.mainWrapper');
const form = makeForm();
const sidebar = makeSidebar();

const showFormBtn = document.createElement('button');
showFormBtn.classList.add('showFormBtn');
showFormBtn.textContent = 'Add Task';
showFormBtn.addEventListener('click', showForm);

function showForm() {
    form.style.display = 'flex'
}


const taskSection = taskHandler();

//issue: when this was in the module, the module was ONLY returning cardSection so this event listener was never really added. We need to add it back to module somehow. Maybe, returning the new form and deleteing the old one?
form.addEventListener('submit', addToCardSection);
    
const allCards = [];

function addToCardSection (e) {
    e.preventDefault();
    allCards.push(makeCard(new Task(form.title.value, form.description.value, form.dueDate.value, 'No')));
    allCards.forEach(card => {
        taskSection.appendChild(card);
    })
    clearForm();
}

mainWrapper.appendChild(nav);
mainWrapper.appendChild(sidebar);
mainWrapper.appendChild(form);
mainWrapper.appendChild(taskSection);
taskSection.appendChild(showFormBtn);