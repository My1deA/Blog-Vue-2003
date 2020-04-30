<template>
    <div>

        <el-menu class="leftNav" :default-active="this.$route.path" background-color="#545c64" text-color="#fff"  active-text-color="#ffd04b" router>
            <el-submenu :index="'/'">
                <template slot="title">
                    <i class="el-icon-document"></i>
                    <span>文章管理</span>
                </template>
                <el-menu-item  v-for="(item,i) in navList.slice(0,3)" :key="'submenu'+i" :index="item.index" >
                    <span>{{item.msg}}</span>
                </el-menu-item>

            </el-submenu>
            <el-menu-item  v-for="(item,i) in navList.slice(3,6)" :key="i" :index="item.index" >
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
                    {id: 0, index: '/admin/article',msg: '文章列表'},
                    {id: 1, index: '/admin/article/add', msg: '文章发布'},
                    {id: 2, index: '/admin/article/edit/1',msg: '文章编辑'},
                    {id: 3, index: '/admin/study', icon: 'el-icon-notebook-1', msg: '学习路线'},
                    {id: 4, index: '/admin/role', icon: 'el-icon-s-operation', msg: '用户权限'},
                    {id: 5, index: '/admin/userinfo', icon: 'el-icon-user-solid', msg: '个人信息'}
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