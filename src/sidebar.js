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

const createProjectGroup = (e) => {
    e.preventDefault();
    const sidebar = document.querySelector('.sidebar');
    const projectForm = document.getElementById('projectForm');
    const mainWrapper = document.querySelector('.mainWrapper');

    const projectGroup = document.createElement('div');
    projectGroup.classList.add('projectGroup');


    const projectName = document.createElement('button');
    projectName.textContent = projectForm.projectName.value;

    const newPage = createPage();
    newPage.setAttribute('id', projectForm.projectName.value)
    mainWrapper.appendChild(newPage);

    projectName.addEventListener('click', (e) => {
        const projectPage = document.getElementById(e.target.textContent);
        const completedTasksSection = document.querySelector('.completedTasksSection');
        const cardSection = document.querySelector('.cardSection');
        const todaySection = document.querySelector('.todaySection');

        const allGroups = Array.from(document.querySelectorAll('.newPage'));
        allGroups.forEach(group => {
            let groupPage = document.getElementById(group.id);
            groupPage.style.display = 'none';
        })
        projectPage.style.display = 'flex';
        completedTasksSection.style.display = 'none';
        cardSection.style.display = 'none';
        todaySection.style.display = 'none';
    })

    projectGroup.appendChild(projectName);
    sidebar.appendChild(projectGroup);
    clearProjectForm();
}

export { createSidebar, createProjectGroup };