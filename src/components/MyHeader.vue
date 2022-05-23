<!-- 公共页头 -->
<template>
  <header id="header" class="container">
    <nav class="navbar navbar-light">
      <!-- logo图片 -->
      <a class="navbar-brand" href="/">
        <img src="/img/header/logo.png" alt="" />
      </a>
      <!-- 搜索输入框 -->
      <div class="form-inline">
        <div class="input-group">
          <input
            type="text"
            class="form-control p-0"
            placeholder=" 请输入你要搜索的内容"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <div class="input-group-append h-75">
            <img
              onclick="location.href='products.html'"
              class="btn p-0"
              src="/img/header/search.png"
            />
          </div>
        </div>
      </div>
      <!-- 注册、登录链接 -->
      <nav id="signout" class="my-2 my-md-0 mr-md-3 small">
        <nav id="signin" class="my-2 my-md-0 mr-md-3 small">
          <a class="p-1" href="#" title="我的收藏">
            <img src="/img/header/care.png">
          </a>
          <b class="p-1">|</b>
          <a class="p-1" href="#" title="我的订单">
            <img src="/img/header/order.png">
          </a>
          <b class="p-1">|</b>
          <a class="p-1" href="cart.html" title="我的购物车">
            <img src="/img/header/shop_car.png" alt="">
          </a>
          <b class="p-1 text-muted">|</b>
          <a class="p-1 text-muted" href="javascript:;" >注册</a>
          <b class="p-1 text-muted">|</b>
          <a class="p-1 text-muted" id="btnLogin" href="#">登录</a>
          <b class="p-1 text-muted">|</b>
          <a class="p-1 text-muted" id="btnSignout" href="javascript:;">注销</a>
        </nav>
      </nav>
    </nav>
    <!-- 主页列表 -->
    <ul class="nav nav-pills">
      <li class="nav-item">
        <a class="nav-link text-muted active" href="index.html">首页</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-muted" href="#">学习用品</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-muted" href="#">私人定制</a>
      </li>
    </ul>
  </header>
</template>


<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    
  }
};
</script>


<style scoped>
/*scoped:避免样式冲突*/
/*定制搜索框的大小*/
#header > .navbar > .form-inline > .input-group > input {
  width: 300px;
  height: 34px;
  margin-top: 1px;
  box-shadow:none;
}

/* 删除导航栏a标签下划线 */
#header > .navbar > #signout > #signin > a {
  text-decoration:none;
}

/*定制主导航当前导航项的字体颜色*/
#header > .nav .nav-link.active,
#header > .nav .nav-link:hover {
  background: none;
  font-weight: bold;
}

</style>