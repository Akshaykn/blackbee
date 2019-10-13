<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p> user age is {{userage}}  </p>
        <button @click="changeAge"> change Age  </button>
    </div>
</template>

<script>
    import {eventBus} from '../main';
    export default{
        props:['userage'],
        methods:{
            changeAge(){
                this.userage = 30;
                // this.$emit('changeAge', this.userage);
                eventBus.$emit('changeAge', this.userage);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
