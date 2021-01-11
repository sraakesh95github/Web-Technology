<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <server-item 
            v-for='item in servers'
            :id="item.id"
            :condition="item.condition"
            :key="item.id"></server-item>
        </ul>
    </div>
</template>

<script>

    import ServerItem from './ServerItem.vue';
    import {eventBus} from '../../main.js';
    //'))

    export default {
        data: function() {
            return {
                servers: [
                    { id: 1, condition: 'Normal' },
                    { id: 2, condition: 'Critical' },
                    { id: 3, condition: 'Down' },
                    { id: 4, condition: 'Down' },
                    { id: 5, condition: 'Normal' }
                ]
            }
        },
        components: {
            'server-item': ServerItem
        }
        }
</script>

<style>

</style>
