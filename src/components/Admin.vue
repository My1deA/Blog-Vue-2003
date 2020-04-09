<template>
    <el-container>
        <el-header><admin-top-div></admin-top-div></el-header>
        <el-container>
            <el-aside><admin-nav></admin-nav></el-aside>
            <el-container>
                <el-main><router-view></router-view></el-main>
                <!--<el-footer></el-footer>-->
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
    import AdminNav from "@/components/admin/AdminNav";
    import AdminTopDiv from "@/components/admin/AdminTopDiv";

    export default{
        name:'Admin',
        components: {AdminTopDiv, AdminNav}
    }
</script>

<style scoped>

</style>