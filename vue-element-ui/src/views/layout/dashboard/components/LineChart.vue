<template>
  <div class="line-chart" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize' // 自适应

export default {
  mixins: [resize],
  props: {
    chartData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions(this.chartData)
    },
    setOptions({ textData, phoneData, messageData } = {}) {
      this.chart.setOption({
        xAxis: {
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'],
          boundaryGap: false,
          axisTick: {
            show: false
          }
        },
        grid: {
          left: 10,
          right: 10,
          bottom: 20,
          top: 30,
          containLabel: true
        },
        title: {
            left: 'center',
            text: '告警处理情况'
        },
        tooltip: {
          trigger: 'axis',
          formatter: (params) => {
              let denominator = params[0].value+params[1].value+params[2].value;
              let num1 = ((params[0].value/denominator)*100).toFixed(2);
              let num2 = ((params[1].value/denominator)*100).toFixed(2);
              let num3 = ((params[2].value/denominator)*100).toFixed(2);
              return params[0].axisValueLabel + '<br/>'+
              params[0].seriesName +':'+params[0].value + ', ' +num1+'%'+'<br/>' +
              params[1].seriesName +':'+params[1].value + ', ' +num2+'%'+'<br/>' +
              params[2].seriesName +':'+params[2].value + ', ' +num3+'%'+'<br/>'
          },
          axisPointer: {
            type: 'cross'
          },
          padding: [5, 10]
        },
        yAxis: {
          axisTick: {
            show: false
          }
        },
        legend: {
          data: ['text', 'phone', 'message'],
          top: 'bottom'
        },
        series: [{
          stack:'tpm',
          name: 'text', 
          itemStyle: {
            normal: {
              color: '#82ccdd',
              lineStyle: {
                color: '#82ccdd',
                width: 2
              }
            }
          },
          areaStyle: {color: '#82ccdd'},
          smooth: true,
          type: 'line',
          data: textData,
          animationDuration: 2800,
          animationEasing: 'cubicInOut'
        },
        {
          stack:'tpm',
          name: 'phone',
          smooth: true,
          type: 'line',
          itemStyle: {
            normal: {
              color: '#78e08f',
              lineStyle: {
                color: '#78e08f',
                width: 2
              },
              areaStyle: {
                color: '#78e08f'
              }
            }
          },
          data: phoneData,
          animationDuration: 2800,
          animationEasing: 'quadraticOut'
        },
        {
          stack:'tpm',
          name: 'message',
          smooth: true,
          type: 'line',
          itemStyle: {
            normal: {
              color: '#f1c40f',
              lineStyle: {
                color: '#f1c40f',
                width: 2
              },
              areaStyle: {
                color: '#fad390'
              }
            }
          },
          data: messageData,
          animationDuration: 2800,
          animationEasing: 'quadraticOut'
        }]
      })
    }
  }
}
</script>

<style scoped>
    .line-chart {
        width:100%;
        height: 350px;
    }
</style>