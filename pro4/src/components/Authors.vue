<template>
     <div class="red">
        <slot>  </slot>
        <button @click="counter++"> Increase  counter</button>
        <p> counter value is  {{counter}} </p>
     </div>    
     
</template>
<script>
export default {
     destroyed(){
        console.log('authors   destroyed');
    },
    mounted(){
         console.log('authors   mounted');
    },
    activated(){
          console.log('authors   activated');
    },
    deactivated(){
           console.log('authors   deactivated');
    },
    data(){
       return{
           counter : 0,
       };
    }
}
</script>
<style scoped>
     .red{
         color:red;
     }
</style>