<template>
  <div class="admin-mng-box">
    <div class="admin-list">
      <div class="admin-item">
        <div class="admin-info">
          <h1 class="admin-emoji">😭</h1>
          <h1 class="admin-name">name:admin</h1>
          <h1 class="admin-account">account:18827346934</h1>
        </div>
        <div class="admin-op">
          <h3 class="admin-freeze">冻结</h3>
          <h3 class="admin-up-super-admin">授权超级管理</h3>
          <h3 class="delete-admin">删除</h3>
        </div>
      </div>
      <div class="admin-item">
        <div class="admin-info">
          <h1 class="admin-emoji">😭</h1>
          <h1 class="admin-name">name:admin</h1>
          <h1 class="admin-account">account:18827346934</h1>
        </div>
        <div class="admin-op">
          <h3 class="admin-freeze">冻结</h3>
          <h3 class="admin-up-super-admin">授权超级管理</h3>
          <h3 class="delete-admin">删除</h3>
        </div>
      </div>
    </div>
    <div class="add-admin">
      <h1>添加管理员</h1>
      <h1 class="admin-icon">😁</h1>
      <input type="text" placeholder="输入管理员name">
      <input type="text" placeholder="输入管理员手机号" maxlength="11">
      <h1 class="admin-push">添加</h1>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
export default defineComponent({
name: "AdminMng"
})
</script>

<style lang="scss" scoped>
@import "../../../assets/style/mixin";
.admin-mng-box{
  margin-top: 30px;

  .admin-list{
    display: flex;
    padding: 10px;
    overflow-y: auto;
    height: 200px;
    flex-direction: column;
    .admin-item{
      margin-bottom: 30px;
      display: flex;
      //width: 505px;
      justify-content: center;
      padding: 20px;
      text-align: left;
      align-items: center;
      transition: all 0.7s;
      @include shadow();
      &:hover{
        background-color: #1ABC9C;
        color: white;
        .admin-op{
          h3{
            background-color: white;
            border: 1px solid #1ABC9C;
          }
        }
      }
      .admin-op{
        margin-left: 50px;
        h3{
          margin-bottom: 10px;
          cursor: pointer;
          text-align: center;
          color: #76D7C4;
          border: 1px solid #76D7C4;
          padding: 10px 10px;
          transition: all 0.8s;
          border-radius: 5px;
          &:hover{
            background-color: #5DADE2;
            color: white;
          }
        }

      }
    }
  }
  .add-admin{
    justify-content: center;
    align-items: center;
    text-align: left;
    padding: 10px;
    display: flex;
    flex-direction: column;
    .admin-icon{
      margin-top: 20px;
      margin-bottom: 20px;

      padding: 0 15px;
      text-align: left;
      cursor: pointer;
    }
    input{
      width: 200px;
      height: 10px;
      font-size: 20px;
      padding: 20px;
      margin-bottom: 20px;
      border-top: none;
      border-bottom: none;
      border-right: none;
      border-left: 5px solid #42b983;
      background-color: #E8F6F3;
    }
    .admin-push{
      background-color: #42b983;
      border-radius: 10px;
      width: 150px;
      text-align: center;
      color: white;
      padding: 5px 10px;
    }
  }
}
</style>
