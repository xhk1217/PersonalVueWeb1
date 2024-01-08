<template>
      <header class="navbar sticky-top flex-md-nowrap">
        <!-- <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@300;400;700&display=swap" rel="stylesheet">
        <link href="/assets/css/bootstrap.min.css" rel="stylesheet">
        <link href="/assets/css/bootstrap-icons.css" rel="stylesheet">
        <link href="/assets/css/apexcharts.css" rel="stylesheet">
        <link href="/assets/css/tooplate-mini-finance.css" rel="stylesheet">
        <link href="/assets/css/myself.css" rel="stylesheet"> -->
      
            <div class="col-md-3 col-lg-3 me-0 px-3 fs-6">
                <!-- <a class="navbar-brand" href="index.html">
                    <i class="bi-box"></i> -->
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
                                        <a class="dropdown-item text-center" href="#">
                                            <img src="@/assets/images/social/search.png" class="profile-image img-fluid" alt="">
                                            <span class="d-block">Google</span>
                                        </a>
                                    </div>

                                    <div class="col-lg-4 col-md-4 col-4">
                                        <a class="dropdown-item text-center" href="#">
                                            <img src="@/assets/images/social/spotify.png" class="profile-image img-fluid" alt="">
                                            <span class="d-block">Spotify</span>
                                        </a>
                                    </div>

                                    <div class="col-lg-4 col-md-4 col-4">
                                        <a class="dropdown-item text-center" href="#">
                                            <img src="@/assets/images/social/telegram.png" class="profile-image img-fluid" alt="">
                                            <span class="d-block">Telegram</span>
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


<script src="@/assets/js/jquery.min.js"></script>
<script src="@/assets/js/bootstrap.bundle.min.js"></script>
<script src="@/assets/js/apexcharts.min.js"></script>
<script src="@/assets/js/custom.js"></script>


<script>
// import $ from '@/assets/js/jquery.min.js';
// import '@/assets/js/bootstrap.bundle.min.js';
// import '@/assets/js/apexcharts.min.js';
// import '@/assets/js/custom.js';
export default {
  name: 'MyHeader',
  props: {
    name: String
  },
  data() {
    return {
      isDropdownOpen: true
    };
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

  