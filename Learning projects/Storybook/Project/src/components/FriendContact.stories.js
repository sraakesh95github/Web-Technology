import FriendContact from './FriendContact.vue'
import { action } from '@storybook/addon-actions'

export default {
  title: 'FriendContact',
  component: FriendContact,
  excludeStories: /.*Data$/
}

export const actionsData = {
  onFavorite: action('toggle-favorite'),
  //Add the action for the showDetails
}

const Template = (args, { argTypes }) => ({
  components: {
    'friend-contact': FriendContact
  },
  props: Object.keys(argTypes),
  methods: actionsData,
  template:
  '<friend-contact v-bind="$props" @toggle-favorite="onFavorite" />'
})

export const Default = Template.bind({})
Default.args = {
  id: '0',
  name: 'Heath Ledger',
  phoneNumber: '123-456-4596',
  emailAddress: 'abc@gmail.com',
  isFavorite: false
}

export const Favorited = Template.bind({})
Favorited.args = {
  ...Default.args,
  isFavorite: true
}
