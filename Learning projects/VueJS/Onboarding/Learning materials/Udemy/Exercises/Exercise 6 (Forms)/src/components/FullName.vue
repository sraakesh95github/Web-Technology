<template>

    <div>
        <!-- Specifies the ON state of the custom control -->
        <div>
            <label for="first">First Name</label>
            <input 
                type="text"
                class="form-control"
                id="first"
                :value="firstName"
                @input="nameChanged(true, first)">
        </div>

        <!-- Specifies the OFF state of the custom control -->
        <div>
            <label for="first">Last Name</label>
            <input
                type="text"
                id="last"
                class="form-control"
                :value="lastName"
                @input="nameChanged(false, last)">
        </div>
    </div>

</template>

<script>
    export default {
        props: [
            'value'
        ],
        methods: {
            switched(bool) {
                this.toggle = bool;
                this.emit('input', bool)
            },
            nameChanged(isFirst, event) {
                let name='';
                if(isFirst) {
                    name = event.target.value + ' ' + this.lastName;
                }
                else { 
                    name = this.firstName + ' ' + event.target.value;
                    }
                this.value = name;
                this.$emit('input', value);
            }
        },
        computed: {
            firstName() {
                return this.value.split(' ')[0];
            },
            lastName() {
                return this.value.split(' ')[1];
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