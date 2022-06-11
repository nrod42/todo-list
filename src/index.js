/* eslint-disable max-len */
import {
  createNav,
  createSidebar,
  createProjectGroup,
  createPage,
} from "./render";
import createTask from "./createTask";
import {
  createTaskForm,
  createProjectForm,
  createSelectProjectForm,
  clearForm,
} from "./forms";
import {
  addCollapsibles,
  markComplete,
  del,
  edit,
  showAddToProjectForm,
  addProjectPages,
} from "./buttons";
import "./styles.css";

const mainWrapper = document.querySelector(".mainWrapper");

// Renders all needed DOM elements
const nav = createNav();
const sidebar = createSidebar();
const taskForm = createTaskForm();
const editForm = createTaskForm();
const projectForm = createProjectForm();
const selectProjectForm = createSelectProjectForm();
const inbox = createPage();
const today = createPage();
const upcoming = createPage();
const completed = createPage();

inbox.classList.add("inbox");
today.classList.add("today");
upcoming.classList.add("upcoming");
completed.classList.add("completed");
taskForm.setAttribute("id", "taskForm");
editForm.setAttribute("id", "editForm");

mainWrapper.appendChild(nav);
mainWrapper.appendChild(sidebar);
mainWrapper.appendChild(taskForm);
mainWrapper.appendChild(editForm);
mainWrapper.appendChild(projectForm);
mainWrapper.appendChild(selectProjectForm);
mainWrapper.appendChild(inbox);
mainWrapper.appendChild(today);
mainWrapper.appendChild(upcoming);
mainWrapper.appendChild(completed);

const addTaskBtn = document.querySelector(".addTaskBtn");
const inboxBtn = document.querySelector(".inboxBtn");
const todayBtn = document.querySelector(".todayBtn");
const upcomingBtn = document.querySelector(".upcomingBtn");
const completedBtn = document.querySelector(".completedBtn");
const addProjectBtn = document.querySelector(".addProjectBtn");

// Initializes main task array
const taskList = [];
const completedTasks = [];

// Gets current date in ISO format
let currentDate = new Date();
const dd = String(currentDate.getDate()).padStart(2, "0");
const mm = String(currentDate.getMonth() + 1).padStart(2, "0");
const yyyy = currentDate.getFullYear();
currentDate = `${yyyy}-${mm}-${dd}`;

// Inbox heading
const inboxHeading = document.createElement("h1");
inboxHeading.textContent = "All Tasks";
inbox.appendChild(inboxHeading);

// Adds default example task to To-Do list
const defaultTask = createTask(
  "First",
  "This is my first task",
  currentDate,
  "high",
  "Project1"
);
taskList.push(defaultTask);
taskList.forEach((task) => {
  const card = task.createCard();
  inbox.appendChild(card);
  addCollapsibles();
  markComplete(taskList, completedTasks);
  del(taskList);
  // edit(taskList);
  showAddToProjectForm(taskList);
});

// Hides all pages
const hidePages = () => {
  const allProjects = document.querySelectorAll(".project");
  allProjects.forEach((project) => (project.style.display = "none"));
};

/* ----------------------------- EVENT LISTENERS ---------------------------- */

// Shows Task Form
addTaskBtn.addEventListener("click", () => {
  taskForm.style.display = "flex";
});

// Shows Project Form
addProjectBtn.addEventListener("click", () => {
  projectForm.style.display = "flex";
});

// Task Form Submit Event Listener - Adds new tasks to inbox section
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  while (inbox.firstChild) {
    inbox.firstChild.remove();
  }
  inbox.appendChild(inboxHeading);
  const newTask = createTask(
    taskForm.title.value,
    taskForm.description.value,
    taskForm.dueDate.value,
    taskForm.priority.value
  );
  taskList.push(newTask);
  taskList.forEach((task) => {
    const card = task.createCard();
    inbox.appendChild(card);
  });
  addCollapsibles();
  clearForm(taskForm);
  markComplete(taskList, completedTasks);
  del(taskList);
  // edit(taskList);
  showAddToProjectForm(taskList);
});

// Project Form Submit Event Listener - Adds a new group section with corresponding button
projectForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const group = createProjectGroup();
  const projectGroupBtn = document.createElement("button");
  projectGroupBtn.classList.add("projectGroupBtn");

  projectGroupBtn.textContent = projectForm.projectName.value;
  group.appendChild(projectGroupBtn);
  sidebar.appendChild(group);
  clearForm(projectForm);

  const projectPage = createPage();
  projectPage.setAttribute("id", projectGroupBtn.textContent);

  const heading = document.createElement("h1");
  heading.textContent = projectGroupBtn.textContent;

  projectPage.appendChild(heading);
  mainWrapper.appendChild(projectPage);

  addProjectPages();
});

