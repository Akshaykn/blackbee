<template>
    <div class="bar red" @click="counter++">
        <slot></slot>
        <span> Clicked  {{counter===0?'zero time':counter + ' time' }} </span>
    </div>
</template>
<style scoped>
   .red{
       background-color:crimson;
       padding:20px;
       text-align: center;
       width:90%;
       border-radius: 5px;
       color:#fff;
       font-weight: 900;
       font-family: Arial, Helvetica, sans-serif;
   }
</style>
<script>
export default {
    data(){
        return {
            counter :0,
        }
    }
}
</script>