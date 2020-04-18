<template>
    <el-container>
        <el-header><top-nav></top-nav></el-header>
        <router-view></router-view>
    </el-container>
</template>

<script>

    // 引入外部静态ribbon.js文件
    //import {MyRibbon} from "../../static/js/MyRibbon";
    //在界面渲染的时候调用彩带
    //MyRibbon();

    import TopNav from "@/components/home/TopNav";

    export default {
        name:'Home',
        components: {TopNav},
    }
</script>

<style scoped>

</style>