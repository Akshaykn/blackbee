<template>
    <div class="container">
         <div class="btncontainer">
               <div class="btn btn1" @click="onSelect('ak-redcomponent','RED') "> RED </div>
               <div class="btn btn2" @click="onSelect('ak-bluecomponent','BLUE')"> BLUE </div>
               <div class="btn btn3"  @click="onSelect('ak-greencomponent','GREEN')"> GREEN </div>
         </div>
         <div class="comp-container">
              <keep-alive>
                <component :is="selectedcomponent">
                   {{ content  }}
                </component>
              </keep-alive>
         </div>
    </div>
</template>

<script>
import RedComponent from './components/RedComponent';
import GreenComponent from './components/GreenComponent';
import BlueComponent from './components/BlueComponent';
export default {
    components:{
      'ak-redcomponent':RedComponent,
      'ak-bluecomponent':BlueComponent,
      'ak-greencomponent':GreenComponent,
    },
    data(){
      return{
       selectedcomponent: 'ak-redcomponent',
       content:'red',
      }
    },
    methods:{
       onSelect(tab,col){
         this.selectedcomponent = tab;
         this.content = col;
       }
    }
}
</script>

<style>
   .container{
     display: flex;
     flex-direction: column;
     align-content: center;
     align-items: center;
     padding:20px;
     margin:auto;
   }
   .btncontainer{
       display:flex;
       flex-direction: row;
       justify-content: space-between;
       width: 300px;
       margin: 30px auto;
       background: rgba(51, 51, 51, 0.959);
       box-shadow: 1px 1px 20px 10px  rgba(51, 51, 51, 0.541);
       padding:30px;
   }
   .btn{
     padding:7px 14px;
     border-radius: 3px;
     color:#fff;
     font-weight: 900;
     font-family: Arial, Helvetica, sans-serif;
     cursor: pointer;
   }
   .btn:hover{
      box-shadow: 1px 1px 6px 3px  rgba(255, 255, 255, 0.767);
   }
   .btn1{
     background-color: crimson;
     }
    .btn1:hover{
     color: crimson;
     background: #fff;
       transition: 0.5s;
     }
     .btn3{
     background-color:green;
     }
     .btn3:hover{
     color:green;
     background: #fff;
       transition: 0.5s;
     }
     .btn2{
      background-color:rgb(17, 178, 228);
     }
     .btn2:hover{
      color:rgb(17, 178, 228);
      background: #fff;
        transition: 0.5s;
     }
     .comp-container{
       width: 300px;
       margin: 30px auto;
     }
     .bar{
       cursor: pointer;
       box-shadow: 1px 1px 20px 10px  rgba(51, 51, 51, 0.541);
       transition: 0.5s;
     }
     *{
       -webkit-user-select: none;
        -moz-user-select: none; 
        -khtml-user-select: none;
         -ms-user-select: none;
     }
</style>
