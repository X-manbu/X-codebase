# `JavaScript`

**script 标签**

如需向一张页面添加多个脚本文件 - 请使用多个 script 标签：

**提示：**JavaScript 标识符对大小写敏感。



### 函数

定义函数的方式有两种

**函数声明**

函数声明提升：可以把函数声明放在调用它的语句后面。

**函数表达式**

创建的函数叫做**匿名函数**

使用之前必须先赋值（*定义函数放在调用函数前面*）

能把函数作为其他函数的值返回

`arguments.callee`是一个指向正在执行的函数的指针



**立即执行函数**

```js
(function(a, b) {
   console.log(a + b);
})(1, 2)
```

立即执行函数里的变量都是局部变量，不会有命名冲突问题。



**闭包**

闭包是指有权访问另一个函数作用域中的变量的函数，用来保存私有变量。

创建闭包：在一个函数内部创建另一个函数





**构造函数**

构造函数与其他函数的唯一区别就是调用的方式不同，任何**通过new操作符**调用的函数就可以作为构造函数。

```js
//创建Person构造函数
function Person(name, age){
	this.name = name,
	this.age = age,
    this.sayName = function(){
        alert('你好，我是'+this.name)
    }
}

//直接使用，它就是普通函数
Person('小明',18);

//使用new创建函数,就是构造函数
let person1 = new Person();
```



**参数按值传递**

向函数传参数时，就是把外部的值复制到函数内部的参数，在函数中修改参数的值，不会影响到外部的参数。



### 改变this

**call**

通过 函数`call()`能够使用属于另一个对象的方法。

call 的参数是直接放进去的，第二第三第 n 个参数全都用逗号分隔。

```js
let person = {
  name: '小明',
  age: '19',
  say: function(city, habit) {
    console.log(this.name + '-' + this.age + '-' + city + '-' + habit);
  }
}

let person1 = {
  name: '小红',
  age: '18',
}

person.say('河南', 'LOL'); //小明-19-河南-LOL
person.say.call(person1, "河南", "跳舞"); //小红-18-河南-跳舞
person.say.apply(person1, ["中国", "写作"]); //小红-18-中国-写作
```

**apply**

函数`apply()`与`call()`作用一样，都能够使用属于另一个对象的方法。

apply 的所有参数都必须放在一个数组里面传进去。

```js
//call()以普通的方式接受参数
person.say.call(person1,"河南", "跳舞");
//apply()以数组的方式接受参数
person.say.apply(person1,["中国", "写作"]);
```

**bind** 

bind除了返回是函数以外，它 的参数和 call 一样。



**作用域**

```js
console.log(a);
let a = 123;
// Cannot ac	cess 'a' before initialization
//不能在初始化之前访问“a”

console.log(a);
var a = 123;
//undefined

console.log(a);
a = 123;
//a is not defined
```

**闭包**：闭包指的是有权访问父作用域的函数



### 高阶函数

**map**

**作用**：首次先遍历数组，然后在对数组中的每个数据进行操作，不会改变原数组。

**用法**：遍历list的数据，对每个数据加100,返回给addList

```js
const list = [5, 10, 20, 40, 50, 34, 78];
let addList = list.map(function(n) {
	return n + 100
})
```

**reduce**

**作用：**可以对数组中所有的内容进行求和、积、差等

**用法：**接受两个参数：第一个、第二个

**temp**用来存汇总的数，**n**是list数组的每一个内容

```js
let allList = list.reduce(function(temp, n) {
	return temp + n
}, 0)
```



**filter 过滤器**

**作用：**经常用来过滤数组数据，返回true和false

**用法：**遍历list的数据，对每个数据进行判断是否小于等于40,返回为true的数据

```js
let lists = list.filter(function(n) {
	return n <= 40
})
```



**sort排序**

`sort()`默认根据ASCII码来比较大小，直接用来比较数值是不对的。

需要按照以下使用

```js
arr.sort(function (x, y) {
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
});
```



`every()`判断数组的所有元素是否满足条件

`find()`查找第一个满足条件的元素

`findIndex()`查找第一个满足条件的元素的索引

`forEach()`遍历数组所有的元素



