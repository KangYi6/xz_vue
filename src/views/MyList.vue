<template>
  <main id="main" class="container">
    <div class="container">
      <!-- 1.大banner图 -->
      <div class="mb-3">
        <img
          class="w-100"
          src="img/index/index_guild.png"
          alt=""
          style="height: 360px"
        />
      </div>
      <!-- 2.栅格布局 -->
      <div class="row no-gutters">
        <!-- 2.1.栅格布局-左 -->
        <div class="col-lg-9">
          <!-- 2.1.1.标题 -->
          <h6 class="text-muted p-2 my_gray">笔记本电脑</h6>
          <!-- 2.1.2宫格图片 -->
          <div class="row no-gutters bg-white">
            <!-- 列表主体-1 -->
            <div class="col-lg-4 col-md-6 p-1">
              <div class="card p-1">
                <img
                  src="img/product/md/57bbc38eN9def8042.jpg"
                  class="w-100"
                  alt=""
                />
                <span class="text-primary font-weight-bold">￥2999.00</span>
                <a href="" class="text-muted text_small">
                  戴尔DELL灵越燃7000 R1725G
                  14.0英寸轻薄窄边框笔记本电脑(i7-7500U 8G 128GSSD+1T 940MX
                  2G独显 FHD)金
                </a>
                <div class="d-flex justify-content-around my_b_i">
                  <button class="border-0 text-center" @click="minus">-</button>
                  <input type="text"  class="border-0 text-center" v-model="n" />
                  <button class="border-0 text-center" @click="add">+</button>
                  <a href="javascript:;" class="btn btn-primary text_samll btn-sm" @click="car1()">加入购物车</a>
                </div>
              </div>
            </div>
            <!-- 列表主体-2 -->
            <div class="col-lg-4 col-md-6 p-1">
              <div class="card p-1">
                <img
                  src="img/product/md/57bbc38eN9def8042.jpg"
                  class="w-100"
                  alt=""
                />
                <span class="text-primary font-weight-bold">￥2999.00</span>
                <a href="" class="text-muted text_small">
                  戴尔DELL灵越燃7000 R1725G
                  14.0英寸轻薄窄边框笔记本电脑(i7-7500U 8G 128GSSD+1T 940MX
                  2G独显 FHD)金
                </a>
                <div class="d-flex justify-content-around my_b_i">
                  <button class="border-0 text-center">-</button>
                  <input type="text" value="1" class="border-0 text-center" />
                  <button class="border-0 text-center">+</button>
                  <a href="" class="btn btn-primary text_samll btn-sm">加入购物车</a>
                </div>
              </div>
            </div>
            <!-- 列表主体-3 -->
            <div class="col-lg-4 col-md-6 p-1">
              <div class="card p-1">
                <img
                  src="img/product/md/57bbc38eN9def8042.jpg"
                  class="w-100"
                  alt=""
                />
                <span class="text-primary font-weight-bold">￥2999.00</span>
                <a href="" class="text-muted text_small">
                  戴尔DELL灵越燃7000 R1725G
                  14.0英寸轻薄窄边框笔记本电脑(i7-7500U 8G 128GSSD+1T 940MX
                  2G独显 FHD)金
                </a>
                <div class="d-flex justify-content-around my_b_i">
                  <button class="border-0 text-center">-</button>
                  <input type="text" value="1" class="border-0 text-center" />
                  <button class="border-0 text-center">+</button>
                  <a href="" class="btn btn-primary text_samll btn-sm">加入购物车</a>
                </div>
              </div>
            </div>
            <!-- 列表主体-4 -->
            <div class="col-lg-4 col-md-6 p-1">
              <div class="card p-1">
                <img
                  src="img/product/md/57bbc38eN9def8042.jpg"
                  class="w-100"
                  alt=""
                />
                <span class="text-primary font-weight-bold">￥2999.00</span>
                <a href="" class="text-muted text_small">
                  戴尔DELL灵越燃7000 R1725G
                  14.0英寸轻薄窄边框笔记本电脑(i7-7500U 8G 128GSSD+1T 940MX
                  2G独显 FHD)金
                </a>
                <div class="d-flex justify-content-around my_b_i">
                  <button class="border-0 text-center">-</button>
                  <input type="text" value="1" class="border-0 text-center" />
                  <button class="border-0 text-center">+</button>
                  <a href="" class="btn btn-primary text_samll btn-sm">加入购物车</a>
                </div>
              </div>
            </div>
            <!-- 列表主体-5 -->
            <div class="col-lg-4 col-md-6 p-1">
              <div class="card p-1">
                <img
                  src="img/product/md/57bbc38eN9def8042.jpg"
                  class="w-100"
                  alt=""
                />
                <span class="text-primary font-weight-bold">￥2999.00</span>
                <a href="" class="text-muted text_small">
                  戴尔DELL灵越燃7000 R1725G
                  14.0英寸轻薄窄边框笔记本电脑(i7-7500U 8G 128GSSD+1T 940MX
                  2G独显 FHD)金
                </a>
                <div class="d-flex justify-content-around my_b_i">
                  <button class="border-0 text-center">-</button>
                  <input type="text" value="1" class="border-0 text-center" />
                  <button class="border-0 text-center">+</button>
                  <a href="" class="btn btn-primary text_samll btn-sm">加入购物车</a>
                </div>
              </div>
            </div>
            <!-- 列表主体-6 -->
            <div class="col-lg-4 col-md-6 p-1">
              <div class="card p-1">
                <img
                  src="img/product/md/57bbc38eN9def8042.jpg"
                  class="w-100"
                  alt=""
                />
                <span class="text-primary font-weight-bold">￥2999.00</span>
                <a href="" class="text-muted text_small">
                  戴尔DELL灵越燃7000 R1725G
                  14.0英寸轻薄窄边框笔记本电脑(i7-7500U 8G 128GSSD+1T 940MX
                  2G独显 FHD)金
                </a>
                <div class="d-flex justify-content-around my_b_i">
                  <button class="border-0 text-center">-</button>
                  <input type="text" value="1" class="border-0 text-center" />
                  <button class="border-0 text-center">+</button>
                  <a href="" class="btn btn-primary text_samll btn-sm">加入购物车</a>
                </div>
              </div>
            </div>
            <!-- 列表主体-7 -->
            <div class="col-lg-4 col-md-6 p-1">
              <div class="card p-1">
                <img
                  src="img/product/md/57bbc38eN9def8042.jpg"
                  class="w-100"
                  alt=""
                />
                <span class="text-primary font-weight-bold">￥2999.00</span>
                <a href="" class="text-muted text_small">
                  戴尔DELL灵越燃7000 R1725G
                  14.0英寸轻薄窄边框笔记本电脑(i7-7500U 8G 128GSSD+1T 940MX
                  2G独显 FHD)金
                </a>
                <div class="d-flex justify-content-around my_b_i">
                  <button class="border-0 text-center">-</button>
                  <input type="text" value="1" class="border-0 text-center" />
                  <button class="border-0 text-center">+</button>
                  <a href="" class="btn btn-primary text_samll btn-sm">加入购物车</a>
                </div>
              </div>
            </div>
          </div>
          <!-- 2.1.3.分页 -->
          <div class="my_gray p-2">
            <ul class="pagination justify-content-end mt-2">
              <li class="page-item disabled">
                <a href="" class="page-link">上一页</a>
              </li>
              <li class="page-item active">
                <a href="" class="page-link ml-1">1</a>
              </li>
              <li class="page-item">
                <a href="" class="page-link ml-1">2</a>
              </li>
              <li class="page-item">
                <a href="" class="page-link ml-1">3</a>
              </li>
              <li class="page-item">
                <a href="" class="page-link ml-1">4</a>
              </li>
              <li class="page-item">
                <a href="" class="page-link ml-1">5</a>
              </li>
              <li class="page-item">
                <a href="" class="page-link ml-1">下一页</a>
              </li>
            </ul>
          </div>
        </div>

        <!-- 2.2.栅格布局-右 -->
        <div class="col-lg-3">
          <!-- 商家公告 -->
          <h6 class="my_gray text-muted ml-2 p-2">
            <img src="img/foodstore/foodstore_icon2.png" alt="" />
            &nbsp;&nbsp; 商家公告
          </h6>
          <div class="bg-white text-muted text_small p-3">
            本店推出全网最低价套餐，保证比其他平台的价格要低！
            不要葱、姜、蒜等这些忌口暂时无法坐不了，敬请谅解！
            晚上10点以后订餐需另加送餐费2元！谢谢合作！
          </div>
          <!-- 购物车 -->
          <ul class="list-group">
            <!-- 标题 -->
            <li
              class="list-group-item my_gray d-flex justify-content-between p-1">
              <span class="text-muted">购物车</span>
              <a href="" class="text-muted">清空</a>
            </li>
            <!-- 列表1 -->
            <li class="list-group-item d-flex justify-content-between p-1">
              <span class="w-25 text_small text-muted text-truncate">
                戴尔DELL灵越燃7000 R1725G 14.0英寸轻薄窄边框笔记本电脑
              </span>
              <button class="my_btn1 border-0 text-white font-weight-bold">-</button>
              <!-- value绑定购物车数量n2 -->
              <input class="my_text1 text_small" type="text" :value="n1" disabled="disabled"/>
              <button class="my_btn1 border-0 text-white font-weight-bold">+</button>
              <span class="text-muted text_small" >￥{{ getTotal1() }}</span>
            </li>
            <!-- 列表2 -->
            <li class="list-group-item d-flex justify-content-between p-1">
              <span class="w-25 text_small text-muted text-truncate">
                戴尔DELL灵越燃7000 R1725G 14.0英寸轻薄窄边框笔记本电脑
              </span>
              <button class="my_btn1 border-0 text-white font-weight-bold">-</button>
              <input class="my_text1 text_small" type="text" value="1" />
              <button class="my_btn1 border-0 text-white font-weight-bold">+</button>
              <span class="text-muted text_small">￥2999.00</span>
            </li>
            <!-- 列表3 -->
            <li class="list-group-item d-flex justify-content-between p-1">
              <span class="w-25 text_small text-muted text-truncate">
                戴尔DELL灵越燃7000 R1725G 14.0英寸轻薄窄边框笔记本电脑
              </span>
              <button class="my_btn1 border-0 text-white font-weight-bold">-</button>
              <input class="my_text1 text_small" type="text" value="1" />
              <button class="my_btn1 border-0 text-white font-weight-bold">+</button>
              <span class="text-muted text_small">￥2999.00</span>
            </li>
            <!-- 列表4 -->
            <li class="list-group-item d-flex justify-content-between p-1">
              <span class="w-25 text_small text-muted text-truncate">
                戴尔DELL灵越燃7000 R1725G 14.0英寸轻薄窄边框笔记本电脑
              </span>
              <button class="my_btn1 border-0 text-white font-weight-bold">-</button>
              <input class="my_text1 text_small" type="text" value="1" />
              <button class="my_btn1 border-0 text-white font-weight-bold">+</button>
              <span class="text-muted text_small">￥2999.00</span>
            </li>
            <!-- 列表5 -->
            <li class="list-group-item d-flex justify-content-between p-1">
              <span class="w-25 text_small text-muted text-truncate">
                戴尔DELL灵越燃7000 R1725G 14.0英寸轻薄窄边框笔记本电脑
              </span>
              <button class="my_btn1 border-0 text-white font-weight-bold">-</button>
              <input class="my_text1 text_small" type="text" value="1" />
              <button class="my_btn1 border-0 text-white font-weight-bold">+</button>
              <span class="text-muted text_small">￥2999.00</span>
            </li>
            <!-- 结算 -->
            <li class="list-group-item d-flex justify-content-between bg-secondary">
              <h5 class="text-white">
                <img src="img/foodstore/foodstore_car_2.png" alt="" />
                ￥29990.00
              </h5>
              <a href="" class="bg-primary text-white p-2 text_small">去结算</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>


<script>
export default {
  props: ["list"],

  data(){
    return{
      n:1, 
      n1:1,     
      pri1:2999,
      total1:'',
    }
  },

  methods:{
    minus(){
      this.n--; 
      this.n<1 && (this.n=1)
    },
    add(){
      this.n++;
    },
    car1(){
        this.n1=this.n
    },
    getTotal1(){
      var total1=0
      total1 = this.n1 * this.pri1
      return total1.toFixed(2)
    },
  },
  
  mounted(){
    
  },  
}
</script>


<style scoped>
input {
  width: 100px;
}
</style>