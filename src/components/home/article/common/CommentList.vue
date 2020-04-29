<template>
    <div>
        <div v-for="(item,i) in 3" :key="i">
            <!--上文布局-->
            <div>
                <div class="comment-logo">
                    <el-image src="https://pic4.zhimg.com/80/v2-e69b64ffc292924e50d8f3e65602e909_720w.jpg"></el-image>
                </div>
                <div class="comment-header main-inline">
                    <div class="comment-from-id">匿名用户 </div>
                    <div class="comment-time">2020-04-29 16:05:29</div>
                </div>

            </div>

            <!--内容-->
            <div class="comment-content-layout">
                <!--主体-->
                <p>JetBrains may use cookies and my IP address to
                    collect individual statistics and to provide me with
                    personalized offers and ads subject to the Privacy
                    Policy and the Terms of Use. JetBrains may use
                    third-party services for this purpose. I can revoke
                    my consent at any time by visiting the Opt-Out page.</p>

                <div>
                    <el-button class="main-inline font-info" type="text"><i class="el-icon-caret-top mini-item"></i>赞同</el-button>
                    <el-button class="main-inline font-info" type="text"><i class="el-icon-caret-bottom mini-item"></i>反对</el-button>
                    <el-button class="main-inline font-info" type="text"><i class="el-icon-chat-line-square mini-item"></i>回复</el-button>
                    <el-button class="main-inline font-info" type="text"><i class="el-icon-s-flag mini-item"></i>举报</el-button>
                    <el-button class="main-inline font-info" type="text">更多 <i class="el-icon-more"></i></el-button>
                </div>

                <!--部分回复列表-->
                <div v-for="(item2,i) in 3" :key="i">
                    <el-divider></el-divider>
                    <!--信息-->
                    <div>
                        <div class="reply-logo">
                            <el-image src="https://pic4.zhimg.com/80/v2-e69b64ffc292924e50d8f3e65602e909_720w.jpg"></el-image>
                        </div>
                        <div class="reply-header main-inline">
                            <div class="reply-from-id">匿名用户</div>
                            <div class="reply-to-id font-info">回复</div>
                            <div class="reply-to-id font-info">用户id</div>
                            <div class="reply-time">2020-04-29 18:23:57</div>
                        </div>
                    </div>

                    <!--内容-->
                    <div class="reply-content-layout">
                        <p >JetBrains may use cookies and my IP address</p>
                        <div>
                            <el-button class="main-inline font-info" type="text"><i class="el-icon-caret-top mini-item"></i>赞同</el-button>
                            <el-button class="main-inline font-info" type="text"><i class="el-icon-chat-line-square mini-item"></i>回复</el-button>
                        </div>
                    </div>
                </div>

                <el-button class="main-inline font-info" type="text" @click="showDialogReply(1)">展开其他回复...</el-button>

            </div>

            <el-divider></el-divider>
        </div>
    </div>

</template>

<script>
    export default {
        name:"CommentList",
        data(){
            return{
                commentData:[],//评论列表
            }
        },

        methods:{
            /*获取后端相应部分评论以及回复*/
            loadComment: function(){
                var _this=this;
                _this.$axios.get("http://localhost:8080/comment/"+_this.$route.params.id+"/1/3")
                    .then(function (data) {
                        _this.commentData=data.data.data;
                });
            },

            /*向父组件传值*/
            showDialogReply:function(id){
                this.$emit('showDialogReplyEvent',id);
            }
        },


        mounted:function(){

        },
    }

</script>

<style scoped>

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



    /*一行组件*/
    .main-inline {
        display: inline-block;
    }



    /*按钮*/
    .text-button-layout {
        margin-left: 10px;
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

    /*段落空格*/
    .start-p {
        text-indent: 2em;
    }


</style>
