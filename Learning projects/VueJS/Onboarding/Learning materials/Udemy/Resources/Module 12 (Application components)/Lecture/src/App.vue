<template>
    <div class="container">

        <!-- Include the header section for the app -->
        <app-header :quoteCount="quoteList.length"
                    :maxQuote="maxQuotes">

        </app-header>

        <!-- Component to add a new quote -->
        <app-new-quote @addedQuote="addQuote($event)">
        </app-new-quote>

        <!-- Component to display the quotes -->
        <app-quote-grid :quotes="quoteList"
                        @deleteQuote="updateQuoteList($event)">
        </app-quote-grid>

        <!-- The info bar for delete -->
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">
                    Info: Click on a Quote to delete it!
                </div>
            </div>
        </div>

    </div>
</template>

<script>

    import QuoteGrid from './components/QuoteGrid.vue';
    import NewQuote from './components/NewQuote.vue';
    import Header from './components/Header.vue';

    export default {
        data: function() {
            return {
                quoteList: [
                    'A lake is a serene place',
                    'Our ecosystem must be clean'
                ],
                maxQuotes: 10
            }
        },
        components: {
            appQuoteGrid: QuoteGrid,
            appNewQuote: NewQuote,
            appHeader: Header
        },
        methods: {
            addQuote: function(quote) {
                if(this.quoteList.length >= this.maxQuotes) {
                    return alert("Please delete some quotes first")
                }
                else {
                this.quoteList.push(quote);
                }
            },
            updateQuoteList(index) {
                this.quoteList.splice(index, 1);
            }
        }
    }
</script>

<style>
</style>
