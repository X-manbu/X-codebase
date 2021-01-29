<template>
  <div>
      <button @click="btn('你好啊')">Hi</button>
  </div>
</template>

<script>
import coordtransform from 'coordtransform'
export default {
    data(){
        return{
            
        }
    },
    created(){
        this.getGcj();
    },
    methods:{
        btn(value){
            for (let i = 0; i < 10; i++) {
                console.log(i);
            }
        },
        getGcj(){
            //国测局坐标(火星坐标,比如高德地图在用),百度坐标,wgs84坐标(谷歌国外以及绝大部分国外在线地图使用的坐标)
            //百度经纬度坐标转国测局坐标
            var bd09togcj02 = this.coordtransform.bd09togcj02(116.404, 39.915);
            //国测局坐标转百度经纬度坐标
            var gcj02tobd09 = this.coordtransform.gcj02tobd09(116.404, 39.915);
            //wgs84转国测局坐标
            var wgs84togcj02 = this.coordtransform.wgs84togcj02(116.404, 39.915);
            //国测局坐标转wgs84坐标
            var gcj02towgs84 = this.coordtransform.gcj02towgs84(116.404, 39.915);
            console.log('转换');
            console.log(bd09togcj02);
            console.log(gcj02tobd09);
            console.log(wgs84togcj02);
            console.log(gcj02towgs84);
            //result
            //bd09togcj02:   [ 116.39762729119315, 39.90865673957631 ]
            //gcj02tobd09:   [ 116.41036949371029, 39.92133699351021 ]
            //wgs84togcj02:  [ 116.41024449916938, 39.91640428150164 ]
            //gcj02towgs84:  [ 116.39775550083061, 39.91359571849836 ]
        },
    }
}
</script>

<style>

</style>