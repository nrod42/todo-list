import { createTaskForm, selectProjectForm } from "./forms.js";


const createTask  = (title, description, dueDate, priority) => {
    return {
        get title() {
            return title;
        },
        get description() {
            return description;
        },        
        get dueDate() {
            return dueDate;
        },        
        get priority() {
            return priority;
        },     
        get completionStatus() {
            return 'no';
        },   
    }
};

const createTaskCard = (task) => {
    const card = document.createElement('div');
    card.classList.add('card');
    
    const taskTitle = document.createElement('p');
    taskTitle.textContent = task.title;

    const taskDescription = document.createElement('p');
    taskDescription.textContent = 'Note: ' + task.description;

    const taskDueDate = document.createElement('p');
    taskDueDate.classList.add('cardDate');
    taskDueDate.textContent = 'Due Date: ' + task.dueDate;

    if (task.priority == 'low') {
        card.style.border = '1px solid blue';
    } else if (task.priority == 'med') {
        card.style.border = '1px solid gold';
    } else if (task.priority == 'high') {
        card.style.border = '1px solid red';
    }

    const completeBtn = document.createElement('button');
    completeBtn.classList.add('completeBtn');
    completeBtn.textContent = 'Completed';
    completeBtn.addEventListener('click', () => {
        card.classList.add('completed');
        const completedTasksSection = document.querySelector('.completedTasksSection');
        completedTasksSection.appendChild(card);
    });

    const editBtn = document.createElement('button');
    editBtn.classList.add('editBtn');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => {
        const form = document.getElementById('taskForm');
        form.title.value = task.title;
        form.description.value = task.description;
        form.dueDate.value = task.dueDate;
        form.priority.value = task.priority;
        form.style.display = 'flex';
    });

    const delBtn = document.createElement('button');
    delBtn.classList.add('delBtn');
    delBtn.textContent = 'Delete';
    delBtn.addEventListener('click', () => {
        card.remove();
    });

    const addToProjectBtn = document.createElement('button');
    addToProjectBtn.classList.add('addToProjectBtn');
    addToProjectBtn.textContent = 'Add To Project';
    addToProjectBtn.addEventListener('click', () => {
        const mainWrapper = document.querySelector('.mainWrapper');
        let form = selectProjectForm();
        mainWrapper.appendChild(form);
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            form.style.display = 'none';
            console.log(document.querySelector("."+form.currentProjects.value));
            
        })

    })

    card.appendChild(taskTitle);
    card.appendChild(taskDescription);
    card.appendChild(taskDueDate);
    card.appendChild(completeBtn);
    card.appendChild(editBtn);
    card.appendChild(delBtn);
    card.appendChild(addToProjectBtn);

    return card;
};

const createTaskSection = () => {
    const cardSection = document.createElement('div');
    cardSection.classList.add('cardSection');

    const form = createTaskForm();
    form.addEventListener('submit', addToCardSection);

    const addTaskBtn = document.createElement('button');
    addTaskBtn.classList.add('addTaskBtn');
    addTaskBtn.textContent = 'Add Task';
    addTaskBtn.addEventListener('click', showForm);

    
    
    const defaultTask = createTaskCard(createTask('First To-Do', 'This is my first task', '2022-05-23', 'high'));
    
    cardSection.appendChild(defaultTask);
    cardSection.appendChild(addTaskBtn);
    cardSection.appendChild(form);



    function addToCardSection(e) {
        e.preventDefault();
        let newCard = createTaskCard(createTask(form.title.value, form.description.value, form.dueDate.value, form.priority.value));
        cardSection.appendChild(newCard);
        clearTaskForm();
    };

    function showForm() {
        form.style.display = 'flex';
    };

    function clearTaskForm() {
        form.title.value = '';
        form.description.value = '';
        form.dueDate.value = '';
        form.priority.value = 'none';
        form.style.display = 'none';
    };
    
    return cardSection;
};

export {createTaskSection};