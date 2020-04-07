<template>
    <div class="bottom-main">
        <el-row>
            <el-col :span="8">talk is cheap show me the code © 2020 GitHub, Inc</el-col>
        </el-row>
        <el-row>
            <el-col :span="8" :offset="8">© 2020 GitHub, Inc</el-col>
        </el-row>
    </div>
</template>

<script>
export default {
name: "IndexBottom"
}
</script>

<style scoped>
    .bottom-main{
        text-align: left;
        color: gray;
    }
</style>