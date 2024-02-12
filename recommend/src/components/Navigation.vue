
<template>
  <div class="jobpilot">
    <section class="shortcut">
      <div class="w">
        <div class="fl">
          <ul>
            <li><a href="#">首页</a></li>
            <li><a href="#">职位推荐</a></li>
            <li><a href="#">能力评价</a></li>
            <li class="active"><a href="#">简历</a></li>
            <li><a href="#">定价计划</a></li>
            <li><a href="#">客户支持</a></li>
          </ul>
        </div>
        <div class="fr">
          <i></i>&nbsp;<span>+1-202-555-0178</span>
          <el-cascader
            v-model="selectedLocation"
            :options="locationOptions"
            :props="{
              value: 'name',
              label: 'name',
              children: 'children'
            }"
            placeholder="请选择城市"
            @change="handleLocationChange"
          ></el-cascader>
        </div>
      </div>
    </section>

    <header class="header w">
      <div class="logo">
        <h1>
          <a href="navigation.vue" title="Jobpilot">Jobpilot</a>
        </h1>
      </div>
      <div class="search">
        <el-select v-model="selectedCity" placeholder="请选择城市">
          <el-option
            v-for="city in cities"
           key="city"
            :label="city"
            :value="city"
          ></el-option>
        </el-select>
        |<i></i><input type="search" placeholder="工作岗位、公司、关键词">
      </div>
      <div class="login">
        <button class="employee">登录</button>
 <button class="company">发布一个职位</button>
      </div>
    </header>

    <footer class="footer1">
      <div class="w">
        <ul class="call">
          <li><img src="../image/foot.png" alt=""></li>
          <li>
            Call now: <em class="white">(319)555-0115</em>
          </li>
          <li>6391 Elgin St. Celina, Delaware 10299, New York, United States of America</li>
        </ul>
        <div class="service">
          <dl>
            <dt class="white">Quick Link</dt>
            <dd><a href="#">About</a></dd>
            <dd><a href="#">Contact</a></dd>
            <dd><a href="#">Pricing</a></dd>
            <dd><a href="#">Blog</a></dd>
          </dl>
          <dl>
            <dt class="white">Candidate</dt>
            <dd><a href="#">Browse Jobs</a></dd>
            <dd><a href="#">Browse Employers</a></dd>
            <dd><a href="#">Candidate Dashboard</a></dd>
            <dd><a href="#">Saved Jobs</a></dd>
          </dl>
          <dl>
            <dt class="white">Employers</dt>
            <dd><a href="#">Post a Job</a></dd>
            <dd><a href="#">Browse Candidates</a></dd>
            <dd><a href="#">Employers Dashboard</a></dd>
            <dd><a href="#">Applications</a></dd>
          </dl>
          <dl>
            <dt> class="white">Quick Link</dt>
            <dd><a href="#">Faqs</a></dd>
            <dd><a href="#">Privacy Policy</a></dd>
            <dd><a href="#">Terms & Conditions</a></dd>
          </dl>
        </div>
      </div>
    </footer>
    <footer class="footer2">
      <div class="w">
        <div class="fl">@2021 Jobpilot - Job Portal.All rights Rserved</div>
        <div class="fr">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import axios from 'axios';
import { provinceAndCityData } from 'element-china-area-data'

