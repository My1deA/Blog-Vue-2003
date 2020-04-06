<template>

    <el-menu :default-active="'/index'" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
        <el-menu-item v-for="(item,i) in NavList" :key="i" :index="item.name">
            {{item.navItem}}
        </el-menu-item>


        <!--中间标题-->
        <div class="title">
            Nothing is impossible to a willing heart
        </div>

        <!--右边个人按钮-->
        <div class="user">
            <el-dropdown class="item" >
                <el-button type="primary">
                    <i class="el-icon-user-solid"></i>user
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
                <el-badge is-dot class="item" >
                    <el-button  type="primary" icon="el-icon-message-solid"></el-button>
                </el-badge >
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


<style scoped>

    .title{
        position: absolute;
        margin: 15px 50% 0 40%;
        width: 500px;
        font-family: "Courier New", Courier, monospace;
        font-size: large;
        font-weight: bold;
    }

    .user{
        float: right;
        display: inline-block;
    }

    .item {
        margin: 0 10px 0 0;
    }

</style>