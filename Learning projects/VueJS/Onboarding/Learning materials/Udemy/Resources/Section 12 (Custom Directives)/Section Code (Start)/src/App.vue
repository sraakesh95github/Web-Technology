<template>
    <div class="container">
        
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives</h1>
                <p v-text="'This is a sample text'"></p>
                <p v-html="'<strong>This is a sample HTML formatted text</strong>'"></p>
            </div>
        </div>

        <hr>

        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <p v-highlight.delayed="'red'"><strong>Color this</strong></p>
                <p v-local-highlight.delayed.blink="{mainColor: 'orange', secondColor: 'blue', delay: 500}"><strong>Color this</strong></p>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        directives: {
            'localHighlight': {
                bind(el, binding, vnode) {
                    let delay=0;
                    if(binding.modifiers['delayed']) {
                        delay=3000;
                    }
                    if(binding.modifiers['blink']) {
                        let mainColor = binding.value.mainColor;
                        let secondColor = binding.value.secondColor;
                        let currentColor = mainColor;
                        setTimeout(() => {
                            setInterval(() => {
                                currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor
                                if(binding.arg == "backgroundColor") {
                                    el.style.backgrounColor = currentColor;
                                }
                                else { 
                                    el.style.color = currentColor;
                                }
                           }, binding.value.delay)
                        }, delay)
                    }
                    else {
                        setTimeout(() => {
                            if(binding.arg == "backgroundColor")
                                el.style.backgrounColor = binding.value.mainColor;
                            else 
                                el.style.color = binding.value.mainColor;
                        }, delay)
                    }
                } 
            }
        }
    }
</script>

<style>

</style>
