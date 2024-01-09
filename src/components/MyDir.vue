<template>
      <nav id="sidebarMenu" class="col-md-3 col-lg-3 d-md-block sidebar collapse">
                    <div class="position-sticky py-4 px-3 sidebar-sticky">
                        <ul class="nav flex-column h-100">
                            <li class="nav-item">
                                <a class="nav-link " :class="{ 'active': isActive==0 }" aria-current="page" href="/#/index">
                                    <i class="bi-house-fill me-2"></i>
                                    简介
                                </a>
                            </li>

                            <li class="nav-item">
                                <!-- /#/一定要加（不知道为什么，快被搞死了差点，还有之前vue2的问题） -->
                                <a class="nav-link" :class="{ 'active': isActive==1 }" href="/#/blog">
                                    <i class="bi-wallet me-2"></i>
                                    博客
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" :class="{ 'active': isActive==2 }"  href="/#/login">
                                    <i class="bi-person me-2"></i>
                                    登录
                                </a>
                            </li>


                            <li class="nav-item">
                                <a class="nav-link" :class="{ 'active': isActive==3 }"  href="/#/message">
                                    <i class="bi-question-circle me-2"></i>
                                    留言
                                </a>
                            </li>

                            

                            <li class="nav-item border-top mt-auto pt-2">
                                <a class="nav-link" href="#">
                                    <i class="bi-box-arrow-left me-2"></i>
                                    退出
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>


</template>

<script>
export default {
  name: 'MyDir',
  props: {
    isActive: Number
  }
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

  