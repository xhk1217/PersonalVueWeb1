<template>
     <main class="main-wrapper col-md-9 ms-sm-auto py-4 col-lg-9 px-md-4 border-start">
                    <div class="title-group mb-3">
                        <h1 class="h2 mb-0">简介</h1>

                        <small class="text-muted">哈喽，大家好，下面的是我的一些小标签（简介）</small>
                    </div>

                    <div class="row my-4">
                       
                        <div class="col-lg-4 col-12">
                            <div class="custom-block custom-block-profile-front custom-block-profile text-center bg-white"  >
                                <!-- style="height: 330px;" -->
                                <div class="custom-block-profile-image-wrap mb-4">
                                    <img src="@/assets/images/xhk.jpg" class="custom-block-profile-image img-fluid" alt="">
                                </div>
                                <p class="d-flex flex-wrap mb-2">
                                    <strong>Name:</strong>
                                    <span>许恒锴</span>
                                </p>

                                <p class="d-flex flex-wrap mb-2">
                                    <strong>Email:</strong>
                                    <span>xhk1217@qq.com</span>
                                </p>

                                <p class="d-flex flex-wrap mb-0">
                                    <strong>Phone:</strong>
                                    <span>13023828685</span>
                                </p>
                            </div>
                        </div>

                        <div class="col-lg-8 col-12">
                            
                            <div class="custom-block bg-white">
                                <h5 class="mb-4">个人介绍</h5>
                                <span>大家好，我是许恒锴，来自软件22-01班，嗯....不知道说什么，就这样吧（在之后想到再填充）</span>
                                <!-- <div id="pie-chart" class="my-chart"></div>  这个在index.html中用id或者class无法找到渲染，不知道为什么 -->
                            </div>

                        </div>
                    </div>

                </main>
</template>

<script>
export default {
name: 'MyBrief'
//   props: {
//     name: String
//   }
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

