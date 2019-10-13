<template>
  <div>
      <button v-mybtn:click="myFun1">  Button 1 </button>    
      <button v-mybtn:click="myFun2">  Button 2 </button>      
      <div style="height:200px;width:200px;
                  background-color:#333"
                  v-mybtn:mouseover="myFun3"
                  v-mybtn:mouseleave="myFun3">
                  <span v-show="textShow" style="color:#fff"> Dont touch me </span>
      </div> 
  </div>
</template>

<script>
export default {
  data:function(){
    return {
       textShow:false,
    }
  },
  directives:{
      'mybtn':{
          bind(el,binding,vnode){
            if(binding.arg){
              el.addEventListener(binding.arg,binding.value); 
            }
          }
      }
  },
  methods:{
    myFun1() {
        alert('hi how are you!!!!'); 
    },
    myFun2() {
        alert('hi how are you!!!!'); 
    },
    myFun3() {
      this.textShow === true ? this.textShow = false : this.textShow = true;
    }
  }
}
</script>

<style>

</style>
