<template>
    <div>作者随笔</div>
</template>

<script>
    export default {
        name:'Essay',

        beforeCreate:function(){
            console.log('------beforeCreate创建前状态------');
        },
        created: function() {
            console.log('------created创建完毕状态------');
        },
        beforeMount: function() {
            console.log('------beforeMount挂载前状态------');
        },
        mounted: function() {
            console.log('------mounted 挂载结束状态------');
        },
        beforeUpdate: function () {
            console.log('beforeUpdate 更新前状态===============》');
        },
        updated: function () {
            console.log('updated 更新完成状态===============》');
        },
        beforeDestroy: function () {
            console.log('beforeDestroy 销毁前状态===============》');
        },
        destroyed: function () {
            console.log('destroyed 销毁完成状态===============》');

        }

    }

</script>


<style scoped>
</style>