<template>
    <div>
        <p>Work hard till the ultimate luxury (your goal) is reached. Let it take until eternity</p>
        <p><font style="bold" 
                 text-align="center"   
                 size=5>{{counter}}
            </font>
        </p>
        <button type="button" class="btn btn-primary" @click="counter++"><font color=white>Increment</font></button>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
            counter: 0
            }
        }
    }
</script>

<style scoped>
    div {
        border: 1px solid blue;
        background-color: lightblue;
        padding: 30px;
        margin: 20px auto;
        text-align: center;
        color: black;
    }
</style>