### Object

**理解对象**

**对象**就是一个无序属性的集合，其属性可以包括基本值、对象或者函数，而每个属性都有一个名字，这个名字映射到一个值。

**属性**类型有：数据属性和访问器属性两种。

**修改默认属性**必须使用`Object.defineProperty()`方法

**定义多个属性**可以使用`Object.defineProperties()`方法

**读取属性的特性**可以使用`Object.getOwnPropertyDescriptor()`方法  *可以针对任何对象使用该方法*

*只能用于实例属性，要取得原型属性的描述符，必须直接在原型对象上调用该函数*



**创建对象**

**工厂模式**是用函数来封装以特定接口创建对象的细节。

**构造函数**以一个大写字母开头，通过`new`操作符调用

**普通函数**以一个小写字母开头，不通过`new`操作符调用

**构造函数的问题**是：不同实例上的同名函数是不相等的，全局作用域中定义的函数实际上只能被某个对象调用。

*使用**原型模式**可以解决**构造函数的问题***

**原型模式**可以让所有对象实例共享它所包含的属性和方法

每个函数都有一个`prototype`原型属性

```js
 function Person() {}

 Person.prototype.name = "lihuiqi";
```



使用`hasOwnProperty()`方法可以检测一个属性是存在**实例**中，还是存在**原型**中，**存在实例**中会返回`true`



**原型与`in`操作符**

`alert("name" in person);`

只要通过`person`对象能够访问到对象就返回`true`

`for-in`循环返回的是所有能通过对象访问的、可枚举的属性，包括原型和实例中的属性。

`Object.key()`方法接收一个对象，返回一个包含所有可枚举属性的字符串数组。

**引用类型值的原型属性会被所有实例共享**

**原型的动态性：** 实例与原型之间的连接是一个指针。*实例中的指针仅指向原型，而不指向构造函数*

**重写原型对象** 会切断现有原型与任何之前已经存在的对象实例之间的联系。

**原型对象的问题**：通过在实例上添加一个同名属性，可以隐藏原型中的对应属性。

组合使用构造函数模式和原型模式

动态原型模式

寄生构造函数模式

稳妥构造函数模式



**继承**

ECMAScript实现继承主要是依靠**原型链**来实现的。

`isPrototypeOf()` 方法允许你检查一个对象是否存在于另一个对象的原型链上。

**最基础的方法是使用for循环遍历对象**

**for in：** 可用于数组、对象的遍历

```js
//语法
for (const i in array) {
	array[i] = '新增的数据'
}
```

### DOM

通过DOM获取的元素节点都是一个对象。

`Object.getPrototypeOf(person)`

返回`person`的原型

`obj.hasOwnProperty("name")`检测`name`是否来自原型，来自原型则返回`fasle`，来自`obj`则返回`true`



**节点操作**

**创建**节点

`document.createElement('节点名称')`

**增加**节点

`appendChild()`：尾部添加节点

`insertBefore(元素，位置)` ：某位置的前面添加节点

`replaceChild()`:替换节点（接受两个参数：要插入的节点、替换的节点）

`removeChild()`：**删除**节点

`cloneNode()`:克隆节点(接受布尔值，为false代表浅拷贝，true代表深拷贝)

**修改**属性：直接操作元素

**查询**节点

`getElementById()`:根据ID选取元素

`getElementsByName()`:根据name属性选取元素

`getElementsByTagName()`:根据标签名称选取元素集合，不区分标签名的大小写  

`getElementsByClassName()`:根据类名选取元素集合

`querySelector()`:根据完整名称获取第一个元素

`querySelectorAll()`:根据完整名称获取所有元素

`document.body` ：获取body元素对象
`document.documentElement`： 获取html元素对象



**属性操作**

**修改元素的样式**

`element.style` ：直接修改样式

`element.className `：通过修改类名称改变样式

**改变元素文本值**

`innerHtml`

`innerText`

**操作内置属性**

获取内置属性：`document.属性`

设置内置属性：d`ocument.属性 = ‘值’`

获取自定义属性：`document.getAttribute('属性')`

设置自定义属性：`document.setAttribute('属性','值')`

