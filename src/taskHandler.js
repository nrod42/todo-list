import makeCard from './makeCard.js';
import Task from './makeTask.js';

//Takes info from form, makes card, and adds it to the card section

const taskHandler = () => {
    const form = document.getElementById('newTaskForm');

    const cardSection = document.createElement('div');
    cardSection.classList.add('cardSection');

    cardSection.appendChild(makeCard(new Task('First Task', 'This is my first task', '5/31/22', 'High', 'No')));

    return cardSection;
};


function clearForm () {
    const form = document.getElementById('newTaskForm');
    form.title.value = '';
    form.description.value = '';
    form.dueDate.value = '';
    form.style.display = 'none';
}


export {taskHandler, clearForm};