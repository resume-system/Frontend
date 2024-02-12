<template>
   <section class="job-recommend">
     <div class="bg-white py-3">
       <h1 class="text-2xl text-left message-container px-6 mb-2 font-bold">
         推荐职位
         <button class="py-2 border-zhuti border px-4 rounded-xl text-sm text-zhuti ml-auto" @click="goToAboutView">
          完善简历
        </button>
       </h1>
       <div  class="message-container px-6 flex justify-between items-center">
        <div class="space-x-4">
          <a-select style="width: 120px" placeholder="求职类型">
            <a-select-option value="不限">
              不限
            </a-select-option>
            <a-select-option value="全职">
              全职
            </a-select-option>
            <a-select-option value="兼职">
              兼职
            </a-select-option>
            <a-select-option value="实习">
              实习
            </a-select-option>
          </a-select>
          <a-select  style="width: 120px" placeholder="工作经验">
            <a-select-option value="不限">
              不限
            </a-select-option>
            <a-select-option value="在校生">
              在校生
            </a-select-option>
            <a-select-option value="应届生">
              应届生
            </a-select-option>
            <a-select-option value="经验不限">
              经验不限
            </a-select-option>
            <a-select-option value="1年以内">
              1年以内
            </a-select-option>
            <a-select-option value="1-3年">
              1-3年
            </a-select-option>
            <a-select-option value="3-5年">
              3-5年
            </a-select-option>
            <a-select-option value="5-10年">
              5-10年
            </a-select-option>
            <a-select-option value="10年以上">
              10年以上
            </a-select-option>
          </a-select>
          <a-select  style="width: 120px" placeholder="学历要求">
            <a-select-option value="不限">
              不限
            </a-select-option>
            <a-select-option value="高中及以下">
              高中及以下
            </a-select-option>
            <a-select-option value="大专">
              大专
            </a-select-option>
            <a-select-option value="本科">
              本科
            </a-select-option>
            <a-select-option value="研究生">
              研究生
            </a-select-option>
            <a-select-option value="博士">
              博士
            </a-select-option>
          </a-select>
          <a-select  style="width: 120px" placeholder="薪资待遇">
            <a-select-option value="不限">
              不限
            </a-select-option>
            <a-select-option value="3k以下">
              3k以下
            </a-select-option>
            <a-select-option value="3k-5k">
              3k-5k
            </a-select-option>
            <a-select-option value="5k-10k">
              5k-10k
            </a-select-option>
            <a-select-option value="10k-20k">
              10k-20k
            </a-select-option>
            <a-select-option value="20k-50k">
              20k-50k
            </a-select-option>
            <a-select-option value="50k以上">
              50k以上
            </a-select-option>
          </a-select>
          <a-select  style="width: 120px" placeholder="期望城市">
            <a-select-option value="不限">
              不限
            </a-select-option>
            <a-select-option value="0-20人">
              0-20人
            </a-select-option>
            <a-select-option value="3-5k">
              20-99人
            </a-select-option>
          </a-select>
        </div>
       </div>
     </div>
     <section class="message-container mt-4">
         <div class="left-container space-y-4 px-4 scrollable-element">
                <div v-for="(item , index) in leftData" @click="leftActive = index" :class="`bg-hui p-5 rounded-2xl hover:shadow-lg cursor-pointer ${leftActive === index ? 'border border-zhuti' : ''}`" :key="index">
                    <p class="flex justify-between">
                      <span class="tex-hei font-bold">{{item.title}}</span>
                      <span class="text-red-500 font-bold">{{item.price}}</span>
                    </p>

                    <div class="flex space-x-2 mt-3 ">
                      <el-tag type="info" v-for="item in item.tag">
                        {{item}}
                      </el-tag>
                    </div>
                    <footer class="flex mt-4 justify-between">
                      <div class="text-sm hover:text-zhuti">
                       <i class="el-icon-office-building"></i>
                        {{item.name}}</div>
                      <div class="text-sm">{{item.address}}</div>
                    </footer>
                </div>
         </div>
         <div class="right-container rounded-2xl bg-white px-6 py-6 scrollable-element">
            <header class="flex items-center justify-between">
                <div>
                      <div class="text-hei font-bold text-xl flex items-center space-x-4">
                        <h1 >{{rightContent.title}}</h1>
                        <p class="text-red-500">
                          {{rightContent.price}}
                        </p>
                      </div>
                      <div class="flex space-x-4 mt-1">
                        <span class="text-sm">
                        <i class="iconfont icon-dingwei"></i>
                          地点
                      </span>
                        <span class="text-sm">
                        <i class="iconfont icon-gongzuotai"></i>
                          经验不限
                      </span>
                        <span class="text-sm">
                        <i class="iconfont icon-xueli"></i>
                          经验不限
                      </span>
                      </div>
                    </div>
                <div class="space-x-3.5">
                    <button class="py-2 border-zhuti border px-4 rounded-xl text-sm text-zhuti">
                      感兴趣
                    </button>
                  <button class="py-2 bg-zhuti px-4 rounded-xl text-sm text-white hover:">
                    能力评价
                  </button>
                </div>
              </header>
           <section >
             <p class="text-left mt-8 font-bold">
               职位描述：
             </p>
             <div class="flex space-x-2 mt-3 ">
               <el-tag type="info" v-for="item in rightContent.jobDescription.tags">
                 {{item}}
               </el-tag>
             </div>
             <p v-html="rightContent.jobDescription.content" style="line-height: 30px" class="text-left my-6 text-sm">
             </p>
           </section>
           <section class="flex items-center border-t border-b py-5">
             <img  class="rounded-full w-10" src="https://img.bosszhipin.com/beijin/upload/avatar/20230420/607f1f3d68754fd0cd30afd2fa215ad0dbb106f895a336a2dbf3834c1fe57541026d1cb2ea0446dd_s.jpg?x-oss-process=image/resize,w_100,limit_0"/>
             <div class="ml-2">
               <p class="font-bold text-left flex space-x-2 items-center">刘先生
               <img class="w-4 ml-2 object-contain" src="https://img.bosszhipin.com/static/file/2022/dcxvc4yjp41661777557709.png"/>
                <span class="text-xs text-hui-100 font-normal">刚刚活跃</span>
               </p>
               <p class="text-xs text-left mt-1"> 诺鑫网络科技 · 老板 </p>
             </div>
           </section>
           <section >
             <p class="text-left mt-8 font-bold">
               职位描述：
             </p>
             <p class="text-left mt-2">
               <span class="text-sm">
                  <i class="iconfont icon-dingwei"></i>
                    承德双桥区天泽嘉园A座1-1101室
                </span>
             </p>
             <footer>
               <baidu-map :center="center" :zoom="zoom" @ready="handler" class="map"></baidu-map>

               <button class="py-2 border-zhuti border px-8 rounded-xl text-sm text-zhuti">
                 查看更多信息
               </button>
             </footer>
           </section>
         </div>
     </section>
   </section>
