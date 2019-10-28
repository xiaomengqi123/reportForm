<template>
  <div class="dailyBox">
      {{msg}}
      日报页
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

export default class Daily extends Vue{
   msg='欢迎来到'
}
</script>

<style lang="stylus" scoped>
</style>