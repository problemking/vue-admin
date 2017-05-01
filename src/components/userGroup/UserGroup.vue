<template>
  <div id="UserGroup">
    <div class="function">
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <el-input
              placeholder="请输入群组名称"
              icon="search"
              v-model="input">
            </el-input>
          </div>
        </el-col>
        <el-col :span="20">
          <el-button type="primary">新建用户群组</el-button>
        </el-col>
      </el-row>
    </div>
    <el-table
      :data="usergrouptableData"
      border
      style="width: 100%">
      <el-table-column
        prop="gropname"
        label="群组名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="gropcondition"
        label="测试条件"
        width="180">
      </el-table-column>
      <el-table-column
        prop="textname"
        label="测试方案名称"
        width="180">
      </el-table-column>
       <el-table-column
        prop="createperson"
        label="创建人"
        width="180">
      </el-table-column>
      <el-table-column
        prop="createtime"
        label="创建时间">
      </el-table-column>
      <el-table-column
          :context="_self"
          inline-template
          label="操作">
          <span>
            <el-button type="text" size="small">编辑</el-button>
          </span>
        </el-table-column>
    </el-table>
  </div>
</template>

<script>
import usergrouptableData from '../../mock/userGroup.js';
  export default{
    data(){
      return {
        input: '',
        usergrouptableData
      }
    },
    methods: {
      handleClick: function(){
        alert('click');
      }
    },
    components:{
     
    }
  }
</script>
