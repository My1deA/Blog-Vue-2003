<template>

        <div class="top-div">

           <p class="top-name">后台管理界面</p>
           <h4 class="top-title">Nothing is impossible to a willing heart</h4>
           <div class="top-user">
           <el-dropdown class="item">
              <el-button type="primary">
                 <i class="el-icon-user-solid"></i> user
                 <i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                 <el-dropdown-item>个人信息</el-dropdown-item>
                 <el-dropdown-item>设置</el-dropdown-item>
                 <el-dropdown-item>关于</el-dropdown-item>
                 <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
           </el-dropdown>

           <el-tooltip class="item" effect="dark" content="通知" placement="bottom">
              <el-badge is-dot class="item">
                 <el-button type="primary" icon="el-icon-message-solid"></el-button>
              </el-badge>
           </el-tooltip>

           <el-tooltip class="item" effect="dark" content="私信" placement="bottom">
              <el-badge is-dot class="item">
                 <el-button type="primary" icon="el-icon-s-comment"></el-button>
              </el-badge>
           </el-tooltip>
           </div>

      </div>

</template>

<script>
    export default {
        name: 'AdminTopDiv',
    }
</script>

<style scoped>

    .item {
       margin-right: 10px;
    }

    .top-div {
       position: absolute;
       margin: 0 0 0 -20px;
       width:1900px;
       height: 60px;
       background-color:#545c64;
    }

    .top-name {
       position: absolute;
       font-family: "Courier New", Courier, monospace;
       font-size: large;
       font-weight: bold;
       color: #ffd04b;
       margin: 20px 0 0 100px;
    }

    .top-title {
       position: absolute;
       font-family: "Courier New", Courier, monospace;
       font-size: large;
       font-weight: bold;
       color: #F0F0F0;
       margin: 20px 0 0 700px;
    }

   .top-user{
      float: right;
      margin-top: 10px;
   }

</style>