<template>
    <div>
        <h3>New</h3>
        <button @click="counter++">Increment</button>
        <p>{{ counter }}</p>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                counter: 0
            }
        },
        destroyed() {
            console.log('destroyed !');
        },
        deactivated() {
            console.log('deactivated !');
        },
        activated() {
            console.log('Activated !');
        }
    }
</script>

<style>
</style>