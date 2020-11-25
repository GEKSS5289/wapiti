<template>
  <div class="update-card-box">
    <div class="update-main">
      <input type="text" placeholder="事迹标题" v-model="storyData.data.title"/>
      <textarea placeholder="我有灵感了....."  v-model="storyData.data.content"></textarea>
      <div class="update-op">
        <div class="update-push" @click="updateContent">修改</div>
        <div class="update-push" @click="goBack">返回</div>
      </div>

    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent ,reactive} from 'vue'
import {StoryModel, StoryUpdateForm} from "@/model/datas";
import axios from "axios";
import apis from "@/common/apis";
import router from "@/router";
export default defineComponent({
  name: "UpdateCard",
  props:{
    storyId:{
      type:Number,
      require:true
    }
  },
  setup(props,context){

    const storyData = reactive({
      data:{
        id:0,
        content:'',
        title:''
      }
    })

    initData()
    function initData(){
      axios.get(apis.apiUrl.story+'one/'+props.storyId).then(res=>{
        console.log(res)
        storyData.data.id = res.data.data.id
        storyData.data.content = res.data.data.content
        storyData.data.title = res.data.data.title
      })
    }

    function goBack(){
      context.emit('go-back')
    }

    function updateContent(){
      let data:StoryUpdateForm ={
        content:storyData.data.content,
        title:storyData.data.title
      }
      axios.put(apis.apiUrl.story+props.storyId,data).then(res=>{
        router.go(0)
      })
    }

    return{
      goBack,
      updateContent,
      storyData
    }
  }
})
</script>

<style lang="scss" scoped>
@import "../../assets/style/mixin.scss";
.update-card-box{
  background-color:white;
  padding: 100px;
  position: absolute;
  width: 1045px;
  height: 550px;
  top: 280px;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .update-main{

    display: flex;
    flex-direction: column;
    @include shadow();
    width: 1100px;
    input {
      border-left: 5px solid #1ABC9C;
      margin-bottom: 10px;
      text-align: left;
      //width: 200px;
      padding-left: 20px;
      //height: 50px;
      //padding: 20px;
      border-right: none;
      border-top: none;
      border-bottom: none;
      background-color: #E8F6F3;
      height: 100px;
      font-size: 50px;
      color: #1ABC9C;
    }

    input::placeholder {
      font-size: 50px;
      color: #42b983;
      font-weight: bold;

    }

    /*margin-left: 10px;*/
    padding: 30px;
    color: #1ABC9C;

    textarea {
      padding: 10px;
      background: none;
      color: #76D7C4;
      font-size: 40px;
      height: 300px;
      @include textareaDef();
      margin-bottom: 20px;
    }

    .update-op{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .update-push {
        width: 150px;
        padding: 10px;
        border: 1px solid #1ABC9C;
        color: #1ABC9C;
        //width: 50px;

        //height: 30px;
        font-weight: bold;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: 5px;
        transition: all 1s;
        font-size: 30px;
        &:hover {
          background-color: #1ABC9C;
          color: white;
        }
      }
    }


  }

}
</style>