属性命名规范：以data开头例：`document.setAttribute('data-index','1')`

移除自定义属性：`document.removeAttribute('属性')`

**事件操作**

**注册事件**

```js
let btn = document.querySelectorAll("button");
#传统方式注册
btn[0].onclick = function(){}
#事件监听注册
//里面的事件类型是字符串，需要加引号，不带on，一个元素可以添加多个侦听器
btn[1].addEventListener('click', function(){})
```

**移除事件**

```js
#传统移除事件方式
btn[0].onclick = function() {
   alert("我是按钮一");
   btn[0].onclick = null
}

btn[1].addEventListener('click', fn1);
#移除事件
function fn1() {
   alert("我是按钮一");
   btn[1].removeEventListener('click', fn1);
}
```

**捕获事件阶段**

**事件冒泡阶段**

```js
#设置为false,捕获事件阶段
#设置为true,冒泡事件阶段
father.addEventListener('click', function() {
   alert("我是父亲");
}, false);
```



**事件对象**

`e.target` 只触发点击的那个元素

`e.preventDefault()` 阻止默认行为

 `e.stopPropagation()` 阻止冒泡

**鼠标事件**

`e.clientX` 鼠标基于浏览器窗口Y坐标进行定位

`e.pageX` 鼠标基于页面Y坐标进行定位

`e.screenX`鼠标基于电脑屏幕Y坐标进行定位



**移动端触摸事件**

`touchstart`触摸

`touchmove`移动

`touchend`离开

`touches` 触摸屏幕的所有列表

`targetTouches` 触摸元素的所有列表



**事件委托**

**原理：**不用在每个子节点单独设置监听器，而是在其父节点设置监听器，然后利用冒泡原理影响每个子节点。



### BOM

浏览器对象模型

`onload` ：页面加载完成后执行,传统方式只能执行一次，使用`addEventListener`可以执行多次

`DOMContentLoaded`:DOM加载完毕，不包含图片、css、js	

**定时器**

`setTimeout()` 延迟时间到了，就去调用一次函数

`setInterval()` 每个延迟时间，就去调用函数

`clearTimeout()` 清除定时器

 `clearInterval()` 清除定时器

定时器里面的`this`指向`window`

**location**

**参数**

`href` ：整个`url`地址

`search` ：返回参数

`location.assign`：  记录历史页面

`location.reload`： 重新加载页面

`location.replace`： 替换当前页面



**位置**

`element.offsetTop` 返回元素的垂直偏移位置

`element.offsetLeft` 返回元素的水平偏移位置

`element.offsetWidth`返回元素大小包含边框

`element.offsetHeigth`返回元素大小包含边框

`element.clientWidth` 返回元素不包含边框

`element.clientHeigth` 返回元素不包含边框

`scroll`经常获取滚动距离

`pageX`

`pageY`



**鼠标事件**

`mouserenter` 经过自身盒子触发（不冒泡）

`mouserleave` 离开盒子触发（不冒泡）

`mouserover` 经过自身盒子触发，经过其他盒子也会触发（冒泡）



**本地缓存**

**`sessionStorage`关闭浏览器，数据消失**

```js
sessionStorage.setItem('name', value); //存入数据
sessionStorage.getItem('name'); //获取数据
sessionStorage.removeItem('name'); //删除数据
sessionStorage.clear(); //清空数据
```

**locationStorage**

关闭浏览器，数据不消失

```js
localStorage.setItem('name', value); //存入数据
localStorage.getItem('name'); //获取数据
localStorage.removeItem('name'); //删除数据
```



**Cookie**

```js
//添加数据
document.cookie = 'name=小明'; 
//删除数据
document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 GMT"
```



### Window

浏览器窗口的内部宽度和高度，不包含边框、菜单栏等。

`window.innerWidth`

`window.innerHeight`



浏览器窗口的整个宽高

`window.outerWidth`

`window.outerHeight`



屏幕的宽高

`screen.width`

`screen.height`



### Location

`location`表示当前页面的URL





### 正则语法

```
g 全局
i 是修饰符（把搜索修改为大小写不敏感）。
```

