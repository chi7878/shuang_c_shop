<template>
  <div>
    <div class="loading_box" v-if="loading ==true">
              <img src="" width="250px" alt="">
    </div>
    <div class="order_box container-fluid">
            <div class=" row justify-content-center">
                <form class="col-md-4 ">
                    <div class="process_box row mb-4 border-bottom pb-5">
                        <div class="col-4 text-center order_confirm">
                            <p class=""><i class="fas fa-check" style="border-color: #2d2d2d"></i></p>
                            <p>訂單確認</p>
                        </div>
                        <div class="col-4 text-center basic_confirm">
                            <p><i class="far fa-id-card" style="border-color: #2d2d2d"></i></p>
                            基本資料
                        </div>
                        <div class="col-4 text-center pay_confirm">
                            <p><i class="far fa-credit-card" ></i></p>
                            付款方式
                        </div>
                    </div>
                    <p class="text-center order_title">基本資料</p>
                    <div class="form-group">
                        <label for="useremail">Email</label>
                        <input
                            type="email"
                            class="form-control"
                            name="email"
                            id="useremail"
                            placeholder="請輸入 Email"
                            v-model="form_data.user.email" 
                            v-validate="'required|email'"
                        />
                        <span class="text-danger" v-if="errors.has('email')">{{errors.first('email')}}</span>
                    </div>

                    <div class="form-group">
                        <label for="username">收件人姓名</label>
                        <input type="text" v-validate="'required'" :class="{'is-invalid' :errors.has('name') }" class="form-control" name="name" id="username" placeholder="輸入姓名" v-model="form_data.user.name" />
                        <span class="text-danger" v-if="errors.has('name')">姓名沒輸入到喔!</span>
                    </div>

                    <div class="form-group">
                        <label for="usertel">收件人電話</label>
                        <input type="tel" v-validate="'required'" :class="{'is-invalid' :errors.has('tel') }" name="tel" class="form-control" id="usertel" placeholder="請輸入電話" v-model="form_data.user.tel" />
                        <span class="text-danger" v-if="errors.has('tel')">電話沒輸入到喔!</span>
                    </div>

                    <div class="form-group">
                        <label for="useraddress" >收件人地址</label>
                        <input
                            type="text"
                            class="form-control"
                            name="address"
                            id="useraddress"
                            placeholder="請輸入地址"
                            v-model="form_data.user.address"
                            v-validate="'required'"
                            :class="{'is-invalid' :errors.has('address') }"
                        />
                        <span class="text-danger" v-if="errors.has('address')">地址欄位不得留空</span>
                    </div>

                    <div class="form-group">
                        <label for="comment">留言</label>
                        <textarea name id="comment" class="form-control" cols="10" rows="5" v-model="form_data.message"></textarea>
                    </div>
                    <div class="text-center">
                        <a href="" @click.prevent="oreder_post"  class="btn btn-danger">
                          <span v-if="sm_loading == false">下一步-付款方式</span>
                          <span v-else><i class="fas fa-circle-notch fa-spin"></i></span>
                          </a>
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
      loading:false,
      form_data:{
        user:{
          name: "",
          email: "",
          tel: "",
          address: ""
        },
        message:"",
      },
      sm_loading:false,
    };
  },

  methods:{
    oreder_post:function(){ 
      const api = `${process.env.VUE_APP_HTTPAPI}/api/${process.env.VUE_APP_PATHAPI}/order`;
      const vm = this;
      const data = {data: {user: vm.form_data.user,"message":vm.form_data.message}};
      vm.sm_loading = true;
      
      this.$validator.validate().then(valid => {
        if (valid) {
          if(vm.form_data.message == ""){
            vm.form_data.message = "無留言";
          }
          this.$http.post(api,data).then(response => {
          if (response.data.success) {
            vm.$router.push("/checkorder/pay")
            vm.sm_loading = false;
          } else {
            vm.sm_loading = false;
          }
        })
        }else{
          vm.sm_loading = false;
        }
      });

      
    }
  },
  
  created(){
  },
};
</script>
