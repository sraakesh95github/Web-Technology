<template>
    <div class="container">
        <server-status></server-status>
        <hr>
        <div class="row">
            <server-list></server-list>
            <server-details></server-details>
        </div>
        <hr>
        <div class="row">
            <server-manage></server-manage>
        </div>
    </div>
</template>

<script>

import Header from './components/Shared/Header.vue'
import ServerList from './components/Server/ServerList.vue'
import ServerDetails from './components/Server/ServerDetails.vue'
import ServerManagerInfo from './components/Shared/ServerManagerInfo.vue'

export default {
    components: {
        'server-status': Header,
        'server-list': ServerList,
        'server-details': ServerDetails,
        'server-manage': ServerManagerInfo
    }
}
</script>

<style>

</style>
