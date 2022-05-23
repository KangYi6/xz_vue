<template>
  <main id="main" class="container">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <!-- data-target 锚点绑定数据 -->
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
      </ol>
      <!-- 放置轮播图片 -->
      <div class="carousel-inner">
        <div class="carousel-item active">
          <a href="">
            <img src="/img/index/banner1.png" alt="First slide" class="d-block w-100" />
          </a>
        </div>
        <div class="carousel-item">
          <a href="">
            <img src="/img/index/banner2.png" alt="Second slide" class="d-block w-100" />
          </a>
        </div>
        <div class="carousel-item">
          <a href=""><img src="/img/index/banner3.png" alt="Third slide" class="d-block w-100"/></a>
        </div>
        <div class="carousel-item">
          <a href="">
            <img src="/img/index/banner4.png" alt="4th slide" class="d-block w-100"/>
          </a>
        </div>
      </div>
      <!-- 轮播图左按钮 -->
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <!-- 轮播图右按钮 -->
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div>
      <!--1F -->
      <h3 class="pb-3" id="1F">
        <nav
          class="navbar navbar-light border-bottom border-secondary pb-0 mb-2"
        >
          <!-- 标题 首页推荐/1F -->
          <a class="navbar-brand" href="#">
            <img
              src="/img/index/computer_icon.png"
              class="d-inline-block align-top"
              alt=""
            />
            首页推荐 / 1F
          </a>
        </nav>
        <!-- 产品 第1行 -->
        <div class="row mb-2 1F">
          <!-- p1 -->
          <div id="p1" class="col-md-7">
            <div class="card border-0 flex-md-row box-shadow h-md-250">
              <div class="card-body d-flex flex-column align-items-start">
                <!-- 产品标题 -->
                <h5 class="d-inline-block mb-2" v-text="p1.title"></h5>
                <!-- 产品详情 -->
                <h6 class="mb-5">
                  <a
                    class="text-dark"
                    href="javascript:;"
                    v-text="p1.details"
                  ></a>
                </h6>
                <!-- 产品价格 -->
                <span
                  class="text-primary"
                  v-text="`¥${p1.price.toFixed(2)}`"
                ></span>
                <!-- 按钮 查看详情 -->
                <router-link
                  class="btn btn-primary"
                  :to="`/details/${p1.href.split('=')[1]}`"
                  >查看详情</router-link
                >
              </div>
              <!-- 产品图片 -->
              <img
                class="card-img-right flex-auto d-none d-md-block"
                data-src="holder.js/200x250?theme=thumb"
                alt="Thumbnail [200x250]"
                :src="p1.pic"
                data-holder-rendered="true"
              />
            </div>
          </div>
          <!-- p2 -->
          <div id="p2" class="col-md-5 pl-0">
            <div class="card border-0 flex-md-row box-shadow h-md-250">
              <div class="card-body d-flex flex-column align-items-start">
                <!-- 产品标题 -->
                <h5 class="d-inline-block mb-2" v-text="p2.title"></h5>
                <!-- 产品详情 -->
                <h6 class="mb-5">
                  <a
                    class="text-dark"
                    href="javascript:;"
                    v-text="p2.details"
                  ></a>
                </h6>
                <!-- 产品价格 -->
                <span
                  class="text-primary"
                  v-text="`¥${p2.price.toFixed(2)}`"
                ></span>
                <!-- 按钮 查看详情 -->
                <router-link
                  class="btn btn-primary"
                  :to="`/details/${p2.href.split('=')[1]}`"
                  >查看详情</router-link
                >
              </div>
              <!-- 产品图片 -->
              <img
                class="card-img-right flex-auto d-none d-md-block mt-5"
                data-src="holder.js/200x250?theme=thumb"
                alt="Thumbnail [200x250]"
                :src="p2.pic"
                data-holder-rendered="true"
              />
            </div>
          </div>
        </div>
        <!-- 产品 第2行 -->
        <div class="row mb-2">
          <!-- p3 栅格布局 *5 -->
          <div class="col-md-5">
            <div class="card border-0 flex-md-row box-shadow h-md-250">
              <div class="card-body d-flex flex-column align-items-start">
                <!-- 产品标题 -->
                <h5 class="d-inline-block mb-3" v-text="p3.title"></h5>
                <!-- 产品价格 -->
                <span
                  class="text-primary"
                  v-text="`¥${p3.price.toFixed(2)}`"
                ></span>
                <!-- 按钮 查看详情 -->
                <router-link
                  class="btn btn-primary"
                  :to="`/details/${p3.href.split('=')[1]}`"
                  >查看详情</router-link
                >
              </div>
              <!-- 产品图片 -->
              <img
                class="card-img-right flex-auto d-none d-md-block mt-5"
                data-src="holder.js/200x250?theme=thumb"
                alt="Thumbnail [200x250]"
                :src="p3.pic"
                data-holder-rendered="true"
              />
            </div>
          </div>
          <!-- others 栅格布局 *7-->
          <div class="col-md-7 pl-0">
            <div class="row pr-3">
              <!-- 遍历数据对象 :key的作用 ==> 给每一个重复的元素增加唯一标识 -->
              <div class="col-md-4 p-0 pl-2" v-for="(p, i) of others" :key="i">
                <div class="card border-0 text-center">
                  <!-- 产品图片 -->
                  <img class="card-img-top" :src="p.pic" alt="Card image cap" />
                  <div class="card-body p-0 pr-1 pl-1">
                    <!-- 产品标题 -->
                    <span class="d-inline-block" v-text="p.title"></span>
                    <!-- 产品价格 -->
                    <span
                      class="text-primary small"
                      v-text="`¥${p.price.toFixed(2)}`"
                    ></span>
                    <!-- 按钮 查看详情 -->
                    <router-link
                      class="btn btn-sm btn-primary"
                      :to="`/details/${p.href.split('=')[1]}`"
                      >查看详情</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </h3>

      <!-- 2F -->
      <h3 class="pb-3" id="2F">
        <nav
          class="navbar navbar-light border-bottom border-secondary pb-0 mb-2"
        >
          <!-- 标题 最新上架/2F -->
          <a class="navbar-brand" href="#">
            <img
              src="/img/index/computer_icon.png"
              class="d-inline-block align-top"
              alt=""
            />
            最新上架 / 2F
          </a>
        </nav>
        <!-- 产品 第1行 -->
        <div class="row mb-2 1F">
          <!-- p1 -->
          <div id="p1" class="col-md-7">
            <div class="card border-0 flex-md-row box-shadow h-md-250">
              <div class="card-body d-flex flex-column align-items-start">
                <!-- 产品标题 -->
                <h5 class="d-inline-block mb-2" v-text="p1.title"></h5>
                <!-- 产品详情 -->
                <h6 class="mb-5">
                  <a
                    class="text-dark"
                    href="javascript:;"
                    v-text="p1.details"
                  ></a>
                </h6>
                <!-- 产品价格 -->
                <span
                  class="text-primary"
                  v-text="`¥${p1.price.toFixed(2)}`"
                ></span>
                <!-- 按钮 查看详情 -->
                <router-link
                  class="btn btn-primary"
                  :to="`/details/${p1.href.split('=')[1]}`"
                  >查看详情</router-link
                >
              </div>
              <!-- 产品图片 -->
              <img
                class="card-img-right flex-auto d-none d-md-block"
                data-src="holder.js/200x250?theme=thumb"
                alt="Thumbnail [200x250]"
                :src="p1.pic"
                data-holder-rendered="true"
              />
            </div>
          </div>
          <!-- p2 -->
          <div id="p2" class="col-md-5 pl-0">
            <div class="card border-0 flex-md-row box-shadow h-md-250">
              <div class="card-body d-flex flex-column align-items-start">
                <!-- 产品标题 -->
                <h5 class="d-inline-block mb-2" v-text="p2.title"></h5>
                <!-- 产品详情 -->
                <h6 class="mb-5">
                  <a
                    class="text-dark"
                    href="javascript:;"
                    v-text="p2.details"
                  ></a>
                </h6>
                <!-- 产品价格 -->
                <span
                  class="text-primary"
                  v-text="`¥${p2.price.toFixed(2)}`"
                ></span>
                <!-- 按钮 查看详情 -->
                <router-link
                  class="btn btn-primary"
                  :to="`/details/${p2.href.split('=')[1]}`"
                  >查看详情</router-link
                >
              </div>
              <!-- 产品图片 -->
              <img
                class="card-img-right flex-auto d-none d-md-block mt-5"
                data-src="holder.js/200x250?theme=thumb"
                alt="Thumbnail [200x250]"
                :src="p2.pic"
                data-holder-rendered="true"
              />
            </div>
          </div>
        </div>
        <!-- 产品 第2行 -->
        <div class="row mb-2">
          <!-- p3 栅格布局 *5 -->
          <div class="col-md-5">
            <div class="card border-0 flex-md-row box-shadow h-md-250">
              <div class="card-body d-flex flex-column align-items-start">
                <!-- 产品标题 -->
                <h5 class="d-inline-block mb-3" v-text="p3.title"></h5>
                <!-- 产品价格 -->
                <span
                  class="text-primary"
                  v-text="`¥${p3.price.toFixed(2)}`"
                ></span>
                <!-- 按钮 查看详情 -->
                <router-link
                  class="btn btn-primary"
                  :to="`/details/${p3.href.split('=')[1]}`"
                  >查看详情</router-link
                >
              </div>
              <!-- 产品图片 -->
              <img
                class="card-img-right flex-auto d-none d-md-block mt-5"
                data-src="holder.js/200x250?theme=thumb"
                alt="Thumbnail [200x250]"
                :src="p3.pic"
                data-holder-rendered="true"
              />
            </div>
          </div>
          <!-- others 栅格布局 *7-->
          <div class="col-md-7 pl-0">
            <div class="row pr-3">
              <!-- 遍历数据对象 :key的作用 ==> 给每一个重复的元素增加唯一标识 -->
              <div class="col-md-4 p-0 pl-2" v-for="(p, i) of others" :key="i">
                <div class="card border-0 text-center">
                  <!-- 产品图片 -->
                  <img class="card-img-top" :src="p.pic" alt="Card image cap" />
                  <div class="card-body p-0 pr-1 pl-1">
                    <!-- 产品标题 -->
                    <span class="d-inline-block" v-text="p.title"></span>
                    <!-- 产品价格 -->
                    <span
                      class="text-primary small"
                      v-text="`¥${p.price.toFixed(2)}`"
                    ></span>
                    <!-- 按钮 查看详情 -->
                    <router-link
                      class="btn btn-sm btn-primary"
                      :to="`/details/${p.href.split('=')[1]}`"
                      >查看详情</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </h3>

      <!--3F -->
      <h3 class="pb-3" id="3F">
        <nav
          class="navbar navbar-light border-bottom border-secondary pb-0 mb-2"
        >
          <!-- 标题 热销单品/3F -->
          <a class="navbar-brand" href="#">
            <img
              src="/img/index/computer_icon.png"
              class="d-inline-block align-top"
              alt=""
            />
            热销单品 / 3F
          </a>
        </nav>
        <!-- 产品 第1行 -->
        <div class="row mb-2 1F">
          <!-- p1 -->
          <div class="col-md-7">
            <div class="card border-0 flex-md-row box-shadow h-md-250">
              <div class="card-body d-flex flex-column align-items-start">
                <!-- 产品标题 -->
                <h5 class="d-inline-block mb-2" v-text="p1.title"></h5>
                <!-- 产品详情 -->
                <h6 class="mb-5">
                  <a
                    class="text-dark"
                    href="javascript:;"
                    v-text="p1.details"
                  ></a>
                </h6>
                <!-- 产品价格 -->
                <span
                  class="text-primary"
                  v-text="`¥${p1.price.toFixed(2)}`"
                ></span>
                <!-- 按钮 查看详情 -->
                <router-link
                  class="btn btn-primary"
                  :to="`/details/${p1.href.split('=')[1]}`"
                  >查看详情</router-link
                >
              </div>
              <!-- 产品图片 -->
              <img
                class="card-img-right flex-auto d-none d-md-block"
                data-src="holder.js/200x250?theme=thumb"
                alt="Thumbnail [200x250]"
                :src="p1.pic"
                data-holder-rendered="true"
              />
            </div>
          </div>
          <!-- p2 -->
          <div class="col-md-5 pl-0">
            <div class="card border-0 flex-md-row box-shadow h-md-250">
              <div class="card-body d-flex flex-column align-items-start">
                <!-- 产品标题 -->
                <h5 class="d-inline-block mb-2" v-text="p2.title"></h5>
                <!-- 产品详情 -->
                <h6 class="mb-5">
                  <a
                    class="text-dark"
                    href="javascript:;"
                    v-text="p2.details"
                  ></a>
                </h6>
                <!-- 产品价格 -->
                <span
                  class="text-primary"
                  v-text="`¥${p2.price.toFixed(2)}`"
                ></span>
                <!-- 按钮 查看详情 -->
                <router-link
                  class="btn btn-primary"
                  :to="`/details/${p2.href.split('=')[1]}`"
                  >查看详情</router-link
                >
              </div>
              <!-- 产品图片 -->
              <img
                class="card-img-right flex-auto d-none d-md-block mt-5"
                data-src="holder.js/200x250?theme=thumb"
                alt="Thumbnail [200x250]"
                :src="p2.pic"
                data-holder-rendered="true"
              />
            </div>
          </div>
        </div>
        <!-- 产品 第2行 -->
        <div class="row mb-2">
          <!-- p3 栅格布局 *5 -->
          <div class="col-md-5">
            <div class="card border-0 flex-md-row box-shadow h-md-250">
              <div class="card-body d-flex flex-column align-items-start">
                <!-- 产品标题 -->
                <h5 class="d-inline-block mb-3" v-text="p3.title"></h5>
                <!-- 产品价格 -->
                <span
                  class="text-primary"
                  v-text="`¥${p3.price.toFixed(2)}`"
                ></span>
                <!-- 按钮 查看详情 -->
                <router-link
                  class="btn btn-primary"
                  :to="`/details/${p3.href.split('=')[1]}`"
                  >查看详情</router-link
                >
              </div>
              <!-- 产品图片 -->
              <img
                class="card-img-right flex-auto d-none d-md-block mt-5"
                data-src="holder.js/200x250?theme=thumb"
                alt="Thumbnail [200x250]"
                :src="p3.pic"
                data-holder-rendered="true"
              />
            </div>
          </div>
          <!-- others 栅格布局 *7-->
          <div class="col-md-7 pl-0">
            <div class="row pr-3">
              <!-- 遍历数据对象 :key的作用 ==> 给每一个重复的元素增加唯一标识 -->
              <div class="col-md-4 p-0 pl-2" v-for="(p, i) of others" :key="i">
                <div class="card border-0 text-center">
                  <!-- 产品图片 -->
                  <img class="card-img-top" :src="p.pic" alt="Card image cap" />
                  <div class="card-body p-0 pr-1 pl-1">
                    <!-- 产品标题 -->
                    <span class="d-inline-block" v-text="p.title"></span>
                    <!-- 产品价格 -->
                    <span
                      class="text-primary small"
                      v-text="`¥${p.price.toFixed(2)}`"
                    ></span>
                    <!-- 按钮 查看详情 -->
                    <router-link
                      class="btn btn-sm btn-primary"
                      :to="`/details/${p.href.split('=')[1]}`"
                      >查看详情</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </h3>
    </div>
    
    <!-- 左侧边楼梯按钮 -->
    <div class="btn-group-vertical position-fixed" role="group" aria-label="Basic example">
      <!-- 设置锚点，跳转到指定标题页 -->
      <a href="#1F">
        <button type="button" class="btn btn-secondary btn-sm border-light border-left-0 border-right-0">首页<br />推荐</button>
      </a>
      <a href="#2F">
        <button type="button" class="btn btn-secondary btn-sm border-light border-left-0 border-right-0">最新<br />上架</button>
      </a>
      <a href="#3F">
        <button type="button" class="btn btn-secondary btn-sm border-light border-left-0 border-right-0">热销<br />单品</button>
      </a>
    </div>

    
  </main>
