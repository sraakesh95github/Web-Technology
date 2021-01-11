const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false
    };
  },
  methods: {
    boxSelected(box) {
      if (box === 'A') {
        console.log("Box A has been selected...");
        if (this.boxASelected == true)
          this.boxASelected = false;
        else
          this.boxASelected = true;
      }
      else if (box === 'B') {
        if (this.boxBSelected == true)
          this.boxBSelected = false;
        else
          this.boxBSelected = true;
      }
      else if (box === 'C') {
        if (this.boxCSelected == true)
          this.boxCSelected = false;
        else
          this.boxCSelected = true;
      } 
    }
  }
});

app.mount('#styling');