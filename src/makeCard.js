//Makes a single todo card

const makeCard = (task) => {
    const card = document.createElement('div');
    card.classList.add('card');
    
    const taskTitle = document.createElement('p');
    taskTitle.textContent = task.title;
    card.appendChild(taskTitle);

    const taskDescription = document.createElement('p');
    taskDescription.textContent = 'Note: ' + task.description;
    card.appendChild(taskDescription);

    const taskDueDate = document.createElement('p');
    taskDueDate.textContent = 'Due Date: ' + task.dueDate;
    card.appendChild(taskDueDate);

    const completeBtn = document.createElement('button');
    completeBtn.classList.add('completeBtn');
    completeBtn.textContent = 'Completed';
    card.appendChild(completeBtn);

    const editBtn = document.createElement('button');
    editBtn.classList.add('editBtn');
    editBtn.textContent = 'Edit';
    card.appendChild(editBtn);

    const delBtn = document.createElement('button');
    delBtn.classList.add('delBtn');
    delBtn.textContent = 'Delete';
    card.appendChild(delBtn);

    return card;
};

export default makeCard;