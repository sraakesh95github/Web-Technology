<template>
    <div class="row">
        <form>

            <div class="col-sm-6 col-sm-offsest-2 col-md-6 col-xs-12 col-md-offset-3 form-group">
                <label>Quote</label>
                <textarea class="form-control"
                          rows="3"
                          v-model="quote"> 

                </textarea>
            </div>

            <div class="col-sm-6 col-sm-offsest-2 col-md-6 col-xs-12 col-md-offset-3 form-group">
                <!-- Prevent the default behaviour of the button
                to submit the form and reload the page -->
                <button class="btn btn-primary"
                        @click.prevent="createNew">Add Quote</button>
                <button class="btn btn-primary"
                        @click.prevent="updateQuote"
                        v-if="selectedQuote">Update Quote</button>
                        <slot></slot>
            </div>

        </form>
    </div>
</template>

<script>

    import {eventBus} from '../main.js';

    export default {
        props: [
            'selectedQuote'
        ],
        data: function() {
            return {
                quote: ''
        };
    },
    methods: {
        createNew() {
            this.$emit('addedQuote', this.quote);
            this.quote='';
        },
        updateQuote() {
            this.$emit('updatedQuote', this.quote);
        }
    },
    created() {
        eventBus.$on('quoteUpdated', (quote)=> {
            this.quote=quote;
        })
    }
    }
</script>

<style>

</style>