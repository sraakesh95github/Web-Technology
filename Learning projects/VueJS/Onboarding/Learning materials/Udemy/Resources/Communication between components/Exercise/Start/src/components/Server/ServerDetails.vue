<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server Details are currently not updated</p>
        <!-- <button @click="displayCondition">Update</button> -->
        <p>Server condition: {{condition}}</p>
    </div>
</template>

<script>

    import {eventBus} from '../../main.js';

    export default {
        data: function() {
            return {
                condition: {
                    type: String
                }
            }
        },
        created() {
                eventBus.$on('updateCondition', (data) => {
                    this.condition = data
                    }
            )
        }
    }
</script>

<style>

</style>

