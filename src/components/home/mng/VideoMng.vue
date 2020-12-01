<template>
  <div class="video-mng-box" :class="{'cmsMng-transition-begin':cmsMngstatus,'cmsMng-transition-end':!cmsMngstatus}">
    <div class="video-list" v-if="resData.datas.length!=0">
      <div class="video-item" v-for="(item,index) in resData.datas" :key="item.id">
        <video controls :src="item.resPath"/>
        <div class="video-info">
          <h1 class="video-name">视频名:{{item.resName}}</h1>
          <h1 class="video-upload-auth">上传者:{{item.publishAdminName}}</h1>
          <h1 class="stop-play-btn" v-if="item.resDel" @click="controlRes(item.id)">禁止播放</h1>
          <h1 class="stop-play-btn" v-else @click="controlRes(item.id)">恢复播放</h1>
<!--          <h1 class="update-btn">修改</h1>-->
        </div>
      </div>
    </div>
    <div class="video-create">
      <h1>视频上传</h1>
      <div class="uploadmain" v-if="!loadingStatus">
        <label for="file">
          <img class="file-img" src="../../../../public/static/add.png" alt="">
        </label>
        <input class="file-input" id="file" type="file" @change="fileSelect" accept="video/mp4">
        <h1 class="file-info-name">{{resData.filename}}</h1>
        <h1 class="file-info-size" v-if="resData.filesize">{{resData.filesize}}MB</h1>
        <h1 class="file-info-size" v-else>未上传文件</h1>
        <div class="upload-btn" @click="uploadFile" v-if="resData.filename">上传</div>
      </div>
      <loading v-if="loadingStatus"></loading>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent,reactive,ref} from 'vue'
import {useStore} from "vuex";
import {ResModel, StoryForm, StoryModel} from "@/model/datas";
import UpdateCard from "@/components/common/UpdateCard.vue";
import axios from "axios";
import apis from "@/common/apis";
import router from "@/router";
import Loading from "@/components/common/Loading.vue";
import {cmsMngInit} from "@/script/transitionInit";
export default defineComponent({
  name: "VideoMng",
  components:{
    Loading
  },
  setup(){

    const resData = reactive({
      datas:Array<ResModel>(),
      filename:'',
      filesize:0.0,
    })
    const formdata = new FormData()
    const store = useStore()
    const loadingStatus = ref(false)
    initData()
    function initData(){
      axios.get(apis.apiUrl.res).then(res=>{
        for(let i = 0;i<res.data.data.length;i++){
          resData.datas.push(res.data.data[i])
        }
      })
    }

    function controlRes(resId:number){
      axios.put(apis.apiUrl.res+resId).then(res=>{
        router.go(0)
      })
    }

    function fileSelect(file:any){
      resData.filename = file.target.files[0].name
      resData.filesize = Number((file.target.files[0].size/1024/1024).toString().match(/^\d+(?:\.\d{0,2})?/))
      formdata.append("file",file.target.files[0])
    }

    function uploadFile(){
      loadingStatus.value = true
      resData.filename = '';
      resData.filesize = 0
      axios.post(apis.apiUrl.res+Number(JSON.parse(sessionStorage.getItem("payload") as string).adminId),formdata,{
        headers:{'Content-Type':'multipart/form-data'}

      }).then(res=>{
        loadingStatus.value = false
        console.log("ok")
        formdata.delete("file")
        router.go(0)
      })
    }

    return{
      resData,
      controlRes,
      fileSelect,
      uploadFile,
      loadingStatus,
      ...cmsMngInit()
    }
  }
})
</script>

<style lang="scss" scoped>
@import "../../../assets/style/mixin";
.video-mng-box{
  margin-top:50px;
  .video-list{
    height: 200px;
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
        .video-name{
          width: 160px;
          word-break: break-all;

          //height: 50px;
          margin-bottom: 20px;
        }
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
    margin-top: 120px;
    margin-bottom: 130px;
   .uploadmain{

     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
   }

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
      cursor: pointer;
    }
  }
}
</style>
