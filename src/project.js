
const project =  (name) => {
  return {
    name,
    tasks: [],

    setName (name) {
    this.name = name;
    },

    getName () {
    return this.name;
    },

    setTasks (tasks) {
    this.tasks = info;
    },

    getTasks () {
    return this.tasks;
    },

    addTask (newTask) {
    if (this.tasks.find((task) => task.getName() === newTask.name)) return
    this.tasks.push(newTask)
    },

    delTask (taskName) {
    this.tasks = this.tasks.filter((task) => task.getName() !== taskName)
    },

    getTodayTasks () {
    return this.tasks.filter((task) => task.getDueDate() === new Date())
    },

    getUpcomingTasks () {

    }
  };
};

export default project;