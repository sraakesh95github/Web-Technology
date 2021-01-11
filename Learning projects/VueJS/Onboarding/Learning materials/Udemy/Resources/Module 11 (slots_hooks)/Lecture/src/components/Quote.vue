<template>
    <div>
        <div class='title'>
            <slot name='title'></slot>
            <span style="color: grey"> 
                <slot name="subtitle">
                    <!-- This is the default data of the slot
                    when there is no data fed by the parent -->
                    This is a subtitle
                </slot>
            </span>
        </div>
        
        <hr>
        
        <div class='content'>
            <slot name='content'></slot>
        </div>
    
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    div {
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
    }

    h3 {
        color: red;
    }

    .title {
        font-style: bold;
    }

    .content {
        font-style: italic;
    }

</style>