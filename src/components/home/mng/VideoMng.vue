<template>
  <div class="video-mng-box">
    <div class="video-list">
      <div class="video-item">
        <video controls src="https://shushun.oss-cn-shenzhen.aliyuncs.com/sue-blog-file-repo/%E8%A7%A3%E6%94%BE.mp4"/>
        <div class="video-info">
          <h1 class="video-name">视频名:解放</h1>
          <h1 class="video-upload-auth">上传者:舒顺</h1>
          <h1 class="stop-play-btn" v-if="true">禁止播放</h1>
          <h1 class="stop-play-btn" v-else>恢复播放</h1>
          <h1 class="update-btn">修改</h1>
        </div>
      </div>
      <div class="video-item">
        <video controls src="https://shushun.oss-cn-shenzhen.aliyuncs.com/sue-blog-file-repo/%E8%A7%A3%E6%94%BE.mp4"/>
        <div class="video-info">
          <h1 class="video-name">视频名:解放</h1>
          <h1 class="video-upload-auth">上传者:舒顺</h1>
          <h1 class="stop-play-btn" v-if="true">禁止播放</h1>
          <h1 class="stop-play-btn" v-else>恢复播放</h1>
          <h1 class="update-btn">修改</h1>
        </div>
      </div>
      <div class="video-item">
        <video controls src="https://shushun.oss-cn-shenzhen.aliyuncs.com/sue-blog-file-repo/%E8%A7%A3%E6%94%BE.mp4"/>
        <div class="video-info">
          <h1 class="video-name">视频名:解放</h1>
          <h1 class="video-upload-auth">上传者:舒顺</h1>
          <h1 class="stop-play-btn" v-if="true">禁止播放</h1>
          <h1 class="stop-play-btn" v-else>恢复播放</h1>
          <h1 class="update-btn">修改</h1>
        </div>
      </div>
      <div class="video-item">
        <video controls src="https://shushun.oss-cn-shenzhen.aliyuncs.com/sue-blog-file-repo/%E8%A7%A3%E6%94%BE.mp4"/>
        <div class="video-info">
          <h1 class="video-name">视频名:解放</h1>
          <h1 class="video-upload-auth">上传者:舒顺</h1>
          <h1 class="stop-play-btn" v-if="true">禁止播放</h1>
          <h1 class="stop-play-btn" v-else>恢复播放</h1>
          <h1 class="update-btn">修改</h1>
        </div>
      </div>
    </div>
    <div class="video-create">
      <h1>视频上传</h1>
      <label for="file">
        <img class="file-img" src="../../../../public/static/add.png" alt="">
      </label>
      <input class="file-input" id="file" type="file">
      <h1 class="file-info-name">董帆.jpg</h1>
      <h1 class="file-info-size">32kb</h1>
      <div class="upload-btn">上传</div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "VideoMng"
})
</script>

<style lang="scss" scoped>
@import "../../../assets/style/mixin";
.video-mng-box{
  margin-top:50px;
  .video-list{
    height: 300px;
    overflow-y: auto;
    .video-item{
      margin-bottom: 50px;
      //width: 500px;
      //height: 169px;
      @include xFlex();
      //background-color: red;
      align-items: center;
      video{
        //flex: 1;
        width: 300px;
        height: auto;
        margin-right: 50px;
      }
      .video-info{
        //width: 500px;
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        h1{
          font-size: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          transition: all 1s;
          width: 160px;
          height: 50px;
          cursor: pointer;
          margin-right: 20px;

        }
        .stop-play-btn{

          @include btnhover(#1ABC9C)
        }
        .update-btn{
          @include btnhover(#1ABC9C)
        }
      }
    }
  }

  .video-create{
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .file-img{
      cursor:pointer;
      margin-top:30px;
      width: 100px;
      height: 100px
    }
    .file-input{

      display: none;
    }
    .upload-btn{
      border-radius: 10px;
      border: 1px solid #1ABC9C;
      width: 80px;
      line-height: 30px;
      color: #1ABC9C;
      font-weight: bold;
      height: 30px;
    }
  }
}
</style>
