import todo from "./todo";
import project from "./project";
import task from "./task";
import { projectBtn, render } from "./render";
import formatCurrentDate from "./formatCurrentDate";
import "./styles.css";

const newTaskForm = document.getElementById("newTaskForm");
const newTaskBtn = document.querySelector(".newTaskBtn");
const newProjectForm = document.getElementById("newProjectForm");
const newProjectBtn = document.querySelector(".newProjectBtn");
const selectProjectForm = document.getElementById("selectProjectForm");
const inboxBtn = document.querySelector(".inboxBtn");
const todayBtn = document.querySelector(".todayBtn");
const upcomingBtn = document.querySelector(".upcomingBtn");
const completedBtn = document.querySelector(".completedBtn");
const sidebarProjectBtns = document.querySelector(".sidebarProjectBtns");

const todoList = todo();

// Creates Default Task to display
todoList
  .getProject("Inbox")
  .addTask(
    task("First Task", "This is my first task!", formatCurrentDate(), "High")
  );
render(
  "Inbox",
  todoList.getProject("Inbox"),
  todoList.getProject("Inbox").getTasks()
);

newTaskBtn.addEventListener("click", () => {
  newTaskForm.style.opacity = "1";
  newTaskForm.style.visibility = "visible";
});

newTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTask = task(
    newTaskForm.taskName.value,
    newTaskForm.taskInfo.value,
    newTaskForm.taskDueDate.value,
    newTaskForm.taskPriority.value
  );
  todoList.getProject("Inbox").addTask(newTask);
  render(
    "Inbox",
    todoList.getProject("Inbox"),
    todoList.getProject("Inbox").getTasks()
  );
  newTaskForm.style.opacity = "0";
  newTaskForm.style.visibility = "hidden";
});

newProjectBtn.addEventListener("click", () => {
  newProjectForm.style.opacity = "1";
  newProjectForm.style.visibility = "visible";
});

newProjectForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = newProjectForm.projectName.value;
  const newProject = project(name);
  todoList.addProject(newProject);
  const newProjectBtn = projectBtn(newProject);
  newProjectBtn.addEventListener("click", () => {
    render(
      name,
      todoList.getProject(name),
      todoList.getProject(name).getTasks()
    );
  });
  const projectOption = document.createElement("option");
  projectOption.textContent = name;
  sidebarProjectBtns.appendChild(newProjectBtn);
  selectProjectForm.querySelector("select").appendChild(projectOption);

  newProjectForm.style.opacity = "0";
  newProjectForm.style.visibility = "hidden";
});

// selectProjectForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   // find that task name in project
//   console.log(todoList.getProject(selectProjectForm.projectList.value));
//   todoList.getProject(selectProjectForm.projectList.value).addTask(task);
// });

inboxBtn.addEventListener("click", () =>
  render(
    "Inbox",
    todoList.getProject("Inbox"),
    todoList.getProject("Inbox").getTasks()
  )
);
todayBtn.addEventListener("click", () =>
  render(
    "Today's Tasks",
    todoList.getProject("Inbox"),
    todoList.getProject("Inbox").getTodayTasks()
  )
);
upcomingBtn.addEventListener("click", () =>
  render(
    "This Week's Tasks",
    todoList.getProject("Inbox"),
    todoList.getProject("Inbox").getUpcomingTasks()
  )
);
completedBtn.addEventListener("click", () => {
  render(
    "Completed",
    todoList.getProject("Inbox"),
    todoList.getProject("Inbox").getCompletedTasks()
  );
  const completeBtn = document.querySelector(".currentProject button");
  // if (completeBtn) completeBtn.textContent = 'Mark As Incomplete'
  const allBtns = Array.from(
    document.querySelectorAll(".currentProject img:not(:first-child)")
  );
  allBtns.forEach((btn) => btn.remove());
});
