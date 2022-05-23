<template>
  <main id="main" class="container">
    <!-- 1 顶部导航栏 -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb small bg-transparent">
        <li class="breadcrumb-item"><a class="text-dark font-weight-bold small" href="#">首页</a></li>
        <li class="breadcrumb-item"><a class="text-dark font-weight-bold small" href="#">学习用品</a></li>
        <li class="breadcrumb-item text-dark font-weight-bold small active" aria-current="page">笔记本电脑</li>
      </ol>
    </nav>

    <!-- 商品详情 -->
    <div class="container mb-5">
      <div class="row pr-3">

        <!-- 2 左侧 -->
        <div id="preview" class="col pr-0">
          <!-- 2.1 左侧商品图片栏 -->
          <div style="width:352px" class="card bg-transparent mr-5 position-absolute">
            <img class="card-img-top" :src="pics[i].md" alt="Card image cap">
            <div id="mask" class="position-absolute" :class="{'d-none':hide}" :style="{top:top+'px',left:left+'px'}">
            </div>
            <!-- 放大镜效果框 -->
            <div id="super-mask" class="position-absolute" 
            @mouseenter="toggle" @mouseleave="toggle" @mousemove="move">
            </div>
            
            <div id="div-lg" class="position-absolute" :class="{'d-none':hide}" 
            :style="{backgroundImage:`url(${pics[i].lg})`,
            backgroundPosition:`${-left*16/7}px ${-top*16/7}px`}">
            </div>
            <!-- 底部小图片 -->
            <div class="card-body p-0 text-center">
              <!-- 小图片左侧按钮 上一张 -->
              <img src="/img/product_detail/hover-prev.png" class="btn float-left btn-light border-0 p-1 pt-4 pb-4" 
              :class="{disabled:times==0}" @click="moveRight">
              <!-- 小图片列表 -->
              <div class="d-inline-block pt-2 mx-0 m-auto">
                <ul class="list-unstyled mb-0" :style="{width:pics.length*62+'px',marginLeft:-62*times+'px'}">
                  <li v-for="(img,i) of pics" :key="i" class="float-left p-1" @mouseenter="changei(i)">
                    <img :src="img.sm">
                  </li> 
                </ul>
              </div>
              <!-- 小图片右侧按钮 下一张-->
              <img src="/img/product_detail/hover-next.png" 
              class="btn float-right btn-light border-0 p-1 pt-4 pb-4" :class="{disabled:times>=pics.length-4}" @click="moveLeft">
            </div>
          </div>
        </div>

        <!-- 右侧 -->
        <!-- 3 右侧商品信息栏 -->
        <div id="details" class="col pl-0">
          <!-- 3.1 商品标题 -->
          <h6 class="font-weight-bold" v-text="p.title"></h6>
          <!-- 3.2 商品详情 -->
          <h6>
            <a class="small text-dark font-weight-bold" href="javascript:;" v-text="p.subtitle"></a>
          </h6>
          <!-- 3.3 学员售价、服务承诺 -->
          <div class="alert alert-secondary small" role="alert">
            <span>学员售价：</span>
            <h2 class="d-inline text-primary font-weight-bold" v-text="`¥${p.price.toFixed(2)}`"></h2>
            <div>
              <span>服务承诺：</span>
              <span v-text="p.promise"></span>
            </div>            
          </div>
          <!-- 3.4 客服 -->
          <p class="mb-1">
            <span class="small">客服：</span>
            <span class="small">联系客服</span>
            <img class="mb-3" src="/img/product_detail/kefuf.gif">
          </p>
          <!-- 3.5 规格 -->
          <div>
            <div class="float-left small">规格：</div>
            <div class="float-left w-75">
              <!-- 同步地址栏lid与规格参数，使两者保持一致 -->
              <router-link v-for="(sp,i) of specs" :key="i" class="btn btn-sm btn-outline-secondary" 
              :to="`/details/${sp.lid}`" :class="{active:sp.lid==lid}">
                {{sp.spec}}
              </router-link> 
            </div>
            <div class="clearfix"></div>
          </div>
          <!-- 3.6 数量 -->
          <div class="mt-2">
            <div class="float-left small">数量：</div>
            <div class="input-group mb-3 w-25">
              <!-- -按钮 -->
              <div class="input-group-prepend">
                <!-- @click绑定单击事件 minus -->
                <button class="btn btn-outline-secondary p-1" type="button" @click="minus">-</button>
              </div> 
              <!-- 输入框 -->
              <input type="text" :value=n class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1"/>
              <!-- +按钮 -->
              <div class="input-group-append">
                <!-- @click绑定单击事件 add -->
                <button class="btn btn-outline-secondary p-1" type="button" @click="add">+</button>
              </div>
            </div>
            <div class="clearfix"></div>
          </div>
          <!-- 3.7 购立即购买、加入购物车 -->
          <div>           
            <a class="btn pt-3 pb-2 pl-5 pr-5" href="javascript:;" ><h5>立即购买</h5></a>
            <!-- @click绑定单击事件，跳转至MyList -->
            <a class="btn btn-primary pt-3" href="javascript:;" @click="car()">  
              <h5><img src="/img/product_detail/product_detail_img7.png" alt="" > 加入购物车</h5>
            </a>
            <a class="btn btn-primary pt-1 pb-1 collection" href="javascript:;">
              <img src="/img/product_detail/product_detail_img6.png">
              <br>
              收藏
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- 4、为你推荐 -->
    <div class="container mb-5">
      <h4 class="d-inline-block ml-3">为你推荐</h4>
      <h6 class="d-inline-block bg-dark text-white ml-2">大家都在看</h6>
      <div id="recommend" class="border pl-3">
        <!-- 列表图片 -->
        <ul class="list-unstyled" style="width: 1100px; margin-left:-220px;">
          <!-- P1 -->
          <li class="float-left">
            <div class="card mb-1 p-4 border-0 bg-transparent box-shadow">
              <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" src="/img/product_detail/product_detail_1.png" data-holder-rendered="true">
              <div class="card-body p-0">
                <p class="card-text text-center small">ThinkPad New S2 (20GUA00QCD)13.3英寸超霸</p>
              </div>
            </div>
          </li>
          <!-- P2 -->
          <li class="float-left">
            <div class="card mb-1 p-4 border-0 bg-transparent box-shadow">
              <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" src="/img/product_detail/product_detail_2.png" data-holder-rendered="true" >
              <div class="card-body p-0">
                <p class="card-text text-center small">戴尔 DELL燃7000 R1605S 超霸</p>
              </div>
            </div>
          </li>
          <!-- P3 -->
          <li class="float-left">
            <div class="card mb-1 p-4 border-0 bg-transparent box-shadow">
              <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" src="/img/product_detail/product_detail_3.png" data-holder-rendered="true" >
              <div class="card-body p-0">
                <p class="card-text text-center small">戴尔(DELL)魔方15MF Pro-R2505TSS灵</p>
              </div>
            </div>
          </li>
          <!-- P4 -->
          <li class="float-left">
            <div class="card mb-1 p-4 border-0 bg-transparent box-shadow">
              <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" src="/img/product_detail/product_detail_4.png" data-holder-rendered="true" >
              <div class="card-body p-0">
                <p class="card-text text-center small">联想(Lenovo) YOGA900 (YOGA4 PRO)多彩版</p>
              </div>
            </div>
          </li>
          <!-- P5 -->
          <li class="float-left">
            <div class="card mb-1 p-4 border-0 bg-transparent box-shadow">
              <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" src="/img/product_detail/product_detail_1.png" data-holder-rendered="true">
              <div class="card-body p-0">
                <p class="card-text text-center small">ThinkPad New S2 (20GUA00QCD)13.3英寸超霸</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 5 商品详情、商品评价、加入购物车 -->
    <nav class="navbar flex-md-nowrap p-0 ml-3">
      <form class="form-inline pl-2">
        <!-- 5.1 商品详情 -->
        <button class="btn bg-transparent rounded-0 pt-3 pb-2 active" type="button"><h5>商品详情</h5></button>
        <!-- 5.2 商品详情 -->
        <button class="btn bg-transparent rounded-0 pt-3 pb-2" type="button"><h5>商品评价</h5></button>
      </form>
      <!-- 5.3 加入购物车 -->
      <ul class="navbar-nav">
        <li class="nav-item text-nowrap">
          <a class="btn btn-primary p-3 border-bottom" href="javascript:;" @click="car()">
            <h5><img src="/img/product_detail/product_detail_img7.png" alt=""> 加入购物车</h5>
          </a>
        </li>
      </ul>
    </nav>

    <div id="params" class="container">
      <div class="row mr-1">
        <div class="col-md-10 pt-5">
          <!-- 6 规格参数 -->
          <a name="规格参数"></a>
          <h6 class="d-inline-block ml-3">规格参数 <img src="/img/product_detail/product_detail_icon_1.png" alt=""></h6>
          <!-- 6.1 参数列表 -->
          <div class="col-md-12 pl-3">
            <ul class="list-unstyled">
              <li class="float-left mb-2"><a class="text-muted small" href="javascript:;" v-cloak>商品名称：{{p.lname}}</a></li>
              <li class="float-left mb-2"><a class="text-muted small" href="javascript:;" v-cloak>系统：{{p.os}}</a></li>
              <li class="float-left mb-2"><a class="text-muted small" href="javascript:;" v-cloak>内存容量：{{p.memory}}</a></li>
              <li class="float-left mb-2"><a class="text-muted small" href="javascript:;" v-cloak>分辨率：{{p.resolution}}</a></li>
              <li class="float-left mb-2"><a class="text-muted small" href="javascript:;" v-cloak>显卡型号：{{p.video_card}}</a></li>
              <li class="float-left mb-2"><a class="text-muted small" href="javascript:;" v-cloak>处理器：{{p.cpu}}</a></li>
              <li class="float-left mb-2"><a class="text-muted small" href="javascript:;" v-cloak>显存容量：{{p.video_memory}}</a></li>
              <li class="float-left mb-2"><a class="text-muted small" href="javascript:;" v-cloak>分类：{{p.category}}</a></li>
              <li class="float-left mb-2"><a class="text-muted small" href="javascript:;" v-cloak>硬盘容量:{{p.disk}}</a></li>
            </ul>
          </div>
          <!-- 6.2 商品介绍 -->
          <!-- name 用于锚点跳转 -->
          <a name="商品介绍"></a>
          <h6 class="d-inline-block mt-4 mb-3 ml-3">商品介绍<img src="/img/product_detail/product_detail_icon_4.png" alt=""></h6>
          <div class="ml-3" v-html="p.details"></div>
          <!-- 6.3 售后保障 -->
          <a name="售后保障"></a>
          <h6 class="d-inline-block mt-4 mb-3 ml-3">售后保障<img src="/img/product_detail/product_detail_icon_3.png" alt=""></h6>
          <div class="pl-3"> 
            <div>
              <p class="text-primary font-weight-bold">
                <img src="/img/product_detail/product_detail_img16.png" alt="">
                正品保障
              </p>
              <p class="small">
                达内学子商城向您保证所售商品均为正品行货，达内自营商品开具机打发票或电子发票。
              </p>
              <p class="text-primary font-weight-bold">
                <img src="/img/product_detail/product_detail_img16.png" alt="">
                全国联保
              </p>
              <p class="small">
                凭质保证书及达内商城发票，可享受全国联保服务，与您亲临商场选购的商品享受相同的质量保证。达内商城还为您提供具有竞争力的商品价格和运费政策，请您放心购买！
                注：因厂家会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本司不能确保客户收到的货物与商城图片、产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若本商城没有及时更新，请大家谅解！
              </p>
            </div>
          </div>
          <!-- 6.4 包装清单 -->
          <a name="包装清单"></a>
          <h6 class="d-inline-block mt-4 mb-3 ml-3">包装清单<img src="/img/product_detail/product_detail_icon_2.png" alt=""></h6>
          <div class="pl-3">
            <p class="small">笔记本 x1 适配器 x1 电源线 x1 电池 x1 说明书（电子版）x1 备注：笔记本电脑的背面只会标注此电脑的系列，例如： XPS 13-9360 ，如果您需要核实此电脑的具体配置型号是否与达内页面相符，可电话咨询达内厂商：800-858-2969</p>
          </div>
        </div>

        <!-- 7 右侧边电梯按钮 -->
        <div class="col-md-2 mb-4 pt-5 pl-2">
          <!-- 设置#锚点实现跳转 -->
          <a class="btn p-3 pl-4 pr-4 mb-2" href="#规格参数">
            <h5 class="text-dark mb-0"><img src="/img/product_detail/product_detail_icon_g_1.png" alt=""> 规格参数</h5>
          </a>
          <a class="btn p-3 pl-4 pr-4 mb-2" href="#商品介绍">
            <h5 class="text-dark mb-0k"><img src="/img/product_detail/product_detail_icon_t_1.png" alt=""> 商品介绍</h5>
          </a>
          <a class="btn p-3 pl-4 pr-4 mb-2" href="#售后保障">
            <h5 class="text-dark mb-0"><img src="/img/product_detail/product_detail_icon_d_1.png" alt=""> 售后保障</h5>
          </a>
          <a class="btn p-3 pl-4 pr-4 mb-2" href="#包装清单">
            <h5 class="text-dark mb-0"><img src="/img/product_detail/product_detail_icon_bao_1.png" alt=""> 包装清单</h5>
          </a>
          <a class="btn p-3 pl-4 pr-4 mb-2" href="#header">
            <h5 class="text-dark mb-0"><img src="/img/product_detail/product_detail_icon_up_1.png" alt=""> 回到顶部</h5>
          </a>
        </div>
        
      </div>
    </div>
  </main>
