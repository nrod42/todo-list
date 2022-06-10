// bruh, we could make each of these functions as properties to an obj.
// like have an 'event' module which is just an obj
// and each obj prop is each of these functions:

import { clearForm } from "./forms";

const addCollapsibles = () => {
  const allCollapsibles = Array.from(document.querySelectorAll(".collapsible"));
  allCollapsibles.forEach((collapsible) => {
    collapsible.addEventListener("click", () => {
      collapsible.classList.toggle("activeCard");
      const cardContent = collapsible.nextElementSibling;
      if (cardContent.style.display === "flex") {
        cardContent.style.display = "none";
      } else {
        cardContent.style.display = "flex";
      }
      if (cardContent.style.maxHeight) {
        cardContent.style.maxHeight = null;
      } else {
        cardContent.style.maxHeight = `${cardContent.scrollHeight}px`;
      }
    });
  });
};

const markComplete = (mainArray, completedArray) => {
  const markCompleteBtns = Array.from(
    document.querySelectorAll(".addToCompletedBtn")
  );
  markCompleteBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const card = e.target.parentElement.parentElement.parentElement; // this is the card itself
      const cardId = parseInt(card.dataset.id, 10);
      mainArray.forEach((task) => {
        if (task.id === cardId) {
          completedArray.push(task);
          mainArray.splice(mainArray.indexOf(task), 1);
        }
      });
      removeCard(card);
    });
  });
};

const del = (mainArray) => {
  const delBtns = Array.from(document.querySelectorAll(".delBtn"));
  delBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const card = e.target.parentElement.parentElement.parentElement; // this is the card itself
      const cardId = parseInt(card.dataset.id, 10);
      mainArray.forEach((task) => {
        if (task.id === cardId) {
          mainArray.splice(mainArray.indexOf(task), 1);
        }
      });
      removeCard(card);
    });
  });
};

// Shows Add To Project Form
const showAddToProjectForm = (mainArray) => {
  const addToProjectBtns = Array.from(
    document.querySelectorAll(".addToProjectBtn")
  );
  addToProjectBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const allGroups = Array.from(
        document.querySelectorAll(".projectGroupBtn")
      );
      if (allGroups.length === 0) return;
      const addToProjectForm = document.getElementById("addToProjectForm"); // the form to select
      addToProjectForm.style.display = "flex"; // makes form visible
      const card = e.target.parentElement.parentElement.parentElement; // this is the card,
      addOptions(allGroups);
      addProjectToPage(card, mainArray);
    });
  });
};

// Adds options to project form dropdown
function addOptions(allGroups) {
  // Deletes old options in case previous project pages were deleted or renamed
  const previousOptions = Array.from(document.querySelectorAll("option"));
  previousOptions.forEach((option) => option.remove());

  const addToProjectForm = document.getElementById("addToProjectForm");
  // Takes the name of each existing project & appends an option to the form dropdown
  allGroups.forEach((group) => {
    const option = document.createElement("option");
    option.textContent = group.textContent;
    option.value = group.textContent;
    addToProjectForm.currentProjects.appendChild(option);
  });
}

function addProjectToPage(card, mainArray) {
  const addToProjectForm = document.getElementById("addToProjectForm");
  addToProjectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const projectName = addToProjectForm.currentProjects.value;
    // gets the project page where the card will be moved to
    const projectPage = document.getElementById(projectName);

    //
    const cardId = parseInt(card.dataset.id, 10);
    mainArray.forEach((task) => {
      if (task.id === cardId) {
        mainArray.splice(mainArray.indexOf(task), 1);
      }
    });
    projectPage.appendChild(card); // moves the selected card to page
    clearForm(addToProjectForm);
  });
}

function removeCard(card) {
  // Deletes the card itself, seperate from the task being removed from the main
  const allPages = Array.from(document.querySelectorAll(".project"));
  allPages.forEach((page) => {
    const allCards = Array.from(page.children);
    const cardId = parseInt(card.dataset.id, 10);
    allCards.forEach((pageCard) => {
      if (parseInt(pageCard.dataset.id, 10) === cardId) {
        card.remove();
      }
    });
  });
}
const addProjectPages = () => {
  const allGroupBtns = Array.from(
    document.querySelectorAll(".projectGroupBtn")
  );
  allGroupBtns.forEach((groupBtn) => {
    groupBtn.addEventListener("click", () => {
      const allProjects = document.querySelectorAll(".project");
      allProjects.forEach((project) => (project.style.display = "none"));
      const page = document.getElementById(groupBtn.textContent);
      page.style.display = "flex";
    });
  });
};

export {
  addCollapsibles,
  markComplete,
  del,
  showAddToProjectForm,
  addProjectPages,
};
