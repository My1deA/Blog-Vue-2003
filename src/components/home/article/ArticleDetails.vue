<template>
    <div class="main-layout">
        <!--文章-->
        <div>
            <el-card>
                <!--标题-->
                <div>
                    <h2>{{articleData.title}}</h2>
                </div>
                <!--分割线-->
                <div>
                    <el-divider content-position="center">
                        <div class="font-info">
                            <i class="el-icon-user item">作者id: {{articleData.userId}}</i>
                            <i class="el-icon-folder item">分类于: {{articleData.type}}</i>
                            <i class="el-icon-time item">发布于: {{articleData.time}}</i>
                        </div>
                    </el-divider>
                </div>

                <div class="main-article">
                    <!--简述-->
                    <div>
                        <el-divider direction="vertical"></el-divider>
                        <span><b>引言</b></span>
                        <p class="main-article-content">{{articleData.resume}}</p>
                    </div>
                    <!--内容-->
                    <div>
                        <el-divider direction="vertical"></el-divider>
                        <span><b>正文</b></span>
                        <p class="main-card-content">{{articleData.content}}</p>
                    </div>
                    <!--点赞 评论-->
                    <div class="main-inline">
                        <el-button type="primary" size="small"><i class="el-icon-caret-top"></i> 赞同</el-button>
                        <el-button type="primary" size="small" icon="el-icon-caret-bottom"></el-button>
                        <div class="main-inline text-button-layout">
                            <el-button class="font-info main-text-button" type="text" @click="showBoxComment"><i
                                    class="el-icon-s-comment"></i>{{ boxCommentVisiable===false?' 评论':' 收起'}}
                            </el-button>
                            <el-button class="font-info main-text-button" type="text"><i
                                    class="el-icon-s-promotion"></i> 分享
                            </el-button>
                            <el-button class="font-info main-text-button" type="text"><i
                                    class="el-icon-star-on"></i> 收藏
                            </el-button>
                            <el-button class="font-info main-text-button" type="text"><i
                                    class="el-icon-question"></i> 疑问
                            </el-button>
                            <el-button class="font-info main-text-button" type="text"><i class="el-icon-more"></i>
                            </el-button>
                        </div>
                    </div>
                    <br>
                    <!--评论-->
                   <el-collapse-transition>
                        <div class="box"  v-show="boxCommentVisiable">

                            <div v-for="(item,i) in commentList" :key="i">
                                <!--上文布局-->
                                <div>
                                    <div class="comment-logo">
                                        <el-image src="https://pic4.zhimg.com/80/v2-e69b64ffc292924e50d8f3e65602e909_720w.jpg"></el-image>
                                    </div>
                                    <div class="comment-header main-inline">
                                        <div class="comment-from-id">匿名用户 {{item.userId}} </div>
                                        <div class="comment-time">{{item.time}}</div>
                                    </div>

                                </div>

                                <!--内容-->
                                <div class="comment-content-layout">
                                    <!--主体-->
                                    <p>{{item.content}}</p>

                                    <div>
                                        <el-button class="main-inline font-info" type="text"><i class="el-icon-caret-top mini-item"></i>赞同</el-button>
                                        <el-button class="main-inline font-info" type="text"><i class="el-icon-caret-bottom mini-item"></i>反对</el-button>
                                        <el-button class="main-inline font-info" type="text"><i class="el-icon-chat-line-square mini-item"></i>回复</el-button>
                                        <el-button class="main-inline font-info" type="text"><i class="el-icon-s-flag mini-item"></i>举报</el-button>
                                        <el-button class="main-inline font-info" type="text">更多 <i class="el-icon-more"></i></el-button>
                                    </div>

                                    <!--部分回复列表-->
                                    <div v-for="(item2,i) in item.replyList.slice(0,3)" :key="i">
                                        <el-divider></el-divider>
                                        <!--信息-->
                                        <div>
                                            <div class="reply-logo">
                                                <el-image src="https://pic4.zhimg.com/80/v2-e69b64ffc292924e50d8f3e65602e909_720w.jpg"></el-image>
                                            </div>
                                            <div class="reply-header main-inline">
                                                <div class="reply-from-id">匿名用户 {{item2.fromId}}</div>
                                                <div class="reply-to-id font-info">回复</div>
                                                <div class="reply-to-id font-info">用户id {{item2.toId}} </div>
                                                <div class="reply-time">{{item2.time}}</div>
                                            </div>
                                        </div>

                                        <!--内容-->
                                        <div class="reply-content-layout">
                                            <p >{{item2.content}}</p>
                                            <div>
                                                <el-button class="main-inline font-info" type="text"><i class="el-icon-caret-top mini-item"></i>赞同</el-button>
                                                <el-button class="main-inline font-info" type="text"><i class="el-icon-chat-line-square mini-item"></i>回复</el-button>
                                            </div>
                                        </div>
                                    </div>

                                    <el-button class="main-inline font-info" type="text" @click="showDialogReply(item.id)">展开其他回复...</el-button>

                                </div>

                                <el-divider></el-divider>
                            </div>
                        </div>
                    </el-collapse-transition>

                </div>
            </el-card>
        </div>

        <!--更多回复-->
        <el-dialog title="HelloWorld" :visible.sync="dialogReplyVisible" :width="948">
            <div style="text-align: left">
                <!--上文布局-->
                <div>
                    <div class="comment-logo">
                        <el-image src="https://pic4.zhimg.com/80/v2-e69b64ffc292924e50d8f3e65602e909_720w.jpg"></el-image>
                    </div>
                    <div class="dialog-comment-header main-inline">
                        <div class="comment-from-id">匿名用户 {{replyData.userId}}</div>
                        <div class="comment-time">{{replyData.time}}</div>
                    </div>

                </div>

                <!--内容-->
                <div class="comment-content-layout">
                    <!--主体-->
                    <p>{{replyData.content}}</p>

                    <div>
                        <el-button class="main-inline font-info" type="text"><i class="el-icon-caret-top mini-item"></i>赞同</el-button>
                        <el-button class="main-inline font-info" type="text"><i class="el-icon-caret-bottom mini-item"></i>反对</el-button>
                        <el-button class="main-inline font-info" type="text"><i class="el-icon-chat-line-square mini-item"></i>回复</el-button>
                        <el-button class="main-inline font-info" type="text"><i class="el-icon-s-flag mini-item"></i>举报</el-button>
                        <el-button class="main-inline font-info" type="text">更多 <i class="el-icon-more"></i></el-button>
                    </div>

                    <!--部分回复列表-->
                    <div v-for="(item2,i) in replyData.replyList" :key="i">
                        <el-divider></el-divider>
                        <!--信息-->
                        <div>
                            <div class="reply-logo">
                                <el-image src="https://pic4.zhimg.com/80/v2-e69b64ffc292924e50d8f3e65602e909_720w.jpg"></el-image>
                            </div>
                            <div class="dialog-reply-header main-inline">
                                <div class="reply-from-id">匿名用户 {{item2.fromId}}</div>
                                <div class="reply-to-id font-info">回复</div>
                                <div class="reply-to-id font-info">用户id {{item2.toId}}</div>
                                <div class="reply-time">{{item2.time}}</div>
                            </div>
                        </div>

                        <!--内容-->
                        <div class="reply-content-layout">
                            <p >{{item2.content}}</p>
                            <div>
                                <el-button class="main-inline font-info" type="text"><i class="el-icon-caret-top mini-item"></i>赞同</el-button>
                                <el-button class="main-inline font-info" type="text"><i class="el-icon-chat-line-square mini-item"></i>回复</el-button>
                            </div>
                        </div>
                    </div>

                </div>

                <el-divider></el-divider>
            </div>
            <el-button type="primary" @click="dialogReplyVisible = false">确 定</el-button>
            <el-button @click="dialogReplyVisible = false">取 消</el-button>
        </el-dialog>

        <!--评论提交-->
        <div class="main-comment-submit">
            <el-card>
                <el-form class="main-comment-form" ref="commentForm"  :rules="rules" :model="commentForm" label-width="120px">
                    <el-row>
                        <el-col :span="8">
                            <el-form-item label="评论用户：" >
                                <el-input v-model="commentForm.userId" placeholder="匿名用户"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8" :offset="2">
                            <el-form-item label="评论时间：" prop="time">
                                <el-date-picker v-model="commentForm.time" type="datetime" placeholder="选择日期时间">
                                </el-date-picker>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="20">
                            <el-form-item label="回复内容：" prop="comment">
                                <el-input type="textarea" v-model="commentForm.content" :rows="8"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>


                    <el-row>
                        <el-col :span="2" :offset="16">
                            <el-button type="primary" @click="submit">确定</el-button>
                        </el-col>
                        <el-col :span="2">
                            <el-button type="primary" @click="clear('commentForm')">重置</el-button>
                        </el-col>
                       <!-- <el-col :span="2" style="visibility: hidden">
                            <el-button type="primary" @click="submit2">确定</el-button>
                        </el-col>-->
                    </el-row>

                </el-form>

            </el-card>
        </div>

        <!--回到顶部-->
        <el-backtop :bottom="100">
            <div class="back-top">UP</div>
        </el-backtop>
    </div>
