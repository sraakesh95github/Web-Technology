const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.$refs.userText.value;
      // console.log("Set text button has been clicked...");
      // console.log(this.$refs.userText);
      // console.dir(this.$refs.userText);
    },
  },
  beforeCreate() {
    console.log("beforeCreate()");
  },
  created() {
    console.log("created()");
  },
  beforeMount() {
    console.log("beforeMount()");
  },
  mounted() {
    console.log("mounted()");
  },
  beforeUpdate() {
    console.log("beforeUpdate()");
  },
  updated() {
    console.log("update()");
  },
  beforeUnmount() {
    console.log("beforeUnmount()");
  },
  unmounted() {
    console.log("unmmount()");
  }
});

app.mount('#app');
setTimeout(function () {
  app.unmount();
}, 5000)

const app2 = Vue.createApp({
  template: `
    <p>Favorite Instrument: {{ favoriteInstrument }}</p>
    `,
  data() {
    return {
      favoriteInstrument: 'piano'
    };
  }
});

app2.mount('#app2');

const data = {
  message: 'Hello!',
  longMessage: 'World!'
};

const handler = {
  set(target, key, value) {
    if (key === 'message') {
      target.longMessage = value + 'World!!!';
    }
    target.message = value;
  }
};

const proxy = new Proxy(data, handler);

proxy.message = 'Hello!!!';

console.log(data.longMessage);


