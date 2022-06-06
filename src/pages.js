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


const createProject = () => {
    const project = document.createElement('div');
    project.classList.add('project');

    return project;
}

export { createNav, createProject };