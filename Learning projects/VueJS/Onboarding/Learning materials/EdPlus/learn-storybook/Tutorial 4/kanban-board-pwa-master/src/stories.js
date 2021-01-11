import { storiesOf } from '@storybook/vue';

//TaskLaneItem acts like a cover page for the storybook
//Default TaskLaneItem acts as a chapter in the storybook to add to the stories
//notice that the name of the tag <item> is obtained from the Vue.component registration in the config.js
storiesOf('TaskLaneItem', module).add('Default TaskLaneItem', () => ({
    data() {
        return {
            item: {
                id: 10,
                text: "This is a test"
            }
        }
    },
    template: '<item :item="item"></item>'
  }));