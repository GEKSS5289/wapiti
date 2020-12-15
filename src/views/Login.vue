<template>
  <div class="page-login" :class="{'cmsMng-transition-begin':cmsMngstatus,'cmsMng-transition-end':!cmsMngstatus}">
    <div class="login-area">
      <div class="login-left-info">
        <h1 class="title">WAPITICMS🌲SUE</h1>
      </div>
      <div class="login-right-login">
        <div class="login-main">
          <div class="account">
            <h1>ACCOUNT</h1>
            <input class="input-phone" type="text" placeholder="手机号" maxlength="11" v-model="phone">
            <h1 class="error-msg" v-if="accountErrorMsg!=''">{{accountErrorMsg}}</h1>
          </div>
         <div class="smscode">
           <h1>SMSCODE</h1>
           <input class="input-code" type="text" placeholder="验证码" maxlength="4" v-model="code">
           <h1 class="error-msg" v-if="smsErrorMsg!=''">{{smsErrorMsg}}</h1>
         </div>
          <div class="send-sms" @click="sendSms" v-if="status==false" :class="{'no-active':phone.length<11||phone.length>11}">发送验证码</div>
          <div class="send-sms" :class="{'no-active':status}" v-else >{{title}}</div>
          <div class="login" @click="login">登录</div>
        </div>
      </div>
    </div>

    <!--    <router-link to="Home">fdsaf</router-link>-->
  </div>
  <div class="friendly-prompt" :class="{'loginfo-transition-begin':loginfoStatus,'loginfo-transition-end':!loginfoStatus}">
    <h1 class="">📌书山有路，勤为近</h1>

  </div>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue'
import axios from "axios";
import apis from "@/common/apis";
import jwt from 'jwt-simple'
import router from "@/router";
import {cmsMngInit} from "@/script/transitionInit";
export default defineComponent({
  name: "Login",
  setup(){

    const time = ref(0)
    const title = ref('')
    const status = ref(false)
    const phone = ref('')
    const code = ref('')
    const smsErrorMsg = ref('')
    const accountErrorMsg = ref('')



    function sendSms(){
      axios.get(apis.apiUrl.admin+'sms/'+phone.value)
        .then(res=>{
          status.value = true
          title.value = "还剩"+(60-time.value)+"秒"
          const times = setInterval(()=>{
            if(time.value == 60){
              // clearInterval()
              status.value = false
              clearInterval(times)
            }else{
              time.value++
              title.value = "还剩"+(60-time.value)+"秒"
            }
          },1000)
          time.value = 0
        })
        .catch(error=>{
          console.log(error)
          let errorCode = error.data.errorCode
          let errorMsg = error.data.errorMsg
          if(error.status == 405){
            // smsErrorMsg.value = '😊'+error.data.errorMsg
            smsErrorMsg.value = '😭'+'ACCOUNT OR SMSCODE ERROR'
          }
          if(error.status == 400){
            smsErrorMsg.value = '🙃'+error.data
          }
          if(errorCode == 5001){
            smsErrorMsg.value = '😊'+errorMsg
          }
          if(errorCode == 4003){
            smsErrorMsg.value = '😊'+errorMsg
          }
          if(errorCode == 5002){
            smsErrorMsg.value = '😊'+errorMsg
          }
        })

    }

    function login(){

      smsErrorMsg.value = ''
      accountErrorMsg.value = ''
      axios.post(apis.apiUrl.admin+"login",{
        adminAccount:phone.value,
        smsCode:code.value
      }).then(res=>{
        let payload = jwt.decode(res.data.data,'sue')
        sessionStorage.setItem("token",res.data.data)
        sessionStorage.setItem("isRoot",payload.isRoot)
        sessionStorage.setItem("name",payload.name)
        sessionStorage.setItem("face",payload.face)
        sessionStorage.setItem("isFreeze",payload.isFreeze)
        sessionStorage.setItem("payload",JSON.stringify(payload))
        router.replace("/home")
      }).catch(error=>{
        console.log(error)
        if(error.data.smsCode){
          smsErrorMsg.value = '😊'+error.data.smsCode
        }
        if(error.data.adminAccount){
          accountErrorMsg.value = '😊'+error.data.adminAccount
        }
        if(error.data.errorCode==5001){
          smsErrorMsg.value = '🌖'+error.data.errorMsg
        }
        if(error.data.errorCode == 4003){
          accountErrorMsg.value = '😊'+error.data.errorMsg
        }

      })
    }

    return{
      title,
      sendSms,
      status,
      phone,
      code,
      login,
      smsErrorMsg,
      accountErrorMsg,

        ...cmsMngInit()

    }
  }
})
</script>

<style lang="scss" scoped>
@import "../assets/style/mixin";
.page-login{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600px;
  margin-top: 120px;
  .login-area{
    width: 1226px;
    display: flex;
    align-items: center;
    justify-content: center;

    .login-left-info{
      h1{
        font-size: 80px;
      }
    }
    .login-right-login{
      //height: 200px;
      .login-main{
        margin-left: 120px;
        display: flex;
        flex-direction: column;
        position: relative;
        input{
          border: none;
          padding: 20px;
          width: 300px;
          border-left: 5px solid #42b983;
          @include shadow();
        }


        .account{
          margin-bottom: 30px;
          text-align: left;
          position: relative;
          h1{
            margin-bottom: 5px;
          }
          .error-msg{
            position: absolute;
            left: 380px;
            width: 500px;
            top: 50px;
          }
        }
        .smscode{
          text-align: left;
          position: relative;
          h1{
            margin-bottom: 5px;
          }
          .error-msg{
            position: absolute;
            left: 380px;
            width: 500px;

            top: 50px;
          }
        }

        .no-active{
          pointer-events: none;
          opacity: 0.5;
        }
        .send-sms{
          position: absolute;
          top:240px;
          padding: 10px;
          border-radius: 5px;
          cursor: pointer;
          background: #1ABC9C;
          color: white;
          font-size: 15px;
          font-weight: bold;
          transition: all 0.6s;

          &:hover{
            background: #42b983;
          }
        }
        .login{
          position: absolute;
          width: 120px;
          top:240px;
          left: 130px;
          padding: 10px;
          border-radius: 5px;
          cursor: pointer;
          background: #1ABC9C;
          color: white;
          font-size: 15px;
          font-weight: bold;
          transition: all 0.6s;

          &:hover{
            background: #42b983;
          }
        }

      }

    }
  }
}

.friendly-prompt{

  width: 1226px;
  margin: 0 auto;
  background-color:#FBFCFC;
  text-align: left;
  padding: 50px;
  border-radius: 20px;

  color:#888888;
}
</style>
