<template>
    <div class="div-content">
        <el-form ref="form" :model="form" label-width="80px" :rules="rules">
            <el-row>
                <el-col :span="12">
                    <el-form-item label="文章名称" prop="title">
                        <el-input v-model="form.title" placeholder="请输入文章名称"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>


            <el-row>
                <el-col :span="6">
                    <el-form-item label="文章分类" prop="type">
                        <el-input v-model="form.type" placeholder="请输入文章分类"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="6" >
                    <el-form-item label="发布时间" prop="time">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.time" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                </el-col>

            </el-row>

            <el-row>
                <el-col :span="12">
                    <el-form-item label="文章简述" prop="resume">
                        <el-input type="textarea" v-model="form.resume" placeholder="请输入文章简述"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col>
                    <el-form-item label="文章内容" prop="content">
                        <mavon-editor class="mavon-editor" v-model="form.content" :ishljs = "true"/>
                    </el-form-item>
                </el-col>
            </el-row>


            <el-form-item>
                <el-select class="item" v-model="form.state" placeholder="请选择文章状态"  prop="state">
                    <el-option label="发布" value="release"></el-option>
                    <el-option label="草稿" value="draft"></el-option>
                    <el-option label="回收站" value="recycle"></el-option>
                </el-select>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>

        </el-form>


    </div>
</template>

<script>
    export default {
        name: 'AdminAddArticle',
        data() {
            var validateTitle=function(rule,value,callback){
                if(!value){
                    callback(new Error('文章题目不能为空'));
                }else{
                    callback();
                }
            };
            var validateType=function (rule,value,callback) {
                callback();
            };
            var validateTime=function (rule,value,callback) {
                callback();
            };
            var validateResume=function (rule,value,callback) {
                callback();
            };
            var validateContent=function (rule,value,callback) {
                callback();
            };
            var validateState=function (rule,value,callback) {
                callback();
            }


            return {
                form: {
                    title: '',
                    type: '',
                    time:'',
                    resume: '',
                    content: '',
                    state: '',
                    user_id:'1',
                    like: 0,
                },
                rules:{
                    title:[{validator: validateTitle, trigger:'blur'}],
                    type:[{validator:validateType,trigger:'blur'}],
                    time:[{validator:validateTime,trigger:'blur'}],
                    resume:[{validator:validateResume,trigger:'blur'}],
                    content:[{validator:validateContent,trigger:'blur'}],
                    state:[{validator:validateState,trigger:'blur'}]
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    }

</script>


<style scoped>
    .div-content{
        text-align: left;
        width: 1500px;
        margin: 50px auto 0 0;
    }

    .item{
        margin-right: 10px;
    }

    .mavon-editor{
        min-height: 450px;
        max-height: 450px;
    }

</style>