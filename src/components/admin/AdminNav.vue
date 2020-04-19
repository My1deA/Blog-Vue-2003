<template>
    <div>

        <el-menu class="leftNav" :default-active="this.$route.path" background-color="#545c64" text-color="#fff"  active-text-color="#ffd04b" router>
            <el-submenu :index="'/'">
                <template slot="title">
                    <i class="el-icon-document"></i>
                    <span>文章管理</span>
                </template>
                <el-menu-item  v-for="(item,i) in navList.slice(0,2)" :key="'submenu'+i" :index="item.index" >
                    <span>{{item.msg}}</span>
                </el-menu-item>

            </el-submenu>
            <el-menu-item  v-for="(item,i) in navList.slice(2,5)" :key="i" :index="item.index" >
                <i :class="item.icon"></i>
                <span>{{item.msg}}</span>
            </el-menu-item>

        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "AdminNav",
        data() {
            return {
                navList: [
                    {id: 0, index: '/adminAddArticle', msg: '发布文章'},
                    {id: 1, index: '/adminListArticle',msg: '文章列表'},
                    {id: 2, index: '/adminStudy', icon: 'el-icon-notebook-1', msg: '学习路线'},
                    {id: 3, index: '/adminRole', icon: 'el-icon-s-operation', msg: '用户权限'},
                    {id: 4, index: '/adminUserInfo', icon: 'el-icon-user-solid', msg: '个人信息'}
                ]
            }
        }

    }
</script>

<style scoped>
    .leftNav {
       margin-top: 1px;
        height: 830px;
    }
</style>