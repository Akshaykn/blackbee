<template>
    <div>
   <p v-highlight:textcolor.delayed= "'blue'" v-highlight:textsize="'55px'">  This is it  </p>
   <p v-local-directive:color.delayed.blink = "{firstColor:'lightgreen'}" v-local-directive:fontSize="'44px'"> this is it  </p>
      <p v-local-directive:background.delayed.blink = "{firstColor:'lightgreen',secondColor:'lightblue',interval:'500'}" v-local-directive:color = "'#333'" v-local-directive:fontSize="'44px'"> this is it  </p>
    </div>
</template>
<script>
export default {
    //declaring the local directive
    directives:{
        'local-directive':{
            bind(el,binding,vnode){
                var delayTime = 0;
                if(binding.modifiers['delayed']){
                  delayTime = 1000;  
                }
                setTimeout(()=>{
                   if(binding.modifiers['blink']){
                       var firstColor = binding.value.firstColor;
                       var secondColor =  binding.value.secondColor;
                       var currentColor = firstColor;
                       setInterval(() => {
                              currentColor === secondColor ? currentColor = firstColor : currentColor = secondColor;
                               switch(binding.arg){
                              case 'fontSize': el.style.fontSize = binding.value;
                                 break;
                              case 'color': el.style.color = currentColor;
                              break;
                              case 'background': el.style.backgroundColor =  currentColor;
                               break;
                              default: '';
                              break;                 
                           }
                       }, binding.value.interval);
                      
                   } else{
                      switch(binding.arg){
                   case 'fontSize': el.style.fontSize = binding.value;
                   break;
                   case 'color': el.style.color = binding.value.firstColor;
                   break;
                   case 'background': el.style.backgroundColor =  binding.value.firstColor;
                   break;
                   default: '';
                   break;                 
                  }
                   }
                   
                },delayTime);
                
            }
        }
    }
}
</script>
<style>
</style>
