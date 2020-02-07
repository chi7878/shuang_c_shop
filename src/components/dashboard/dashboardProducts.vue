<template>
  <main>
    <aside class="alert_message_error" :class="{alert_message_error_anim:error_anim == true}" v-if="error_anim == true">
      <div class="text-dark">
        <p class="h1 text-center"><i class="far fa-dizzy"></i></p>
        <p>錯誤!請重新整理或重新登入</p>
      </div>
    </aside>

    <aside class="alert_delete py-4 " v-if="alert_delete == true">
      <section class="text-dark text-center">
        <h1><i class="far fa-sad-cry"></i></h1>
        <p class="">確定要刪除嗎?</p>
        <div class="alert_delete_btn d-flex justify-content-center mt-3">
          <a href="" class="btn btn-light rounded-pill mr-3" @click.prevent="alert_delete =false">取消</a>
          <a href="" class="btn btn-light rounded-pill" @click.prevent="productDelete()">確定</a>
        </div>
      </section>
    </aside>
    <aside class="alert_delete_bg"  v-if="alert_delete == true"></aside>

    <section class="container-fluid">
      <article class="row">
        <dashboardmenu></dashboardmenu>
        <section class="col-12 col-sm-10 deashboard_content pt-5 px-3 pl-sm-4 mb-5 mb-sm-0">
          <article class="text-content d-flex  flex-column flex-sm-row align-items-center pb-3">
            <h1 class="mr-3">後台管理</h1>
            <p class="h5 px-3 py-2 title_text">產品列表</p>
          </article>
          <article class="table-responsive mt-5 p-2 px-sm-5 py-5" >
            <a href="" class="text-right btn btn-outline-dark mb-4" @click.prevent="openModel(true)">建立新產品</a>
            <table class="table table-striped table-sm table_lsit pd-2">
              <thead>
                <tr class="text-primary">
                  <th width="120" class="text-center">分類</th>
                  <th>名稱</th>
                  <th width="120" class="text-right">原價</th>
                  <th width="120" class="text-right">售價</th>
                  <th width="140" class="text-center">是否啟用</th>
                  <th width="130" class="text-center">編輯</th>
                  <th width="50"></th>
                </tr>             
              </thead>
              <tbody>
                <tr v-for="item in product_data_list" :key="item.id">
                  <td class="text-center">{{item.category}}</td>
                  <td>{{item.title}}</td>
                  <td class="text-right">{{item.origin_price |currency}}</td>
                  <td class="text-right">{{item.price |currency}}</td>
                  <td class="text-center">
                    <span v-if="item.is_enabled == 1" class="text-primary">啟用</span>
                    <span v-else class="text-danger">未啟用</span>
                  </td>
                  <td class="text-center">
                    <a href="#" class="btn btn-outline-primary btn-sm" @click.prevent="openModel(false,item)">
                      編輯
                    </a>
                  </td>
                  <td>
                    <a  href="#"  class="btn btn-sm btn_del text-danger p-0" @click.prevent="delAlertModel(item.id)">
                      <i class="far fa-trash-alt"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
              <tbody v-if="sm_loading == true" >
                <td>
                  <p class="h4 text-black-50" ><i class="fas fa-circle-notch fa-spin"></i></p>
                </td>
              </tbody>            </table>
            <nav aria-label="Page navigation example ">
              <ul class="pagination mb-5">
                <li class="page-item" :class="{disabled:!pages.has_pre}">
                  <a class="page-link" href="#" aria-label="Previous" @click.prevent="productsData(pages.current_page-1)">
                    <i class="fas fa-angle-left"></i>
                  </a>
                </li>
                <li class="page-item" :class="{active:pages.current_page == item}" v-for="(item,index) in pages.total_pages" :key="index">
                  <a class="page-link"  href="#" @click.prevent="productsData(item)">{{item}}</a>
                </li>
                <li class="page-item" :class="{disabled:!pages.has_next}" >
                  <a class="page-link" href="#" aria-label="Next" @click.prevent="productsData(pages.current_page+1)">
                    <i class="fas fa-chevron-right"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </article>
        </section>
      </article>
    </section>

    <!-- add_model -->
    <section
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <article class="modal-dialog modal-lg" role="document">
        <section class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>新增產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="image">輸入圖片網址</label>
                  <input
                    type="text"
                    class="form-control"
                    id="image"
                    placeholder="請輸入圖片連結"
                    v-model="new_product.imageUrl"
                  />
                </div>
                <div class="form-group">
                  <label for="customFile">
                    或 上傳圖片
                    <i class="fas fa-circle-notch fa-spin" v-if="img_loading"></i>
                  </label>
                  <input
                    type="file"
                    id="customFile"
                    class="form-control"
                    ref="files"
                    @change="updataImg"
                  />
                </div>
                <img
                  :src="new_product.imageUrl"
                  class="img-fluid"
                  width="50%"
                  alt
                />
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">標題</label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    placeholder="請輸入標題"
                    v-model="new_product.title"
                  />
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="category">分類</label>
                    <input
                      type="text"
                      class="form-control"
                      id="category"
                      placeholder="請輸入分類"
                      v-model="new_product.category"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">單位</label>
                    <input
                      type="unit"
                      class="form-control"
                      id="unit"
                      placeholder="請輸入單位"
                      v-model="new_product.unit"
                    />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="origin_price">原價</label>
                    <input
                      type="number"
                      class="form-control"
                      id="origin_price"
                      placeholder="請輸入原價"
                      v-model="new_product.origin_price"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">售價</label>
                    <input
                      type="number"
                      class="form-control"
                      id="price"
                      placeholder="請輸入售價"
                      v-model="new_product.price"
                    />
                  </div>
                </div>
                <hr />

                <div class="form-group">
                  <label for="description">產品描述</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="description"
                    placeholder="請輸入產品描述"
                    style="height:100px"
                    v-model="new_product.description"
                  ></textarea>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="is_enabled"
                      v-model="new_product.is_enabled"
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
            <button type="button" class="btn btn-primary"  :class="{disabled:img_loading == true}" @click="productAdd">確認</button>
          </div>
        </section>
      </article>
    </section>
  </main>
