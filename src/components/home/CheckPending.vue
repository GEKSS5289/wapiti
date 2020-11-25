<template>
  <div class="check-pending-box">
    <h1>待审核资源</h1>
    <div class="check-pending-list" v-if="resData.datas.length">
      <div class="check-pending-item" v-for="(item,index) in resData.datas" :key="item.id">
        <video controls :src="item.resPath"></video>
        <div class="check-pending-info">
          <div class="check-pending-desc">
            <h3 class="res-name">资源名称:{{item.resName}}</h3>
            <h3 class="push-auth">上传者:{{item.publishAdminName}} </h3>
          </div>
          <div class="check-pending-op" v-if='isRoots'>

            <div class="pass" @click="pass(item.id)">通过</div>
            <div class="no-pass" @click="nopass(item.id)">不通过</div>
          </div>
        </div>
      </div>
    </div>
    <h1 class="no-res-check" v-else>😊暂时没有待审核资源</h1>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, ref} from 'vue'
import {ResModel} from "@/model/datas";
import axios from "axios";
import apis from "@/common/apis";
import router from "@/router";
import {useStore} from "vuex";

export default defineComponent({
  name: "CheckPending",
  setup(){
    console.log(useStore().getters.getAdminId)
    const resData = reactive({
      datas:Array<ResModel>(),
    })

    initData()
    function initData(){

      axios.get(apis.apiUrl.res+'check').then(res=>{
        for(let i = 0;i<res.data.data.length;i++){
          resData.datas.push(res.data.data[i])
        }
      })
    }

    function pass(resId:number){
      axios.put(apis.apiUrl.res+'pass/'+resId).then(res=>{
        router.go(0)
      })
    }

    function nopass(resId:number){
      axios.put(apis.apiUrl.res+'nopass/'+resId).then(res=>{
        router.go(0)
      })
    }



    return{
      resData,
      pass,
      nopass,
      isRoots:localStorage.getItem("isRoot")=='true'?1:0
    }
  }
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
  .no-res-check{
    margin-top: 50px;
    padding: 5px;
    background-color:#76D7C4;
    color: white;
    //text-align: left;
    border-left:5px solid #42b983;
  }
}
</style>
