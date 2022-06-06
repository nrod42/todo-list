

const createTask  = (title, description, dueDate, priority, project) => {
    return {
        title: title,
        description: description,
        dueDate: dueDate,  
        priority: priority,
        project: project,
        completionStatus: 'no',
        createCard () {   
            const card = document.createElement('div');
            card.classList.add('card');
            
            const cardTitle = document.createElement('p');
            cardTitle.textContent = this.title;
        
            const cardDescription = document.createElement('p');
            cardDescription.textContent = 'Note: ' + this.description;

            const cardDueDate = document.createElement('p');
            cardDueDate.textContent = 'Due Date: ' + this.dueDate;

            if (this.priority == 'low') {
                card.classList.add('lowPriority')
            } else if (this.priority == 'med') {
                card.classList.add('medPriority')
            } else if (this.priority == 'high') {
                card.classList.add('highPriority')
            };
        
            card.appendChild(cardTitle);
            card.appendChild(cardDescription);
            card.appendChild(cardDueDate);
        
            return card;
        }
    };
};

export { createTask }