<template>
    <div style="padding-top: 20px" class="col-sm-6 col-md-4 col-lg-3">

        <div class="card card-default">

            <div class="card-body quote">
                <!-- <slot></slot> -->
                {{ quote.title }}
            </div>

            <div class="card-footer">
                <button class="btn btn-success"
                        v-if="!quoteAdded"
                        @click="addQuote">Add</button>
                <button class="btn btn-danger"
                        v-if="quoteAdded"
                        @click="removeQuote">Remove</button>
            </div>
            
            <div class="card-footer-added"
                 v-if="displayFooterMessage">
                <p>This quote has already been added to database</p>
                <!-- <p>This is a test</p> -->
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        props: {
            quote: {
                type: Object,
                required: true,
                default: () => ({
                    id: '',
                    title: '',
                    state: '',
                })
            },
            quoteAdded: false,
            displayFooterMessage: false,
            footerMessage: ''
        },
        created() {
            console.log(this.footerMessage);
        },
        methods: {

            addQuote() {
                this.$emit('addQuoteEvent', this.quote.id);
            },

            removeQuote() {
                this.$emit('removeQuoteEvent', this.quote.id);
            },

        }
    }
</script>

<style scoped>

    .card-footer-added {
        font-size: 24px;
        background-color: #b6dbc6;
        color: #000;
        text-align: center;
    }

    .card-body {
        font-family: 'Arizonia', cursive;
        font-size: 24px;
        color: #6e6e6e;
    }

    .card-footer {
        font-family: 'Helvetica';
        font-size: 24px;
        color: #000;
        text-align: center;
    }

    .quote {
        cursor: pointer;
    }

    .quote:hover {
        background-color: #ffe2e2;
    }

</style>