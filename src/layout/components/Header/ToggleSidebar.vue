<template>
  <el-icon class="icon-btn" @click="handleCollapse()">
    <fold v-if="store.isCollapse == false" />
    <Expand v-else />
  </el-icon>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store/index'
// import { storeToRefs } from 'pinia'

const store = useMainStore()

const handleCollapse = () => {
  // let aab = !(store.asideWidth == '250px')
  store.isCollapse = !store.isCollapse
  // store.count++
  // console.log(store.count)
  // console.log(aab)
  store.asideWidth == "250px" ? "64px" : "250px"
}
</script>

<style scoped></style>
