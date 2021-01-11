<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">

            <button @click="selectedComponent='appQuote'">Quote</button>
            <button @click="selectedComponent='appAuthor'">Author</button>
            <button @click="selectedComponent='appNew'">New</button>
            <hr>
            <p>Selected Component: {{selectedComponent}}</p>
            <keep-alive>
                <component :is="selectedComponent">
                    <p slot="content">This is the default content</p>
                </component>
            </keep-alive>
               <!-- <app-quote>
                   <h3 slot='title'>The Quote: </h3>
                   <p slot='content'><font size=5>{{quote}}</font></p>
                   <p slot="subtitle">This might be a subtitle</p>
               </app-quote> -->
            </div>
        </div>
    </div>
</template>

<script>

    import Quote from './components/Quote.vue';
    import Author from './components/Author.vue';
    import New from './components/New.vue';

    export default {
        data: function() {
            return {
                quote: 'This is the latest quote',
                selectedComponent: 'appQuote'
            } 
        },
        components: {
            appQuote: Quote,
            appAuthor: Author,
            appNew: New
        }
    }
</script>

<style>
    p {
        color: green;
    }
</style>
