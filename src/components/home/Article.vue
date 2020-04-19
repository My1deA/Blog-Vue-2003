<template>
    <el-container>
        <el-main>
            <article-list></article-list>
        </el-main>
    </el-container>
</template>

<script>
    import ArticleList from "@/components/home/article/ArticleList";
    export default {
        name:'Article',
        components: {ArticleList},


    }

</script>


<style scoped>


</style>