</template>

<script>
let leftData = [
  {
    title:'淘宝天猫运营专员',
    price:'5-10k',
    tag:['1-3年','中专/中技','网店店长','店铺运营'],
    name:'承德昆孚商贸有限公司',
    address:'承德·双滦区·元宝山大街',
    jobDescription:{
      tags:['含有销售的客服工作','线上客服','正常工作制','办公室坐班','全职工作','不接受居家办公'],
      content:'长期招聘电商业务 网络销售（有无经验均可）；<br/>' +
          '工作时间：每天8小时（不加班），需坐班（不能居家）；<br/>' +
          '年龄要求：18岁-30岁（男女不限）；<br/>' +
          '薪资待遇：底薪+全勤+奖金+提成；<br/>' +
          '新手平均工资4k+，业务熟练后平均工资6k-9k，销售高手平均工资1w-1.5w 销售大神工资无上限（不是大饼）；<br/>' +
          '要求沟通能力 理解能力强，会电脑打字 基本电脑操作即可上岗；<br/>' +
          '公司环境舒适，工作轻松无压力，0基础培训上岗；<br/>' +
          '客户资源稳定，只要你肯努力，收入就没有上限；<br/>' +
          '不出承德享受一线城市待遇，只要你想赚钱 有梦想请加入我们！！！<br/>'
    }

  },
  {
    title:'淘宝天猫运营专员',
    price:'5-10k',
    tag:['1-3年','中专/中技','网店店长','店铺运营'],
    name:'承德昆孚商贸有限公司',
    address:'承德·双滦区·元宝山大街',
    jobDescription:{
      tags:['含有销售的客服工作','线上客服','正常工作制','办公室坐班','全职工作','不接受居家办公'],
      content:'长期招聘电商业务 网络销售（有无经验均可）；<br/>' +
          '工作时间：每天8小时（不加班），需坐班（不能居家）；<br/>' +
          '年龄要求：18岁-30岁（男女不限）；<br/>' +
          '薪资待遇：底薪+全勤+奖金+提成；<br/>' +
          '新手平均工资4k+，业务熟练后平均工资6k-9k，销售高手平均工资1w-1.5w 销售大神工资无上限（不是大饼）；<br/>' +
          '要求沟通能力 理解能力强，会电脑打字 基本电脑操作即可上岗；<br/>' +
          '公司环境舒适，工作轻松无压力，0基础培训上岗；<br/>' +
          '客户资源稳定，只要你肯努力，收入就没有上限；<br/>' +
          '不出承德享受一线城市待遇，只要你想赚钱 有梦想请加入我们！！！<br/>'
    }

  },{
    title:'淘宝天猫运营专员',
    price:'5-10k',
    tag:['1-3年','中专/中技','网店店长','店铺运营'],
    name:'承德昆孚商贸有限公司',
    address:'承德·双滦区·元宝山大街',
    jobDescription:{
      tags:['含有销售的客服工作','线上客服','正常工作制','办公室坐班','全职工作','不接受居家办公'],
      content:'长期招聘电商业务 网络销售（有无经验均可）；<br/>' +
          '工作时间：每天8小时（不加班），需坐班（不能居家）；<br/>' +
          '年龄要求：18岁-30岁（男女不限）；<br/>' +
          '薪资待遇：底薪+全勤+奖金+提成；<br/>' +
          '新手平均工资4k+，业务熟练后平均工资6k-9k，销售高手平均工资1w-1.5w 销售大神工资无上限（不是大饼）；<br/>' +
          '要求沟通能力 理解能力强，会电脑打字 基本电脑操作即可上岗；<br/>' +
          '公司环境舒适，工作轻松无压力，0基础培训上岗；<br/>' +
          '客户资源稳定，只要你肯努力，收入就没有上限；<br/>' +
          '不出承德享受一线城市待遇，只要你想赚钱 有梦想请加入我们！！！<br/>'
    }

  },{
    title:'淘宝天猫运营专员',
    price:'5-10k',
    tag:['1-3年','中专/中技','网店店长','店铺运营'],
    name:'承德昆孚商贸有限公司',
    address:'承德·双滦区·元宝山大街',
    jobDescription:{
      tags:['含有销售的客服工作','线上客服','正常工作制','办公室坐班','全职工作','不接受居家办公'],
      content:'长期招聘电商业务 网络销售（有无经验均可）；<br/>' +
          '工作时间：每天8小时（不加班），需坐班（不能居家）；<br/>' +
          '年龄要求：18岁-30岁（男女不限）；<br/>' +
          '薪资待遇：底薪+全勤+奖金+提成；<br/>' +
          '新手平均工资4k+，业务熟练后平均工资6k-9k，销售高手平均工资1w-1.5w 销售大神工资无上限（不是大饼）；<br/>' +
          '要求沟通能力 理解能力强，会电脑打字 基本电脑操作即可上岗；<br/>' +
          '公司环境舒适，工作轻松无压力，0基础培训上岗；<br/>' +
          '客户资源稳定，只要你肯努力，收入就没有上限；<br/>' +
          '不出承德享受一线城市待遇，只要你想赚钱 有梦想请加入我们！！！<br/>'
    }

  },{
    title:'淘宝天猫运营专员',
    price:'15-20k',
    tag:['1-3年','中专/中技','网店店长','店铺运营'],
    name:'承德昆孚商贸有限公司',
    address:'承德·双滦区·元宝山大街',
    jobDescription:{
      tags:['含有销售的客服工作','线上客服','正常工作制','办公室坐班','全职工作','不接受居家办公'],
      content:'长期招聘电商业务 网络销售（有无经验均可）；<br/>' +
          '工作时间：每天8小时（不加班），需坐班（不能居家）；<br/>' +
          '年龄要求：18岁-30岁（男女不限）；<br/>' +
          '薪资待遇：底薪+全勤+奖金+提成；<br/>' +
          '新手平均工资4k+，业务熟练后平均工资6k-9k，销售高手平均工资1w-1.5w 销售大神工资无上限（不是大饼）；<br/>' +
          '要求沟通能力 理解能力强，会电脑打字 基本电脑操作即可上岗；<br/>' +
          '公司环境舒适，工作轻松无压力，0基础培训上岗；<br/>' +
          '客户资源稳定，只要你肯努力，收入就没有上限；<br/>' +
          '不出承德享受一线城市待遇，只要你想赚钱 有梦想请加入我们！！！<br/>'
    }

  },
]
export default {
  data(){
    return{
      leftActive:0,
      leftData,
      center: {lng: 0, lat: 0},
      zoom: 3
    }
  },
  methods:{
    goToAboutView() {
      this.$router.push('/about'); // 将路由跳转到AboutView页面
    },
    handler ({BMap, map}) {
      console.log(BMap, map)
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = 15
    }
  },
  computed:{
    rightContent(){
      return leftData[this.leftActive]
    }
  }
}
</script>
<style>
.job-recommend{
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #537796;
}
.message-container{
  margin: 0 auto;
  width: 68%;
  flex: 1;
  display: flex;
  overflow: hidden;
}

.left-container{
  overflow-y: auto;
  width: 40%;
  margin-right: 10px;
}
.right-container{
  overflow-y: auto;
  width: 60%;
}
.bg-hui:hover .tex-hei {
  color: #0a65cc; /* 鼠标悬停时，.tex-hei 文字颜色变为蓝色 */
}
/* 隐藏滚动条但允许滚动 */
.scrollable-element::-webkit-scrollbar {
  display: none; /* 隐藏滚动条 */
}

.scrollable-element {
  overflow-y: scroll; /* 允许垂直滚动 */
}

.map {
  width: 100%;
  height: 200px;
  margin: 20px 0px;
}

</style>