在正则表达式中，如果直接给出字符，就是精确匹配。

用`\d`可以匹配一个数字

`\w`可以匹配一个字母或数字

`.`可以匹配任意字符

用`*`表示任意个字符（包括0个）

用`+`表示至少一个字符

用`?`表示0个或1个字符

用`{n}`表示n个字符

用`{n,m}`表示n-m个字符



**基本用法**

```js
#创建方式
let reg = new RegExp()  //使用new
let reg = /a/  //使用字面量

#方法
let reg = /a|b|c/ //匹配a或b或c
let reg = /[a-z]/  //匹配所有小写字母
let reg = /[A-z]/  //匹配所有字母
let reg = /[0-9]/ //匹配所有数字

let reg = /[^a-z]/ //除了小写字母
```



**常用表达式**

```
1.手机号验证
/^1[34578]\d{9}$/

2.密码验证：字母+数字8~16位密码组合
/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/
```



<a href="javascript:void(0)">单击此处什么也不会发生</a>



### Promise

**`promise`本事不是异步，`promise`内部往往是一个异步任务**

promise只要创建，就会立即执行代码

`resolve`函数是在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；

`reject`函数是在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。



调用`resolve`或`reject`以后，Promise 的使命就完成了，后继操作应该放到`then`方法里面，而不应该直接写在`resolve`或`reject`的后面。在它们前面加上`return`语句，这样就不会有意外。

```js
new Promise((resolve, reject) => {
  return resolve(1);
  // 后面的语句不会执行
  console.log(2);
})
```



**then**

**`Promise.prototype.then`**

**1、**`then`的作用是为 `Promise` 实例添加状态改变时的回调函数;

**2、**使用`then`方法，依次指定了两个回调函数。

第一个回调函数**完成**以后，会将返回结果作为**参数**，**传入**第二个回调函数。

如果前一个回调函数返回的是一个`Promise`对象，这时后一个回调函数，就会等待该`Promise`对象的**状态发生变化**，才会被调用。

**3、**链式的`then`可以指定一组**按照次序调用**的回调函数。(可以理解为是步骤2的加强版)



**catch**

**`Promise.prototype.catch`**

**1、**一般来说，不使用`then()`方法的第二个参数捕获错误,推荐使用catch方法。

```js
promise
  .then(function(data) {
    // success
  })
	//使用catch捕获错误
  .catch(function(err) {
    // error
  });
```

**2、**`catch()`方法返回的还是一个 Promise 对象，因此后面还可以接着调用`then()`方法。

```js
someAsyncThing()
.catch(function(error) {
  console.log('oh no', error);
})
//catch之后可以接着调用then()方法
.then(function() {
  console.log('carry on');
});
```

**3、**第一个`catch()`方法之中，还能再抛出错误，因为第二个`catch()`方法可以捕获前一个`catch()`方法抛出的错误。

```js
someAsyncThing().then(function() {
  return someOtherAsyncThing();
}).catch(function(error) {
  console.log('oh no', error);
  // 下面一行会报错，因为y没有声明
  y + 2;
}).catch(function(error) {
  //第二个catch捕获了前一个catch方法抛出的错误
  console.log('carry on', error);
});
```



**flnally**

**`Promise.prototype.finally`**

flnally不管Promise最后的状态，在执行完指定的回调函数后，都会执行finally方法指定的回调函数。

所以`finally`方法里面的操作是与状态无关的，不依赖于 Promise 的执行结果。



**手动写Promise**

```js
const promise = new Promise(resolve, reject) {
    if(true) {
        resolve('成功了');
    } else {
        reject('失败了');
    }
}

//then接受两个函数，第一个是成功的回调函数，第二个是失败的回调函数
promise().then(
    function(res){
        //成功了会打印:成功了
        console.log(res);
    },
    
    function(rej){
        ###一般情况下不在then()方法里面定义reject
        ###在catch()里面定义reject
        //成功了会打印:失败了
        console.log(rej);
    },
)
//catch的作用与then的第二个参数一样，都是用来输出错误
//catch的另外一个作用是，如果抛出异常了，并不会报错卡死js,而会进入这个catch方法中。
.catch(function(rej){
    console.log(rej)
})
```

