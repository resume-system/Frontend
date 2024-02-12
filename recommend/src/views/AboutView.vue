<template>
  <section class="form py-8">
    <h1 class="text-left text-xl font-bold">个人信息</h1>

    <section class="mt-4">
      <a-row :gutter="[30,30]">
        <a-col :span="12">
          <p class="text-left">姓名</p>
          <a-input class="mt-2" placeholder="请输入姓名" />
        </a-col>
        
      </a-row>
      <a-row :gutter="[30,30]">
        <a-col :span="12">
          <p class="text-left">职位期望</p>
          <a-select placeholder="请选择职位期望" class="w-full mt-2" >
            <a-select-option value="前端开发">
              前端开发
            </a-select-option>
          </a-select>
        </a-col>
        <a-col :span="12">
          <p class="text-left">薪资要求</p>

            <a-input-group compact style="display: flex;justify-content: start;" class="mt-2">
              <a-input style="width: 40%; text-align: center" placeholder="最低薪资" />
              <a-input
                  style="width: 20%; border-left: 0; pointer-events: none; backgroundColor: #fff;"
                  placeholder="~" disabled
              />
              <a-input
                  style="width: 40%; text-align: center; border-left: 0;"
                  placeholder="最高薪资"
              />
            </a-input-group>
        </a-col>
      </a-row>

      <a-row :gutter="[30,30]">
        <a-col :span="12">
          <p class="text-left">职位期望</p>
          <a-select placeholder="请选择职位期望" class="w-full mt-2" >
            <a-select-option value="前端开发">前端开发</a-select-option>
          </a-select>
        </a-col>
        <a-col :span="12">
          <p class="text-left">性别</p>
          <a-select placeholder="请选择性别" class="w-full mt-2">
            <a-select-option value="男">男</a-select-option>
            <a-select-option value="女">女</a-select-option>
          </a-select>
        </a-col>
      </a-row>

      <a-row :gutter="[30,30]">
        <a-col :span="12">
          <p class="text-left">参加工作时间</p>
          <a-month-picker placeholder="请选择时间" class="w-full mt-2" />
        </a-col>
        <a-col :span="12">
          <p class="text-left">生日</p>
          <a-month-picker placeholder="请选择时间" class="w-full mt-2" />
        </a-col>
      </a-row>

      <a-row :gutter="[30,30]">
        <a-col :span="12">
          <p class="text-left">邮箱</p>
          <a-input class="mt-2" placeholder="请输入邮箱" />
        </a-col>
        <a-col :span="12">
          <p class="text-left">电话</p>
          <a-input class="mt-2" placeholder="请输入电话" />
        </a-col>
      </a-row>

      <a-row :gutter="[30,30]">
        <a-col :span="12">
          <p class="text-left">微信号</p>
          <a-input class="mt-2" placeholder="请输入微信号" />
        </a-col>
        <a-col :span="12">
          <p class="text-left">期望城市</p>
          <a-input class="mt-2" placeholder="请输入期望城市" />
        </a-col>
      </a-row>


      <a-row :gutter="[30,30]">
        <a-col :span="12">
          <p class="text-left">籍贯</p>
          <a-input class="mt-2" placeholder="请输入籍贯" />
        </a-col>
        <a-col :span="12">
          <p class="text-left">政治面貌</p>
          <a-select placeholder="请选择政治面貌" class="w-full mt-2">
            <a-select-option value="群众">群众</a-select-option>
            <a-select-option value="党员">党员</a-select-option>
            <a-select-option value="预备党员">预备党员</a-select-option>
            <!-- 根据需要添加更多选项 -->
          </a-select>
        </a-col>
      </a-row>
    </section>
    <h1 class="text-left text-xl font-bold mt-7 mb-4">专业技能</h1>
    <vue-editor v-model="form.content" />
    <h1 class="text-left text-xl font-bold mt-7 mb-4">教育经历</h1>
    <section class="text-left space-y-4">
      <div class="p-4 border rounded-lg cursor-pointer" v-for="(item , index ) in  data1" :key="index" >
        <div class="flex justify-between"  @click="item.isDown = !item.isDown">
          <h1 class="text-base font-bold">{{item.name}}</h1>
          <div>
            <i :class="`${!item.isDown  ? 'el-icon-arrow-down' : 'el-icon-arrow-up'} `"></i>
          </div>
        </div>
        <p class="mt-1">
          <span>{{item.zhiwei}}</span>
          <span class="px-4">|</span>
          <span>{{item.time}}</span>
        </p>
        <div :class="`${!item.isDown ? 'h-0' : 'h-full pt-5'}  overflow-hidden ` ">
          <a-row :gutter="[30,30]">
            <a-col :span="12">
              <p class="text-left">学校名称</p>
              <a-input class="mt-2" placeholder="请输入学校名称" />
            </a-col>
            <a-col :span="12">
              <p class="text-left">学历</p>
              <a-select placeholder="请选择学历" class="w-full mt-2">
                <a-select-option value="大专">大专</a-select-option>
                <a-select-option value="本科">本科</a-select-option>
                <a-select-option value="高中">高中</a-select-option>
                <!-- 根据需要添加更多选项 -->
              </a-select>
            </a-col>
          </a-row>
          <a-row :gutter="[30,30]">
            <a-col :span="12">
              <p class="text-left">时间段</p>

              <a-input-group compact style="display: flex;justify-content: start;" class="mt-2">
                <a-input style="width: 40%; text-align: center" placeholder="开始时间" />
                <a-input
                    style="width: 20%; border-left: 0; pointer-events: none; backgroundColor: #fff;"
                    placeholder="~" disabled
                />
                <a-input
                    style="width: 40%; text-align: center; border-left: 0;"
                    placeholder="毕业时间"
                />
              </a-input-group>
            </a-col>
            <a-col :span="12">
              <p class="text-left">专业</p>
              <a-input class="mt-2" placeholder="请选择专业" />
            </a-col>
          </a-row>
          <a-row :gutter="[30,30]">
            <a-col :span="24">
              <p class="text-left">在校经历</p>
              <vue-editor v-model="form.content"  class="mt-2"/>
            </a-col>
          </a-row>
        </div>
      </div>
    </section>
    <h1 class="text-left text-xl font-bold mt-7 mb-4">工作经历</h1>
    <section class="text-left space-y-4">
      <div class="p-4 border rounded-lg cursor-pointer" v-for="(item , index ) in  data2" :key="index" @click="item.isDown = !item.isDown" >
        <div class="flex justify-between">
          <h1 class="text-base font-bold">{{item.name}}</h1>
          <div>
            <i :class="`${!item.isDown  ? 'el-icon-arrow-down' : 'el-icon-arrow-up'} `"></i>
          </div>
        </div>
        <p class="mt-1">
          <span>{{item.zhiwei}}</span>
          <span class="px-4">|</span>
          <span>{{item.time}}</span>
        </p>
        <div :class="`${!item.isDown ? 'h-0' : 'h-full pt-5'}  overflow-hidden ` ">
          <a-row :gutter="[30,30]">
            <a-col :span="12">
              <p class="text-left">公司名称</p>
              <a-input class="mt-2" placeholder="请输入项目名称" />
            </a-col>
            <a-col :span="12">
              <p class="text-left">职位类型</p>
              <a-input class="mt-2" placeholder="例如：UI设计师" />
            </a-col>
          </a-row>
          <a-row :gutter="[30,30]">
            <a-col :span="12">
              <p class="text-left">在职时间</p>

              <a-input-group compact style="display: flex;justify-content: start;" class="mt-2">
                <a-input style="width: 40%; text-align: center" placeholder="选择年月" />
                <a-input
                    style="width: 20%; border-left: 0; pointer-events: none; backgroundColor: #fff;"
                    placeholder="~" disabled
                />
                <a-input
                    style="width: 40%; text-align: center; border-left: 0;"
                    placeholder="选择年月"
                />
              </a-input-group>
            </a-col>
          </a-row>
          <a-row :gutter="[30,30]">
            <a-col :span="24">
              <p class="text-left">工作经历</p>
              <vue-editor v-model="form.content"  class="mt-2"/>
            </a-col>
          </a-row>
        </div>
      </div>
    </section>
    <h1 class="text-left text-xl font-bold mt-7 mb-4">项目经历</h1>
    <section class="text-left space-y-4">
      <div class="p-4 border rounded-lg cursor-pointer" v-for="(item , index ) in  data3" :key="index"  >
        <div class="flex justify-between" @click="item.isDown = !item.isDown">
          <h1 class="text-base font-bold">{{item.name}}</h1>
          <div>
            <i :class="`${!item.isDown  ? 'el-icon-arrow-down' : 'el-icon-arrow-up'} `"></i>
          </div>
        </div>
        <p class="mt-1">
          <span>{{item.zhiwei}}</span>
          <span class="px-4">|</span>
          <span>{{item.time}}</span>
        </p>
        <div :class="`${!item.isDown ? 'h-0' : 'h-full pt-5'}  overflow-hidden ` ">
          <a-row :gutter="[30,30]">
            <a-col :span="12">
              <p class="text-left">项目名称</p>
              <a-input class="mt-2" placeholder="请输入项目名称" />
            </a-col>
            <a-col :span="12">
              <p class="text-left">项目角色</p>
              <a-input class="mt-2" placeholder="例如：UI设计师" />
            </a-col>
          </a-row>
          <a-row :gutter="[30,30]">
            <a-col :span="12">
              <p class="text-left">项目开始时间</p>

              <a-input-group compact style="display: flex;justify-content: start;" class="mt-2">
                <a-input style="width: 40%; text-align: center" placeholder="最低薪资" />
                <a-input
                    style="width: 20%; border-left: 0; pointer-events: none; backgroundColor: #fff;"
                    placeholder="~" disabled
                />
                <a-input
                    style="width: 40%; text-align: center; border-left: 0;"
                    placeholder="最高薪资"
                />
              </a-input-group>
            </a-col>
          </a-row>
          <a-row :gutter="[30,30]">
            <a-col :span="24">
              <p class="text-left">项目描述</p>
              <vue-editor v-model="form.content"  class="mt-2"/>
            </a-col>
          </a-row>
        </div>
      </div>
    </section>
    
  </section>

