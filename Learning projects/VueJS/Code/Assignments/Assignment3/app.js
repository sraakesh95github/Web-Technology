const App = Vue.createApp({
  data() {
    return {
      inputStyle: '',
      isVisible: true,
      bgcolor: 'red'
    };
  },
  methods: {
    togglePara() {
      console.log("Toggle para function is triggered...");
      this.isVisible =! this.isVisible;
    }
  }
});

App.mount('#assignment');