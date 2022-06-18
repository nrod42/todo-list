import todo from "./todo";
import project from "./project";
import task from "./task";
import { projectBtns, render } from "./render";
import "./styles.css";

const newTaskForm = document.getElementById("newTaskForm");
const newProjectForm = document.getElementById("newProjectForm");

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
  render("Inbox", todoList.getProject("Inbox").getTasks());
});

inboxBtn.addEventListener("click", () => {
  render("Inbox", todoList.getProject("Inbox").getTasks());
});

todayBtn.addEventListener("click", () => {
  render("Today's Tasks", todoList.getProject("Inbox").getTodayTasks());
});

upcomingBtn.addEventListener("click", () => {
  render("This Week's Tasks", todoList.getProject("Inbox").getUpcomingTasks());
});

const allProjectBtns = Array.from(document.querySelectorAll(".projectBtn"));
allProjectBtns.forEach((button) => {
  button.addEventListener("click", () => {
    const projectName = button.textContent;
    render(todoList.getProject(projectName));
  });
});
