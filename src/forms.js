const createTaskForm = () => {
    const form = document.createElement('form');
    form.id = 'taskForm';

    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title:';
    titleLabel.for = "title";

    const titleInput = document.createElement('input');
    titleInput.type = "text";
    titleInput.id = "title";
    titleInput.name = "title";

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
    dueDateInput.name = "dueDate";

    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority:';
    priorityLabel.for = "priority";

    const priorityInput = document.createElement('select');
    priorityInput.name = "prorities";
    priorityInput.id = "priority";
    
    const none = document.createElement('option');
    none.textContent = 'None';
    none.value = 'none';
    const low = document.createElement('option');
    low.textContent = 'Low';
    low.value = 'low';
    const med = document.createElement('option');
    med.textContent = 'Medium';
    med.value = 'med';
    const high = document.createElement('option');
    high.textContent = 'High';
    high.value = 'high';

    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Add Task';

    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.appendChild(descriptionLabel);
    form.appendChild(descriptionInput);
    form.appendChild(dueDateLabel);
    form.appendChild(dueDateInput);
    form.appendChild(priorityLabel);
    form.appendChild(priorityInput);
    priorityInput.appendChild(none);
    priorityInput.appendChild(low);
    priorityInput.appendChild(med);
    priorityInput.appendChild(high);
    form.appendChild(submitBtn);

    return form;
};


const createProjectForm = () => {
    const projectForm = document.createElement('form');
    projectForm.id = 'projectForm';

    const projectNameLabel = document.createElement('label');
    projectNameLabel.textContent = 'Project Name: ';
    projectNameLabel.for = "projectName";

    const projectNameInput = document.createElement('input');
    projectNameInput.type = "text";
    projectNameInput.id = "projectName";
    projectNameInput.name = "projectName";

    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Create New Project';

    projectForm.appendChild(projectNameLabel);
    projectForm.appendChild(projectNameInput);
    projectForm.appendChild(submitBtn);

    return projectForm;
}

const clearForm = (form) => {
    form.style.display = 'none';
    const allElements = Array.from(form.querySelectorAll('input'));
    allElements.forEach(element => {
        element.value = '';
    })
}

const createSelectProjectForm = () => {
    
    const addToProjectForm = document.createElement('form');
    addToProjectForm.id = 'addToProjectForm';

    const chooseProjectLabel = document.createElement('label');
    chooseProjectLabel.textContent = 'Select a project: ';
    chooseProjectLabel.for = "currentProjects";

    const currentProjects = document.createElement('select');
    currentProjects.name = "currentProjects";
    currentProjects.id = "currentProjects";

    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Add to Project';

    addToProjectForm.appendChild(chooseProjectLabel);
    addToProjectForm.appendChild(currentProjects);
    addToProjectForm.appendChild(submitBtn);

    return addToProjectForm
}

export { createTaskForm, createProjectForm, clearForm, createSelectProjectForm };