<template>
  <div>
    <div class="alert_message_error" :class="{alert_message_error_anim:error_anim == true}" v-if="error_anim == true">
      <div class="text-dark">
        <p class="h1 text-center"><i class="far fa-dizzy"></i></p>
        <p>錯誤!請重新整理</p>
      </div>
    </div>

    <div class="loading_box" v-if="loading ==true">
              <img src="" width="250px" alt="">
    </div>
    <div class="order_box container-fluid">
            <div class=" row justify-content-center">
                <form class="col-md-4 ">
                    <div class="process_box row mb-4 border-bottom pb-5">
                        <div class="col-4 text-center check_order_confirm">
                            <p class=""><i class="fas fa-list-alt"></i></p>
                            <p>訂單確認</p>
                        </div>
                        <div class="col-4 text-center check_basic_confirm" >
                            <p ><i class="far fa-id-card" style="border-color: #2d2d2d30"></i></p>
                            <p style="color: #2d2d2d30">基本資料</p>
                        </div>
                        <div class="col-4 text-center check_pay_confirm">
                            <p><i class="far fa-credit-card"></i></p>
                            <p>付款方式</p>
                        </div>
                    </div>
                    <p class="text-center order_title mb-2">訂單確認</p>

                    <ul class="cart_click_lsit">
                        <li class="py-2 d-flex" v-for="item in cart_data_lsit.slice(0,4)" :key="item.id">
                            <img :src="item.product.imageUrl" width="80px" alt="">
                            <div class="flex-grow-1 ml-5 pt-3">
                              <p class="d-flex justify-content-between mb-2">
                                {{item.product.title}} 
                                <span>{{item.qty}} {{item.product.unit}} </span>
                            </p>
                            <p class="text-right m-0">{{item.total |currency}}</p>
                            <a href="" class="text-black-50 m-0" @click.prevent="cart_del(item)">刪除</a>
                            </div>
                            
                        </li>
                    </ul>

                    <div class="mt-5">
                        <label for="comment">優惠券</label>
                        <div class="input-group">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="優惠券代碼"
                                aria-label="Recipient's username"
                                aria-describedby="button-addon2"
                                v-model="coupon"
                            />
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary" :class="{disabled: is_coupon == true}" type="button" id="button-addon2" @click="use_coupon">
                                    <span v-if="is_coupon == false">使用</span>
                                    <span v-else>已使用</span> 
                                </button>
                            </div>
                        </div>
                        <p class="ml-3 text-danger">{{coupon_error_message}}</p>
                    </div>
                    <div class="my-5 text-right">
                        <p>金額:{{cart_data_total.total |currency}}</p>
                        <p class="mt-2 text-danger" v-if="is_coupon ==true">-折扣:{{cart_data_total.total-cart_data_total.final_total |currency}}</p>
                        <div class="line ml-auto my-3"></div>
                        <p class="h5">總計:{{cart_data_total.final_total |currency}}</p>
                    </div>
                    <div class="text-center">
                        <router-link to="/checkorder/basic" class="btn btn-danger">下一步-基本資料</router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: "HelloWorld",
  data() {
    return {
      cart_data_lsit:[],
      loading:true,
      cart_data_total:{},
      coupon:"",
      is_coupon:false,
      coupon_error_message:'',
      error_anim:false,
    };
  },

  methods:{
    cartsData:function(){
      const api = `${process.env.HTTPAPI}/api/${process.env.PATHAPI}/cart`;
      const vm = this;

      this.$http.get(api).then(response => {
        if (response.data.success) {
          vm.loading = false;
          vm.cart_data_lsit = response.data.data.carts;
          vm.cart_data_total = response.data.data;
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
          vm.cartsData();
        } else {
          vm.error_anim = true;
        }
      });
    },
    use_coupon:function(){
      const api = `${process.env.HTTPAPI}/api/${process.env.PATHAPI}/coupon`;
      const vm = this;

      this.$http.post(api,{data:{code:vm.coupon}}).then(response => {
        if (response.data.success) {
          vm.cartsData();
          vm.is_coupon = true;
          vm.coupon_error_message = "已套用"
        } else {
          vm.coupon_error_message = response.data.message;
        }
      });
    },
  },
  
  created(){
    this.cartsData();
  },
};
</script>
