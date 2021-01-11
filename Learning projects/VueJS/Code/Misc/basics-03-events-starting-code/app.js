const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      sentence: '',
      numberAdded: 0,
      confirmedSentence: ''
    };
  },
  methods: {
    numberToBeAdded(event) {
      this.numberAdded = parseInt(event.target.value);
      console.log(typeof (this.numberAdded));
    },
    add() {
      this.counter = this.counter + this.numberAdded;
    },
    subtract(subtractNum) {
      this.counter = this.counter - subtractNum;
    },
    getText(event, lastName) {
      this.sentence = event.target.value + ' ' + lastName;
    },
    submitForm(event) {
      // event.preventDefault();
      alert('Submitted...')
    },
    confirmInput(event) {
      this.confirmedSentence = event.target.value;
    }
  }
});

app.mount('#events');
