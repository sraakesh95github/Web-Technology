const app = Vue.createApp({
  data() {
    return {  
      tasks: ["Test1", "Test2", "Test3"],
      task: '',
      taskListVisible: true,
      buttonCaption: 'Hide'
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.task);
    },
    showTaskList() {
      this.taskListVisible = !this.taskListVisible;
        if (this.taskListVisible == true) {
          this.buttonCaption = "Hide";
        }
        else {
          this.buttonCaption = "Show";
        }
      }
    }
});

app.mount('#assignment');