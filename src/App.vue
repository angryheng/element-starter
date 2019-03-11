<template>
<div id="app">
  <img src="./assets/logo.png">
  <div class="mt20">
    <el-radio-group v-model="radio">
      <el-radio label="3">选项1</el-radio>
      <el-radio label="6">选项2</el-radio>
      <el-radio label="9">选项3</el-radio>
    </el-radio-group>
  </div>
  <div class="mt20">
    <el-radio-group v-model="radio2" size="small">
      <el-radio-button label="1">选项1</el-radio-button>
      <el-radio-button label="2">选项2</el-radio-button>
    </el-radio-group>
  </div>
  <div class="mt20">
    <el-radio-group v-model="radio3" size="small">
      <el-radio-button label="4">选项1</el-radio-button>
      <el-radio-button label="5">选项2</el-radio-button>
      <el-radio-button disabled label="6">选项2</el-radio-button>
    </el-radio-group>
  </div>
  <div class="mt20">
    <el-radio-group v-model="radio4" size="mini" :disabled="true">
      <el-radio-button label="北京"></el-radio-button>
      <el-radio-button label="上海"></el-radio-button>
      <el-radio-button label="深圳"></el-radio-button>
      <el-radio-button label="杭州"></el-radio-button>
    </el-radio-group>
  </div>
  <div class="mt20">
    <el-radio-group v-model="radio5" size="large">
      <el-radio border label="zyc">最爱</el-radio>
      <el-radio border label="xxl">最恨</el-radio>
    </el-radio-group>
  </div>
  <div class="mt20">
    <el-checkbox v-model="checked">复选项</el-checkbox>
  </div>
  <div class="mt20">
    <el-checkbox disabled v-model="checked1">复选项1</el-checkbox>
    <el-checkbox disabled v-model="checked2">复选项2</el-checkbox>
  </div>
  <div class="mt20">
    <el-checkbox-group v-model="checkList">
      <el-checkbox label="选项A"></el-checkbox>
      <el-checkbox label="选项B"></el-checkbox>
      <el-checkbox label="选项C"></el-checkbox>
      <el-checkbox :disabled="true" label="禁用"></el-checkbox>
      <el-checkbox :disabled="true" label="选中且禁用"></el-checkbox>
    </el-checkbox-group>
  </div>
  <div class="mt20">
    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
    <div class="mt20">
      <el-checkbox-group v-model="cityChecked" @change="handleCheckedCitiesChange">
        <el-checkbox v-for="(city, index) of cities" :label="city" :key="index">{{city}}</el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
  <div class="mt20">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期">
      </el-table-column>
      <el-table-column prop="name" label="姓名">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
    </el-table>
  </div>
  <div class="mt20">
    <el-table :data="tableData" border max-height="450" style="width: 50%">
      <el-table-column fixed prop="date" label="日期" width="150">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120">
      </el-table-column>
      <el-table-column prop="province" label="省份" width="120">
      </el-table-column>
      <el-table-column prop="city" label="市区" width="120">
      </el-table-column>
      <el-table-column prop="address" label="地址" width="300">
      </el-table-column>
      <el-table-column prop="zip" label="邮编" width="120">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <div class="mt20">
  </div>
</div>
</template>

<script>
const cityOptions = ['上海', '北京', '杭州', '深圳'];
export default {
  data() {
    return {
      radio: "3",
      radio2: "1",
      radio3: "5",
      radio4: "上海",
      radio5: "zyc",
      checked: true,
      checked1: true,
      checked2: false,
      checkList: ["选中且禁用", "选项A"],
      isIndeterminate: true,
      checkAll: false,
      cities: cityOptions,
      cityChecked: ["杭州", "深圳"],
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }]
    }
  },
  methods: {
    tableRowClassName({
      row,
      rowIndex
    }) {
      if (rowIndex % 2 === 0) {
        // return "warning-row"
      } else {
        // return "success-row"
      }
    },
    handleCheckAllChange(val) {
      this.cityChecked = val ? this.cities : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(val) {
      let checkCount = val.length;
      this.checkAll = checkCount === this.cities.length ? true : false;
      this.isIndeterminate = checkCount === this.cities.length ? false : true;
    }
  }
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}

.mt20 {
  margin-top: 20px;
}

.el-table .warning-row {
  background-color: #E6A23C;
  color: #fff;
}

.el-table .success-row {
  color: #fff;
  background-color: #67C23A;
}
</style>
