<template>
    <div>

        <el-menu class="leftNav" :default-active="this.$route.path" background-color="#545c64" text-color="#fff"  active-text-color="#ffd04b" router>
            <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.index">
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
                    {id: 0, index: '/adminArticle', icon: 'el-icon-document', msg: '文章管理'},
                    {id: 1, index: '/adminStudy', icon: 'el-icon-notebook-1', msg: '学习路线'},
                    {id: 2, index: '/adminRole', icon: 'el-icon-s-operation', msg: '用户权限'},
                    {id: 3, index: '/adminInfo', icon: 'el-icon-user-solid', msg: '个人信息'}
                ]
            }
        }

    }
</script>

<style scoped>
    .leftNav {
        margin-top: 10px;
        height: 830px;
    }
</style>