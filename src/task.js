
const task =  (name, info, dueDate, priority) => {
  return {
      name,
      info,
      dueDate,
      priority,

    setName (name) {
      this.name = name;
    },

    getName () {
      return this.name;
    },

    setInfo (info) {
      this.info = info;
    },

    getInfo () {
      return this.info;
    },

    setDate (dueDate) {
      this.dueDate = dueDate;
    },

    getDate () {
      return this.dueDate;
    },

    setPriority (priority) {
      this.priority = priority;
    },

    getPriority () {
      return this.priority
    }
  };
};

export default task;
