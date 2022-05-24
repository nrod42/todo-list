
const makeSidebar = () => {
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');

    const mainGroup = document.createElement('div');

    const mainSection = document.createElement('ul');
    mainSection.classList.add('mainGroup');
    mainSection.textContent = 'To-Do\'s';
    
    const inbox = document.createElement('li');
    inbox.textContent = 'Inbox';

    const upcoming = document.createElement('li');
    upcoming.textContent = 'Upcoming';
    
    const completed = document.createElement('li');
    completed.textContent = 'Completed';
    
    sidebar.appendChild(mainGroup);
    mainGroup.appendChild(mainSection);
    mainSection.appendChild(inbox);
    mainSection.appendChild(upcoming);
    mainSection.appendChild(completed);

    return sidebar;
};

export default makeSidebar