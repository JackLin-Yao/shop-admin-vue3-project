<template>
  <el-container>
    <el-aside :width="store.isCollapse ? '64px' : '200px'">
      <AppMenu />
    </el-aside>
    <el-container>
      <el-header>
        <AppHeader />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import AppMenu from '@/layout/components/AppMenu.vue'
import AppHeader from '@/layout/components/AppHeader.vue'
import { useMainStore } from '@/store/index'
// import { storeToRefs } from 'pinia'

const store = useMainStore()
</script>
<style lang="scss">
// .common-layout {
//   height: 100vh;
//   background-color: #e9ee63;
// }
.el-container {
  height: 100vh;
  // weight: 100vh;
}

.el-header {
  background-color: #fff;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.el-aside {
  // width: auto;
  background-color: #ffefef;
  color: #333;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}
</style>
