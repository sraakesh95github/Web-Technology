const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lawrence',
          phone: '789-789-1234',
          email: 'abc@gmail.com'
        },
        {
          id: 'juulie',
          name: 'Julie Jones',
          phone: '197-564-1797',
          email: 'xyz@gmail.com'
        }
      ]
    }
  }
});

app.component('friend-contact', {
  template: `
    <li>
      <h2>{{friend.name}}</h2>
      <button @click="toggleDetails">{{detailsAreVisible ? 'Hide Details' : 'Show Details'}}</button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{friend.phone}}</li>
        <li><strong>Email:</strong> {{friend.email}}</li>
      </ul>
    </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
          id: 'manuel',
          name: 'Manuel Lawrence',
          phone: '789-789-1234',
          email: 'abc@gmail.com'
        }
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  }
});

app.mount('#app');

