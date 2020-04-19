<template>
    <div>
        文章详情
    </div>
</template>

<script>
    export default {
        name:'ArticleDetails',

        mounted:function () {
            console.log(this.$route.path);
            console.log(this.$route.params.id);
        }
    }
</script>

<style scoped>

</style>