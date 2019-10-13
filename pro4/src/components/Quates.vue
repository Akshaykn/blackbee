<template>
    <div> 
           <div :class="'title'">
              <slot></slot>
           </div>
    </div>
</template>
<script>
export default {
    destroyed(){
        console.log('Quotes   destroyed');
    },
     mounted(){
         console.log('Quotes   mounted');
    },
    activated(){
          console.log('Quotes   activated');
    },
    deactivated(){
           console.log('Quotes   deactivated');
    },
}
</script>
<style scoped>
</style>