const createNav = () => {
    
    const nav = document.createElement('div');
    nav.classList.add('nav');

    const navLeft = document.createElement('div');
    const navRight = document.createElement('div');

    navLeft.textContent = 'Logo';
    navRight.textContent = 'Future Buttons';

    nav.appendChild(navLeft);
    nav.appendChild(navRight);
    
    return nav;
};

const createSidebar = () => {
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');

    const addProjectBtn = document.createElement('button');
    addProjectBtn.classList.add('addProjectBtn');
    addProjectBtn.textContent = 'New Project';

    const mainGroup = document.createElement('div');
    mainGroup.classList.add('mainGroup');

    const inboxBtn = document.createElement('button');
    inboxBtn.textContent = 'Inbox';

    const todayBtn = document.createElement('button');
    todayBtn.textContent = 'Today';

    const upcomingBtn = document.createElement('button');
    upcomingBtn.textContent = 'Upcoming';
    
    const completedBtn = document.createElement('button');
    completedBtn.textContent = 'Completed';

    inboxBtn.classList.add('inboxBtn');
    todayBtn.classList.add('todayBtn');
    upcomingBtn.classList.add('upcomingBtn');
    completedBtn.classList.add('completedBtn');

    sidebar.appendChild(addProjectBtn);
    sidebar.appendChild(mainGroup);
    mainGroup.appendChild(inboxBtn);
    mainGroup.appendChild(todayBtn);
    mainGroup.appendChild(upcomingBtn);
    mainGroup.appendChild(completedBtn);
    
    return sidebar;
};

const createProjectGroup = () => {
    const projectGroup = document.createElement('div');
    projectGroup.classList.add('projectGroup');

    const projectGroupBtn = document.createElement('button');
    projectGroupBtn.classList.add('projectGroupBtn');

    return projectGroup
}

const createProject = () => {
    const project = document.createElement('div');
    project.classList.add('project');

    return project;
}

export { createNav, createSidebar, createProjectGroup, createProject };