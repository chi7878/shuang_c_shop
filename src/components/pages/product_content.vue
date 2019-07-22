<template>
  <div>
    <indexnavbar></indexnavbar>

    <router-link to="/checkorder" class="btn mobile_cart_btn d-block d-sm-none" v-if="cart_data_lsit.length > 0">
      <i class="fas fa-shopping-cart"></i>
    </router-link>

    <div class="loading_box" v-if="loading ==true">
              <img src="../../assets/loading.gif" width="250px" alt="">
    </div>
    <div class="alert_message " :class="{alert_message_anim:cart_anim == true}">
      <div class="text-dark">
        <p class="h1 text-center"><i class="far fa-grin-squint"></i></p>
        <p>新增至購物車囉!</p>
      </div>
    </div>

    <div class="alert_message_error" :class="{alert_message_error_anim:error_anim == true}">
      <div class="text-dark">
        <p class="h1 text-center"><i class="far fa-dizzy"></i></p>
        <p>錯誤!請重新整理</p>
      </div>
    </div>

    <div class="cart_btn  d-sm-block d-none">
      <div class="cart_box">
        <p class="cart_link">
          <i class="fas fa-shopping-cart mr-4"></i>購物車
        </p>
        <ul class="cart_lsit text-white">
          <li v-if="cart_data_lsit.length == 0">
            <p class="mb-2 text-center">目前無購物商品喔!</p>
          </li>

          <li v-for="item in cart_data_lsit.slice(0,4)" :key="item.id" >
            <p class="d-flex justify-content-between">
              {{item.product.title}}
              <span>{{item.qty}}{{item.product.unit}}</span>
            </p>
            <p class="text-right m-0">{{item.product.price *item.product.num |currency}}</p>
            <a href="" class="text-black-50 m-0" @click.prevent="cart_del(item)">刪除</a>
          </li>
          
          <li class="py-1 text-center" v-if="cart_data_lsit.length > 4">
            <router-link to="/checkorder" href="" class="text-white">還有其他{{cart_data_lsit.length-4}}項商品...</router-link>
          </li>
        </ul>
        <div class=" mt-3 text-center" v-if="cart_data_lsit.length > 0">
          <router-link to="/checkorder" class="btn btn-light py-1 px-3" >結帳去</router-link>
        </div>
        
      </div>
    </div>
    <div class="container-fluid">
            <div class="row product_container justify-content-between align-items-center">
                <div class="col-lg-5 product_picture">
                    <a href="" class="text-black-50" style="font-size: 20px;" @click.prevent="Previous"><i class="fas fa-angle-left mr-1"></i>BACK</a>
                    <img :src="product.imageUrl" width="400px"  alt="">
                </div>
                <div class="col-lg-7 product_text_box">
                    <div class="product_text d-flex flex-column p-5">
                        <h2>{{product.title}}</h2>
                        <div class="mb-5">
                            <a class="tag rounded-pill">{{product.category}}</a>
                        </div>
                        <p class="mb-2">[產品特色]</p>
                        <p>
                            {{product.description}}
                        </p >
                        <p class="price mb-3">{{product.origin_price |currency}}<span class="text-danger">{{product.price|currency}}</span></p>
                        <div class="d-inline-flex flex-wrap justify-content-between">
                            <div class="d-flex border rounded-pill num_btn my-1">
                                <a href="" class="px-3 py-2 border-right" @click.prevent="num_event">-</a>
                                <p class="px-3 py-2">{{num}}</p>
                                <a href="" class="px-3 py-2 border-left" @click.prevent="num+=1">+</a>
                            </div>
                            <a href="" class="btn cart rounded-pill px-3 my-1" @click.prevent="add_cart">加入購物車</a>
                        </div>
                    </div>
                    
                </div>
            </div>
            
            
        </div>
        <indexfooter></indexfooter>
    </div>
</template>

<script>
import indexnavbar from "../pages/index_template/index_navbar";
import indexfooter from "../pages/index_template/index_footer";

export default {
  name: "HelloWorld",
  data() {
    return {
      product:{},
      num: 1 ,
      loading:true,
      cart_data_lsit:[],
      cart_anim:false,
      error_anim:false,
    };
  },
  filters:{
    currency:function(item){
        const n = Number(item);
        return `$${n.toFixed(0).replace(/./g, (c, i, a) => {
          const currency = (i && c !== '.' && ((a.length - i) % 3 === 0) ? `, ${c}`.replace(/\s/g, '') : c);
        return currency;
        })}`;
    },
  },
  methods:{
    num_event:function(){
      if(this.num >0){
        this.num-=1
      }
    },
    product_event:function(){
      const id = this.$route.params.id;
      const api = `${process.env.HTTPAPI}/api/${process.env.PATHAPI}/product/${id}`;
      const vm = this;

      this.$http.get(api).then(response => {
        if(response.data.success){ 
          vm.product= response.data.product;
          vm.loading = false;
        }else{
          vm.error_anim =true;
          vm.loading = false;
        }
      });
    },
    Previous:function(){
      this.$router.push("/product");
    },
    add_cart:function(){
      const api = `${process.env.HTTPAPI}/api/${process.env.PATHAPI}/cart`;
      const vm = this;
      const cart_data = {
        product_id:vm.$route.params.id,
        qty:vm.num,
      }
  
      this.$http.post(api,{data:cart_data}).then(response => {
        if(response.data.success){ 
          vm.cart_anim = true;
          vm.anim_close();
          vm.cart_data();
        }else{
          vm.error_anim =true;
        }
      });

      
    },
    anim_close:function(){
      const vm = this;
      setTimeout(function(){
          vm.cart_anim = false;
        },1000);
    },
    cart_data:function(){
      const api = `${process.env.HTTPAPI}/api/${process.env.PATHAPI}/cart`;
      const vm = this;

      this.$http.get(api).then(response => {
        if (response.data.success) {
          vm.cart_data_lsit = response.data.data.carts;
        } else {
          vm.error_anim =true;
        }
      });
    },
    cart_del:function(cart_product){
      const api = `${process.env.HTTPAPI}/api/${process.env.PATHAPI}/cart/${cart_product.id}`;
      const vm = this;

      this.$http.delete(api).then(response => {
        if (response.data.success) {
          vm.cart_data();
        } else {
          vm.error_anim =true;
        }
      });
    }
  },
  
  created(){
    this.product_event();
    this.cart_data();
  },
  components: {
    indexnavbar,
    indexfooter
  }
};
</script>
