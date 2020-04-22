<template>
    <div class="div-content">
        <!--查询-->
        <div>
            <el-row>
                <el-col :span="12" :offset="6">
                    <el-input placeholder="请输入查询内容" v-model="input">
                        <el-select class="select-search" v-model="select" slot="prepend" placeholder="请选择">
                            <el-option label="文章id" value="id"></el-option>
                            <el-option label="文章名称" value="title"></el-option>
                            <el-option label="文章状态" value="state"></el-option>
                        </el-select>
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </el-col>
            </el-row>
        </div>

        <!--表格-->
        <div class="div-table">
        <el-row>
            <el-col :span="20" :offset="2">
                <el-table :data="tableData" style="width: 100%" height="580" border stripe >
                    <el-table-column prop="id" label="文章id" width="120">
                    </el-table-column>
                    <el-table-column prop="userId" label="用户id" width="120">
                    </el-table-column>
                    <el-table-column prop="title" label="标题" width="320">
                    </el-table-column>
                    <el-table-column prop="type" label="类型" width="100">
                    </el-table-column>
                    <el-table-column prop="state" label="状态" width="100">
                    </el-table-column>
                    <el-table-column prop="time" label="编辑时间" width="160">
                    </el-table-column>
                    <el-table-column prop="praise" label="点赞" width="100">
                    </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button size="mini" type="success" @click="readArticle(scope.$index,scope.row)">查看</el-button>
                            <el-button size="mini" type="primary"  @click="editArticle(scope.$index,scope.row)">编辑</el-button>
                            <el-button size="mini" type="danger"  @click="deleteArticle(scope.$index,scope.row,scope.row.title)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
        </div>

        <div class="div-table">
            <el-pagination
                    background
                    :page-sizes="[25, 50, 75, 100]"
                    :page-size="10"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="100">
            </el-pagination>
        </div>



    </div>
</template>

<script>
    export default {
        name: 'AdminArticle',
        data(){
            return{
                input:'',   //查询内容
                select:'',  //查询种类 文章id 文章类型 文章状态
                Data:[],    //数据表格
                pageNum:1,  //当前页面
                pageSize:10,//每页容纳信息数
                tableData:[]
            }
        },
        //初始化界面的时候加载文章
        mounted() {
            this.loadArticle();
        },

        methods:{
            //向后台获取数据
            loadArticle:function () {
                var _this=this;
                _this.$axios.get("http://localhost:8080/article/list/"+_this.pageNum+"/"+_this.pageSize)
                    .then(function (data) {
                        //直接返回List<Article> 如果使用PageInfo封装 应该是 _this.tableData=data.data.list
                        _this.tableData=data.data;
                    })
            },

            //查看文章内容
            readArticle:function (index,row) {
                console.log(index,row);
            },

            //修改文章内容
            editArticle:function (index,row) {
                console.log(index,row);
            },
            //删除文章
            deleteArticle:function (index,row) {
                console.log(index,row);
                //console.log(title);
            }
        }

    }

</script>


<style scoped>


    .div-table{
       text-align: center;
        margin: 25px auto 0 auto;
    }

    .div-content{
        text-align: left;
        width: 1500px;
        margin: 75px auto 0 auto;
    }

    .select-search{
        width: 100px;
    }

</style>




<!--tableData: [{-->
<!--id: '1',-->
<!--user_id: '2',-->
<!--name:'王小虎',-->
<!--title:'hello world1',-->
<!--type:'Test',-->
<!--state:'release',-->
<!--praise:0-->
<!--}, {-->
<!--id: '2',-->
<!--user_id: '2',-->
<!--name:'王小虎',-->
<!--title:'hello world2',-->
<!--type:'Test',-->
<!--state:'release',-->
<!--praise:0-->
<!--}, {-->
<!--id: '3',-->
<!--user_id: '2',-->
<!--name:'王小虎',-->
<!--title:'hello world3',-->
<!--type:'Test',-->
<!--state:'release',-->
<!--praise:0-->
<!--}, {-->
<!--id: '4',-->
<!--user_id: '2',-->
<!--name:'王小虎',-->
<!--title:'hello world4',-->
<!--type:'Test',-->
<!--state:'release',-->
<!--praise:0-->
<!--},{-->
<!--id: '5',-->
<!--user_id: '2',-->
<!--name:'王小虎',-->
<!--title:'hello world5',-->
<!--type:'Test',-->
<!--state:'release',-->
<!--praise:0-->
<!--},{-->
<!--id: '5',-->
<!--user_id: '2',-->
<!--name:'王小虎',-->
<!--title:'hello world5',-->
<!--type:'Test',-->
<!--state:'release',-->
<!--praise:0-->
<!--},{-->
<!--id: '5',-->
<!--user_id: '2',-->
<!--name:'王小虎',-->
<!--title:'hello world5',-->
<!--type:'Test',-->
<!--state:'release',-->
<!--praise:0-->
<!--},{-->
<!--id: '5',-->
<!--user_id: '2',-->
<!--name:'王小虎',-->
<!--title:'hello world5',-->
<!--type:'Test',-->
<!--state:'release',-->
<!--praise:0-->
<!--},{-->
<!--id: '5',-->
<!--user_id: '2',-->
<!--name:'王小虎',-->
<!--title:'hello world5',-->
<!--type:'Test',-->
<!--state:'release',-->
<!--praise:0-->
<!--}]-->