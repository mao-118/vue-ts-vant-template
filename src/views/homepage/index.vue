<template>
  <div class="home-container">
    <div ref="box" class="box"></div>
    <div class="btn-list flex justify-around mt-2">
      <van-button type="primary" @click="boxGsap.play()">play</van-button>
      <van-button type="success" @click="boxGsap.pause()">pause</van-button>
      <van-button type="default" @click="boxGsap.resume()">resume</van-button>
      <van-button type="warning" @click="boxGsap.reverse()">reverse</van-button>
      <van-button type="danger" @click="boxGsap.restart()">restart</van-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import gsap from 'gsap'
const boxGsap = ref()
const box = ref()
const boxMove = () => {
  const width = document.body.clientWidth
  boxGsap.value = gsap.to('.box', {
    x: width - box.value.clientWidth,
    backgroundColor: 'orange',
    repeat: 2,
    yoyo: true,
    duration: 3,
  })
}

onMounted(() => {
  boxMove()
})
</script>
<style lang="scss" scoped>
.home-container {
  width: 100%;
  height: 100%;
  background: #000;
  box-sizing: border-box;
}
.box {
  width: 50px;
  height: 50px;
  background-color: green;
  border-radius: 50%;
}
.van-button {
  width: 60px;
  height: 25px;
  font-size: 10px;
}
</style>
