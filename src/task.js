const task = (name, info, dueDate, priority) => ({
  name,
  info,
  dueDate,
  priority,
  status: 'incomplete',
  id: Math.floor(Math.random() * 100) + 1,

  setName(newName) {
    this.name = newName;
  },

  getName() {
    return this.name;
  },

  setInfo(newInfo) {
    this.info = newInfo;
  },

  getInfo() {
    return this.info;
  },

  setDate(newDate) {
    this.dueDate = newDate;
  },

  getDate() {
    return this.dueDate;
  },

  setPriority(newPriority) {
    this.priority = newPriority;
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
    this.status = this.status === 'incomplete' ? 'complete' : 'incomplete';
  },
});

export default task;
