import { format, compareAsc } from 'date-fns';
// import formatDate from './formatCurrentDate';

const project = (name) => ({
  name,
  id: Math.floor(Math.random() * 200) + 1,
  tasks: [],

  setName(newName) {
    this.name = newName;
  },

  getName() {
    return this.name;
  },

  getId() {
    return this.id;
  },

  setTasks(newTasks) {
    this.tasks = newTasks;
  },

  getTasks() {
    const incompletedTasks = this.tasks.filter((task) => task.getStatus() === 'incomplete');
    return incompletedTasks;
  },

  getTask(taskName) {
    return this.tasks.find((task) => task.getName() === taskName);
  },

  addTask(newTask) {
    if (this.tasks.find((task) => task.getName() === newTask.name)) return;
    this.tasks.push(newTask);
  },

  delTask(taskName) {
    this.tasks = this.tasks.filter((task) => task.getName() !== taskName);
  },

  getTodayTasks() {
    const incompletedTasks = this.tasks.filter((task) => task.getStatus() === 'incomplete');
    return incompletedTasks.filter((task) => task.getDate() === format(new Date(), 'MM/dd/yyyy'));
  },

  getUpcomingTasks() {
    const incompletedTasks = this.tasks.filter((task) => task.getStatus() === 'incomplete');
    const upcomingTasks = incompletedTasks.filter(
      (task) => task.getDate() >= format(new Date(), 'MM/dd/yyyy'),
    );
    return upcomingTasks.sort((a, b) => new Date(a.getDate()) - new Date(b.getDate()));
  },

  getCompletedTasks() {
    return this.tasks.filter((task) => task.getStatus() !== 'incomplete');
  },
});

export default project;
