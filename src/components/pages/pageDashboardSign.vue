<template>
    <main>
        <section class="backstage_body text-center">
            <form class="form-signin">
                <h1 class="h3 mb-3 font-weight-normal text-primary">後台登入</h1>
                <div class="emailenter_box text-left mt-3">
                    <label for="inputEmail" class="text-primary">電子信箱</label>
                    <input
                        type="email"
                        id="inputEmail"
                        v-model="sign_data.username"
                        class="form-control rounded-pill"
                        placeholder="請輸入電子郵件"
                        required
                        autofocus
                        
                    />
                </div>
                <div class="password_box text-left">
                    <label for="inputPassword" class="mt-3 text-primary">密碼</label>
                    <input
                        type="password"
                        id="inputPassword"
                        v-model="sign_data.password"
                        class="form-control rounded-pill"
                        placeholder="請輸入密碼"
                        required
                    />
                </div>
                <p class="text-danger" v-if="warning">帳號或密碼輸入錯誤!</p>
                <button class="btn btn-primary btn-block my-5 sign_btn w-50 mx-auto" type="submit" @click.prevent="sign">
                    <span v-if="sm_loading == false">登入</span>
                    <span v-else><i class="fas fa-circle-notch fa-spin"></i></span>
                    </button>
            </form>
        </section>
    </main>
</template>

<script>
export default {
    name: "HelloWorld",
    data() {
        return {
            warning:false,
            sign_data: {
                username: "",
                password: ""
            },
            sm_loading:false,
        };
    },
    methods:{
        sign:function(){
            this.sm_loading = true;
            const api = `${process.env.VUE_APP_HTTPAPI}/admin/signin`;
            const vm = this;
            this.$http.post(api,vm.sign_data).then((response)=>{
                if(response.data.success){
                    vm.sm_loading = false;
                    vm.$router.push('/dashoard'); 
                }else{
                    vm.warning =true;
                    vm.sm_loading = false;
                }
            })
        }
    },
};
</script>
