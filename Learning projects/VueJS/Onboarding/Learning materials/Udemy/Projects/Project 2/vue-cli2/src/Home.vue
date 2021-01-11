<template>
<div>
   <app-server-status v-for="server in 5"></app-server-status>
</div>
</template>

<script>
    import ServerStatus from './ServerStatus.vue'
    export default {
        //Local declaration of the Vue components within the 
        //parent vue document
        components: {
            'app-server-status': ServerStatus
        }
    }
</script>

<style scoped>

</style>