</template>

<script>
export default {
  data() {
    return {
      //定义页面中的3个商品对象和1个数组
      p1: { price: 0, href: "" }, //定义price，href初始化，使其不为undefined
      p2: { price: 0, href: "" },
      p3: { price: 0, href: "" },
      p4: { price: 0, href: "" },
      p5: { price: 0, href: "" },
      p6: { price: 0, href: "" },
      p7: { price: 0, href: "" },
      others: [], //不用初始化内容，因为如果数组长度为0，则for循环一次都不执行！
    };
  },
  beforeCreate() {
    console.log("创建组件对象前");
  },
  created() {
    console.log("创建组件对象后");
  },
  beforeMount() {
    console.log("挂载页面内容前");
  },
  mounted() {
    //发送请求，获取服务端的数据对象
    this.axios.get("/index").then((result) => {
      console.log(result.data);
      //给服务端返回的对象赋值
      // this.p1=result.data[0];
      // this.p2=result.data[1];
      // this.p3=result.data[2];
      [this.p1, this.p2, this.p3, this.p4, this.p5, this.p6, this.p7] = result.data;
      this.others = result.data.slice(3);
    });
  },
  beforeUpdate() {
    console.log("更新data中的变量前");
  },
  updated() {
    console.log("更新data中的变量后");
  },
};
</script>

