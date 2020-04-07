<template>
    <el-container>
        <el-aside>
            <index-nav></index-nav>
        </el-aside>
        <el-container>
            <el-main>
                <index-main></index-main>
            </el-main>
            <el-footer>
                <index-bottom></index-bottom>
            </el-footer>
        </el-container>

    </el-container>
</template>


<script>
    import IndexNav from "@/components/home/index/IndexNav";
    import IndexMain from "@/components/home/index/IndexMain";
    import IndexBottom from "@/components/home/index/IndexBottom";

    export default {
        name:'Index',
        components: {IndexBottom, IndexMain, IndexNav}
    }

</script>

<style scoped>

</style>