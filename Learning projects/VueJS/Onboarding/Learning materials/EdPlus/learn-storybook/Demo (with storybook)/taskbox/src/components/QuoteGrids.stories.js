import QuoteGrids from './QuoteGrids.vue';
import { quoteData, actionsData } from './Quote.stories.js';

const paddedList = () => {
    return {
        template: '<div style="padding: 3rem;"><story/></div>'
    };
};

//General default export to export the general overall
//requirements of the SB
export default {
    title: 'QuoteGrids',
    // Please note that the expression below is a regex
    excludeStories: /.*Data$/,
    // Remember that decorators take only functions
    decorators: [paddedList],
};

// These are the default quotes that need to be rendered once the 
//default option is clicked on the left pane of the SB
export const defaultQuotes = [
    { ...quoteData, id: '1', title: 'This is 1st quote'},
    { ...quoteData, id: '2', title: 'This is 2nd quote'},
    { ...quoteData, id: '3', title: 'This is 3rd quote'},
    { ...quoteData, id: '4', title: 'This is 4th quote'},
    { ...quoteData, id: '5', title: 'This is 5th quote'},
    { ...quoteData, id: '6', title: 'This is 6th quote'},
];

//To maintain the state of the QuoteGrid once one of the 
//quotes has been added to the grid
//In this example, the 6th quote has been added to the grid
export const addedQuotes = [
    ...defaultQuotes.slice(0, 5),
    { id: '6', title: 'This is 6th quote', state: 'QUOTE_ADDED'}
];

//Create a constant template selector for the Quotesgrid
const templateQuoteGridDefault = '<app-quote-grids :quotes="quotes" @addQuoteEvent="addQuote" @removeQuoteEvent="removeQuote"/>'
const templateQuoteGridAdded = '<app-quote-grids :quotes="quotes" @addQuoteEvent="addQuote" @removeQuoteEvent="removeQuote"/>'

export const DefaultQuotes =() => ({
    components: {
        appQuoteGrids: QuoteGrids
    },
    template: templateQuoteGridDefault,
    props: {
        quotes: {
            default: () => defaultQuotes
        }
    },
    methods: actionsData
});

export const AddedQuotes = () => ({
    components: {
        appQuoteGrids: QuoteGrids
    },
    template: templateQuoteGridDefault,
    props: {
        quotes: {
            default: () => addedQuotes
        }
    },
    methods: actionsData
});



