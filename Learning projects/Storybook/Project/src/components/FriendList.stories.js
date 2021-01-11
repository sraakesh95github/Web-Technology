import FriendList from './FriendList'
import * as FriendContactStories from './FriendContact.stories'

export default {
  component: FriendList,
  title: 'FriendList',
  decorations: [() => '<div style="padding: 1rem"><story /></div>']
}

const Template = (args, {argTypes}) => ({
  components: { FriendList },
  props: Object.keys(argTypes),
  methods: FriendContactStories.actionsData,
  template: '<friend-list v-bind="$props" />'
})

export const Default = Template.bind({})
Default.args = {
  friends: [
    {
      id: '0',
      name: 'Emmanuel Lawrence',
      phone: '123-456-7891',
      email: 'abc@gmail.com',
      isFavorite: false
    },
    {
      id: '1',
      name: 'Julie Sanders',
      phone: '789-456-1237',
      email: 'xyz@gmail.com',
      isFavorite: false
    }
  ]
}