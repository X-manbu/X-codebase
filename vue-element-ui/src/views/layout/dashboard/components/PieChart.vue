<template>
    <el-row :gutter="10">
        <el-col :span="12">
            <div class="chart-wrapper">
                <div class="pieChart pieChartOne"></div>
            </div>
        </el-col>
        <el-col :span="12">
            <div class="chart-wrapper">
                <div class="pieChart pieChartTwo"></div>
            </div>
        </el-col>
    </el-row>
</template>

<script>
import echarts from 'echarts'
import resize from './mixins/resize'
export default {
    mixins: [resize],
    data () {
        return {
            chartOne: null,
            chartTwo: null,
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.initChart()
        })
    },
    beforeDestroy() {
        if (!this.chartOne && !this.chartTwo) {
            return
        }
        this.chartOne.dispose()
        this.chartTwo.dispose()
        this.chartOne = null
        this.chartTwo = null
    },
    methods:{
        initChart(){
            let pieChartOne = document.querySelector('.pieChartOne');
            let pieChartTwo = document.querySelector('.pieChartTwo');
            this.chartOne = echarts.init(pieChartOne);
            this.chartTwo = echarts.init(pieChartTwo);
            this.chartOne.setOption({
                title: {
                    text: '项目情况',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    top: 'bottom'
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: ['30%', '50%'],
                        label:{
                            formatter: '{b}:{d}%'
                        },
                        data: [
                            {value: 580, name: '已完成', itemStyle:{color:"#54a0ff"}},
                            {value: 735, name: '实施中', itemStyle:{color:"#48dbfb"}},
                            {value: 1048, name: '未开始', itemStyle:{color:"#1dd1a1"}},
                            {value: 1048, name: '已废弃', itemStyle:{color:"#feca57"}},
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
                    }
                ]
            });
            this.chartTwo.setOption({
                title: {
                    text: '本月工单完成情况',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    top: 'bottom'
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '50%',
                        label:{
                            formatter: '{b}:{d}%'
                        },
                        data: [
                            {value: 735, name: '实施中', itemStyle:{color:"#48dbfb"}},
                            {value: 580, name: '已完成', itemStyle:{color:"#54a0ff"}},
                            {value: 1048, name: '待实施', itemStyle:{color:"#1dd1a1"}},
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            })
        }
    }
}
</script>

<style scoped>
    .pieChart{
        width: 450px;
        height: 450px;
    }
    .chart-wrapper {
        background: #fff;
        box-shadow: 4px 4px 40px rgb(0 0 0 / 5%);
        border-color: rgba(0, 0, 0, 0.05);
        padding: 12px;
        margin-bottom: 32px;
        display: flex;
        justify-content: center;
  }
</style>