</template>

<script>
import dashboardmenu from "./dashboard_template/dashboard_menu";
import $ from "jquery";

export default {
  name: "HelloWorld",
  data() {
    return {
      new_product: {},
      product_data_list: [],
      pages: {},
      delete_id:'',
      is_new: false,
      sm_loading:true,
      img_loading:false,
      error_anim:false,
      alert_delete:false,
    };
  },
  methods: {
    productsData: function(page=1) {
      
      //get allproducts data
      const api = `${process.env.VUE_APP_HTTPAPI}/api/${process.env.VUE_APP_PATHAPI}/admin/products?page=${page}`;
      const vm = this;

      vm.$http.get(api).then(response => {
        if(response.data.success){
          vm.sm_loading = false;
          vm.product_data_list = response.data.products;
          vm.pages = response.data.pagination;
        }else{
          vm.error_anim = true;
        }
      });
      
    },
    delAlertModel:function(id){

      //open delmodel
      this.delete_id = id;
      this.alert_delete = true;

    },
    productDelete: function() {
      
      //del product
      const api = `${process.env.VUE_APP_HTTPAPI}/api/${process.env.VUE_APP_PATHAPI}/admin/product/${this.delete_id}`;
      const vm = this;

      vm.$http.delete(api).then(response => {
        vm.productsData();
        vm.alert_delete = false;
      });

    },
    productAdd: function() {
      
      //add or revise prodoct
      let api = `${process.env.VUE_APP_HTTPAPI}/api/${process.env.VUE_APP_PATHAPI}/admin/product`;
      const vm = this;

      if (vm.is_new) {
        this.$http.post(api, { data: vm.new_product }).then(response => {
          if (response.data.success) {
            vm.new_product = {};
            vm.productsData();
          } else {
            vm.error_anim = true;
          }
        });
      } else {
        api = `${process.env.VUE_APP_HTTPAPI}/api/${process.env.VUE_APP_PATHAPI}/admin/product/${vm.new_product.id}`;
        this.$http.put(api, { data: vm.new_product }).then(response => {
          if (response.data.success) {
            vm.new_product = {};
            vm.productsData();
            
          } else {
            vm.error_anim = true;
          }
        });
      }
      $("#productModal").modal("hide");

    },
    openModel: function(isnew, item) {

      //openmodel 判斷是否新增
      if (isnew) {
        this.new_product = {};
        this.is_new = true;
      } else {
        this.new_product = item;
        this.is_new = false;
      }
      $("#productModal").modal("show");

    },
    updataImg: function() {

      //updata image
      const vm = this;
      const img = this.$refs.files.files[0];
      const formData = new FormData();
      formData.append("file-to-upload", img);
      const api = `${process.env.VUE_APP_HTTPAPI}/api/${process.env.VUE_APP_PATHAPI}/admin/upload`;
      vm.img_loading =true;
      this.$http
        .post(api, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(response => {
          if (response.data.success) {
            vm.img_loading =false;
            vm.$set(vm.new_product, "imageUrl", response.data.imageUrl);
          } else {
            vm.error_anim = true;
          }
        });
    }
  },
  components: {
    dashboardmenu
  },
  created() {
    this.productsData();
  }
};
</script>
