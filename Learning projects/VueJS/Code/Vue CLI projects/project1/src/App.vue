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
import FriendContact from '../src/components/FriendContact.vue';
import NewFriend from '../src/components/NewFriend';

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
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

li, form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

button, input[type=submit] {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

button:hover,
button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

input {
  font: inherit;
  padding: 0.15rem;
}

label {
  font-weight: bold;
  margin-right: 1.5rem;
  width: 7rem;
  display: inline-block;
}

form div {
  margin: 1rem 0;
}

</style>
