<template>
    <div>
        <div>Login</div><br><br>

        <div>
            <span>username: </span>
            <input type="text" placeholder="请输入用户名" v-model="loginFrom.username" >
        </div><br>
        <div>
            <span>password: </span>
            <input type="password" placeholder="请输入密码" v-model="loginFrom.password" >
        </div><br>
        <div>
            <input type="button" value="登录" v-on:click="login" class="buttonRightWide">
            <input type="button" value="清除" v-on:click="clear" class="buttonLeftWide">
        </div>
    </div>
</template>

<script>
    export default {
        name:'Login',
        data(){
            return{
                loginFrom:{
                    username:'',
                    password:'',
                },
                responseResult:[]
            }
        },

        methods:{
            login: function(){
                //alert(this.loginFrom.username+" "+this.loginFrom.password);
                this.$axios.post('http://localhost:8080/user/login',
                    this.$qs.stringify({
                        username:this.loginFrom.username,
                        password:this.loginFrom.password
                    })).then(function (data) {
                    alert(data.data.code);
                })
            },
            clear:function(){

            }
        }

    }
</script>

<style scoped>

    .buttonRightWide{
        margin-right: 30px;
    }

    .buttonLeftWide{
        margin-left: 30px;
    }

</style>