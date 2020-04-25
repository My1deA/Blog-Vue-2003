<template>
    <div class="main-layout">
        <!--文章-->
        <div>
            <el-card>
                <!--标题-->
                <div>
                    <h2>{{data.title}}</h2>
                </div>
                <!--分割线-->
                <div>
                    <el-divider content-position="center">
                        <div class="font-info">
                            <i class="el-icon-user item">作者id: {{data.userId}}</i>
                            <i class="el-icon-folder item">分类于: {{data.type}}</i>
                            <i class="el-icon-time item">发布于: {{data.time}}</i>
                        </div>
                    </el-divider>
                </div>

                <div class="main-article">
                    <!--简述-->
                    <div>
                        <el-divider direction="vertical"></el-divider>
                        <span><b>引言</b></span>
                        <p class="main-article-content">{{data.resume}}</p>
                    </div>
                    <!--内容-->
                    <div>
                        <el-divider direction="vertical"></el-divider>
                        <span><b>正文</b></span>
                        <p class="main-card-content">{{data.content}}</p>
                    </div>
                    <!--点赞 评论-->
                    <div class="main-inline">
                        <el-button type="primary" size="small"><i class="el-icon-caret-top"></i> 赞同</el-button>
                        <el-button type="primary" size="small" icon="el-icon-caret-bottom"></el-button>
                        <div class="main-inline text-button-layout">
                            <el-button class="font-info main-text-button" type="text" @click="showBox"><i
                                    class="el-icon-s-comment"></i>{{ isShow===false?' 评论':' 收起'}}
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
                        <div class="box"  v-show="isShow">

                            <div v-for="(item,i) in 3" :key="i">
                                <!--上文布局-->
                                <div>
                                    <div class="main-comment-logo">
                                        <el-image src="https://pic4.zhimg.com/80/v2-e69b64ffc292924e50d8f3e65602e909_720w.jpg"></el-image>
                                    </div>
                                    <div class="main-inline">
                                        <div class="main-comment-from-id">匿名用户</div>
                                        <div class="main-comment-time">2020-04-25 11:13:31</div>
                                    </div>

                                </div>

                                <!--内容-->
                                <div class="main-comment-content-layout">
                                    <!--主体-->
                                    <p>多看看篮球足球就明白了，选手和经纪人都是唱双簧的，你要说文学圈里有可能作家被经纪人蒙骗我还信，职业选手关于转会的事，
                                        还是自己亲人，一点都不知道？ning直播说了阿水自己试训了几乎所有队伍，你觉得他是真啥也不知道去的吗？多看看世界，行吧
                                    </p>

                                    <div>
                                        <el-button class="main-inline font-info" type="text"><i class="el-icon-caret-top mini-item"></i>赞同</el-button>
                                        <el-button class="main-inline font-info" type="text"><i class="el-icon-caret-bottom mini-item"></i>反对</el-button>
                                        <el-button class="main-inline font-info" type="text"><i class="el-icon-chat-line-square mini-item"></i>回复</el-button>
                                        <el-button class="main-inline font-info" type="text"><i class="el-icon-s-flag mini-item"></i>举报</el-button>
                                        <el-button class="main-inline font-info" type="text" @click="dialogFormVisible = true">展开其他回复...</el-button>
                                    </div>

                                    <!--更多回复-->
                                    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
                                        <el-form>
                                            <el-form-item label="活动名称" :label-width="100">
                                                <el-input  autocomplete="off"></el-input>
                                            </el-form-item>
                                            <el-form-item label="活动区域" :label-width="1000">
                                                <el-select placeholder="请选择活动区域">
                                                    <el-option label="区域一" value="shanghai"></el-option>
                                                    <el-option label="区域二" value="beijing"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-form>
                                        <div slot="footer" class="dialog-footer">
                                            <el-button @click="dialogFormVisible = false">取 消</el-button>
                                            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                                        </div>
                                    </el-dialog>
                                </div>
                                <el-divider></el-divider>
                            </div>
                        </div>
                    </el-collapse-transition>

                   <!--<transition name="draw">
                        <div class="box"  v-show="isShow">
                            <div style="height: 500px"></div>
                        </div>
                    </transition>-->
                </div>
            </el-card>
        </div>

        <!--回复-->
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
                data: {},
                isShow: false,//评论
                dialogFormVisible: false,//更多回复
                //规则
                rules:{
                    time:[{validator: validateTime, trigger: 'blur'}],
                    comment:[{validator: validateComment, trigger:'blur' }],
                },

                /*测试数据*/
                commentForm:{
                    userId:'',
                    time:'',
                    content:'',
                },

            }

        },

        mounted: function () {
            this.loadArticle();
        },

        methods: {

            /*获取后端相应文章*/
            loadArticle: function(){
                var _this=this;
                _this.$axios.get("http://localhost:8080/article/details/"+_this.$route.params.id)
                    .then(function (data) {
                        console.log(data.data);
                        _this.data=data.data.data;
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


            /*展示评论*/
            showBox: function () {
                var _this=this;
                _this.isShow = !_this.isShow;
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

    /*评论 */
    .box {
        margin:20px auto 30px auto;
        width: 100%;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    }
    /*评论具体*/
    .main-comment-logo{
        float: left;
        margin: 10px 0 0 20px;
        width: 32px;
        height: 32px;
    }
    .main-comment-from-id{
        float: left;
        margin: 20px 0 0 10px;
        font-size: 15px;
    }
    .main-comment-time{
        float: right;
        margin: 20px 10px 0 650px;
        color: gray;
        font-size: 14px;
    }
    .main-comment-content-layout{
        margin: 0 50px 0 50px ;
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
    p {
        text-indent: 2em;
    }

    /*定义Box*/
    .draw-enter-active, .draw-leave-active {
        transition: all 1s ease;
    }
    .draw-enter, .draw-leave-to {
        height: 0;
    }


</style>