// import axios from 'axios'; // Used to give out HTTP requests for getting the data

const state = {
  // Define a state for the todos list
  todos: [
    {
      id: 1,
      title: 'Todo One'
    },
    {
      id: 2,
      title: 'Todo Two'
    }
  ]
};

const getters = {
  // This is a getter function that uses the data from the state constant that was defined previously
  allTodos: (state) => state.todos
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};