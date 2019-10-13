<template>
    <div class="bar green"  @click="counter++">
        <slot></slot>
         <span> Clicked  {{counter===0?'zero time':counter + ' time' }} </span>
    </div>
</template>
<style scoped>
   .green{
       background-color:green;
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