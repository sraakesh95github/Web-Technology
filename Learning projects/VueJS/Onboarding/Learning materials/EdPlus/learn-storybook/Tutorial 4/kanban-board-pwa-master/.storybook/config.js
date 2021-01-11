// .storybook/config.js

import { configure } from '@storybook/vue';

import Vue from 'vue';

// Import your custom components.
import TaskLaneItem from '../src/components/TaskLaneItem';

// Register custom components.
Vue.component('item', TaskLaneItem);

function loadStories() {
    // You can require as many stories as you need.
    require('../src/stories.js')
}
  
  configure(loadStories, module);