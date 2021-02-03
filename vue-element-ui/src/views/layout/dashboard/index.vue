<template>
    <div class='app-container'>
         <panel-group />
         <pie-chart />
         <line-chart :chart-data="lineChartData" />
    </div>
</template>

<script>
import PanelGroup from './components/PanelGroup'
import PieChart from './components/PieChart'
import LineChart from './components/LineChart'

export default {
    components:{
        PanelGroup,
        PieChart,
        LineChart
    },
    name: '',
    data () {
        return {
            lineChartData: {
                textData: [100, 120, 161, 134, 105, 160, 165,100, 120, 161, 134, 105],
                phoneData: [120, 82, 91, 154, 162, 140, 145,120, 82, 91, 154, 162],
                messageData: [145,120, 82, 91, 154, 162,120, 82, 91, 154, 162, 140],
            }
        }
    },
}
</script>

<style scoped>
</style>
