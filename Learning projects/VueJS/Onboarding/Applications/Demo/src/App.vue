<template>
    <div class="container">

        <!-- Include the header section for the app -->
        <app-header :quoteCount="quoteList.length"
                    :maxQuote="maxQuotes">

        </app-header>

        <!-- Component to add a new quote -->
        <app-new-quote @addedQuote="addQuote($event)"
                       @updatedQuote="updateTheQuote($event)"
                       :selectedQuote="quoteSelected">
            <button class="btn btn-danger"
                        @click.prevent="deleteQuote"
                        v-if="quoteSelected">Delete Quote</button>
        </app-new-quote>

        <!-- Component to display the quotes -->
        <app-quote-grid :quotes="quoteList"
                        @deleteQuote="deleteQuote"
                        @isQuoteSelected="quoteSelected=true"
                        @selectedIndex="selectedIndexFunc($event)">
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
                maxQuotes: 10,
                quoteSelected: false,
                selectedIndex: 0
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
            deleteQuote() {
                this.quoteList.splice(this.selectedIndex, 1);
            },
            selectedIndexFunc(index) {
                this.selectedIndex=index;
            },
            updateTheQuote(quote) {
                this.quoteList.splice(this.selectedIndex, 1, quote);
            }
        }
    }
</script>

<style>
</style>
