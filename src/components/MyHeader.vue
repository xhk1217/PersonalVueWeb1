<template>
      <header class="navbar sticky-top flex-md-nowrap">
            <div class="col-md-3 col-lg-3 me-0 px-3 fs-6">
                    <div class="navbar-brand d-flex align-items-center">
                        <i class="bi-box"></i>
                        <span class="ms-2 fw-bold" style="font-family: 'Unbounded', sans-serif;">{{name}}个人网站</span>
                    </div>
            </div>
            <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-nav me-lg-2">
                <div class="nav-item text-nowrap d-flex align-items-center">
                   
                    <div class="dropdown ps-1">
                        <a class="nav-link dropdown-toggle text-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi-three-dots-vertical"></i>
                        </a>

                        <div class="dropdown-menu dropdown-menu-social bg-white shadow" >
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-4 col-md-4 col-4">
                                        <a class="dropdown-item text-center" href="https://space.bilibili.com/288480424?spm_id_from=333.337.0.0">
                                            <img src="@/assets/images/social/bilibili.png" class="profile-image img-fluid" alt="">
                                            <span class="d-block">Bilibili</span>
                                        </a>
                                    </div>

                                    <div class="col-lg-4 col-md-4 col-4">
                                        <a class="dropdown-item text-center" href="https://github.com/xhk1217/">
                                            <img src="@/assets/images/social/github.png" class="profile-image img-fluid" alt="">
                                            <span class="d-block">github</span>
                                        </a>
                                    </div>

                                    <div class="col-lg-4 col-md-4 col-4">
                                        <a class="dropdown-item text-center" href="https://gitee.com/xhk1217">
                                            <img src="@/assets/images/social/gitee.png" class="profile-image img-fluid" alt="">
                                            <span class="d-block">gitee</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- img-fluid 类会使图片在其容器内宽度自适应 -->
                    <div class="dropdown px-3">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="@/assets/images/xhk.jpg" class="profile-image img-fluid" alt="">
                        </a>
                        <ul class="dropdown-menu bg-white shadow">
                            <li>
                                <div class="dropdown-item bg-white px-3">
                                    <h2 class="card-title">个人小名片</h2>
                                </div>
                            </li>
                           
                            <li>
                                <div class="dropdown-menu-profile-thumb d-flex">
                                    <img src="@/assets/images/xhk.jpg" class="profile-image img-fluid me-3" alt="">

                                    <div class="d-flex flex-column">
                                        <small>{{name}}</small>
                                        <a href="#">xhk1217@qq.com</a>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </header>


</template>

<!-- 下面的这种方式根本无法导入js -->
<!-- <script src="@/assets/js/jquery.min.js"></script>
<script src="@/assets/js/bootstrap.bundle.min.js"></script>
<script src="@/assets/js/apexcharts.min.js"></script>
<script src="@/assets/js/custom.js"></script> -->


<script>
export default {
  name: 'MyHeader',
  props: {
    name: String
  }
};
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  /* 下面的css还是要导入的，好像组件的css不能被全局覆盖？还是因为scoped？ */
    @import url('@/assets/css/bootstrap.min.css');
    @import url('@/assets/css/bootstrap-icons.css');
    @import url('@/assets/css/apexcharts.css');
    @import url('@/assets/css/tooplate-mini-finance.css');
    @import url('@/assets/css/myself.css');
  </style>

  