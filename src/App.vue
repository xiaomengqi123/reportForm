<template>
  <div id="app">
    <router-view/>
       <van-tabbar v-model="active" route>
        <van-tabbar-item icon="shop-o" to='/'>销售</van-tabbar-item>
        <van-tabbar-item icon="newspaper-o" to='/daily'>日报</van-tabbar-item>
        <van-tabbar-item icon="hot-o" to='/toppage'>TOP款</van-tabbar-item>
       </van-tabbar>
       <!-- <router-link to='/'>销售</router-link><br>
       <router-link to='/daily'>日报</router-link><br>
       <router-link to='/toppage'>TOP款</router-link><br> -->
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import { Tabbar, TabbarItem} from 'vant';

@Component({
  components:{
    [Tabbar.name]:Tabbar,
    [TabbarItem.name]:TabbarItem,
  }
})

export default class App extends Vue{
  active=0


}

</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
</style>
