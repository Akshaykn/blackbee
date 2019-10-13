<template>
    <div> 
            <p>the status is {{status}}</p>
             <hr>
             <button @click="changestatus"> click me </button>
    </div> 
</template>
<script>
export default {
    data:function(){
        return {
           status :'critical',
        };
    },
    methods:{
        changestatus(){
            if(this.status === 'critical') {
            this.status = 'normal';
            } else{
                this.status = 'critical';
            }
        }
    }  
}
</script>