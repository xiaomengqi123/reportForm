<template>
  <div class="homeBox">
     <div class="tabPart">
       <van-tabs title-active-color="#1989fa" color="#1989fa"  @click="changeTab">
        <van-tab v-for="item,index in tabList" :title="item.name">
          <div class="chartBox">
            <!-- 图表 -->
            <div class="chartsPart">
                <div class="yearOrMonth">
                  <van-tabs type="card" color="#efefef" title-inactive-color="#000" title-active-color="#919192" background="#fff">
                    <van-tab title="本月">
                      <div class="monthBox">
                        <table>
                          <tr>
                            <td></td>
                            <td>销售额(万)</td>
                            <td>同比增幅</td>
                          </tr>
                          <tr>
                            <td>全国</td>
                            <td>7895.8</td>
                            <td>-4.18%</td>
                          </tr>
                        </table>
                       <ve-line :data="chartData" :extend="extend"></ve-line>
                      </div>
                    </van-tab>
                    <van-tab title="本年">
                      <div class="yearBox">
                       <ve-line :data="chartData" :extend="extend"></ve-line>
                      </div>
                    </van-tab>
                  </van-tabs>
                </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="单店">
          <div class="selectStore" v-if="isShowSelect">
            <van-picker :columns="columns" @change="onChange" />
            <div class="selectStore">显示城市对应的门店</div>
          </div>
          <div class="chartBox" v-else>
            显示的报表
          </div>
        </van-tab>
      </van-tabs>
     </div>
     <!-- <div class="tabBarPart">
       <van-tabbar v-model="active">
        <van-tabbar-item icon="shop-o">销售</van-tabbar-item>
        <van-tabbar-item icon="newspaper-o">日报</van-tabbar-item>
        <van-tabbar-item icon="hot-o">TOP款</van-tabbar-item>
       </van-tabbar>
     </div> -->

  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Tab, Tabs,DropdownMenu, DropdownItem,SwitchCell,Button,Popup,Picker  } from 'vant';

@Component({
  components: {
    [Tab.name]:Tab,
    [Tabs.name]:Tabs,
    [DropdownMenu.name]:DropdownMenu,
    [DropdownItem.name]:DropdownItem,
    [SwitchCell.name]:SwitchCell,
    [Button.name]:Button,
    [Popup.name]:Popup,
    [Picker .name]:Picker
  }
})
export default class Home extends Vue {
  titleNumber=3
  tabList=[{'name':'全国'},{'name':'重要'},{'name':'销售'},{'name':'奥莱'}]
  extend = {
        'xAxis.0.axisLabel.rotate': 45,
        legend:{
          orient:'horizontal',
          x:'center',
          y:'bottom', 
        }
      }
  chartData={
          columns: ['日期', '2019销售额', '2018销售额'],
          rows: [
            { '日期': '1/1', '2019销售额': 462.00, '2018销售额': 678.60},
            { '日期': '1/2', '2019销售额': 554.10, '2018销售额': 554.10},
            { '日期': '1/3', '2019销售额': 462.40, '2018销售额': 525.60},
            { '日期': '1/4', '2019销售额': 494.90, '2018销售额': 204.70},
            { '日期': '1/5', '2019销售额': 517.90, '2018销售额': 439.90},
            { '日期': '1/6', '2019销售额': 562.90, '2018销售额': 286.30}
          ]
        }
  switch1= false
  switch2=false
  isShowSelect=true

  // 多级联动
  citys = {
    '上海市':['上海市'],
    '浙江': ['杭州', '宁波', '温州', '嘉兴', '湖州'],
    '福建': ['福州', '厦门', '莆田', '三明', '泉州'],
    '安徽':['合肥','淮北','六安','安庆']
  }
  columns=[
      {
        values: Object.keys(this.citys),
        className: 'column1'
      },
      {
        values: this.citys['上海市'],
        className: 'column2',
        defaultIndex: 0
      }
  ]
  onChange(picker, values) {
      picker.setColumnValues(1, this.citys[values[0]]);
      //=========返回的picker有问题
      console.log(picker);
      console.log(values);
      console.log(this.columns);

    }

  changeTab(name,title){
    console.log(name,title);
    if(name===4){
      // console.log("是4呀")
      // this.isShow=!this.isShow;

    }
  }
}
</script>
<style lang="stylus">
 .chartsPart{
   padding-top 12px
   .monthBox{
     table{
      line-height 35px
      margin 10px auto 0px
      border-collapse collapse
      border-spacing 0
      width 90%
      tr{
        td{
          border 1px solid #ccc
        }
      }
     }
   }
 }
</style>
