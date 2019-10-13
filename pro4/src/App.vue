<template>
  <div class="container">
        <div class="row">
            <div class="col-xs-12">
               <button @click="selectedComponent = 'ak-quates'">Quates</button>
               <button @click="selectedComponent = 'ak-authors'">Authors</button>
               <button @click="selectedComponent = 'ak-publishers'">Publishers</button>
               <keep-alive>
               <component :is="selectedComponent">
                  <h1> Im akshay </h1>
               </component>
               </keep-alive>
               <p> selected componennt {{ selectedComponent }}  </p>
               <!--<ak-quates class="ak-quates"> 
                 <h2 slot="title"> The quote for day   </h2>
                 <p slot="content"> All is well </p>     
               </ak-quates>-->
            </div>
        </div>
    </div>
</template>

<script>
import Quates from './components/Quates';
import Authors from './components/Authors';
import Publishers from './components/Publishers';
export default {
    components:{
        'ak-quates':Quates,
        'ak-authors':Authors,
        'ak-publishers':Publishers,
    },
    data:function(){
       return {
          selectedComponent:Quates,
       }  
    }
}
</script>

<style scoped>
     .ak-quates{
        border:1px solid rgba(0,0,0,0.4);
        background: #333;
        padding:20px;
        margin:30px auto; 
        text-align: center;
        font-family: sans-serif;
        font-weight: 900;
     }
      .ak-quates{
         animation-name: animate;
        animation-duration: 1s;
        animation-iteration-count: infinite;
    }
    @keyframes animate{
        from{
            color:orange;
        }
        to{
            color:peachpuff;
        }
    }
    
</style>
