<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User Age: {{userAge}}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn()">Parent Reset Func</button>
    </div>
</template>

<script>

    import {eventBus} from '../main.js';

    export default {
        props: {
            myName: {
                type: String //name is a property that can be set from the outside
            },
            resetFn: Function, //Note that this is the reset function 
            //passed down from the parent as a function and reused in
            //the child - user details
            userAge: Number
        },
        methods: {
            switchName() {
                return this.myName.split("").reverse().join("");
            },
            resetName() {
                this.myName = 'RaakeshS';
                this.$emit('childEvent', this.myName);
            }
        },
        //created is a lifecycle hook just like the
        // properties belonging to a particular view
        created() {

            //The $on denotes that the event specified
            //here must listen to the eventBus once
            //the vue instance starts running

            // The data mentioned in the below function
            // belongs to the main Vue instance that can access mutipple child and parent
            // components 

            eventBus.$on('userAgeEdit', (data_event) => {
                this.userAge = data_event;
            })
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