**then方法可以接受两个参数，第一个对应的resolve的回调，第二个对应的是reject的回调。**



**Promise.all**

定义三个promise

使用promise.all方法一起处理

```js
    function promise01() {
      let pro = new Promise(function(resolve, reject) {
        if (1) {
          console.log('--promise01成功了--')
          resolve('promise01成功了');
        } else {
          console.log('promise01失败了')
          reject('promise01失败了');
        }
      })
      return pro
    }

    function promise02() {
      let pro = new Promise(function(resolve, reject) {
        if (1) {
          console.log('--promise02成功了--')
          resolve('promise02成功了');
        } else {
          console.log('promise02失败了')
          reject('promise02失败了');
        }
      })
      return pro
    }

    function promise03() {
      let pro = new Promise(function(resolve, reject) {
        if (1) {
          console.log('--promise03成功了--')
          resolve('promise03成功了');
        } else {
          console.log('promise03失败了')
          reject('promise03失败了');
        }
      })
      return pro
    }
	//使用all并行执行多个异步操作，并在一个回调中处理所有的返回数据
	//如果需要提前准备好所有的数据才能渲染页面的时候,就可以使用all
    Promise
      .all([promise01(), promise02(), promise03()])
      .then(res => {
        console.log(res)
    })
```



**promise的原始使用**

```js
  new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('aaa')
      }, 1000)
    }).then(res => {
      console.log(res, '第一次执行代码');
      return new Promise((resolve) => {
        resolve(res + '111')
      })
    }).then(res => {
      console.log(res, '第二次执行代码');
      return new Promise((resolve) => {
        resolve(res + '222')
      })
    }).then(res => {
      console.log(res + '第三次执行代码');
      console.log('我是人工分割线');
    })
```

**promise的简写使用**

```js
new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('aaa')
      }, 1000)
    }).then(res => {
      console.log(res, '第一次执行代码');
      return Promise.resolve(res + '111')
    }).then(res => {
      console.log(res, '第二次执行代码');
      return Promise.resolve(res + '222')
    }).then(res => {
      console.log(res + '第三次执行代码');
      console.log('我是人工分割线');
    })
```

**promise的进一步简写使用**

```js
  new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('aaa')
      }, 1000)
    }).then(res => {
      console.log(res, '第一次执行代码');
      return res + '111'
    }).then(res => {
      console.log(res, '第二次执行代码');
      return res + '222'
    }).then(res => {
      console.log(res + '第三次执行代码');
    })
```

### Http

GET和POST两种基本请求方法的区别

1、GET是从服务器端获取数据，POST是向服务器发送数据

2、GET传送的数据量小，POST传送的数据量大

3、因为GET是把参数包含在URL中，POST是通过request body传递参数，所以GET安全性低，POST安全性高



### Ajax

Ajax运行原理及实现

1、创建Ajax对象

var xhr = new  XMLHttpRequest();

2、告诉Ajax请求地址以及请求方式

xhr.open('get', 'https://www.baidu.com')



**名词解析**

`CORS` ：跨域资源共享

`CSRF`：跨站请求伪造



**安全限制**

**浏览器的同源策略**：`JavaScript`发送`AJAX`请求时，`URL`的域名必须和当前页面的完全一致，就是**协议、域名、端口号**需要完全一致，如果不同`JavaScript`将获取不到任何数据。



**跨域**

解决同源策略的问题就是跨域

**方法**：JSONP、CORS、代理（Nginx）

使用`JSONP`解决跨域，**原理**就是利用script标签没有跨域限制。

只能发GET请求

1、动态的创建一个`script`标签

2、将目标地址的`url`放到`script`的`src`属性里

3、在`url`末尾拼接`callback`回调函数

4、就可以再回调函数里获取数据

```js
//创建script标签
let js = document.createElement('script');
let head = document.querySelector('head');

//目标地址拼接回调函数
js.src = 'http://api.money.126.net/data/feed/0000001,1399001?callback=refreshPrice';
head.appendChild(js)

function refreshPrice(data) {
  console.log(data);
}
```



### axios

