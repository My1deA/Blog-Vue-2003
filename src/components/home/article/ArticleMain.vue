<template>
    <div class="div-main">
        <el-card  class="main-card"  v-for="item in 3" :key="item" >
            <h4>{{title}}</h4>
            <el-divider content-position="left">
                <div class="font-info">
                    <i class="el-icon-user item" >作者id: {{userId}}</i>
                    <i class="el-icon-folder item"> 分类于: {{type}}</i>
                    <i class="el-icon-time item">发表于: {{time}}</i>
                </div>
            </el-divider>
            <div class="main-card-resume">
                <p>{{resume}}</p>
            </div>
            <div>
                <el-link type="primary"  class="main-card-link">阅读全文 <i class="el-icon-d-arrow-right"></i></el-link>
            </div>
        </el-card>
        <div class="block">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="1"
                    :page-sizes="[3, 5, 10]"
                    :page-size="3"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="11">
            </el-pagination>
        </div>
    </div>
</template>


<script>
    export default {
        name:'ArticleMain',
        data(){
            return{
                title:'测试标题',
                userId:'1',
                type:'Test',
                time:'2020-04-18 10:30:17',
                resume:'    简短的留言用于测试数据',
            }
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
    }
    /*文章的内容*/
    .main-card-resume{
        margin-bottom: 10px;
    }
    /*链接的字体大小*/
    .main-card-link{
        font-size: 15px;
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