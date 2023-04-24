<template>
  <div class="container">
    <navbar title="愚人节活动" @click-left="handleClick" />
    <div class="play-box">
      <div class="play">
        <div class="add-box">
          <span>{{ num }}</span>
          <img src="@/assets/add.png" class="add" @click="shop" />
        </div>
        <video
          v-show="show"
          id="VideoDom"
          ref="VideoDom"
          poster="@/assets/play.png"
          preload="auto"
          webkit-playsinline="webkit-playsinline"
          playsinline="true"
          x5-playsinline="x5-playsinline"
          x5-video-player-type="h5"
          x5-video-player-fullscreen="x5-video-player-fullscreen"
          muted="true"
          src="../../assets/play.mp4"
        ></video>
        <img src="@/assets/play.png" class="play-img" />
        <img src="@/assets/nie.png" class="nie" @click="play" />
      </div>
    </div>
    <img src="@/assets/gift.png" alt="" class="gift" />
  </div>
</template>
<script setup lang="ts">
import { Toast } from 'vant'
const handleClick = () => {
  Toast('返回')
}
const show = ref(false)
const VideoDom = ref()
const num = ref(999)
onMounted(() => {
  VideoDom.value.onended = endVideo
})
const endVideo = () => {
  Toast.success('恭喜获得小丑卡*10')
  show.value = false
  VideoDom.value.load()
}
const play = () => {
  if (!show.value) {
    show.value = true
    num.value--
    VideoDom.value.play()
  }
}
const shop = () => {
  Toast.fail('余额不足')
}
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  min-height: 100%;
  background-image: url('@/assets/homebg.png');
  background-size: 100%;
  padding-bottom: 30px;
  .play-box {
    width: 347px;
    height: 596px;
    margin: 300px auto 0;
    background-image: url('@/assets/luck.png');
    background-size: 100%;
    overflow: hidden;

    .play {
      width: 320px;
      height: 449px;
      margin: 84px auto;
      position: relative;
      .add-box {
        width: 130px;
        height: 45px;
        background-image: url('@/assets/num.png');
        background-size: 100%;
        text-align: center;
        line-height: 45px;
        position: absolute;
        font-size: 16px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #ffe1f1;
        z-index: 9;
        .add {
          position: absolute;
          width: 22px;
          height: 22px;
          right: 15px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 9;
        }
      }
      #VideoDom {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        object-fit: cover;
      }
      .play-img {
        width: 100%;
        height: 100%;
      }
      @keyframes salce {
        0%,
        100% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.3);
        }
      }
      .nie {
        position: absolute;
        width: 104px;
        height: 107px;
        bottom: 0;
        left: 50%;
        margin-left: -52px;
        animation: salce linear 1s infinite;
      }
    }
  }
  .gift {
    display: block;
    width: 347px;
    height: 489px;
    margin: 34px auto 0;
  }
}
</style>