</template>

<script>
export default {
  //当前组件为Index的子组件，需与父组件通信，获取lid值
  props:['lid'],

  data(){
    return{
      p:{price:0,href:""},//定义price，href初始化，使其不为undefined
      specs:[],
      pics:[
        {}//指定对象，初始化，使其不为undefined
      ],  

      n:1,//定义购物车初始值

      //定义放大镜初始值
      times:0,//左移的li个数
      i:0,//当前正在看第几张
      hide:true,//控制mask和lgDiv的显示隐藏
      top:0,
      left:0
    }
  },
  
  methods:{
    loadPage(){
      //发送请求，获取服务端的数据对象
      this.axios.get("/details",{params:{lid:this.lid}})
      //给服务端返回的对象赋值
      .then(result=>{
        //console.log(result.data);
        this.p=result.data.product;
        this.specs=result.data.specs;
        this.pics=result.data.pics;
      })
    },

    //定义购物车数量加减的方法
    minus(){
      this.n--;
      this.n<1 && (this.n=1)
    },
    add(){
      this.n++;
    },    
    //点击左侧按钮，图片向左滑动
    moveLeft(){
      if(this.times<this.pics.length-4){
        this.times++;
      }
    },
    //点击右侧按钮，图片向右滑动
    moveRight(){
      if(this.times>0){
        this.times--;
      }
    },
    //点击小图片显示对应的大图片
    changei(i){
      this.i=i;
    },
    //在显示和隐藏之间来回切换
    toggle(){
      this.hide=!this.hide;
    },
    //放大镜
    move(e){
      var top=e.offsetY-88;
      var left=e.offsetX-88;
      if(top<0) top=0; else if(top>176) top=176;
      if(left<0) left=0; else if(left>176) left=176;
      this.top=top;this.left=left;
    },
    //点击按钮实现页面跳转跳转
    car(){
      this.$router.push({name:'MyList'})
    },

  },
//组件加载过程：
//首次访问：http://localhost:8080/#/details/5
//执行create
//执行mount
//即使重新访问/details，虽然参数值能改变，也不会重复执行create和mount了
  beforeCreate(){
    console.log('创建details页面组件之前...')
  },
  created(){
    console.log('创建details页面组件之后...')
  },
  beforeMount(){
    console.log('挂载details页面组件内容之前...')
  },
  mounted(){
    console.log('挂载details页面组件内容之后...')
    //console.log(this.lid)
    //调用loadPage(),重新发送请求
    this.loadPage()
    },
  //创建监听对对象
  watch:{
    //监控lid值得变化
    lid(){
    //再次调用loadPage(),重新发送请求
    this.loadPage()
    }
  }
}
</script>

