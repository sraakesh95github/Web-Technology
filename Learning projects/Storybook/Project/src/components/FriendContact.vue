<template>
  <li>
    <h2>{{name}} {{isFavorite ? '(favorite)' : ''}}</h2>
    <button @click="toggleFavorite">{{isFavorite ? 'Not' : ''}} Favorite</button>
    <br>
    <hr>
    <button @click="toggleDetails">{{detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Friend phone: </strong>{{phoneNumber}}</li>
      <li><strong>Friend email: </strong>{{emailAddress}}</li>
    </ul>
    <hr>
    <button @click="deleteContact">Delete</button>
  </li>
</template>

<script>
export default {
  name: 'FriendContact',
  props: [
    'id',
    'name',
    'phoneNumber',
    'emailAddress',
    'isFavorite'
  ],
  emits: {
    'toggle-favorite': function(id) {
      if(id) {
        return true;
      }
      else {
        console.warn('Id is missing!');
        return false;
      }
    },
    'delete-contact': function(id) {
      return id;
    }
  },
  data() {
    return {
      detailsAreVisible: false,
    }
  },
  methods: {
    toggleDetails() {
      console.log("Details button is clicked...");
      this.detailsAreVisible =! this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.id);
    },
    deleteContact() {
      this.$emit('delete-contact', this.id);
    }
  }
}
</script>

<style>
@import '../index.css'
</style>