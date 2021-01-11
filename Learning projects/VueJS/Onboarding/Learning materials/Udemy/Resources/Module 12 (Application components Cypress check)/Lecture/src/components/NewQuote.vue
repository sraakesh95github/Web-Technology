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
            </div>

        </form>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                quote: ''
        };
    },
    methods: {
        createNew() {
            this.$emit('addedQuote', this.quote);
            this.quote='';
        }
    }
    }
</script>

<style>

</style>