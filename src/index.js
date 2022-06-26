import todo from './todo';
import project from './project';
import task from './task';
import render from './render';
import formatCurrentDate from './formatCurrentDate';
import delIcon from './img/delete_icon.svg';
import './styles.css';

const allForms = Array.from(document.querySelectorAll('form'));
const allCloseBtns = Array.from(document.querySelectorAll('.closeBtn'));
const newTaskForm = document.getElementById('newTaskForm');
const newTaskBtn = document.querySelector('.newTaskBtn');
const newProjectForm = document.getElementById('newProjectForm');
const newProjectBtn = document.querySelector('.newProjectBtn');
const editTaskForm = document.getElementById('editTaskForm');
const selectProjectForm = document.getElementById('selectProjectForm');
const inboxBtn = document.querySelector('.inboxBtn');
const todayBtn = document.querySelector('.todayBtn');
const upcomingBtn = document.querySelector('.upcomingBtn');
const completedBtn = document.querySelector('.completedBtn');
const sidebarProjectBtns = document.querySelector('.sidebarProjectBtns');
const currentProject = document.querySelector('.currentProject');

const todoList = todo();

// Creates Default Task to display
todoList
  .getProject('Inbox')
  .addTask(task('First Task', 'This is my first task!', formatCurrentDate(), 'High'));
render('Inbox', todoList.getProject('Inbox'), todoList.getProject('Inbox').getTasks());

// ***** Form 'Submit' Event Listeners *****

newTaskBtn.addEventListener('click', () => {
  newTaskForm.parentElement.style.opacity = '1';
  newTaskForm.parentElement.style.visibility = 'visible';
});

newTaskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const newTask = task(
    newTaskForm.taskName.value,
    newTaskForm.taskInfo.value,
    newTaskForm.taskDueDate.value,
    newTaskForm.taskPriority.value,
  );
  todoList.getProject('Inbox').addTask(newTask);

  render('Inbox', todoList.getProject('Inbox'), todoList.getProject('Inbox').getTasks());

  newTaskForm.parentElement.style.opacity = '0';
  newTaskForm.parentElement.style.visibility = 'hidden';
  newTaskForm.reset();
});

newProjectBtn.addEventListener('click', () => {
  newProjectForm.parentElement.style.opacity = '1';
  newProjectForm.parentElement.style.visibility = 'visible';
});

newProjectForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = newProjectForm.projectName.value;
  const newProject = project(name);
  todoList.addProject(newProject);

  const newProjectTab = document.createElement('div');
  newProjectTab.classList.add('newProjectTab');

  // Creates button for each project. Displays project when clicked
  const newProjectBtn = document.createElement('button');
  newProjectBtn.classList.add('projectBtn');
  newProjectBtn.textContent = newProject.getName();

  newProjectBtn.addEventListener('click', () => {
    render(name, todoList.getProject(name), todoList.getProject(name).getTasks());
  });

  // Creates delete project button
  const delProjectBtn = new Image();
  delProjectBtn.src = delIcon;
  delProjectBtn.classList.add('actionBtn');

  delProjectBtn.addEventListener('click', () => {
    todoList.delProject(newProject);
    newProjectTab.remove();
    projectOption.remove();
  });

  newProjectTab.appendChild(newProjectBtn);
  newProjectTab.appendChild(delProjectBtn);

  // Adds new projects to the 'add to project' form
  const projectOption = document.createElement('option');
  projectOption.textContent = name;
  selectProjectForm.querySelector('select').appendChild(projectOption);

  sidebarProjectBtns.appendChild(newProjectTab);

  newProjectForm.reset();
  newProjectForm.parentElement.style.opacity = '0';
  newProjectForm.parentElement.style.visibility = 'hidden';
});

editTaskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const activeProject = todoList
    .getProjects()
    .find((project) => project.getId() === parseInt(currentProject.getAttribute('data-id'), 10));
  const editTaskFormId = editTaskForm.getAttribute('data-id');

  const editedTask = activeProject
    .getTasks()
    .find((task) => task.getId() === parseInt(editTaskFormId, 10));

  editedTask.setName(editTaskForm.taskName.value);
  editedTask.setInfo(editTaskForm.taskInfo.value);
  editedTask.setDate(editTaskForm.taskDueDate.value);
  editedTask.setPriority(editTaskForm.taskPriority.value);

  editTaskForm.parentElement.style.opacity = '0';
  editTaskForm.parentElement.style.visibility = 'hidden';
  render(activeProject.getName(), activeProject, activeProject.getTasks());
});

selectProjectForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const activeProject = todoList
    .getProjects()
    .find((project) => project.getId() === parseInt(currentProject.getAttribute('data-id'), 10));
  const selectProjectFormId = selectProjectForm.getAttribute('data-id');
  const selectedTask = activeProject
    .getTasks()
    .find((task) => task.getId() === parseInt(selectProjectFormId, 10));

  todoList.getProject(selectProjectForm.projectList.value).addTask(selectedTask);

  todoList.getProject(activeProject.getName()).delTask(selectedTask.getName());

  selectProjectForm.parentElement.style.opacity = '0';
  selectProjectForm.parentElement.style.visibility = 'hidden';
  render(activeProject.getName(), activeProject, activeProject.getTasks());
});

// 'Closes' all forms when Escape key is pressed
document.addEventListener('keydown', (e) => {
  if (e.code === 'Escape') {
    // Add a close button later
    allForms.forEach((form) => {
      form.parentElement.style.opacity = '0';
      form.parentElement.style.visibility = 'hidden';
    });
  }
});

// Closes form when x is clicked
allCloseBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.target.parentElement.parentElement.style.opacity = '0';
    e.target.parentElement.parentElement.style.visibility = 'hidden';
  });
});

// ***** Show Each Main Project Tab *****

inboxBtn.addEventListener('click', () =>
  render('Inbox', todoList.getProject('Inbox'), todoList.getProject('Inbox').getTasks()),
);
todayBtn.addEventListener('click', () =>
  render(
    "Today's Tasks",
    todoList.getProject('Inbox'),
    todoList.getProject('Inbox').getTodayTasks(),
  ),
);
upcomingBtn.addEventListener('click', () =>
  render(
    "This Week's Tasks",
    todoList.getProject('Inbox'),
    todoList.getProject('Inbox').getUpcomingTasks(),
  ),
);
completedBtn.addEventListener('click', () => {
  let allCompletedTasks = [];
  todoList.getProjects().forEach((project) => {
    allCompletedTasks = allCompletedTasks.concat(project.getCompletedTasks());
  });
  render('Completed', todoList.getProject('Inbox'), allCompletedTasks);
  // const completeBtn = document.querySelector('.currentProject button');
  // // if (completeBtn) completeBtn.textContent = 'Mark As Incomplete'
  const allBtns = Array.from(document.querySelectorAll('.currentProject img:not(:first-child)'));
  allBtns.forEach((btn) => btn.remove());
});
