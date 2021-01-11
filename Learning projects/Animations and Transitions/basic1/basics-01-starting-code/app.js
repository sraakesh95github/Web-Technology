const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Finish the couse and learn Vue',
            vueLink: 'https://vuejs.org/'
        }
    },
    mounted() {
        console.log(this.$refs);
    },
    methods: {
        dropdown() {
            // console.log("Entered method...")
            let mylist = this.$refs.mylist;
            // console.log(this.$refs);
            // console.log(mylist);
            // console.log(mylist.classList[1])
            // if(mylist.classList[1] == undefined) {
            //     console.log("No class present")
            //     mylist.classList.add("fade-in");
            // }
            // else if(mylist.classList[1] == "fade-in") {
            //     mylist.classList.replace("fade-in", "fade-out");
            // }
            // else {
            //     mylist.classList.replace("fade-out", "fade-in");
            // }
        }
    }
});

app.mount('#user-goal');