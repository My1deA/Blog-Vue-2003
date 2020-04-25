<template>
    <div class="div-main">
        <el-card  class="main-card"  v-for="(item,index) in data" :key="index" >
            <h4>{{item.title}}</h4>
            <el-divider content-position="left">
                <div class="font-info">
                    <i class="el-icon-user item" >作者id: {{item.userId}}</i>
                    <i class="el-icon-folder item"> 分类于: {{item.type}}</i>
                    <i class="el-icon-time item">发表于: {{item.time}}</i>
                </div>
            </el-divider>
            <div class="main-card-resume">
                <p>{{item.resume}}</p>
            </div>
            <div>
                <router-link class="main-card-link" :to="{name:'ArticleDetails',params:{id: item.id}}">阅读全文 <i class="el-icon-d-arrow-right"></i></router-link>
            </div>
        </el-card>

        <div class="block">
            <el-pagination :current-page="pageNum" :total="11" :page-size="pageSize"
                           :page-sizes="[3, 5, 10]" layout="total, sizes, prev, pager, next, jumper"
                           @size-change="pageSizeChange"
                           @current-change="pageNumChange">
            </el-pagination>
        </div>
       <!-- <router-link :to="{name:'ArticleDetails',params:{id: 1}}"><p>阅读更多</p></router-link>-->
        <!--<router-link :to="{path:'/article/articleDetails',query:{id: 1}}"><p>阅读更多</p></router-link>-->

    </div>
</template>


<script>
    // 引入外部静态ribbon.js文件
    import {createRibbon, removeRibbon} from "../../../../static/js/MyRibbon";
    //在界面渲染的时候调用彩带 但这样使用会使所有的界面都会自动带上
    //MyRibbon();removeRibbon();

    export default {
        name:'ArticleList',
        data(){
            return{
                data:[],
                pageNum:1,
                pageSize:3,
            }
        },

        methods:{
            //加载文章
            loadArticle:function () {
                var _this=this;
                _this.$axios.get('http://localhost:8080/article/list/'+_this.pageNum+"/"+_this.pageSize)
                    .then(function (data) {
                        _this.data=data.data;
                })
            },
            //当前页面
            pageNumChange:function (val) {
                //console.log(`当前页: ${val}`);
                var _this=this;
                _this.pageNum=val;
                console.log(_this.pageNumpage);

            },
            //每页显示的是
            pageSizeChange:function (val) {
                //console.log(`每页 ${val} 条` + this.pageSize);
                var _this=this;
                _this.pageSize=val;
            },

        },

        //完成界面渲染后挂载
        mounted(){
            createRibbon();
            this.loadArticle();
        },
        //销毁的时候调用 让ribbon不会偏移到其他界面
        destroyed(){
            removeRibbon();
        }

    }
</script>

<style scoped>
    /*界面总布局*/
    .div-main{
        width: 60%;
        margin: 0 auto;
        text-align: left;
    }


    /*文章的list*/
    .main-card{
        margin: 10px auto 50px auto;
        background: rgba(0,0,0,0);
    }
    /*文章的内容*/
    .main-card-resume{
        margin-bottom: 30px;
    }
    /*链接的字体大小*/
    .main-card-link{
        font-size: 15px;
        color: #545c64;
    }
    /*router-link 会最终解析为 a标签*/
    a,a:active{
        text-decoration: none;
    }
    a:hover{
        color: #1989fa;
        border-bottom: 1px solid #1989fa;
    }


    /*字体灰色*/
    .font-info{
        color: gray;
    }
    /*默认item布局*/
    .item{
        margin-right: 15px;
    }



</style>