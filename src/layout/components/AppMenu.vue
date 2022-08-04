<template>
  <div class="app-menu">
    <el-menu
      active-text-color="#ffd04b"
      background-color=" #ffefef"
      class="el-menu-vertical-demo"
      default-active="1"
      text-color="#545c64"
      :router="true"
      :collapse="store.isCollapse"
      collapse-transition="false"
    >
      <el-menu-item index="/">
        <el-icon><HomeFilled /></el-icon>
        <template #title>主页</template>
      </el-menu-item>
      <el-sub-menu index="/product">
        <template #title>
          <el-icon><Goods /></el-icon>
          <span>商品</span>
        </template>
        <el-menu-item index="/product/list">
          <el-icon><Menu /></el-icon>商品管理</el-menu-item
        >
        <el-menu-item index="/product/classify">
          <el-icon><Menu /></el-icon>商品分类</el-menu-item
        >
        <el-menu-item index="/product/attr">
          <el-icon><Menu /></el-icon>商品规格</el-menu-item
        >
        <el-menu-item index="/product/reply">
          <el-icon><Menu /></el-icon>商品评论</el-menu-item
        >
      </el-sub-menu>
      <el-sub-menu index="/order">
        <template #title>
          <el-icon><ShoppingCartFull /></el-icon>
          <span>订单</span>
        </template>
        <el-menu-item index="/order/list">
          <el-icon><Menu /></el-icon>订单列表</el-menu-item
        >
        <el-menu-item index="/order/offline">
          <el-icon><Menu /></el-icon>Offline</el-menu-item
        >
      </el-sub-menu>
      <el-menu-item index="/media">
        <el-icon><Notebook /></el-icon>
        <template #title>媒体</template>
      </el-menu-item>
      <el-sub-menu index="/permission">
        <template #title>
          <el-icon><ShoppingCartFull /></el-icon>
          <span >权限</span>
        </template>
        <el-menu-item index="/permission/role">
          <el-icon><Menu /></el-icon>角色</el-menu-item
        >
        <el-menu-item index="/permission/admin">
          <el-icon><Menu /></el-icon>管理员</el-menu-item
        >
        <el-menu-item index="/permission/rule">
          <el-icon><Menu /></el-icon>权限规则</el-menu-item
        >
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
// import { ref } from 'vue'
import { useMainStore } from '@/store/index'
// import { storeToRefs } from 'pinia'

const store = useMainStore()
// const collapse = () => {
//   let <boolean>aab= store.isget()
// }
console.log(store.isCollapse)
</script>

<style lang="scss" scoped>
.el-menu {
  border-right: none;
  height: 100vh;
}
// .app-menu {
//   width: 250px;
// }
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 2px;
  min-height: 400px;
}
</style>