</template>

<script>
    //import CommentList from "@/components/home/article/common/CommentList";

    export default {

        name: 'ArticleDetails',
        data() {
            var validateTime = function(rule,value,callback){
                if(value === ''){
                    return callback(new Error('请填写回答时间'));
                }
                return callback();
            };
            var validateComment = function (rule,value,callback) {
                if(value === ''){
                    return callback(new Error('请填写评论'));
                }
                return callback();
            };

            return {
                articleData: {},//文章数据
                commentList:[],//评论列表
                replyData:{},//单个评论的所有回复
                boxCommentVisiable: false,//评论
                dialogReplyVisible: false,//更多回复

                //提交评论数据
                commentForm:{
                    userId:'',
                    time:'',
                    content:'',
                },

                //规则
                rules:{
                    time:[{validator: validateTime, trigger: 'blur'}],
                    comment:[{validator: validateComment, trigger:'blur' }],
                },

            }

        },

        mounted: function () {
            //this.loadArticle();
        },

        methods: {

            /*获取后端相应文章*/
            loadArticle: function(){
                var _this=this;
                _this.$axios.get("http://localhost:8080/article/details/"+_this.$route.params.id)
                    .then(function (data) {
                        console.log(data.data);
                        _this.articleData=data.data.data;
                    })
            },

            /*展示评论*/
            showBoxComment: function () {
                var _this=this;
                _this.boxCommentVisiable = !_this.boxCommentVisiable;
            },
            /*展示所有回复*/
            showDialogReply:function(id){
                console.log(id);
                var _this=this;
                _this.dialogReplyVisible = !_this.dialogReplyVisible;
                //_this.loadReply(id);
            },

            /*获取一个评论的所有回复信息*/
            loadReply:function(id){
                var _this=this;
                _this.$axios.get("http://localhost:8080/comment/"+id)
                    .then(function (data) {
                        _this.replyData=data.data.data;
                    })
            },


            /*提交评论*/
            submit: function () {
                var _this=this;
                _this.$axios.post("http://localhost:8080/comment/add",{
                    articleId:12,
                    userId:1,
                    content:_this.commentForm.content,
                    time:_this.commentForm.time,
                }).then(function (data) {
                    console.log(data.data.message);
                });
            },

            /*清除输入*/
            clear: function (form) {
                this.$refs[form].resetField();
            },

            /*qs 提交评论*/
            submit2: function () {
                var _this=this;
                _this.$axios.post("http://localhost:8080/comment/add2",this.$qs.stringify({
                    articleId:12,
                    userId:_this.commentForm.userId,
                    content:_this.commentForm.content,
                    time:_this.commentForm.time,
                })).then(function (data) {
                    console.log(data.data.message);
                });
            },
        },


    }
