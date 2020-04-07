<template>
    <div>

        <el-row>
            <el-col :span="18">
                <!--走马灯-->
                <el-card class="main-content" shadow="always">
                    <el-carousel class="main-carousel"  height="400px" :interval="10000">
                        <el-carousel-item v-for="item in imageList" :key="item.id">
                            <img v-bind:src="item.url">
                        </el-carousel-item>
                    </el-carousel>
                </el-card>

            </el-col>

            <el-col :span="6">
                <!--main userinfo card-->
                <el-card class="main-userInfo" shadow="hover">
                    <span class="text-common">关于作者</span>
                    <el-divider></el-divider>
                    <el-row>
                        <el-col :span="8">
                            <img class="main-headLogo" v-bind:src="headlogo.url">
                        </el-col>
                        <el-col :span="8" :offset="4" style="margin-top: 20px">
                            <h4 class="text-common">Mr丶LuoT4</h4>
                            <h5>冇事少上网</h5>
                        </el-col>
                    </el-row>
                    <el-divider></el-divider>
                    <el-row class="text-tip" >
                        <el-col :span="6" :offset="2">收藏</el-col>
                        <el-col :span="6" :offset="2">文章</el-col>
                        <el-col :span="6" :offset="2">关注者</el-col>
                    </el-row>
                    <el-row class="text-common" :gutter="20">
                        <el-col :span="6" :offset="2">10</el-col>
                        <el-col :span="6" :offset="2">5</el-col>
                        <el-col :span="6" :offset="2">2</el-col>
                    </el-row><br>

                    <el-row class="text-common" :gutter="40">
                        <el-col :span="10" :offset="1">
                            <el-button type="primary" icon="el-icon-plus">关注他</el-button>
                        </el-col>
                        <el-col :span="10" :offset="1">
                            <el-button icon="el-icon-chat-dot-round">发私信</el-button>
                        </el-col>
                    </el-row>
                </el-card>
            </el-col>
        </el-row>



        <!--main 时间线-->
        <el-row>
            <el-col :span="18">
                <el-card class="main-content" shadow="always">
                    <!--分隔线-->
                    <div class="main-timeLine"><i class="el-icon-edit" style="text-align: left">最近更新</i></div>
                    <el-divider></el-divider>
                    <!--时间线-->
                    <el-timeline class="main-timeLine">
                        <el-timeline-item v-for="item in timeList" :key="item.id" :timestamp="item.timestamp" placement="top">
                            <el-card>
                                <h4>{{item.title}}</h4>
                                <p>{{item.content}}</p>
                            </el-card>
                        </el-timeline-item>

                    </el-timeline>
                </el-card>
            </el-col>

        </el-row>

        <!---->
        <el-backtop  :bottom="100">
            <div class="main-backTop">UP</div>
        </el-backtop>

    </div>


</template>

<script>
    export default {
        name: "IndexMain",
        data(){
            return{
                headlogo:{url:require("@/assets/headlogo.png")},
                imageList:[
                    {id:0,url:require('@/assets/spring/cloud-ready.png')},
                    {id:1,url:require('@/assets/spring/modern.png')},
                    {id:2,url:require('@/assets/spring/productive.png')},
                    {id:3,url:require('@/assets/spring/reactive.png')},
                    {id:4,url:require('@/assets/spring/simple.png')},
                ],
                timeList:[
                    {id:0,timestamp:'2020/4/6',title:'更新前端index主要组件',content:'整合了index组件的走马灯以及侧边栏效果'},
                    {id:1,timestamp:'2020/4/4',title:'实现前后端分离登录',content:'实现登录界面与后端交换效果'},
                    {id:2,timestamp:'2020/4/3',title:'搭建后端服务框架',content:'使用Springboot+Maven搭建服务端'},
                    {id:3,timestamp:'2020/4/2',title:'设计数据库及其相关关系',content:'使用Mysql设计关系表'},
                    {id:4,timestamp:'2020/4/1',title:'理解前后端分离的主要思想',content:'思考前后端分离和未分离对于项目开发的优缺点'},
                ]
            }
        },

    }
</script>

<style scoped>

    /*头像大小*/
    .main-headLogo{
        width: 100px;
        height: 100px;
    }
    /*用户信息*/
    .main-userInfo{
        position: absolute;
        text-align: left;
        width: 300px;
        margin: 150px 0 0 10px;

    }

    /*主页内容边界*/
    .main-content{
        margin: 0 0 5px 0;
    }

    /*时间线*/
    .main-timeLine{
        /*向左对齐*/
        text-align: left;
        margin: 0 0 0 6%;
        width: 900px;
    }

    /*走马灯*/
    .main-carousel{
        margin: 0 auto;
        width: 900px;
        border: #F2F2F2 1px solid;
    }

    /*回到顶部*/
    .main-backTop{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
    }


    /*通用字体*/
    .text-common{
        font-weight: bold;
    }
    .text-tip{
        font-size: 12px;
        color:gray;
    }
</style>