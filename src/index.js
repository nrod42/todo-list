import todo from './todo';
import project from './project';
import task from './task'
import {projectBtns} from './render';
import createCard from './card';
import './styles.css'

const newTaskForm = document.getElementById('newTaskForm');
const newProjectForm = document.getElementById('newProjectForm');
const currentProject = document.querySelector('.currentProject');



let todoList = todo();

newProjectForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let name = newProjectForm.projectName.value;
  let newProject = project(name);
  todoList.addProject(newProject);
  projectBtns(todoList.getProjects());
});

newTaskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let name = newTaskForm.taskName.value;
  let info = newTaskForm.taskInfo.value;
  let dueDate = newTaskForm.taskDueDate.value;
  let priority = newTaskForm.taskPriority.value.checked;
  let newTask = task(name, info, dueDate, priority);

  todoList.getProject('Inbox').addTask(newTask);
});

todoList.getProject('Inbox').getTasks().forEach((task) => currentProject.appendChild(createCard(task)))

