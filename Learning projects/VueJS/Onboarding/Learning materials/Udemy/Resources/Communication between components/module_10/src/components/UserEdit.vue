<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>User age: {{userAge}}</p>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>

import {eventBus} from '../main.js';

export default {
    props: [
        'userAge'
    ],
    methods: {
        editAge() {
            this.userAge = 30;
            // this.$emit('userEditAge', this.userAge);
            eventBus.$emit('userAgeEdit', this.userAge)
        }
    }

}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
