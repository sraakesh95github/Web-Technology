<template>
<section>
  <new-friend @get-details="getFriendDetails"></new-friend>
  <header>
    <h1>My Friends</h1>
  </header>
  <ul>
    <friend-contact 
    v-for="friend in friends"
    :key="friend"
    :id='friend.id'
    :name="friend.name"
    :phone-number="friend.phone"
    :email-address="friend.email"
    :is-favorite="friend.isFavorite"
    @toggle-favorite="toggleFavoriteStatus"
    @delete-contact="deleteFriendDetail"></friend-contact>
  </ul>
</section>
</template>

<script>
import FriendContact from './FriendContact.vue';
import NewFriend from './NewFriend';

export default {
  name: 'App',
  components: {
    'friend-contact': FriendContact,
    'new-friend': NewFriend
  },
  data() {
    return {
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
  },
  methods: {
    toggleFavoriteStatus(friendId) {
      // console.log("This event has been called...");
      // console.log(friendId);
      const identifiedFriend = this.friends.find(
        (friend) => friend.id === friendId
      );
      // console.log(identifiedFriend);
      identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
    },
    getFriendDetails(friendDetails) {
      // console.log(friendDetails);
      // console.log(this.friends[this.friends.length - 1].id);
      var friendInList = false;
      this.friends.forEach(function(friend) {
        if(friend.name === friendDetails.name && friend.phone === friendDetails.phone && friend.email === friendDetails.email) {
          friendInList = true
        }
      });
      if(friendInList) {
        alert("Friend already in list...")
      }
      else {
          if(this.friends.length === 0) 
            friendDetails.id = "0";
          else {
            const tempId = Number(this.friends[this.friends.length - 1].id) + 1;
            friendDetails.id = String(tempId);
          }
          const tempDetails = {
            id: friendDetails.id,
            name: friendDetails.name,
            email: friendDetails.email,
            phone: friendDetails.phone,
            isFavorite: friendDetails.favorite
          }
          this.friends.push(tempDetails);
        }
      },
    deleteFriendDetail(FriendId) {
      // console.log("Id to be deleted: " + String(FriendId));
      // var indexToBeDeleted = 0;
      // this.friends.forEach(function(friend, index) {
      //   if(FriendId === friend.id) {
      //     indexToBeDeleted = index;
      //   }
      //   })
      // this.friends.splice(indexToBeDeleted, 1);
      // console.log(tempFriend);
      // console.log("Delete function called...")
      this.friends = this.friends.filter((friend) => friend.id !== FriendId);
    }
  }
};

</script>

<style>
@import '../index.css'
</style>
