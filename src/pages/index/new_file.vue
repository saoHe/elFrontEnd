<template>
  <div>
    <div>测试</div>

    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>

    <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = true">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

    <el-button type="text" @click="open">点击打开 Message Box</el-button>
  </div>


</template>

<script>
 export default {
    data() {
      return {
        dialogVisible: false
      };
    },
    created() {
      // window.addEventListener('hashchange', this.afterQRScan)
      const that = this;
      // this.$http.get(this.GLOBAL+'getUser',{  //走的真实接口访问后台
        this.$http.get('/testStore'
        ,
            {   //走的mock文件夹中的测试数据
                params:{
                    title:'眼镜'
                }
            },
          ).then(function(res){
              console.log(res.data);
              that.$alert(res.data, '标题名称', {
                confirmButtonText: '确定',
                callback: action => {
                  that.$message({
                    type: 'info',
                    message: `她妈妈是个猪`
                  });
                }
              });
          }).catch(function (error) {
              console.log(error);
          });

    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
       open() {
              this.$alert('这是一段内容', '标题名称', {
                confirmButtonText: '确定',
                callback: action => {
                  this.$message({
                    type: 'info',
                    message: `action: ${ action }`
                  });
                }
              });
            }
    }
  };
</script>

<style>
</style>