<style scoped>
[v-cloak]{ display: none }
/*定制 规格参数 按钮的颜色*/
/* :hover 鼠标停留 */
#details>div:nth-child(5)>div .btn-outline-secondary:hover{
  color:#0069d9;/* 字体颜色 */
  background-color:#f5f5f5;
  border-color:#0069d9;
}
/* :active 鼠标选中 */
#details>div:nth-child(5)>div .btn-outline-secondary.active{
  color:#6c757d; /* 字体颜色 */
  background-color:#f5f5f5;
  border-color:#e4393c;
  border-width:2px;
  box-shadow: none;
}
/*定制 数量 按钮的颜色*/
#details>div:nth-child(6) .btn-outline-secondary{
  width:30px;
}
#details>div:nth-child(6) .form-control:hover,
#details>div:nth-child(6) .form-control:active,
#details>div:nth-child(6) .form-control:focus {
  border-width:2px;
  box-shadow:none
}
#details>div:nth-child(6) .btn-outline-secondary:hover,
#details>div:nth-child(6) .btn-outline-secondary:active,
#details>div:nth-child(6) .btn-outline-secondary:focus{
  color:#6c757d;
  background-color:#f5f5f5;
  border-color:#0069d9;
  border-width:2px;
  box-shadow: none;
}
/*定制立即购买按钮背景色*/
#details>div:nth-child(7)>a:first-child{
  background:linear-gradient(to bottom,#f0f0f0,#e0e0e0);
}

