import todo from "./todo";
import project from "./project";
import task from "./task";
import { projectBtns, render } from "./render";
import createCard from "./card";
import "./styles.css";

const newTaskForm = document.getElementById("newTaskForm");
const newProjectForm = document.getElementById("newProjectForm");
const currentProject = document.querySelector(".currentProject");
const inboxBtn = document.querySelector(".inboxBtn");
const todayBtn = document.querySelector(".todayBtn");
const upcomingBtn = document.querySelector(".upcomingBtn");

const todoList = todo();

newProjectForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = newProjectForm.projectName.value;
  const newProject = project(name);
  todoList.addProject(newProject);
  projectBtns(newProject);
});

newTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTask = task(
    newTaskForm.taskName.value,
    newTaskForm.taskInfo.value,
    newTaskForm.taskDueDate.value,
    newTaskForm.taskPriority.value.checked
  );
  todoList.getProject("Inbox").addTask(newTask);
});

inboxBtn.addEventListener("click", () => {
  while (currentProject.firstChild) {
    currentProject.firstChild.remove();
  }
  todoList
    .getProject("Inbox")
    .getTasks()
    .forEach((task) => {
      currentProject.appendChild(createCard(task));
    });
});

todayBtn.addEventListener("click", () => {
  while (currentProject.firstChild) {
    currentProject.firstChild.remove();
  }
  todoList
    .getProject("Inbox")
    .getTodayTasks()
    .forEach((task) => {
      currentProject.appendChild(createCard(task));
    });
});

upcomingBtn.addEventListener("click", () => {
  while (currentProject.firstChild) {
    currentProject.firstChild.remove();
  }
  todoList
    .getProject("Inbox")
    .getUpcomingTasks()
    .forEach((task) => {
      currentProject.appendChild(createCard(task));
    });
});

const allProjectBtns = Array.from(document.querySelectorAll(".projectBtn"));
allProjectBtns.forEach((button) => {
  button.addEventListener("click", () => {
    const projectName = button.textContent;
    render(todoList.getProject(projectName));
  });
});
