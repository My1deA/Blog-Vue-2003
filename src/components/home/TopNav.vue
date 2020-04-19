<template>

        <el-menu :default-active="currentPath" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>

            <!--首页 个人博客 等等-->
            <el-menu-item v-for="(item,i) in NavList" :key="i" :index="item.index">
                {{item.navItem}}
            </el-menu-item>

            <!--中间标题-->
            <div class="title">
                <span>Nothing is impossible to a willing heart</span>
            </div>

            <!--右边个人按钮-->
            <div class="user">
                <el-dropdown class="item">
                    <el-button type="primary">
                        <i class="el-icon-user-solid"></i> user
                        <i class="el-icon-arrow-down right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>个人信息</el-dropdown-item>
                        <el-dropdown-item>设置</el-dropdown-item>
                        <el-dropdown-item>关于</el-dropdown-item>
                        <el-dropdown-item>退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>

                <el-tooltip effect="dark" content="通知" placement="bottom">
                    <el-badge is-dot class="item">
                        <el-button type="primary" icon="el-icon-message-solid"></el-button>
                    </el-badge>
                </el-tooltip>

                <el-tooltip effect="dark" content="私信" placement="bottom">
                    <el-badge is-dot class="item">
                        <el-button type="primary" icon="el-icon-s-comment"></el-button>
                    </el-badge>
                </el-tooltip>
            </div>

        </el-menu>


</template>

<script>
    export default {
        name: 'TopNav',
        data() {
            return {
                NavList: [
                    {index: '/index', navItem: '首页'},
                    {index: '/article', navItem: '个人博客'},
                    {index: '/study', navItem: '学习路线'},
                    {index: '/essay', navItem: '作者随笔'},
                ]
            };
        },

        computed: {
            currentPath(){
                //indexof 是从下标 0开始的 e.g.: /a/b
                var i=this.$route.path.indexOf('/',1);
                if(i===-1){//没有 /b 直接返回
                    return this.$route.path
                }else{// /a/b/c..
                    return  this.$route.path.substring(0,i);
                }
            }
        },

        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },


        }
    }
</script>


<style scoped>

    .title {
        position: absolute;
        margin: 17px 0 0 35%;
        width: 25%;
        font-family: "Courier New", Courier, monospace;
        font-size: large;
        font-weight: bold;
    }

    .user {
        float:right;
        display: inline-block;
    }

    .item {
        margin: 0 10px 0 0;
    }

</style>