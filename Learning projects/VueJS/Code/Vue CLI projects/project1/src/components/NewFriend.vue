<template>
  <form action="" @submit.prevent="onSubmit">
    <div>
      <label>Enter Name: </label>
      <input type="text" v-model="friendDetails.name"/>
    </div>
    <div>
      <label>Enter Phone number: </label>
      <input type="text" v-model="friendDetails.phone"/>
    </div>
    <div>
      <label>Enter Email: </label>
      <input type="text" v-model="friendDetails.email"/>
    </div>
    <div>
      <label>Favorite?: </label>
      <input type="checkbox" v-model="friendDetails.favorite"/>
    </div>
    <div>
      <input type="submit" @click="formSubmit"/>
    </div>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        friendDetails: {
          id: '',
          name: '',
          phone: '',
          email: '',
          favorite: false
        }
      }
    },
    methods: {
      formSubmit() {
        this.$emit('get-details', this.friendDetails)
      },
      onSubmit() {
        return
      }
    }
  }
</script>