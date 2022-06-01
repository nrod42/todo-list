const createNav = () => {
    
    const navBar = document.createElement('div');
    navBar.classList.add('nav');

    const navLeft = document.createElement('div');
    const navRight = document.createElement('div');

    navLeft.textContent = 'Logo';
    navRight.textContent = 'Future Buttons';

    navBar.appendChild(navLeft);
    navBar.appendChild(navRight);
    
    return navBar
};

export default createNav;