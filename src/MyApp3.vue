<template>

  <div id="app">
    <MyHeader name="许恒锴"></MyHeader>
    <div class="container-fluid">
      <div class="row">
        <MyDir isActive=2></MyDir>
        <MyLogin></MyLogin>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyDir from './components/MyDir.vue';
import MyLogin from './components/MyLogin.vue';
export default {
  name: 'MyApp3',
  components: {
    MyHeader,
    MyDir,
    MyLogin
  }
}

</script>

<style>


</style>
