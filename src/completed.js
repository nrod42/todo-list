const completedSection = () => {
    const completedTasksSection = document.createElement('div');
    completedTasksSection.classList.add('completedTasksSection')

    const completedTaskCards = Array.from(document.querySelectorAll('.completed'));

    completedTaskCards.forEach(card => {
        completedTasksSection.appendChild(card)
    });

    return completedTasksSection
}


export { completedSection };