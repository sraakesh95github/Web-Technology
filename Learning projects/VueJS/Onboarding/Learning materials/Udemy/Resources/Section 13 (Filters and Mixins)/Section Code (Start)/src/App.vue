<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ text | toUppercase | to-lowercase }}</p>
                <button class="btn btn-primary"
                        @click="fruits.push('berries')">Add Item</button>
                <br>
                <br>
                <input v-model="filterText">

                <ul>
                    <li v-for="fruit in filteredFruits"
                    v-bind:key=fruit>
                        {{ fruit }}
                    </li>
                </ul>

                <hr>
                <app-list>

                </app-list>

            </div>
        </div>
    </div>
</template>

<script>

    import List from './components/List.vue';
    import { fruitMixin } from './components/fruitMixin.js';

    export default {
        data() {
            return {
                text: "Hello there!"
            }
        },
        filters: {
            toUppercase(value) {
                return value.toUpperCase();
            }
        },
        components: {
            'appList': List
        },
        mixins: [fruitMixin]
    }
</script>

<style>

</style>
