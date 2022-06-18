const project = (name) => ({
  name,
  tasks: [],

  setName(name) {
    this.name = name;
  },

  getName() {
    return this.name;
  },

  setTasks(tasks) {
    this.tasks = info;
  },

  getTasks() {
    return this.tasks;
  },

  addTask(newTask) {
    if (this.tasks.find((task) => task.getName() === newTask.name)) return;
    this.tasks.push(newTask);
  },

  delTask(taskName) {
    this.tasks = this.tasks.filter((task) => task.getName() !== taskName);
  },

  getTodayTasks() {
    let currentDate = new Date();
    const dd = String(currentDate.getDate()).padStart(2, "0");
    const mm = String(currentDate.getMonth() + 1).padStart(2, "0");
    const yyyy = currentDate.getFullYear();
    currentDate = `${yyyy}-${mm}-${dd}`;
    return this.tasks.filter((task) => task.getDate() === currentDate);
  },

  getUpcomingTasks() {
    return this.tasks.sort(
      (a, b) => new Date(a.getDate()) - new Date(b.getDate())
    );
  },
});

export default project;
