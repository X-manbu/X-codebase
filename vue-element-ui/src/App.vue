<template>
  <div id="app">
    <Menu></Menu>
    <router-view/>
  </div>
</template>

<script>
import Menu from './components/menu/index'
export default {
  components:{
    Menu
  }
}
</script>

<style>

</style>
