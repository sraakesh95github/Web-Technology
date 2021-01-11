<template>
    <div>
        <p>Money may just seem like a piece of paper or a number in a bank account. 
                        But, in practice, it is a quite formal way of saying "You do something for me and 
                        I'll do something  for you in return" (without emotions / verbal commotions, protected by law)</p>
        <p><font style="bold" text-align="center" size=5>{{counter}}</font></p>
        <button 
        @click="counter--"
        class="btn btn-danger" >Decrement</button>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                counter: 100
            }
        }
    }
</script>

<style scoped>
    div {
        border: 1px solid red;
        background-color: lightcoral;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>