<template>

  <div id="app">
    <MyHeader name="..."></MyHeader>
    <div class="container-fluid">
      <div class="row">
        <MyDir isActive=0></MyDir>
        <MyBrief></MyBrief>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyDir from './components/MyDir.vue';
import MyBrief from './components/MyBrief.vue';
export default {
  name: 'App',
  components: {
    MyHeader,
    MyDir,
    MyBrief
  }
}

</script>

<style>


</style>
