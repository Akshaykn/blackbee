import Vue from 'vue'
import App from './App.vue'


Vue.directive('highlight',{
      bind(el,binding,vnode){
         // el.style.backgroundColor = binding.value;
         var delaytime = 0;
         if(binding.modifiers['delayed']){
          delaytime = 2000;
         }
         setTimeout(()=>{
          switch(binding.arg){
            case 'backgroundcolor': el.style.backgroundColor = binding.value;
                             break;
            case 'textsize': el.style.fontSize = binding.value;
                             break;
            case 'textcolor': el.style.color = binding.value;
                             break;
            default: el.style.backgroundColor = '#fff';
                    break;                                                            
          }
         },delaytime);
      }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
