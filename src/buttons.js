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

//Shows Add To Project Form
const showAddToProjectForm = (mainArray) => {
    const addToProjectBtns = Array.from(document.querySelectorAll('.addToProjectBtn')); //the button on cards
    addToProjectBtns.forEach(btn => { //for each button on each card,
        btn.addEventListener('click', (e) => {
            
            const addToProjectForm = document.getElementById('addToProjectForm'); //the form to select
            addToProjectForm.style.display = 'flex'; //makes form visible
            let card = '';
            card = e.target.parentElement.parentElement //this is the card,
       

            console.log(card);
            addOptions();
            addProjectToPage(card, mainArray);

        });
    });
};

//Scans names of existing projhects and adds options with each name to the addToProjectForm to its drop down
function addOptions () {
    const addToProjectForm = document.getElementById('addToProjectForm'); 
    const allGroups = Array.from(document.querySelectorAll('.projectGroupBtn')); //gets all existing projects
    let previousOptions = Array.from(document.querySelectorAll('option'));
    previousOptions.forEach(option => option.remove());
    allGroups.forEach(group => { 
        //takes the name of each existing project, makes an option in the form dropdown for it, then appends it to the form itself

        let option = document.createElement('option');
        option.textContent = group.textContent;
        option.value = group.textContent;
        addToProjectForm.currentProjects.appendChild(option);
    });
};

function addProjectToPage (card, mainArray) {
    const addToProjectForm = document.getElementById('addToProjectForm'); 
    addToProjectForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const projectName = addToProjectForm.currentProjects.value;
        const projectPage = document.getElementById(projectName); //gets the project page where the card will be moved to
        console.log(card)
        

        //we also need to remove it from the main array
        const cardId = card.dataset.id;
        mainArray.forEach(task => {
            if (task.id == cardId) {
                mainArray.splice(mainArray.indexOf(task), 1);
            };
        });
        projectPage.appendChild(card); //moves the selected card to page
        clearForm(addToProjectForm);
    });
}



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