// Shows inbox section which shows all imcomplete tasks regardless of date
inboxBtn.addEventListener("click", () => {
  while (inbox.firstChild) {
    inbox.firstChild.remove();
  }
  inbox.appendChild(inboxHeading);
  taskList.forEach((task) => {
    const card = task.createCard();
    inbox.appendChild(card);
    edit(taskList);
  });
  addCollapsibles();
  hidePages();
  inbox.style.display = "flex";
});

// Today Section - Shows all non-completed tasks due today
todayBtn.addEventListener("click", () => {
  // Wipes old array and replaces it with most current one
  while (today.firstChild) {
    today.firstChild.remove();
  }
  // Section Heading
  const heading = document.createElement("h1");
  heading.textContent = "Today's Tasks";
  today.appendChild(heading);

  // Checks the main array and creates/appends cards for those with due dates of today
  const todayTasks = taskList.filter((task) => task.dueDate === currentDate);
  todayTasks.forEach((task) => {
    if (task.completionStatus === "yes") return;
    const card = task.createCard();
    today.appendChild(card);
  });
  addCollapsibles();
  markComplete(taskList, completedTasks);
  del(taskList);
  // edit(taskList);
  showAddToProjectForm(taskList);
  hidePages();
  today.style.display = "flex";
});

// Upcoming Section - Shows all non-completed tasks arranged from soonest to latest.
upcomingBtn.addEventListener("click", () => {
  // Since the main array is "scanned" on every click, the cards on this page are wiped to avoid duplicates each time
  while (upcoming.firstChild) {
    upcoming.firstChild.remove();
  }
  // Section Heading
  const heading = document.createElement("h1");
  heading.textContent = "Upcoming Tasks";
  upcoming.appendChild(heading);

  // Sorts main array tasks by due date
  const sortedTasks = taskList
    .slice()
    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  sortedTasks.forEach((task) => {
    // If the task has been marked completed or has no due date, skip it and as it is not upcooming
    if (task.completionStatus === "yes" || task.dueDate === "") return;
    const card = task.createCard();
    upcoming.appendChild(card);
  });
  addCollapsibles();
  markComplete(taskList, completedTasks);
  del(taskList);
  // edit(taskList);
  showAddToProjectForm(taskList);
  hidePages();
  upcoming.style.display = "flex";
});

// Completed Section - Shows completed section with all completed tasks
completedBtn.addEventListener("click", () => {
  // Since the main array is "scanned" on every click, the cards on this page are wiped to avoid duplicates each time
  while (completed.firstChild) {
    completed.firstChild.remove();
  }
  // Section Heading
  const heading = document.createElement("h1");
  heading.textContent = "Completed Tasks";
  completed.appendChild(heading);

  // Scans completed tasks array and creates/appends cards into the completed section
  completedTasks.forEach((task) => {
    completed.appendChild(task.createCard());
    // const btnWrapper = completed.querySelector(".btnWrapper");
    // const allBtns = Array.from(btnWrapper.querySelectorAll("button"));
    // allBtns.forEach((btn) => {
    //   btn.remove();
    // });
    // const incompleteBtn = document.createElement("button");
    // incompleteBtn.classList.add("incompleteBtn");
    // incompleteBtn.textContent = "Mark As Incomplete";
    // btnWrapper.appendChild(incompleteBtn);
    // incompleteBtn.addEventListener("click", (e) => {
    //   taskList.push(task);
    //   completedTasks.splice(completedTasks.indexOf(task), 1);
    //   e.target.parentElement.parentElement.parentElement.remove();
    // });
  });
  addCollapsibles();
  hidePages();
  completed.style.display = "flex";
});

// TOMORROW: IN COMPLETED SECTION, DELETE BUTTONS, ADD NEW BUTTON THAT SAYS MARK INCOMPLETE, THEN WE SIMPLY FIND THE IN THE COMPLETED ARRAY, and push it to the main array
// EVERY EVENT LISTENER CAN BE A APRT OF AN EVENT LISTENER OBJ WHERE WE PASS IT THE MAIN AND COMPLETE ARRAYS AND THEN WE JUST CALL THE OBJ FUNCTION IN HERE, INDEX.
// EX: OBJ.UPCOMING WOULD STILL DO EVERYYTHING IT DOES HERE BUT NOW ITS NOTE HERE ATT ALL. THERE SHOULD BE NO ISSUES BECAUSE, IT STILL HAS ACCESS TO MAIN ARRAY.

// but if on completed page, then we would want it to only have a "mark as incomplete" button which would re-add it to the main array.
// to do this, we can make a function which checks to see the parent of the card (which should be the page) and append the buttons accordingly.

// when edit is clicked, maybe a new copy of the main form can be opened and when submit is hit these could "set" the properties of that object
