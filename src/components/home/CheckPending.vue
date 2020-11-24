<template>
  <div class="check-pending-box">
    <h1>待审核资源</h1>
    <div class="check-pending-list">
      <div class="check-pending-item">
        <video controls src="https://shushun.oss-cn-shenzhen.aliyuncs.com/sue-blog-file-repo/%E8%A7%A3%E6%94%BE.mp4"></video>
        <div class="check-pending-info">
          <div class="check-pending-desc">
            <h3 class="res-name">资源名称:解放</h3>
            <h3 class="push-auth">上传者:舒顺</h3>
          </div>
          <div class="check-pending-op">
            <div class="pass">通过</div>
            <div class="no-pass">不通过</div>
          </div>
        </div>
      </div>
      <div class="check-pending-item">
        <video controls src="https://shushun.oss-cn-shenzhen.aliyuncs.com/sue-blog-file-repo/%E8%A7%A3%E6%94%BE.mp4"></video>
        <div class="check-pending-info">
          <div class="check-pending-desc">
            <h3 class="res-name">资源名称:解放</h3>
            <h3 class="push-auth">上传者:舒顺</h3>
          </div>
          <div class="check-pending-op">
            <div class="pass">通过</div>
            <div class="no-pass">不通过</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "CheckPending"
})
</script>

<style lang="scss" scoped>
@import "../../assets/style/mixin";
.check-pending-box{
  @include generalBox();
  flex: 2;
  .check-pending-list{
    overflow-y: auto;
    height: 170px;
    .check-pending-item{
      margin-top: 25px;
      display: flex;
      align-items: center;
      video{
        border-radius: 5px;
        //width: 200px;
        height: 150px;
        background-color: #E8F6F3;
      }
      .check-pending-info{
        @include  yFlex();
        margin-left: 40px;
        .check-pending-desc{
          margin-bottom: 30px;
          font-size: 20px;
        }

        .check-pending-op{
          @include xFlex();
          //background-color: red;
          align-items: center;
          width: 200px;
          .pass{
            border:1px solid #42b983;
            border-radius: 5px;
            font-size: 20px;
            color: #42b983;
            width: 100px;
            cursor: pointer;
            padding: 5px;
            transition: all 0.8s;
            &:hover{
              background-color: #42b983;
              color: white;
            }
          }
          .no-pass{
            border:1px solid red;
            border-radius: 5px;
            font-size: 20px;
            color: red;
            padding: 5px;
            width: 100px;
            margin-left: 20px;
            cursor: pointer;
            transition: all 0.8s;
            &:hover{
              background-color: red;
              color: white;
            }
          }
        }

      }

    }
  }
}
</style>
