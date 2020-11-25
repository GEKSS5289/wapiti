<template>
  <div class="page-login">
    <div class="login-area">
      <div class="login-left-info">
        <h1 class="title">WAPITICMS🌲SUE</h1>
      </div>
      <div class="login-right-login">
        <div class="login-main">
          <input class="input-phone" type="text" placeholder="手机号" maxlength="11" v-model="phone">
          <input class="input-code" type="text" placeholder="验证码" maxlength="4" v-model="code">
          <div class="send-sms" @click="sendSms" v-if="status==false">发送验证码</div>

          <div class="send-sms" @click="sendSms" v-else :class="{'no-active':status}">{{title}}</div>
          <div class="login" @click="login">登录</div>
        </div>
      </div>
    </div>

    <!--    <router-link to="Home">fdsaf</router-link>-->
  </div>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue'
import axios from "axios";
import apis from "@/common/apis";
import jwt from 'jwt-simple'
import router from "@/router";
export default defineComponent({
  name: "Login",
  setup(){

    const time = ref(0)
    const title = ref('')
    const status = ref(false)
    const phone = ref('')
    const code = ref('')

    function sendSms(){
      axios.get(apis.apiUrl.admin+'sms/'+phone.value)
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
    }

    function login(){
      axios.post(apis.apiUrl.admin+"login",{
        adminAccount:phone.value,
        smsCode:code.value
      }).then(res=>{
        let payload = jwt.decode(res.data.data,'sue')
        console.log(payload)
        console.log(payload.adminId)
        localStorage.setItem("token",res.data.data)
        console.log(res.data.data)
        localStorage.setItem("adminId",payload.adminId)
        localStorage.setItem("isRoot",payload.isRoot)
        localStorage.setItem("name",payload.name)
        localStorage.setItem("face",payload.face)
        router.replace("/home")
      })
    }

    return{
      title,
      sendSms,
      status,
      phone,
      code,
      login
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
  height: 1080px;
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
        .input-code{
          margin-top: 20px;
        }

        .no-active{
          pointer-events: none;
          opacity: 0.5;
        }
        .send-sms{
          position: absolute;
          top:150px;
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
          top:150px;
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
</style>
