import NewFriend from './NewFriend'
import { action } from '@storybook/addon-actions'

export default {
  title: 'NewFriend',
  component: NewFriend,
  excludeStories: /.*Data$/
}

export const actionsData = {
  filledForm: action('fill-form')
}

const Template = (args, { argTypes }) => ({
  components: {
    'new-friend': NewFriend
  },
  props: Object.keys(argTypes),
  methods: actionsData,
  template: '<new-friend vibind="$props" />'
})

export const Default = Template.bind({})
Default.args = {
  friendDetails: {
    id: '',
    name: '',
    phone: '',
    email: '',
    favorite: false
  }
}

export const Filled = Template.bind({})
Filled.args = {
  friendDetails: {
    id: '0',
    name: 'Julian Pelosi',
    phone: '456-123-7894',
    email: 'qwe@gmail.com',
    favorite: true
  }
}