/*定制放大镜样式*/
#preview>.card>.card-body>div{
  width:248px;
  overflow:hidden;
}
#preview>.card>.card-body>div>ul{
  transition:margin-left .5s linear;
}
#preview>.card>.card-body>div>ul>li{
  width:62px; height:62px;
}
#preview>.card>.card-body>div>ul img{
  width:52px; height:52px;
}
#preview>.card>.card-body>div>ul img:hover{
  border:1px solid #e4393c;
}
#mask{
  width:176px; height:176px;
  background-color:#ffa;
  opacity:.5;
}
#super-mask{
  width:352px; height:352px;
}
#div-lg{
  width:400px; height:400px;
  left:354px;
  z-index:1000;
  border: 1px solid rgba(0, 0, 0, 0.125)
}
/*定制为你推荐部分的样式*/
/* 外边框样式 */
/*定制为你推荐部分的样式*/
#recommend{
  width:915px;
  border-color: 1px solid rgba(0, 0, 0, 0.125);
  overflow:hidden;
}
#recommend>ul>li{
  width:220px
}
/*订制商品详情部分的样式*/
#main>nav.navbar{
  background:linear-gradient(to bottom,#f0f0f0,#e0e0e0);
  box-shadow:0px 3px 6px #ccc
}
#main>nav.navbar .active{
  margin-top:2px;
  border-bottom:3px solid #0069d9;
}
#params .col-md-2>.btn{
  background: linear-gradient(to bottom,#f0f0f0,#e0e0e0);
  box-shadow:0px 3px 4px #ccc
}
#params .col-md-10>div>ul>li{
  width: 237px;
  margin-right:30px
}

</style>