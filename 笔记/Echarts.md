# `Echarts`

## 创建`Echarts`

**1、在`HTML`中创建一个容器，并设置选择器**

```html
<div id="myChart"></div>
```

**2、在`js`中初始化一个 `echarts` 实例**

```js
 let myChart = this.$echarts.init(document.getElementById('myChart'));
 //默认创建的Echarts图是使用canvas渲染的，会有模糊，使用svg渲染的图会清晰
 let myChart = this.$echarts.init(document.getElementById('myChart'), null, {renderer: 'svg'})
```

**3、指定图表的配置项和数据**

```js
option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
};
```

**4、通过`setOption`生成实例**

```js
myChart.setOption(option);
```



## 通用配置

### `grid`

用来设置图形的位置

```js
grid: {
      left: "10",
      top: "30",
      right: "10",
      bottom: "10",
      //规定grid区域是否包含刻度标签
      containLabel: true
 },
```

### `tooltip`

提示框组件，可以用它来配置坐标轴指示器、并且指定指示器类型

通过`axisPointer`属性设置

```js
'line' 直线指示器
'shadow' 阴影指示器
'none' 无指示器
'cross' 十字准星指示器。其实是种简写，表示启用两个正交的轴的 axisPointer。
```



### `series`

`smooth`属性确定折线图是否平滑曲线显示。

`label`用来设置图形上的文本标签。



## `bar`柱状图

![](D:\文件\手册集合\images\echarts\2.png)



**坐标轴**

**常用设置**

```js
  yAxis: {
        type: 'category',
        data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)'],
        //控制y轴的刻度
        axisTick:{
            show:true
        },
        //控制y轴线
        axisLine:{
            show:true
        },
        //控制y轴标签
        axisLabel:{
            show:true
        },
        //坐标轴上是否显示分割线，
        splitLine: {
          lineStyle: {
          	color: "rgba(255,255,255,.9)"
        }
      }
    },
```

**添加第二个y轴**

```js
  yAxis: [{
        //第一个个y轴
        type: 'category',
        data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)'],
        //控制y轴的刻度
        axisTick:{
            show:true
        },
        //控制y轴线
        axisLine:{
            show:true
        },
        //控制y轴标签
        axisLabel:{
            show:true
        }
    },{
        //第二个y轴
    	show:true,
    	data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)'],
    }],
```

![](D:\文件\手册集合\images\echarts\3.png)

可以通过配置 `yAxisIndex`参数使两个柱重叠

```js
    series: [{
        //通过设置，第一个柱状图和第二个会重叠
        yAxisIndex: 0,
        name: '条',
      },
      {
        yAxisIndex: 1,
        name: '外边框',
      }
    ]
```