<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name is {{Myname}}</p>
        <p>User age is {{userAge}} </p>
        <button @click="resetName"> Reset name1 </button>
        <button @click="resetFunc"> Reset name2 </button>
    </div>
</template>

<script>
     import {eventBus} from '../main';
     export default{
        // props:['name'],// without validation
       /* props:{
            name:String, // with validation....
        }*/
        props:{
            Myname:{
                type:String,
                default:'akshay',
            },
            resetFunc:Function,
            userAge:Number,
        },
        methods:{
            resetName:function(){
                this.Myname = 'akshay',
                this.$emit('resetname', this.Myname);
            }
        },
        created(){
            eventBus.$on('changeAge',(data)=>{
                this.userAge = data;
            })
        }
     }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
