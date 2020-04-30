<template>
    <div class="form-layout">
        <el-form ref="form" :model="form" :rules="rules" label-width="80px">

            <el-row>
                <el-col :span="12">
                    <el-form-item label="文章名称" prop="title">
                        <el-input v-model="form.title" placeholder="输入文章名称"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="6">
                    <el-form-item label="文章分类" prop="type">
                        <el-input v-model="form.type" placeholder="输入文章分类"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="发布时间" prop="time">
                        <el-date-picker v-model="form.time" value-format="yyyy-MM-dd HH:mm:ss" type="datetime" placeholder="选择日期时间">
                        </el-date-picker>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <el-form-item label="文章简述" prop="resume">
                        <el-input type="textarea" v-model="form.resume" placeholder="输入文章简述"></el-input>
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

            <el-row>
                <el-col :span="4">
                    <el-form-item>
                        <el-select v-model="form.state" placeholder="请选择文章状态">
                            <el-option label="发布" value="release"></el-option>
                            <el-option label="草稿" value="draft"></el-option>
                            <el-option label="回收站" value="recycle"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="4">
                    <el-form-item>
                        <el-button type="primary" @click="onUpdate">保存</el-button>
                        <el-button @click="onCancal('form')">取消</el-button>
                    </el-form-item>
                </el-col>

            </el-row>

        </el-form>

    </div>
</template>

<script>
    export default {
        name: 'AdminArticleEdit',
        data() {
            var validateTitle=function (rule,value,callback) {
                if(value === ''){
                    return callback(new Error("文章名称不能为空"));
                }
                return callback();
            };
            var validateType=function (rule,value,callback) {
                return callback();
            };
            var validateTime=function (rule,value,callback) {
                return callback();
            };
            var validateResume=function (rule,value,callback) {
                return callback();
            };


            return {
                form: {},//表格数据
                rules:{
                    title:[{validator:validateTitle, trigger:"blur"}],
                    type:[{validator:validateType, trigger:"blur"}],
                    time:[{validtaor:validateTime, trigger:"blur"}],
                    resume:[{validator:validateResume, trigger:"blur"}],
                },
            }
        },

        methods:{
            loadArticle:function(){
                var _this=this;
                _this.$axios.get("http://localhost:8080/article/details/"+this.$route.params.id)
                    .then(function (data) {
                        _this.form=data.data.data;
                })
            },


            onUpdate:function () {
                var _this=this;
                _this.$axios.post("http://loaclhost:8080/save",{
                    userId:_this.form.userId,
                    title:_this.form.title,
                    type:_this.form.type,
                    resume:_this.form.resume,
                    content:_this.form.content,
                    state:_this.form.state,
                    praise:_this.form.priase,
                }).then(function (data) {
                    console.log(data.data.code);
                })
            },

            onCancal:function (form) {
                this.$refs[form].resetFields();
            }
        },

        mounted:function () {
            this.loadArticle();
        },

    }
</script>

<style scoped>

    /*文章修改布局*/
    .form-layout {
        margin: 50px 0 0 0;
        width: 1500px;
        text-align: left;
    }

    .item {
        margin-right: 10px;
    }

    .mini-item {
        margin-right: 7px;
    }

    .mavon-editor {
        min-height: 450px;
        max-height: 450px;
    }

</style>