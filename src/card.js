const createCard = (task) => {
    const card = document.createElement('div');
    const cardBtn = document.createElement('button');
    const cardContent = document.createElement('div');
    const taskInfo = document.createElement('p');
    const taskDueDate = document.createElement('p');

    card.classList.add('card');
    cardBtn.classList.add('cardBtn');
    cardContent.classList.add('cardContent');

    cardBtn.textContent = task.getName();
    taskInfo.textContent = task.getInfo();
    taskDueDate.textContent = task.getDate();

    cardBtn.addEventListener('click', () => {
        cardBtn.classList.toggle('active');
        let cardContent = cardBtn.nextElementSibling;
        if (cardContent.style.display === 'block') {
            cardContent.style.display = 'none';
            cardContent.style.maxHeight = '0';
        } else {
            cardContent.style.display = 'block';
            cardContent.style.maxHeight = cardContent.scrollHeight + 'px';
        };
    })

    card.appendChild(cardBtn);
    card.appendChild(cardContent);
    cardContent.appendChild(taskInfo);
    cardContent.appendChild(taskDueDate);

    return card;
}

export default createCard;