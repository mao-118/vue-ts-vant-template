<template>
  <div class="content-404">
    <van-empty image="error" description="没有找到该页面！！">
      <template #default>
        <div class="tip">404 Not Found</div>
      </template>
    </van-empty>
  </div>
</template>
<style lang="scss" scoped>
.content-404 {
  width: 100%;
  height: 100vh;

  .tip {
    font-size: 24px;
    font-weight: bolder;
    line-height: 4em;
  }
}
</style>
