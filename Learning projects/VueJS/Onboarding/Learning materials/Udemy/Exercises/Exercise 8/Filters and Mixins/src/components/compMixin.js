export const compMixin = {
    computed: {
        reverseComputed() {
            return this.text.split("").reverse().join("");
        },
        reverseComputedCount() {
            var test = this.text.split("").reverse().join("")
            return (test + " " + test.length.toString())
        }
    }

};