<template>
    <el-menu :default-active="'/index'" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
        <el-menu-item v-for="(item,i) in NavList" :key="i" :index="item.name">
            {{item.navItem}}
        </el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name:'TopNav',
        data() {
            return {
                NavList:[
                    {name:'/index',navItem:'首页'},
                    {name:'/blog',navItem: '个人博客'},
                    {name:'/study',navItem: '学习路线'},
                    {name:'/admin',navItem: '后台管理'},
                ]
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>