const makeForm = () => {
    const form = document.createElement('form');
    form.id = 'newTaskForm';

    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title:';
    titleLabel.for = "title";

    const titleInput = document.createElement('input');
    titleInput.type = "text";
    titleInput.id = "title";
    titleInput.name = "title"

    const descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = 'Description:';
    descriptionLabel.for = "description";

    const descriptionInput = document.createElement('input');
    descriptionInput.type = "text";
    descriptionInput.id = "description";
    descriptionInput.name = "description";

    const dueDateLabel = document.createElement('label');
    dueDateLabel.textContent = 'Due Date:';
    dueDateLabel.for = "dueDate";

    const dueDateInput = document.createElement('input');
    dueDateInput.type = "date";
    dueDateInput.id = "dueDate";
    dueDateInput.name = "dueDate"

    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Add Task';

    form.appendChild(titleLabel);
    form.appendChild(titleInput);

    form.appendChild(descriptionLabel);
    form.appendChild(descriptionInput);

    form.appendChild(dueDateLabel);
    form.appendChild(dueDateInput);

    form.appendChild(submitBtn);

    form.style.display = 'none';
    
    return form;
};


export default makeForm;