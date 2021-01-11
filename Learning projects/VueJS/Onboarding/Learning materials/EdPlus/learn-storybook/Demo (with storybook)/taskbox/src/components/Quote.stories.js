import { action } from '@storybook/addon-actions';
import Quote from './Quote.vue';

//Can be used in the decorators for styling
const initPadding = () => {
    return {
        template: '<div style="padding: 3rem;"><story/></div>'
    };
};

export default {
    title: 'Quote',
    excludeStories: /.*Data$/,
    decorators: [initPadding]
};

export const actionsData = {
    addQuote: action('Quote added'),
    removeQuote: action('Quote removed'),
};

export const quoteData = {
    id: '1',
    title: 'This is a test entry',
    state: 'QUOTE_INIT',
    footerMessage: ''
};

const quoteTemplate = '<app-quote :quote="quotes" @addQuoteEvent="addQuote"/>';
const quoteTemplateAdded = '<app-quote :quoteAdded="true" :quote="quotes" :displayFooterMessage="true" @removeQuoteEvent="removeQuote"/>';

export const Default = () => ({
    components: { 
        appQuote: Quote
    },
    template: quoteTemplate,
    props: {
        quotes: {
            default: () => quoteData,
        },
    },
    methods: actionsData
});

export const Added = () => ({
    components: {
        appQuote: Quote
    },
    template: quoteTemplateAdded,
    props: {
        quotes: {
            default: () => ({
                //... asks the compiler to copy the existing quoteData
                ...quoteData,
                // footerMessage: 'This quote is added',
                state: 'QUOTE_ADDED',
            }),
        },
    methods: actionsData
    },
})

