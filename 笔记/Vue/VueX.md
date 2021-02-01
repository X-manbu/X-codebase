# Vuex 学习笔记

如果应用够简单，可以使用简单的 store  
**注意**：在组件中使用 store 时, 在 data 中给参数赋值时  
必须这样写`count:store.state`  
不能这样写`count:store.state.count`  
否则不能同步更新数据

mutation 都是同步事务
