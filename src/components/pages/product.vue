<template>
  <div>
    <indexnavbar></indexnavbar>

    <div class="alert_message_error" :class="{alert_message_error_anim:error_anim == true}">
      <div class="text-dark">
        <p class="h1 text-center"><i class="far fa-dizzy"></i></p>
        <p>錯誤!請重新整理</p>
      </div>
    </div>

    <router-link to="/checkorder" class="btn mobile_cart_btn d-block d-sm-none" v-if="cart_data_lsit.length > 0">
      <i class="fas fa-shopping-cart"></i>
    </router-link>

    <div class="cart_btn d-sm-block d-none">
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
    <div class="container">
      <div id="carouselExampleControls" class="carousel slide mb-5" data-ride="carousel" style="margin-top: 120px;">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../../assets/vue shop web-13.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="../../assets/vue shop web-13.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="../../assets/vue shop web-13.jpg" class="d-block w-100" alt="...">
          </div>
        </div>
        <a class="carousel_prev text-white mr-3 d-sm-block d-none" href="#carouselExampleControls" role="button" data-slide="prev">
          <span ><i class="fas fa-arrow-left"></i></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel_next text-white  mr-3 d-sm-block d-none" href="#carouselExampleControls" role="button" data-slide="next">
          <span><i class="fas fa-arrow-right"></i></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      
      <div class="sort_list d-flex justify-content-between align-items-center flex-wrap">
        <a
          href="#"
          @click.prevent="class_event('全部')"
          class="all_box sort_box mb-3 rounded-circle "
          :class="{sort_active:class_active =='全部'}"
        >
          <img src="../../assets/vue_shop_class_icon-13.png" width="130px" height="130px" alt="img" />
        </a>
        <a
          href="#"
          @click.prevent="class_event('配件')"
          class="parts_box sort_box mb-3 rounded-circle"
          :class="{sort_active:class_active =='配件'}"
        >
          <img src="../../assets/vue_shop_class_icon-14.png" width="130px" height="130px" alt="img" />
        </a>
        <a
          href="#"
          @click.prevent="class_event('手機')"
          class="phone_box sort_box mb-3 rounded-circle"
          :class="{sort_active:class_active =='手機'}"
        >
          <img src="../../assets/vue_shop_class_icon-15.png" width="130px" height="130px" alt="img" />
        </a>
        <a
          href="#"
          @click.prevent="class_event('穿戴')"
          class="watch_box sort_box mb-3 rounded-circle"
          :class="{sort_active:class_active =='穿戴'}"
        >
          <img src="../../assets/vue_shop_class_icon-16.png" width="130px" height="130px" alt="img" />
        </a>
        <a
          href="#"
          @click.prevent="class_event('耳機')"
          class="headset_box sort_box mb-3 rounded-circle"
          :class="{sort_active:class_active =='耳機'}"
        >
          <img src="../../assets/vue_shop_class_icon-17.png" width="130px" height="130px" alt="img" />
        </a>
        <a
          href="#"
          @click.prevent="class_event('生活')"
          class="life_box sort_box mb-3 rounded-circle"
          :class="{sort_active:class_active =='生活'}"
        >
          <img src="../../assets/vue_shop_class_icon-18.png" width="130px" height="130px" alt="img" />
        </a>
      </div>
      <div class="h4 text-black-50 text-center" v-if="is_loading == false">
        <img src="../../assets/loading.gif" width="200px" alt="">
      </div>
      <p v-if="product_data_class.length == 0&&is_loading == true" class="mb-5 mt-5 h5 text-weight-bold text-center">商品陸續上架中...</p>
      <div class="row product_list justify-content-center">
        <div class="col-lg-3 col-sm-6" v-for="item in product_data_class" :key="item.key">
          <router-link class="text-dark" href="#" :to="'/productcontent/' + item.id ">
            <div class="card border-0">
              <img :src="item.imageUrl" class="card_img" width="180px" alt="..." />
              <div class="card-body">
                <h5 class="card-title mb-0">{{item.title}}</h5>
                <p class="mb-3 text-black-50">{{item.category}}</p>
                <p class="card-text mb-3">
                  <span
                    class="text-danger"
                    style="text-decoration: line-through"
                  >{{item.origin_price |currency}}</span>
                  <span class="h4">{{item.price |currency}}</span>
                </p>
                <div class="text-right">
                  <a href="#" class="text-info ">
                    更多資訊..
                  </a>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item" :class="{disabled:!pages.has_pre}">
            <a
              class="page-link "
              href="#"
              aria-label="Previous"
              @click.prevent="product_data(pages.current_page-1)"
            >
              <i class="fas fa-angle-left"></i>
            </a>
          </li>
          <li
            class="page-item"
            :class="{active:pages.current_page == item}"
            v-for="(item,index) in pages.total_pages"
            :key="index"
          >
            <a class="page-link" href="#" @click.prevent="product_data(item)">{{item}}</a>
          </li>
          <li class="page-item" :class="{disabled:!pages.has_next}">
            <a
              class="page-link"
              href="#"
              aria-label="Next"
              @click.prevent="product_data(pages.current_page+1)"
            >
              <i class="fas fa-chevron-right"></i>
            </a>
          </li>
        </ul>
      </nav>
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
      product_data_list: [],
      product_data_all: [],
      product_data_class: [],
      cart_data_lsit:[],
      pages: {},
      class_active: '全部',
      is_loading: false,
      error_anim:false,
    };
  },
  filters: {
    currency: function(item) {
      const n = Number(item);
      return `$${n.toFixed(0).replace(/./g, (c, i, a) => {
        const currency =
          i && c !== "." && (a.length - i) % 3 === 0
            ? `, ${c}`.replace(/\s/g, "")
            : c;
        return currency;
      })}`;
    }
  },
  methods: {
    product_data: function(page = 1) {
      const api = `${process.env.HTTPAPI}/api/${process.env.PATHAPI}/products?page=${page}`;
      const vm = this;

      this.$http.get(api).then(response => {
        if (response.data.success) {
          vm.is_loading = true;
          vm.product_data_list = response.data.products;
          vm.product_data_class = response.data.products;
          vm.pages = response.data.pagination;
        } else {
          vm.error_anim = true;
        }
      });

      const all_api = `${process.env.HTTPAPI}/api/${process.env.PATHAPI}/products/all`;
      this.$http.get(all_api).then(response => {
        if (response.data.success) {
          vm.product_data_all = response.data.products;
        } else {
          vm.error_anim = true;
        }
      });
    },
    class_event: function(product_class) {
      const data = this.product_data_all;

      switch (product_class) {
        case "全部":
          this.class_active="全部";
          this.product_data_class = this.product_data_list;
          break;
        case "配件":
          this.class_active="配件";
          this.product_data_class = [];
          data.forEach(el => {
            if (el.category == "配件") {
              this.product_data_class.push(el);
            }
          });
          break;
        case "手機":
          this.class_active="手機";
          this.product_data_class = [];
          data.forEach(el => {
            if (el.category == "手機") {
              this.product_data_class.push(el);
            }
          });
          break;
        case "穿戴":
          this.class_active="穿戴";
          this.product_data_class = [];
          data.forEach(el => {
            if (el.category == "穿戴") {
              this.product_data_class.push(el);
            }
          });
          break;
        case "耳機":
          this.class_active="耳機";
          this.product_data_class = [];
          data.forEach(el => {
            if (el.category == "耳機") {
              this.product_data_class.push(el);
            }
          });
          break;
        case "生活":
          this.class_active="生活";
          this.product_data_class = [];
          data.forEach(el => {
            if (el.category == "生活") {
              this.product_data_class.push(el);
            }
          });
          break;
      }
    },
    cart_data:function(){
      const api = `${process.env.HTTPAPI}/api/${process.env.PATHAPI}/cart`;
      const vm = this;

      this.$http.get(api).then(response => {
        if (response.data.success) {
          vm.cart_data_lsit = response.data.data.carts;
        } else {
          vm.error_anim = true;
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
          vm.error_anim = true;
        }
      });
    }
  },
  created() {
    this.product_data();
    this.cart_data();
  },
  components: {
    indexnavbar,
    indexfooter
  }
};
</script>
