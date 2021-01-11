<template>
        <li class="list-group-item"
            style="cursor: pointer"
            @click="serverSelected">
            Server # {{id}}
        </li>
</template>

<script>

    import {eventBus} from '../../main.js';

    export default {
        props: {
           id: {
               type: Number
           },
           condition: {
               type: String
           }
        },
        methods: {
            serverSelected: function() {
                eventBus.$emit('updateCondition', this.condition)
            }
        }
    }
</script>

<style scoped>
</style>