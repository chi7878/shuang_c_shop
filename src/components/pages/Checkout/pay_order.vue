<template>
  <div>
    <!-- <div class="loading_box" v-if="loading ==true">
      <img src width="250px" alt />
    </div> -->
    <div class="order_box container-fluid">
      <div class="row justify-content-center">
        <form class="col-md-4">
          <div class="process_box row mb-4 border-bottom pb-5">
            <div class="col-4 text-center order_confirm">
              <p class>
                <i class="fas fa-check" style="border-color: #2d2d2d"></i>
              </p>
              <p>訂單確認</p>
            </div>
            <div class="col-4 text-center pay_basic_confirm">
              <p>
                <i class="fas fa-check" style="border-color: #2d2d2d"></i>
              </p>基本資料
            </div>
            <div class="col-4 text-center pay_order_confirm">
              <p>
                <i class="far fa-credit-card"></i>
              </p>付款方式
            </div>
          </div>
          <p class="text-center order_title mb-4">付款方式</p>
          <div class="row">
            <div class="col-6 mb-3">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="atm"
                  value="option1"
                  checked
                />
                <label class="form-check-label h4" for="atm">
                  <i class="far fa-credit-card mr-2"></i>ATM轉帳
                </label>
              </div>
            </div>

            <div class="col-6 mb-3">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="visa"
                  value="option1"
                />
                <label class="form-check-label h4" for="visa">
                  <i class="far fa-credit-card mr-2"></i>線上信用卡
                </label>
              </div>
            </div>
            <div class="col-6 mb-3">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="car"
                  value="option1"
                />
                <label class="form-check-label h4" for="car">
                  <i class="fas fa-truck-moving mr-2"></i>貨到付款
                </label>
              </div>
            </div>
            <div class="col-6 mb-3">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="store"
                  value="option1"
                />
                <label class="form-check-label h4" for="store">
                  <i class="fas fa-store-alt mr-2"></i>7-11貨到付款
                </label>
              </div>
            </div>
          </div>

          <div class="form-row my-3">
            <div class="form-group col-md-6">
              <label for="inputEmail4">信用卡卡號</label>
              <input type="text" class="form-control" id="inputEmail4" placeholder="信用卡卡號" />
            </div>
            <div class="form-group col-md-6">
              <label for="inputback">背面末三碼</label>
              <input type="password" class="form-control" id="inputback" placeholder="背面末三碼" />
            </div>
            <div class="form-group col-md-6">
              <label for="inputcardl4">卡片有效期限</label>
              <input type="text" class="form-control" id="inputcardl4" placeholder="卡片有效期限" />
            </div>
            <div class="form-group col-md-6">
              <label for="inputid">持卡人身分證</label>
              <input type="password" class="form-control" id="inputid" placeholder="身分證" />
            </div>
          </div>
          <div class="text-center">
            <a href="" class="btn btn-danger" @click.prevent="order_finish">下一步-完成訂單</a>
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
      order_id:'',
    };
  },
  methods: {
    order_data:function(){
      const api = `${process.env.HTTPAPI}/api/${process.env.PATHAPI}/orders`;
      const vm = this;

      this.$http.get(api).then(response => {
        if (response.data.success) {
          vm.order_id = response.data.orders[0].id
        } else {
          console.log("錯誤");
        }
      });
    },
    order_finish:function(){
      const api = `${process.env.HTTPAPI}/api/${process.env.PATHAPI}/pay/${this.order_id}`;
      const vm = this;

      this.$http.post(api).then(response => {
        if (response.data.success) {
          vm.$router.push('/checkorder/finish');
        } else {
          console.log("錯誤");
        }
      });
    }
  },

  created() {
    this.order_data();
  }
};
</script>