export default {
  name: 'Jobpilot',
  data() {
    return {
      locationOptions: [], // 位置的选项数据，根据实际情况初始化
      options: provinceAndCityData,
      selectedOptions: [],
      selectedLocation: [] // 添加选中的位置数据
    };
  },
  mounted() {
    this.getLocation(); // 页面加载时获取用户位置
  },
  methods: {
    async getLocation() {
      try {
        const response = await axios.get('https://restapi.amap.com/v3/ip?key=a4c963b35454f8fdd2e114db87befbf4'); // 发起请求获取用户地理位置
        const location = response.data; // 获取地理位置信息
        this.selectedLocation = [location.province, location.city]; // 设置用户位置
      } catch (error) {
        console.log('获取地理位置失败：', error);
      }
    },
    handleLocationChange(value) {
      console.log('选择的位置：', value);
      // 处理位置变化的逻辑
    },
  },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

em,
i {
    font-style: normal;
}

li {
    list-style: none;
}

img {
    /* border 0 照顾低版本浏览器 如果 图片外面包含了链接会有边框的问题 */
    border: 0;
    /* 取消图片底侧有空白缝隙的问题 */
    vertical-align: middle
}

button {
    /* 当我们鼠标经过button 按钮的时候，鼠标变成小手 */
    cursor: pointer
}

a {
    color: #666;
    text-decoration: none
}

a:hover {
    color: #c81623
}

button,
input {
    /* "\5B8B\4F53" 就是宋体的意思 这样浏览器兼容性比较好 */
    font-family: Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, "\5B8B\4F53", sans-serif;
    /* 默认有灰色边框我们需要手动去掉 */
    border: 0;
    /* 去掉蓝色边框 */
    outline: none;
}

body {
    /* CSS3 抗锯齿形 让文字显示的更加清晰 */
    -webkit-font-smoothing: antialiased;
    background-color: #fff;
    font: 12px/1.5 Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, "\5B8B\4F53", sans-serif;
    color: #666
}

.hide,
.none {
    display: none
}

/* 清除浮动 */
.clearfix:after {
    visibility: hidden;
    clear: both;
    display: block;
    content: ".";
    height: 0
}

.clearfix {
    zoom: 1
}

/* 版心 */
.w {
    width: 1060px;
    margin: 0 auto;
}

.fl {
    float: left;
}

.fr {
    float: right;
}

/* 字体图标 */
i {
    font-family: 'icomoon';
    font-size: 15px;
    color: black;
    margin: 0 3px;
    vertical-align: middle;
}

/* 字体颜色改变 */
.white {
    color: #fff;
}

/* 快捷导航模块 */
.shortcut {
    height: 35px;
    line-height: 35px;
    background-color: #f1f2f4;
}

.shortcut ul li {
    float: left;
    margin-right: 15px;
}

.active a {
    color: #0a65cc;
}

.active {
    box-shadow: inset 0 -3px 0 0 #0a65cc;
}

.shortcut .fr span {
    color: black;
}

select {
    border: none;
    border-radius: 3px;
    height: 25px;
}

/* 头部模块 */
.header {
    position: relative;
    height: 80px;
}

.logo {
    position: absolute;
    top: 20px;
    height: 30px;
    width: 125px;
}

.logo a {
    display: block;
    width: 125px;
    height: 30px;
    background: url(../image/logo.png) no-repeat;
    background-size: 100% 100%;
    font-size: 0;
}

.search {
    position: absolute;
    top: 15px;
    left: 155px;
    width: 537px;
    height: 42px;
    border: 1px solid #e4e5e8;
    border-radius: 5px;
    overflow: hidden;
}

.search span {
    display: inline-block;
    width: 100px;
}

.search i {
    color: #0367ff;
    font-size: 15px;
    padding-left: 5px;
}

.search input {
    line-height: 42px;
    width: 400px;
    padding-left: 5px;
}

/* 登录按钮 */
.login {
    position: absolute;
    right: 0px;
    top: 15px;
}

.login .employee {
    width: 70px;
    height: 40px;
    background-color: #fff;
    color: #0a65cc;
    border: 1px solid #dbe8f7;
    border-radius: 3px;
    font-weight: 600;
}

.login .company {
    height: 40px;
    width: 150px;
    margin-left: 10px;
    background-color: #0a65cc;
    color: #fff;
    border-radius: 3px;
    font-weight: 600;
}

.info {
    position: absolute;
    right: 0px;
    top: 15px;
}

.info i {
    font-size: 20px;
}

.info img {
    width: 40px;
    height: 40px;
    border-radius: 15px;
    margin-left: 15px;
}

.info .spot {
    position: absolute;
    top: 4px;
    right: 57px;
    width: 15px;
    height: 15px;
    background-color: red;
    border-radius: 10px;
    border: 2px solid #fff;
}

/* 底部模块 */
.footer1 {
    position: relative;
    height: 270px;
    background-color: #18191c;
    padding-top: 60px;
    border: 1px solid #232529;
}

.footer1 .call {
    width: 260px;
}

.footer1 .call li {
    color: #6c6b76;
}

.footer1 .call li:nth-child(2) {
    font-size: 14px;
    margin: 20px 0 10px 0;
}

.footer1 .call img {
    width: 112px;
    height: 28px;
}

.footer1 .service {
    position: absolute;
    top: 60px;
    left: 480px;
}

.footer1 .service dt {
    font-size: 15px;
    margin-bottom: 15px;
}

.footer1 .service dl {
    float: left;
    width: 180px;
}

.footer1 .service dd {
    margin-bottom: 10px;
}

.footer1 .service dd a {
    color: #6c6b76;
}

.footer2 {
    color: #6c6b76;
    height: 40px;
    background-color: #18191c;
}

.footer2 .w {
    line-height: 50px;
}

.footer2 .w i {
    color: #767f8c;
}
</style>