<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <h4>Filter</h4>
                <h3>{{ text | reverseText | length-count}}</h3>
                <br>
                <br>
                <h4>Computed Data</h4>
                <h3> {{ reverseComputedCount }} </h3>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
            </div>
        </div>
    </div>
</template>

<script>

    import {compMixin} from './components/compMixin.js';

    export default {
        data() {
            return {
                'text': "Tempe"
            }
        },
        filters: {
            reverseText(value) {
                var tempString = "";
                tempString = value.split("");
                return tempString.reverse().join("");
            }
        },
        mixins: [compMixin]
    }
</script>

<style>
</style>
