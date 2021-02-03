<template>
  <el-row :gutter="20" class="panel-group">
    <el-col :xs="8" :lg="{span: '4-8'}" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-people">
            <div class="el-icon-s-data card-panel-icon"></div>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            运行中的项目数
          </div>
          <count-to :start-val="0" :end-val="nums.project" :duration="2600" class="card-panel-num" />
        </div>
      </div>
    </el-col>
    <el-col :xs="8" :lg="{span: '4-8'}" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-message">
            <div class="el-icon-s-platform card-panel-icon"></div>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            在线设备数
          </div>
          <count-to :start-val="0" :end-val="nums.device" :duration="3000" class="card-panel-num" />
        </div>
      </div>
    </el-col>
    <el-col :xs="8" :lg="{span: '4-8'}" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-shopping">
          <div class="el-icon-s-platform card-panel-icon"></div>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            本月新增设备数
          </div>
          <count-to :start-val="0" :end-val="nums.addDevice" :duration="3200" class="card-panel-num" />
        </div>
      </div>
    </el-col>
    <el-col :xs="8" :lg="{span: '4-8'}" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-money">
          <div class="el-icon-warning card-panel-icon"></div>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            本月处理告警数
          </div>
          <count-to :start-val="0" :end-val="nums.info" :duration="3400" class="card-panel-num" />
        </div>
      </div>
    </el-col>
    <el-col :xs="8" :lg="{span: '4-8'}" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-message">
          <div class="el-icon-user-solid card-panel-icon"></div>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            用户总数
          </div>
          <count-to :start-val="0" :end-val="nums.user" :duration="3600" class="card-panel-num" />
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import CountTo from 'vue-count-to'

export default {
  components: {
    CountTo
  },
  data(){
      return {
          nums:{}
      }
  },
  created(){
      this.nums = {
            project:102402,
            device:81232,
            addDevice:9280,
            info:13600,
            user:12600,
      }
  }
}
</script>

<style lang="scss" scoped>
.panel-group {
  margin-top: 18px;

  .card-panel-col {
    margin-bottom: 32px;
  }

  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);

    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .icon-people {
        background: #40c9c6;
      }

      .icon-message {
        background: #36a3f7;
      }

      .icon-money {
        background: #f4516c;
      }

      .icon-shopping {
        background: #34bfa3
      }
    }

    .icon-people {
      color: #40c9c6;
    }

    .icon-message {
      color: #36a3f7;
    }

    .icon-money {
      color: #f4516c;
    }

    .icon-shopping {
      color: #34bfa3
    }

    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 14px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      float: left;
      font-size: 48px;
    }

    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;

      .card-panel-text {
        line-height: 13px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 13px;
        margin-bottom: 12px;
      }

      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}

@media screen and (min-width: 1390px) {
    .el-col-lg-4-8 {
        width: 20%;
    }
}

@media screen and (max-width: 1390px) and (min-width: 750px) {
    .el-col-lg-4-8 {
        width: 33.3%;
    }
}

@media screen and (max-width: 750px) {
    .el-col-lg-4-8 {
        width: 100%;
    }
}

</style>
