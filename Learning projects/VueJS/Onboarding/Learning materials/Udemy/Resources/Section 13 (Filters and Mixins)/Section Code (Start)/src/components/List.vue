<template>
    <div>
                <h1>Filters & Mixins</h1>
                <input v-model="filterText">
                <ul>
                    <li v-for="fruit in filteredFruits"
                    v-bind:key=fruit>
                        {{ fruit }}
                    </li>
                </ul>
            </div>

</template>

<script>

    import { fruitMixin } from './fruitMixin.js';

    export default {
        mixins: [fruitMixin],
        created() {
            console.log("Created inside List.vue")
        }
    }
</script>

<style>

</style>
