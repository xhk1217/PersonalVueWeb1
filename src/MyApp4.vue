<template>

  <div id="app">
    <MyHeader name="许恒锴"></MyHeader>
    <div class="container-fluid">
      <div class="row">
        <MyDir isActive=3></MyDir>
        <MyMessage></MyMessage>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyDir from './components/MyDir.vue';
import MyMessage from './components/MyMessage.vue';
export default {
  name: 'MyApp4',
  components: {
    MyHeader,
    MyDir,
    MyMessage
  }
}

</script>

<style>


</style>
