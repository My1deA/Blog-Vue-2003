<template>
    <div class="layout">
        <div class="card-layout">
            <el-upload
                    ref="upload"
                    :action=action
                    list-type="picture-card"
                    :auto-upload="false"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                    :on-success="handleSuccess"
                    :file-list="fileList"
                    multiple
                    :limit="9"
                    >
                <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
            <el-button  class="button" type="success" @click="submituUpload">上传</el-button>
            <el-button  class="button" >取消</el-button>


            <div>
                <el-image class="header-logo" :preview-src-list="imageUrlList" fit="cover" :src="imageUrl"></el-image>
            </div>
        </div>



    </div>
</template>

<script>
    export default {
        name: 'AdminUserInfo',

        data() {
            return {
                action:'http://localhost:8080/user/pics/1',
                dialogImageUrl: '',
                dialogVisible: false,
                fileList:[],
                imageUrl:'http://localhost:8080/images/1/123.jpg',
                imageUrlList:[
                    'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
                    'http://localhost:8080/images/1/123.jpg'],
            }
        },

        methods: {

            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            handleSuccess:function(data){
                console.log(data.data);
                var _this=this;
                _this.imageURL=data.data;
            },

            submituUpload:function () {
                this.$refs.upload.submit();
            }

        }

    }

</script>


<style scoped>

    .layout {
        margin: 100px auto 0 auto;
        width: 80%;
        text-align: left;
    }

    .card-layout{
        margin:0 auto;
        border: none;
        width: 510px;
    }

    .button{
        margin-top: 20px;
    }

    .header-logo{
        width: 100px;
        height: 100px;
        margin: 50px auto 0 auto;
    }

</style>