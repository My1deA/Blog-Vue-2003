<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">个人博客</el-menu-item>
        <el-menu-item index="3">学习路线</el-menu-item>
        <el-menu-item index="4">后台管理</el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name:'TopNav',
        data() {
            return {
                activeIndex: '1',
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>