<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <p>Loaded ID: {{ id }}</p>
        <button @click="navigateToHome"
                class = "btn btn-primary">
            Go to Home
        </button>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id: this.$route.params.id
            }
        },
        watch: {    //This is executed whenever there are route changes
            '$route'(to, from) {
                this.id = to.params.id;     //updates the id whenever there is a routing taking place
            }
        },
        methods: {
            navigateToHome() {
                this.$router.push({name: 'home'});
            }
        }
    }
</script>