//bruh, we could make each of these functions as properties to an obj.
//like have an 'event' module which is just an obj
//and each obj prop is each of these functions:

import { clearForm } from "./forms";


const markComplete = (mainArray, completedArray) => {
    const markCompleteBtns = Array.from(document.querySelectorAll('.addToCompletedBtn'));
    markCompleteBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.parentElement.parentElement; //this is the card itself
            const cardId = card.dataset.id;
            mainArray.forEach(task => {
                if (task.id == cardId) {
                    
                    completedArray.push(task);
                    mainArray.splice(mainArray.indexOf(task), 1);
                    card.remove();
                };
            });
        });
    });
}

const del = (mainArray) => {
    const delBtns = Array.from(document.querySelectorAll('.delBtn'));
    delBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.parentElement.parentElement; //this is the card itself
            const cardId = card.dataset.id;
            mainArray.forEach(task => {
                if (task.id == cardId) {
                    mainArray.splice(mainArray.indexOf(task), 1);
                    card.remove();
                };
            });
        });
    });
};

//Shows Add To Project Form and adds all project options to its drop down
const showAddToProjectForm = () => {
    const addToProjectBtns = Array.from(document.querySelectorAll('.addToProjectBtn'));
    addToProjectBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const addToProjectForm = document.getElementById('addToProjectForm');
            addToProjectForm.style.display = 'flex';
            const allGroups = Array.from(document.querySelectorAll('.projectGroupBtn')); 
            allGroups.forEach(group => {
                let option = document.createElement('option');
                option.textContent = group.textContent;
                option.value = group.textContent;
                addToProjectForm.currentProjects.appendChild(option);
            });
        });
    });
};

// const addToProjectForm = document.getElementById('addToProjectForm');
// addToProjectForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//      
// });



const addProjectPages = () => {
    const allGroupBtns = Array.from(document.querySelectorAll('.projectGroupBtn'));
    allGroupBtns.forEach(groupBtn => {
        groupBtn.addEventListener('click', () => {
            const allProjects = document.querySelectorAll('.project');
            allProjects.forEach(project => project.style.display = 'none');
            let page = document.getElementById(groupBtn.textContent);
            page.style.display = 'flex'
        });
    });
};

export { markComplete, del, showAddToProjectForm, addProjectPages }