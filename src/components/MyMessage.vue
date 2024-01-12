<template>
     <main class="main-wrapper col-md-9 ms-sm-auto py-4 col-lg-9 px-md-4 border-start">
                    <div class="title-group mb-3">
                        <h1 class="h2 mb-0">留言</h1>

                        <small class="text-muted">这是我设想中的留言界面，不过因为没有后端，用vue实现了一个简单的，但是刷新后会消失</small>
                    </div>

                    <div class="row my-4">
                        
                        <div class="col-lg-4 col-12">
                            <div class="custom-block bg-white p-4 rounded shadow">
                                <h5 class="mb-4">留言板</h5>
                                <textarea class="form-control mb-3" placeholder="大家畅所欲言" v-model="value" rows="5"></textarea>
                                <div class="d-flex justify-content-between align-items-center">
                                <p class="mb-0">共{{list.length}}条</p>
                                <button class="btn btn-primary" @click="addMsg()">留言</button>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-8 col-12">
                            
                            <div class="custom-block bg-white">
                                <h5 class="mb-4">hk贴吧</h5>
                                <div v-for="(item,index) in list" :key="index">
                                    <span>{{index+1}}楼： {{item}}</span>
                                    <br>
                                </div>
                              
                            </div>

                        </div>
                    </div>

                    
                </main>
</template>

<script>
/* eslint-disable */
// 如果没有上面这行就会报错什么空格和换行符...
export default {
name: 'MyBrief'
,methods: {
    addMsg(){
        this.list.push(this.value)
        this.value=""
    }},data() {
        return {
            list:["你好，我是...，欢迎来到hk贴吧，在这里希望你能开心快乐，也希望你能留下你的足迹"],
            value:''
        }
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url('@/assets/css/bootstrap.min.css');
  @import url('@/assets/css/bootstrap-icons.css');
  @import url('@/assets/css/apexcharts.css');
  @import url('@/assets/css/tooplate-mini-finance.css');
  @import url('@/assets/css/myself.css');
</style>

