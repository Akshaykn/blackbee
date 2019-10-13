<template>
     <div class="blue">
        <slot>  </slot>
     </div>    
</template>
<script>
export default {
    destroyed(){
        console.log('Publisher   destroyed');
    },
     mounted(){
         console.log('Publisher   mounted');
    },
    activated(){
          console.log('Publisher   activated');
    },
    deactivated(){
           console.log('Publisher   deactivated');
    },
}
</script>
<style scoped>
     .blue{
         color:blueviolet;
     }
</style>