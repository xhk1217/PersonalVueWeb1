<template>

  <div id="app">
    <MyHeader name="许恒锴"></MyHeader>
    <div class="container-fluid">
      <div class="row">
        <MyDir isActive=1></MyDir>
        <MyBlog></MyBlog>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyDir from './components/MyDir.vue';
import MyBlog from './components/MyBlog.vue';
export default {
  name: 'MyApp2',
  components: {
    MyHeader,
    MyDir,
    MyBlog
  }
}

</script>

<style>


</style>
