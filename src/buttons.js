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
                }
            })
        })
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
                }
            })
        })
    });
};

const showAddToProjectForm = () => {
    const addToProjectBtns = Array.from(document.querySelectorAll('.addToProjectBtn'));
    addToProjectBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            selectProjectForm.style.display = 'flex';
        });
    });
};

showAddToProjectForm();
// const allGroups = Array.from(document.querySelectorAll('.projectGroupBtn')); 
// allGroups.forEach(group => {
//     let option = document.createElement('option');
//     option.textContent = group.textContent;
//     option.value = group.textContent;
//     selectProjectForm.currentProjects.appendChild(option);
// }) 

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