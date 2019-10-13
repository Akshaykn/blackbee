<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p> 
        <button @click="changeName"> Change username </button>
        <p> user name is {{name}}  </p>
        <p> user age is  {{age}}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :Myname="name" 
                                  @resetname ="name = $event"
                                  :resetFunc = "resetName" 
                                  :userAge="age"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :userage = "age"
                                @changeAge="age = $event"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        data:function(){
            return {
               name : 'akshay',
               age:27,
            };
        },
        methods:{
            changeName:function(){
                this.name = 'Akshay Krishna';
            },
            resetName(){
                this.name= 'akshay';
            }
        },
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
