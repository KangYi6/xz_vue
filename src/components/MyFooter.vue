<template> 
  <footer id="footer" class="container">
    <!-- 页尾 -->
    <ul class="list-unstyled d-flex justify-content-around mt-5">
      <li>
        <a href="">
          <img src="/img/footer/icon1.png" alt="" />
          <p class="text-muted text_small text-center">品质保障</p>
        </a>
      </li>
      <li>
        <a href="">
          <img src="/img/footer/icon2.png" alt="" />
          <p class="text-muted text_small text-center">私人订制</p>
        </a>
      </li>
      <li>
        <a href="">
          <img src="/img/footer/icon3.png" alt="" />
          <p class="text-muted text_small text-center">学员特工</p>
        </a>
      </li>
      <li>
        <a href="">
          <img src="/img/footer/icon4.png" alt="" />
          <p class="text-muted text_small text-center">专属特权</p>
        </a>
      </li>
    </ul>
    <div class="row bg-white pt-2">
      <!-- 栅格布局 左 -->
      <div class="col-lg-4">
        <div>
          <img src="img/footer/logo.png" alt="" />
        </div>
        <div>
          <img src="img/footer/footerFont.png" alt="" />
        </div>
      </div>
      <!-- 栅格布局 中 -->
      <div class="col-lg-4">
        <div class="row no-gutters">
          <div class="col">
            <ul class="list-unstyled text-center">
              <li>
                <h6>
                  <a href="" class="text-dark">买家帮助</a>
                </h6>
              </li>
              <li>
                <a href="" class="text-muted text_small">新手指南</a>
              </li>
              <li>
                <a href="" class="text-muted text_small">服务保障</a>
              </li>
              <li>
                <a href="" class="text-muted text_small">常见问题</a>
              </li>
            </ul>
          </div>
          <div class="col">
            <ul class="list-unstyled text-center">
              <li>
                <h6>
                  <a href="" class="text-dark">商家帮助</a>
                </h6>
              </li>
              <li>
                <a href="" class="text-muted text_small">商家入驻</a>
              </li>
              <li>
                <a href="" class="text-muted text_small">商家后台</a>
              </li>
            </ul>
          </div>
          <div class="col">
            <ul class="list-unstyled text-center">
              <li>
                <h6>
                  <a href="" class="text-dark">关于我们</a>
                </h6>
              </li>
              <li>
                <a href="" class="text-muted text_small">关于达内</a>
              </li>
              <li>
                <a href="" class="text-muted text_small">联系我们</a>
              </li>
              <li>
                <a href="" class="mr-3">
                  <img src="img/footer/wechat.png" alt="" />
                </a>
                <a href="">
                  <img src="img/footer/sinablog.png" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 栅格布局 右 -->
      <div class="col-lg-4">
        <div class="d-flex justify-content-center">
          <div class="mr-2">
            <h6 class="text-conter">学子商城客户端</h6>
            <div class="mb-1">
              <img src="img/footer/android.png" alt="" />
            </div>
            <div>
              <img src="img/footer/ios.png" alt="" />
            </div>
          </div>
          <div>
            <img src="img/footer/erweima.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <p class="text_samll text-center text-muted ">
      ©2017 达内科技有限公司 版权所有 京ICP备08000853号-75
    </p>  
  </footer>
</template>

<style scoped>
/* 设置图标排列样式 */
#footer > ul {
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding-bottom: 20px;
}
#footer > ul > li > a,
#footer > div > div:nth-child(2) > div > div > ul > li > a,
#footer > div > div:nth-child(2) > div > div > ul > li > h6 >a {
  text-decoration: none;
}

</style>