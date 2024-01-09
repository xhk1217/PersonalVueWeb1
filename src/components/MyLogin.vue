<template>
     <main class="main-wrapper col-md-9 ms-sm-auto py-4 col-lg-9 px-md-4 border-start">
                    <div class="title-group mb-3">
                        <h1 class="h2 mb-0">登录</h1>

                        <small class="text-muted">这里是登录界面，在登录后就可以留言和写博客（设想上），还没实现，所以先放一个样子在这，哈哈</small>
                    </div>

                    <div class="row my-4">
                        <div class="col-lg-4 col-12">
                            <div class="d-flex justify-content-center " >
                            <div class="custom-block bg-white">
                                <h5 class="mb-4">登录</h5>
                                <form>
                                    <div class="mb-3">
                                        <label for="username" class="form-label">用户名</label>
                                        <input type="text" class="form-control my-input " id="username" placeholder="请输入用户名">
                                    </div>
                                    <div class="mb-3">
                                        <label for="password" class="form-label">密码</label>
                                        <input type="password" class="form-control my-input " id="password" placeholder="请输入密码">
                                    </div>
                                    <button type="submit" class="btn btn-primary">登录</button>
                                </form>
                            </div>
                            </div>
                        </div>
                        <div class="col-lg-8 col-12">
                            
                            <div class="custom-block bg-white">
                                <h5 class="mb-4">登录界面</h5>
                                <span>这里是登录界面,不过还是半成品,没有接入后端数据库,所以就先不给出注册界面了</span>
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
    .my-input {
    max-width: 400px;
    display: block;
    }
  @import url('@/assets/css/bootstrap.min.css');
  @import url('@/assets/css/bootstrap-icons.css');
  @import url('@/assets/css/apexcharts.css');
  @import url('@/assets/css/tooplate-mini-finance.css');
  @import url('@/assets/css/myself.css');
</style>

