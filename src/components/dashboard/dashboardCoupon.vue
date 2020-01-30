<template>
  <div>
    <div class="alert_message_error" :class="{alert_message_error_anim:error_anim == true}" v-if="error_anim == true">
      <div class="text-dark">
        <p class="h1 text-center"><i class="far fa-dizzy"></i></p>
        <p>錯誤!請重新整理或重新登入</p>
      </div>
    </div>

    <div class="alert_delete" v-if="alert_delete == true">
      <div class="text-dark">
        <p class="h1 text-center"><i class="far fa-sad-cry"></i></p>
        <p class="text-center">確定要刪除嗎?</p>
        <div class="alert_delete_btn d-flex justify-content-around mt-3">
          <a href="" class="btn btn-light rounded-pill mr-3" @click.prevent="alert_delete =false">取消</a>
          <a href="" class="btn btn-light rounded-pill" @click.prevent="del_coupon()">確定</a>
        </div>
      </div>
    </div>
    <div class="alert_delete_bg"  v-if="alert_delete == true"></div>

    <div class="container-fluid">
      <div class="row">
        <dashboardmenu></dashboardmenu>
        <div class="col-10 deashboard_content pt-5 pl-5">
          <div class="text-content d-flex align-items-center pb-3">
            <p class="h1 mr-3">後台管理</p>
            <p class="h5 px-3 py-2 title_text">優惠券</p>
          </div>
          <div class="table-responsive mt-5 px-5">
            <a href="#" class="text-right btn btn-outline-dark mb-4" @click.prevent="open_coupon_model(true)">建立優惠券</a>
            <table class="table table-striped table-sm table_lsit">
              <thead>
                <tr>
                  <th>名稱</th>
                  <th width="120" class="text-center">折扣碼</th>
                  <th width="120" class="text-right">折扣</th>
                  <th width="140" class="text-center">是否啟用</th>
                  <th width="130" class="text-center">編輯</th>
                  <th width="50"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in coupon_data_list" :key="item.id">
                  <td>{{item.title}}</td>
                  <td class="text-center">{{item.code}}</td>
                  <td class="text-right">{{item.percent}}%</td>
                  <td class="text-center">
                    <span v-if="item.is_enabled == 1">啟用</span>
                    <span v-else>未啟用</span>
                  </td>
                  <td class="text-center">
                    <a
                      href="#"
                      class="btn btn-outline-primary btn-sm"
                      @click.prevent="open_coupon_model(false,item)"
                    >編輯</a>
                  </td>
                  <td>
                    <a
                      href="#"
                      class="btn btn-sm btn_del text-danger p-0"
                      @click.prevent="del_model_event(item.id)"
                    >
                      <i class="far fa-trash-alt"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
              <p class="h4 text-black-50 loading_list" v-if="sm_loading == false"><i class="fas fa-circle-notch fa-spin"></i></p>
            </table>
            <nav aria-label="Page navigation example" v-if="pages.total_pages >1">
              <ul class="pagination ">
                <li class="page-item" :class="{disabled:!pages.has_pre}">
                  <a class="page-link" href="#" aria-label="Previous" @click.prevent="product_data(pages.current_page-1)">
                    <i class="fas fa-angle-left"></i>
                  </a>
                </li>
                <li class="page-item" :class="{active:pages.current_page == item}" v-for="(item,index) in pages.total_pages" :key="index">
                  <a class="page-link"  href="#" @click.prevent="product_data(item)">{{item}}</a>
                </li>
                <li class="page-item" :class="{disabled:!pages.has_next}" >
                  <a class="page-link" href="#" aria-label="Next" @click.prevent="product_data(pages.current_page+1)">
                    <i class="fas fa-chevron-right"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <!-- add_model -->
    <div
      class="modal fade"
      id="couponModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>新增優惠券</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row justify-content-center">
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">優惠券名稱</label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    placeholder="請輸入名稱"
                    v-model="new_coupon.title"
                  />
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="category">折扣碼</label>
                    <input
                      type="text"
                      class="form-control"
                      id="category"
                      placeholder="請輸入折扣碼"
                      v-model="new_coupon.code"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="origin_price">折扣(%)</label>
                    <input
                      type="number"
                      class="form-control"
                      id="origin_price"
                      placeholder="請輸入折扣"
                      v-model="new_coupon.percent"
                    />
                  </div>
                </div>

                <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="is_enabled"
                      v-model="new_coupon.is_enabled"
                      :true-value="1"
                      :false-value="0"
                    />
                    <label class="form-check-label" for="is_enabled">是否啟用</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click.prevent="add_coupon">確認</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dashboardmenu from "./dashboard_template/dashboard_menu";
import $ from "jquery";

export default {
  name: "HelloWorld",
  data() {
    return {
      new_coupon:{},
      coupon_data_list:[],
      is_new:false,
      pages: {},
      sm_loading:false,
      error_anim:false,
      alert_delete:false,
      delete_id:'',
    };
  },
  methods: {
    couponsData:function(page=1){
      let api = `${process.env.VUE_APP_HTTPAPI}/api/${process.env.VUE_APP_PATHAPI}/admin/coupons?page=${page}`;
      const vm = this;
      
      this.$http.get(api).then(response => {
          if(response.data.success){
            vm.sm_loading = true;
            vm.coupon_data_list=response.data.coupons;
            vm.pages = response.data.pagination;
          }else{
            vm.error_anim =true;
          }
        });
    },
    open_coupon_model:function(is_new,item){
      if(is_new ==true){
        this.new_coupon ={};
        this.is_new =true;
      }else{
        this.new_coupon =item;
        this.is_new =false;
      }
      $('#couponModal').modal('show');
    },
    add_coupon:function(){
      let api = `${process.env.VUE_APP_HTTPAPI}/api/${process.env.VUE_APP_PATHAPI}/admin/coupon`;
      const vm = this;
      
      if(vm.is_new){
        this.$http.post(api,{data:vm.new_coupon}).then(response => {
          if(response.data.success){
            vm.new_coupon={};
            vm.couponsData();
          }else{
            vm.error_anim =true;
          }
        });
      }else{
        api= `${process.env.VUE_APP_HTTPAPI}/api/${process.env.VUE_APP_PATHAPI}/admin/coupon/${vm.new_coupon.id}`;
        this.$http.put(api,{data:vm.new_coupon}).then(response => {
          if(response.data.success){
            vm.new_coupon={};
            vm.couponsData();
          }else{
            vm.error_anim =true;
          }
        });
        }
      
      $('#couponModal').modal('hide');
    },
    del_model_event:function(id){
      this.delete_id = id;
      this.alert_delete = true;

    },
    del_coupon:function(){
      const api= `${process.env.VUE_APP_HTTPAPI}/api/${process.env.VUE_APP_PATHAPI}/admin/coupon/${this.delete_id}`;
      const vm = this;

      this.$http.delete(api).then(response => {
        if(response.data.success){
          vm.couponsData();
          vm.alert_delete = false;
        }
      })
    }
  },
  components: {
    dashboardmenu
  },
  created() {
    this.couponsData();
  }
};
</script>
