<template>
    <el-container>
        <el-aside><admin-nav></admin-nav></el-aside>
        <el-container>
            <el-main><router-view></router-view></el-main>
            <el-footer></el-footer>
        </el-container>
    </el-container>
</template>

<script>
    import AdminNav from "@/components/admin/AdminNav";

    export default{
        name:'Admin',
        components: {AdminNav}
    }
</script>

<style scoped>

</style>