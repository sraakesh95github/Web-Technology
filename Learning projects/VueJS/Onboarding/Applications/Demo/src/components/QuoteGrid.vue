<template>
    <div class="row">
        <app-quote v-for="(quote, index) in quotes"
                   :key="quote"
                   @click.native="updateQuote(quote, index)">{{ quote }}</app-quote>
    </div>
</template>

<script>

    import Quote from './Quote.vue';
    import {eventBus} from '../main.js';

    export default {
    data: function() {
        return {
            quoteSelected: false
        }
    },
    props: [
        'quotes'
        ],
    components: {
        appQuote: Quote
    },
    methods: {
        updateQuote(quote, index) {
            this.quoteSelected = true;
            this.$emit('isQuoteSelected', this.quoteSelected);
            this.$emit('selectedIndex', index);
            eventBus.$emit('quoteUpdated', quote);
        }
    }
    }
</script>

<style>

</style>