<template>
    <div class="bar blue"  @click="counter++">
        <slot></slot>
          <span> Clicked  {{counter===0?'zero time':counter + ' time' }} </span>
    </div>
</template>
<style scoped>
   .blue{
       background-color:rgb(17, 178, 228);
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