</script>

<style scoped>

    /*评论 */
    .box {
        margin:20px auto 30px auto;
        width: 100%;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    }

    /*评论具体*/
    .comment-content-layout{
        margin: 0 60px 0 60px ;
    }
    .comment-header{
        width:850px;
    }
    .comment-logo{
        float: left;
        margin: 10px 0 0 20px;
        width: 32px;
        height: 32px;
    }
    .comment-from-id{
        float: left;
        margin: 20px 0 0 10px;
        font-size: 15px;
    }
    .comment-time{
        float: right;
        margin: 24px 10px 0 0;
        color: gray;
        font-size: 14px;
    }

    /*回复具体*/
    .reply-content-layout{
        margin: 0 60px 0 60px ;
    }
    .reply-header{
        width:770px
    }
    .reply-logo{
        float: left;
        margin: 10px 0 0 20px;
        width: 32px;
        height: 32px;
    }
    .reply-from-id{
        float: left;
        margin: 20px 0 0 10px;
        font-size: 15px;
    }
    .reply-to-id{
        float: left;
        margin: 20px 0 0 10px;
        font-size: 15px;
    }
    .reply-time{
        float: right;
        margin: 24px -12px 0 0;
        color: gray;
        font-size: 14px;
    }

    /*对话框 评论 回复*/
    .dialog-comment-header{
        width: 810px;
    }

    .dialog-reply-header{
        width: 730px;
    }

    /*主界面布局*/
    .main-layout {
        margin: 50px auto 0 auto;
        width: 60%;
    }

    /*内容布局*/
    .main-article {
        margin: 20px auto 0 auto;
        text-align: left;
        width: 87%;
    }

    /*内容*/
    .main-article-content {
        font-size: 16px;
        word-wrap: break-word;
        color: #333;
        margin-bottom: 15px;
        line-height: 24px;
        zoom: 1;
    }


    /*一行组件*/
    .main-inline {
        display: inline-block;
    }

    /*按钮*/
    .text-button-layout {
        margin-left: 10px;
    }

    /*按钮*/
    .main-text-button {
        margin-right: 20px;
        margin-left: 20px;
        font-size: 15px;
    }

    /*提交评论布局*/
    .main-comment-submit {
        margin: 65px auto 0 auto;
        text-align: left;
    }

    /*提交评论布局*/
    .main-comment-form {
        margin: 0 auto;
        width: 87%;
    }


    /*字体颜色*/
    .font-info {
        color: gray;
    }

    /*间距*/
    .item {
        margin-right: 10px;
        margin-left: 10px;
    }
    .mini-item {
        margin-right:6px;
    }


    /*回到顶部*/
    .back-top {
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0, 0, 0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
    }

    /*段落空格*/
    .primary-p {
        text-indent: 2em;
    }




</style>

<!--
    <comment-list @showDialogReplyEvent="showDialogReply($event)"></comment-list>


    <transition name="draw">
        <div class="box"  v-show="isShow">
            <div style="height: 500px"></div>
        </div>
     </transition>
  /*定义Box*/
    .draw-enter-active, .draw-leave-active {
        transition: all 1s ease;
    }
    .draw-enter, .draw-leave-to {
        height: 0;
    }
-->