<style scoped>
/* 设置轮播图样式效果 */
#main > div > ol li {
  background-color: white;
}
#main > div > ol > .active {
  background-color: red;
}

/*定制每层楼中每款产品的样式*/
.btn {
  margin-left: 2%;
  padding-left: 20px;
  padding-right: 22px;
}
/* 1F */
/* P1 */
#main > div:nth-child(2) > h3 > div:nth-child(2) > div:first-child img {
  margin-left: -100px;
  height: 220px;
}
#main > div:nth-child(2) > h3 > div:nth-child(2) > div:first-child div > .text-primary {
  margin-top: 12px;
}
/* P2 */
#main > div:nth-child(2) > h3 > div:nth-child(2) > div:last-child img {
  margin-left: -150px;
  height: 180px;
}
#main > div:nth-child(2) > h3 > div:nth-child(2) > div:last-child div > .text-primary {
  margin-top: 12px;
}
/* p3 */
#main > div:nth-child(2) > h3 > div:nth-child(3) > div:first-child img {
  margin-left: -100px;
  height: 142px;
}
#main > div:nth-child(2) > h3 > div:nth-child(3) > div:first-child div > .text-primary {
  margin-top: 40px;
}
/* others */
#main > div:nth-child(2) > h3 > div:nth-child(3) > div:last-child
  .card-img-top {
  height: 122px;
}
#main > div:nth-child(2) > h3 > div:nth-child(3) > div:last-child .card-body > span:first-child {
  font-size: 0.2em;
}

/*定制每张商品卡片的背景色*/
#main > div:nth-child(2) > h3 .card {
  background-color: #e8e8e8;
}
/*定制电梯按钮的样式*/
#main > .btn-group-vertical {
  top: 200px;
  left: 1px;
}
#main > .btn-group-vertical > a > .btn-secondary:hover {
  background-color: #e4393c;
  border-color: #e4393c;
}
</style>
