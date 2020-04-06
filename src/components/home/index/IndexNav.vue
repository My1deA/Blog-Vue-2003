<template>

    <el-card class="leftNav">
        <el-menu default-active="1" @open="handleOpen" @close="handleClose">
            <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span>技术架构</span>
            </el-menu-item>
            <el-menu-item index="2">
                <i class="el-icon-upload"></i>
                <span slot="title">项目源码</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-s-promotion"></i>
                <span slot="title">联系我们</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-share"></i>
                <span slot="title">分享网站</span>
            </el-menu-item>
        </el-menu>
    </el-card>


</template>

<script>
    export default {
        name: "IndexNav",
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>

    .leftNav{
        margin-top:100px ;
    }
</style>