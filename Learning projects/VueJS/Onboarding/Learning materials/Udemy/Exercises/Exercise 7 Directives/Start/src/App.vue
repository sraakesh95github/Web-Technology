<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <hr>
                <button class="btn btn-primary"
                        v-customOn:click="clicked">Test</button>
                <hr>
                <div style="width:100px; height:100px; background-color:lightgreen"
                     v-customOn:mouseenter="mouseEnter"
                     v-customOn:mouseleave="mouseLeave"></div>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            customOn: {
                bind(el, binding) {
                    // el.onclick = function() {
                    //     binding.value();
                    // }
                    const type=binding.arg;
                    const func=binding.value;
                    el.addEventListener(type, func);
                }
            }
        },
        methods: {
            clicked() {
                console.log("Click executed...")
                alert('I was clicked');
            },
            mouseEnter() {
                console.log("Mouse entered...")
            },
            mouseLeave() {
                console.log("Mouse left...")
            }
        }
    }
</script>

<style>
</style>