可以通过npm和cdn的方式引入axios

**npm引入axios**

`npm install axios`

**main.js配置**

```js
import axios from 'axios'
//将axios添加到Vue原型上
Vue.prototype.$axios = axios
//使用axios GET请求方式
this.$axios
  .get('mobile/report/queryGroupLabel',{
      params:{
        id: 'userLabelList1rd',
        token: token
      }
  })
  .then(response => {
   	  console.log(response);
    } else {
      this.$message.warning(response.data.msg)
    }
})

//使用axios POST请求方式
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```



可以通过向`axios`传递相关配置来创建请求

```js
// 发送 POST 请求
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});
```



**`Axios`发送请求时`params`和`data`的区别**

**1.请求方式不同**

`params`用于`GET`请求，是添加到url的请求字符串中的。

`data`用于`POST`请求，是添加到请求体`(body)`中的。



`POST`表单请求提交时`Content-Type:application/x-www-form-urlencoded`

`HTML`中`form`表单的`Content-type`默认值：`Content-type：application/x-www-form-urlencoded`

原生`Ajax`请求时`Content-Type:text/plain;charset=UTF-8`





### ES6

#### Array

`Array.form()`将数组或者类似数组的对象转为真正的数组。

`Array.of()`将一组值转为数组。

`Array.fill()`使用给定的值填充数组。

`Array.find()`用于找出符合条件的第一个数组成员。

`Array.findIndex()`用于找出符合条件的第一个数组成员的索引。



#### Object

`Object.assgin()`用于对象的合并



#### class

```js
let _age = 4
class Animal{
    constructor(name){
        this.name = name;
    }
    
    //getter setter方法
    get age(){
        return _age;
    }
    
    set age(val){
        _age = val;
    }
    
    Hi(){
        console.log('name');//打印名字
    }
}

let cat = new Animal('小猫');
```



**class继承**

语法

```js
class Animal{
    constructor(name){
        this.name = name;
    }
    Hi(){
        console.log('name');//打印名字
    }
}

class Cat extends Animal {
	constructor(name,age){
		super(name); //用super调用父类的构造方法，name是传的值
		this.age = age;
	}
}
```







#### Module

ES6模块通过`export`命令指定输出代码，通过`import`命令输入。

```js
//ES6模块
export { name, age, habit }
import { name, age, habit } from './case.js'
```

- import输入的变量是只读的，输入的对象是可以改写的
- import中不能使用表达式和变量
- 重复执行相同的import语句，只会执行一次



**为模块指定默认输出**

```js
export default function(){
	console.log('foo')
}

//这时import后面的“{}”需要去掉
import newFn from './default'
```



### 浏览器

**url输入到浏览器到页面的呈现的过程**

输入网址，查看缓存、DNS解析域名



## Css

### 布局



### 弹性布局

**父容器**

```css
.box{
  display: flex;
}
```



**子元素属性**

```css
#项目的排列方向
flex-direction

#如果一条轴线排不下，设置如何换行
flex-wrap

#flex-flow属性是flex-direction属性和flex-wrap属性的简写形式
flex-flow

#项目在主轴上的对齐方式
justify-content

#项目在交叉轴上如何对齐 #垂直居中
align-items

#多根轴线的对齐方式
align-content
```



**实现功能**

```css
<!--垂直居中对齐-->
.box{
 	display: flex;
 	justify-content:center;
 	align-items:center;
}
```



### 响应式布局

**媒体查询** ：@media

媒体类型：

screen用于电脑屏幕、平板电脑、智能手机等

all 用于所有设备

print 用于打印机和打印预览

speech 应用屏幕阅读器等发声设备

**css 修改placeholder的颜色**

```css
input::-webkit-input-placeholder {
        color: #ccc;
      }
      input::-moz-input-placeholder {
        color: #ccc;
      }
      input::-ms-input-placeholder {
        color: #ccc;
      }
```



### 定位

 `vertical-align`

**渐变**



## 报错

**键值重复**

`Duplicate keys detected: '1'. This may cause an update error. vue`

**解决方案**：需要检查for循环中的key是否唯一，如果不唯一，需要改成唯一的值。