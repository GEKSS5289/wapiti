<template>
  <div class="story-mng-box">
    <div class="story-header">
      <input type="text" placeholder="事迹标题" v-model="pushData.title">
      <textarea placeholder="我有灵感了....." v-model="pushData.content"></textarea>
      <div class="update-push" @click="pushStory">发表</div>
    </div>
    <div class="story-list" v-if="storyData.datas.length!=0">
      <div class="story-item" v-for="(item,index) in storyData.datas" :key="item.id">
        <div class="story-info">
          <h1 class="story-name">{{item.title}}</h1>
          <h1 class="story-content">{{item.content}}</h1>
          <h1 class="story-time">{{item.createdTime}}</h1>
        </div>
        <div class="story-op">
          <h1 @click="deleteStory(item.id)">删除</h1>
          <h1 @click="updateStory(item.id)">修改</h1>
        </div>
      </div>
    </div>
    <h1 v-else class="no-story" >啥事迹也没有😭</h1>
  </div>
  <update-card :storyId="storyIdNum" v-if="updateCardStatus" @go-back="back"></update-card>
</template>

<script lang="ts">
import {defineComponent, reactive, ref} from 'vue'

import {pushData,pushStory,storyData,initStoryData} from "@/script/story/storyScript";
import {useStore} from "vuex";
import {StoryForm, StoryModel} from "@/model/datas";
import UpdateCard from "@/components/common/UpdateCard.vue";
import axios from "axios";
import apis from "@/common/apis";
import router from "@/router";
export default defineComponent({
  name: "StoryMng",
  components:{
    UpdateCard
  },
  setup(){

    const store = useStore()
    const pushData = reactive({
      content:'',
      title:'',
    })
    const storyData = reactive({
      datas:Array<StoryModel>()
    })
    const storyIdNum = ref(0)
    const updateCardStatus = ref(false)


    initStoryData()


    function initStoryData(){
      axios.get(apis.apiUrl.story+localStorage.getItem("adminId")).then(res=>{
        for(let i = 0;i<res.data.data.length;i++){
          storyData.datas.push(res.data.data[i])
        }
      })
    }

    function pushStory(){
      let data:StoryForm={
        adminId:store.getters.getAdminId,
        content:pushData.content,
        title:pushData.title
      }
      axios.post(apis.apiUrl.story,data).then(res=>{
        router.go(0)
      })
    }

    function deleteStory(storyId:number){
      axios.delete(apis.apiUrl.story+storyId).then(res=>{
        router.go(0)
      })
    }

    function updateStory(storyId:number){
      storyIdNum.value=storyId
      updateCardStatus.value = !updateCardStatus.value
    }

    function back(){
      updateCardStatus.value = !updateCardStatus.value
    }

    return{
      pushData,
      pushStory,
      storyData,
      deleteStory,
      updateStory,
      storyIdNum,
      updateCardStatus,
      back
    }
  }
})
</script>

<style lang="scss" scoped>
@import "../../../assets/style/mixin.scss";
.story-mng-box {
  /*width: 00px;*/
  position: relative;

  margin-bottom: 30px;
  transition: all 0.3s;
  border-radius: 5px;

  .story-header {
    display: flex;
    flex-direction: column;
    @include shadow();
    input {
      margin-bottom: 10px;
      text-align: left;
      width: 200px;
      height: 50px;
      //padding: 20px;
      border: none;
      font-size: 20px;
      color: #1ABC9C;
    }

    input::placeholder {
      font-size: 20px;
      color: #42b983;
      font-weight: bold;
    }

    /*margin-left: 10px;*/
    padding: 20px;
    color: #1ABC9C;

    textarea {
      padding: 10px;
      background: none;
      color: #333333;
      font-size: 20px;
      height: 100px;
      @include textareaDef();
      margin-bottom: 20px;
    }

    .update-push {
      padding: 10px;
      border: 1px solid #1ABC9C;
      color: #1ABC9C;
      width: 50px;
      height: 10px;
      font-weight: bold;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border-radius: 5px;
      transition: all 1s;

      &:hover {
        background-color: #1ABC9C;
        color: white;
      }
    }

  }
  .story-list{
    margin-top: 20px;
    height: 300px;
    overflow-y: auto;
    .story-item{

      margin-bottom: 20px;
      display: flex;
      width: 400px;
      padding: 10px;
      text-align: left;
      align-items: center;
      justify-content: space-between;
      border-radius: 5px;
      border-left: 5px solid #1ABC9C;
      .story-info{

        .story-content{
          width: 300px;
          word-break: break-all;
        }
      }
    }
  }
  .no-story{
    background-color: #F7DC6F;
    padding: 70px;
    color: white;
    margin-top: 30px;

  }
}




</style>
