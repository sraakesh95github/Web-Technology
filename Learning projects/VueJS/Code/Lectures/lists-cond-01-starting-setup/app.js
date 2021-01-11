const app = Vue.createApp({
  data() {
    return {
      goals: ["test1", "test2", "test3", "test4"],
      enteredGoalValue: ''
    }
    },
    methods: {
      addGoal() {
        this.goals.push(this.enteredGoalValue);
        // console.log(this.goals);
      },
      removeItem(event) {
        console.log(event.target.textContent)
        // console.log(event.target.id);
        this.goals.splice(this.goals.indexOf(event.target.textContent), 1);
        // console.log(this.goals);
      }
    }
});

app.mount('#user-goals');
