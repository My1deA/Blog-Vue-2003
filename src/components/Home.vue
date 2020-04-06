<template>
    <el-container>
        <el-header><top-nav></top-nav></el-header>
        <router-view></router-view>
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