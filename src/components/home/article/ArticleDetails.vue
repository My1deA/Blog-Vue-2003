<template>
    <div class="main-layout">
        <!--文章-->
        <el-card>
            <!--标题-->
            <div>
                <h2>{{title}}</h2>
            </div>
            <!--分割线-->
            <div>
                <el-divider content-position="center">
                    <div class="font-info">
                        <i class="el-icon-user item">作者id: {{userId}}</i>
                        <i class="el-icon-folder item">分类于: {{type}}</i>
                        <i class="el-icon-time item">发布于: {{time}}</i>
                    </div>
                </el-divider>
            </div>

            <div class="main-card-layout">
                <!--简述-->
                <div>
                    <el-divider direction="vertical"></el-divider>
                    <span><b>引言</b></span>
                    <p class="main-card-content">{{resume}}</p>
                </div>
                <!--内容-->
                <div>
                    <el-divider direction="vertical"></el-divider>
                    <span><b>正文</b></span>
                    <p class="main-card-content">{{content}}</p>
                </div>
                <!--点赞 评论-->
                <div class="main-inline">
                    <el-button type="primary" size="small"><i class="el-icon-caret-top"></i>    赞同</el-button>
                    <el-button type="primary" size="small" icon="el-icon-caret-bottom"></el-button>
                    <div class="main-inline main-inline-text-button-layout">
                        <el-button class="font-info main-card-text-button" type="text" @click="showBox"><i class="el-icon-s-comment"></i>{{ isShow===false?'    评论':'    收起'}}</el-button>
                        <el-button class="font-info main-card-text-button" type="text"><i class="el-icon-s-promotion"></i>    分享</el-button>
                        <el-button class="font-info main-card-text-button" type="text"><i class="el-icon-star-on"></i>    收藏</el-button>
                        <el-button class="font-info main-card-text-button" type="text"><i class="el-icon-question"></i>    疑问</el-button>
                        <el-button class="font-info main-card-text-button" type="text"><i class="el-icon-more"></i></el-button>
                    </div>
                </div><br>
                <!--评论-->
                <el-collapse-transition>
                    <div class="box"  v-show="isShow">

                    </div>
                </el-collapse-transition>
            </div>
        </el-card>

        <!--回复-->
        <el-card>
            <el-form ref="form" :model="form" label-width="80px">
                <el-row>
                    <el-col :span="10" >
                        <el-form-item label="评论用户：">
                            <el-input v-model="cName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10" :offset="2">
                        <el-form-item label="评论用户：">
                            <el-date-picker v-model="cTime" type="datetime" placeholder="选择日期时间">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-form-item label="回复内容：">
                    <el-input type="textarea" v-model="comment"></el-input>
                </el-form-item>

                <el-row>
                    <el-col :span="10" >
                       <el-button>确定</el-button>
                    </el-col>
                    <el-col :span="10" :offset="2">
                        <el-button>取消</el-button>
                    </el-col>
                </el-row>

            </el-form>

        </el-card>
    </div>
</template>

<script>
    export default {

        name: 'ArticleDetails',

        data() {
            return {
                data: [],
                isShow: false,
                title: '测试题目',
                userId: '2',
                type: 'test',
                time: '2020-04-22 15:49:04',
                resume: '更新Github的项目的Readme',
                content: '  基于Nathaniel Rich在《纽约时报》上发表的文章《The Lawyer Who Became DuPont’s Worst Nightmare》，'
                    + '围绕罗伯特·比洛特展开，他担任辩护律师长达8年之久，他对化工巨头杜邦公司提起了环境诉讼，这场官司揭露了几十年来杜邦公司化学污染的历史'
                    + '拥有财富、名声、权力，这世界上的一切的男人 “海贼王”哥尔·D·罗杰，在被行刑受死之前说了一句话，让全世界的人都涌向了大海。“想要我的宝藏吗？'
                    + '如果想要的话，那就到海上去找吧，我全部都放在那里。”，世界开始迎接“大海贼时代”的来临 [10] '
                    + '时值“大海贼时代”，为了寻找传说中海贼王罗杰所留下的大秘宝“ONE PIECE”，无数海贼扬起旗帜，互相争斗。有一个梦想成为海贼王的少年叫路飞，'
                    + '他因误食“恶魔果实”而成为了橡皮人，在获得超人能力的同时付出了一辈子无法游泳的代价。十年后，路飞为实现与因救他而断臂的香克斯的约定而出海，'
                    + '他在旅途中不断寻找志同道合的伙伴，开始了以成为海贼王为目标的冒险旅程 [11]  。',
                praise: '2',

                cName:'匿名用户',
                cTime:'',
                comment:'',


            }
        },

        methods:{
            showBox:function () {
               this.isShow=!this.isShow;
            }
        }
    }
</script>

<style scoped>


    /*主界面布局*/
    .main-layout {
        margin: 50px auto 0 auto;
        width: 60%;
    }

    /*内容布局*/
    .main-card-layout {
        margin: 20px auto 0 auto;
        text-align: left;
        width: 87%;
    }

    /*内容*/
    .main-card-content {
        font-size: 16px;
        word-wrap: break-word;
        color: #333;
        margin-bottom: 15px;
        line-height: 24px;
        zoom: 1;
    }


    /*一行组件*/
    .main-inline {
        display: inline;
    }

    /*按钮*/
    .main-inline-text-button-layout {
        margin-left: 10px;
    }

    /*按钮*/
    .main-card-text-button {
        margin-right: 20px;
        margin-left: 20px;
        font-size: 15px;
    }

    /*评论 以及 回复*/
    .box{
        height:200px;
        width: 100%;
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

    /*段落空格*/
    p {
        text-indent: 2em;
    }


</style>