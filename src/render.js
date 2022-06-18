import todo from "./todo";
import createCard from "./card";


const projectBtns = (projects) => {
    const sidebar = document.querySelector('.sidebar')
    projects.forEach((project) => {
        const projectBtn = document.createElement('button');
        projectBtn.textContent = project.getName();
        sidebar.appendChild(projectBtn);
    })
}
export { projectBtns };
