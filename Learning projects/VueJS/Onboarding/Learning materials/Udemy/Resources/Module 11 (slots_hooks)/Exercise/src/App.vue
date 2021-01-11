<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="selectedComponent='app-blue'">Load Blue Template</button>
                <button class="btn btn-success" @click="selectedComponent='app-green'">Load Green Template</button>
                <button class="btn btn-danger" @click="selectedComponent='app-red'">Load Red Template</button>
                <hr>

                <keep-alive>
                    <component :is="selectedComponent">
                                            
                    </component>
                </keep-alive>

                <!-- <app-blue>
                    <p>Work hard till the ultimate luxury (your goal) is reached. Let it take until eternity</p>
                    <button><font color=black>increment</font></button>
                </app-blue>
                    
                <app-green>
                    <p>Vue Js is an abstract yet complex language</p>
                </app-green>

                <app-red>
                    <p>Money may just seem like a piece of paper or a number in a bank account. 
                        But, in practice, it is a quite formal way of saying "You do something for me and 
                        I'll do something  for you in return" (without emotions / verbal commotions, protected by law)</p>
                    <button>decrement</button>
                </app-red> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        data: function() {
            return {
                selectedComponent: 'app-blue'
            }
        }
    }
</script>

<style>
</style>
