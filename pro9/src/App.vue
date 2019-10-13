<template>
  <div>
            <h1>{{ msg | toUppercase | to-lowercase}} </h1>
            <input v-model="filteredfruit">
            <ul>
              <li v-for="(fruit,index) in filteredfruits" :key="index">{{ fruit | toUppercase}} </li>
            </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'akshay Krishna',
      filteredfruit:'',
      fruits:['mango','orange','banana','grape'],
    }
  },
  filters:{
     toUppercase(value){
        return value.toUpperCase();
     },
  },
  computed:{
     filteredfruits(){
       return this.fruits.filter((element)=>{
           return  element.match(this.filteredfruit);     
       })
     }
  }
}
</script>

<style>

h1{
  font-weight: normal;
}


</style>
