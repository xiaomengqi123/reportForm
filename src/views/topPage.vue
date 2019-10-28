<template>
  <div class="topPageBox">
   {{msg}}
   top款页
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
export default class TopPage extends Vue{
   msg='欢迎来到'
}
</script>

<style lang="stylus" scoped>
</style>