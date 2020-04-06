<template>
    <el-container>
        <el-aside>
            <index-nav></index-nav>
        </el-aside>
        <el-main>
            <index-main></index-main>
        </el-main>
        <el-aside>
            <index-user></index-user>
        </el-aside>

        <el-footer>
           页脚
        </el-footer>

    </el-container>
</template>


<script>
    import IndexNav from "@/components/home/index/IndexNav";
    import IndexMain from "@/components/home/index/IndexMain";
    import IndexUser from "@/components/home/index/IndexUser";

    export default {
        name:'Index',
        components: {IndexUser, IndexMain, IndexNav}
    }

</script>

<style scoped>

</style>