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
                页脚
            </el-footer>
        </el-container>

    </el-container>
</template>


<script>
    import IndexNav from "@/components/home/index/IndexNav";
    import IndexMain from "@/components/home/index/IndexMain";


    export default {
        name:'Index',
        components: { IndexMain, IndexNav}
    }

</script>

<style scoped>

</style>