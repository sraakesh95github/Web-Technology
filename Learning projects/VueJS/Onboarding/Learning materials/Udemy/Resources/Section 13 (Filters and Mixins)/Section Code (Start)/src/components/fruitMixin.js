export const fruitMixin = {
    data() {
        return {
            text: 'Hello There!',
            fruits: [
                'apple',
                'banana',
                'mango',
                'melon'
            ],
            filterText: ''
        }
    },
    computed: {
        filteredFruits: function() {
            return this.fruits.filter((element) => {
                return element.match(this.filterText);
            });
        }
    },
    created() {
        console.log("Created");
    }
};