</template>
<script>
import {VueEditor} from 'vue2-editor'

export default {
  data() {
    return {
      data1:[
        {
          name:'教育经历',
          zhiwei:'学历',
          time:'专业',
          isDown:false
        },
      ],
      data2:[
        {
          name:'工作经历',
          zhiwei:'公司名称',
          time:'职位类型',
          isDown:false
        },
       
      ],
      data3:[
        {
          name:'项目经历',
          zhiwei:'项目名称',
          time:'项目角色',
          isDown:false
        },
      ],
      form: {
        content: '',
      },
      customToolbar: [
        ["bold", "italic", "size", " font", "underline", "color", "italic", "strike", "clean",],
        [{ align: ['', 'center', 'right', 'justify'] }],
        [{
          header: [false, 1, 2, 3, 4, 5, 6]
        }],
        [{
          list: "ordered"
        }, {
          list: "bullet"
        }],
        [{
          indent: "-1"
        }, {
          indent: "+1"
        }],
        ["image"],
      ],
    }
  },
  methods: {
    handleImageAdded: function (file, Editor, cursorLocation, reseter) {
      var formData = new FormData();
      formData.append("image", file);
      $http.post(this.$common.baseUrl + "upload/image", formData).then(res => {
        let data = res.body;
        if (data.code == 200) {
          let url = data.data.url;
          Editor.insertEmbed(cursorLocation, "image", url);
          resetUploader();
        } else { }
      })
    },
  },
}
</script>
<style>

.form{
  margin: 0 auto;
  width: 70%;
}

</style>