<template>
    <el-card class="main-content" shadow="always">

        <el-carousel class="main-carousel"  height="400px" :interval="10000">
            <el-carousel-item v-for="item in imageList" :key="item.id">
                <img v-bind:src="item.url">
            </el-carousel-item>
        </el-carousel>
    </el-card>

</template>

<script>
    export default {
        name: "IndexMain",
        data(){
            return{
                imageList:[
                    {id:0,url:require('@/assets/spring/cloud-ready.png')},
                    {id:1,url:require('@/assets/spring/modern.png')},
                    {id:2,url:require('@/assets/spring/productive.png')},
                    {id:3,url:require('@/assets/spring/reactive.png')},
                    {id:4,url:require('@/assets/spring/simple.png')},
                ]
            }
        },

    }
</script>

<style scoped>
    .main-content{

        width: 75%;
    }
    .main-carousel{
        margin: 0 auto;
        width: 900px;
        border: #F2F2F2 1px solid;
    }


</style>