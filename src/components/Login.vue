<template>
    <div>
        <img alt="Vue logo" src="../assets/logo.png">
        <el-row>
            <el-col :span="6" :offset="9">
                <el-card shadow="hover">
                    <div>login</div>
                    <br><br>
                    <el-form :model="loginForm"  :rules="rules" ref="loginForm" status-icon label-width="100px">
                        <el-form-item label="username" prop="username">
                            <el-input type="text" v-model="loginForm.username" ></el-input>
                        </el-form-item>
                        <el-form-item label="password" prop="password" >
                            <el-input type="password" v-model="loginForm.password"></el-input>
                        </el-form-item>

                        <el-form-item>
                            <el-checkbox-group v-model="loginForm.remember" class="checkGroupWide">
                                <el-checkbox label="记住密码" ></el-checkbox>
                                <el-checkbox label="自动登录"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>

                        <el-form-item>
                            <el-button type="primary" class="buttonRightWide" v-on:click="login">登录</el-button>
                            <el-button type="primary" class="buttonLeftWide">清除</el-button>
                        </el-form-item>
                    </el-form>

                </el-card>
            </el-col>
        </el-row>
    </div>


</template>

<script>
    export default {
        name: 'Login',//模块名字
        data() {
            //函数
            var validateUsername=function (rule,value,callback) {
                if(value===''){
                    callback(new Error('请输入用户名'));
                }else{
                    callback();
                }
            };
            var validatePassword = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    callback();
                }
            };
            //数据
            return {
                responseResult: [],

                loginForm: {
                    username: '',
                    password: '',
                    remember:['记住密码','自动登录'],
                },
                rules:{
                    password:[{ validator:validatePassword, trigger:'blur'},],
                    username:[{ validator:validateUsername, trigger:'blur'},],

                   /* //默认rule 如果使用
                   username:[
                        {required: true, message: '请输入username', trigger: 'blur'},
                        { min: 1, max: 8, message: '长度在 1 到 8 个字符', trigger: 'blur' }
                    ],*/
                }
            }

        },


        methods: {
            login: function () {
                //alert(this.loginFrom.username+" "+this.loginFrom.password);
                var _this = this;
                this.$axios.post('http://localhost:8080/user/login',
                    this.$qs.stringify({
                        username: this.loginForm.username,
                        password: this.loginForm.password
                    })).then(function (data) {
                        console.log(data.data.message);
                        //_this.$router.push("/home");
                        _this.$store.commit('login', _this.loginForm);
                        var path = _this.$route.query.redirect;
                        _this.$router.replace({path: path === '/' || path === undefined ? '/home' : path});
                    })
            },
            clear: function () {

            }
        }

    }
</script>

<style scoped>

    .checkGroupWide{
        margin: 0 0 0 -130px;
    }

    .buttonRightWide {
        width: 100px;
        margin: 0 20px 0 -100px;
    }

    .buttonLeftWide {
        width: 100px;
    }

</style>


<!--    <div>
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
    </div>-->