<template>

    <div>
        <!-- Specifies the ON state of the custom control -->
        <div
            id="on"
            @click="switched(true)"
            :class="{active: toggle}">
        </div>

        <!-- Specifies the OFF state of the custom control -->
        <div
            id="off"
            @click="switched(false)"
            :class="{active: !toggle}">
        </div>
    </div>

</template>

<script>
    export default {
        props: [
            'toggle'
        ],
        methods: {
            switched(bool) {
                this.toggle = bool;
                this.emit('input', bool)
            }
        }
    }
</script>

<style>

    #on, #off {
        width: 40px;
        height: 40px;
        background-color: lightgrey;
        padding: 2px;
        display: inline-block;
        margin: 10px -2px;
        box-sizing: content-box;
        cursor: pointer;
        text-align: center;
    }

    #on:hover, #on.active {
        background-color: lightgreen;
    }

    #off:hover, #off.active {
        background-color: lightcoral;
    }

</style>