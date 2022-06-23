const task = (name, info, dueDate, priority) => ({
  name,
  info,
  dueDate,
  priority,
  status: "incomplete",
  id: Math.floor(Math.random() * 100) + 1,

  setName(name) {
    this.name = name;
  },

  getName() {
    return this.name;
  },

  setInfo(info) {
    this.info = info;
  },

  getInfo() {
    return this.info;
  },

  setDate(dueDate) {
    this.dueDate = dueDate;
  },

  getDate() {
    return this.dueDate;
  },

  setPriority(priority) {
    this.priority = priority;
  },

  getPriority() {
    return this.priority;
  },

  getId() {
    return this.id;
  },

  getStatus() {
    return this.status;
  },

  switchStatus() {
    this.status === "incomplete"
      ? (this.status = "complete")
      : (this.status = "incomplete");
  },
});

export default task;
