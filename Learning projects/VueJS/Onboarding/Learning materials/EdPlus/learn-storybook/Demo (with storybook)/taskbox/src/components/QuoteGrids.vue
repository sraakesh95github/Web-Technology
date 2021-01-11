<template>

    <div class="row">

        <div class="wrapper-message"
             v-if="noQuotes">
            <div class="title-message">All the quotes have been removed</div>
            <div class="subtitle-message">There are no quotes to display. Please add quotes to display</div>
        </div>

        <app-quote v-for="(quote, index) in quotes"
                   :key="index"
                   :quote="quote"
                   :quoteAdded="quote.state == 'QUOTE_ADDED'"
                   :displayFooterMessage="quote.state == 'QUOTE_ADDED'"
                   @addQuoteEvent="$emit('addQuoteEvent', $event)"
                   @removeQuoteEvent="$emit('removeQuoteEvent', $event)"></app-quote>
    </div>

</template>

<script>

    import Quote from './Quote.vue';

    export default {
        name: 'quote-grids',
        props: {
            selected: {
                type: Boolean,
                default: false,
                id: '',
            },
            quotes: {
                type: Array,
                default: () => []
            },
            footerMessage: ''
        },
        components: {
            appQuote: Quote
        },
        computed: {

            noQuotes() {
                console.log("No Quotes executed...");
                return this.quotes.length === 0;
            },

            displayQuotes() {
                return !this.noQuotes;
            },

        }
    }
</script>

<style scoped>

.wrapper-message {
   position: absolute;
   top: 45%;
   right: 0;
   bottom: auto;
   left: 0;
   width: auto;
   height: auto;
   transform: translate3d(0, -50%, 0);
   text-align: center;
 }

 .title-message {
   font-size: 16px;
   line-height: 24px;
   font-family: 'Nunito Sans', "Helvetica Neue", Helvetica, Arial, sans-serif;
   font-weight: 800;
   color: #555;
 }

 .subtitle-message {
   font-size: 14px;
   line-height: 20px;
   color: #666;
 }

</style>