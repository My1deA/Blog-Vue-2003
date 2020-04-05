<template>
    <el-container>
        <el-header><top-nav></top-nav></el-header>
        <el-main><router-view></router-view></el-main>
    </el-container>
</template>

<script>
    import TopNav from "@/components/home/TopNav";

    export default {
        name:'Home',
        components: {TopNav},
    }
</script>

<style scoped>

</style>