<template>
    <div class="col-2 deashboard_menu text-center p-0 vh-100 position-relative">
                    <img src="../../../assets/vue shop logo-03.png" width="150px" height="150px" alt="" />
                    <div class="mt-5">
                        <p class="text-white-50 mb-4">管理員</p>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-3">
                                <router-link class="nav-link dashboard_btn p-0 text-white" to="/dashoard">
                                    產品列表
                                </router-link>
                            </li>
                            <li class="nav-item mb-3">
                                <router-link class="nav-link dashboard_btn p-0 text-white" to="/dashboardcoupon">
                                    優惠券
                                </router-link>
                            </li>
                            <li class="nav-item mb-3">
                                <router-link class="nav-link dashboard_btn p-0 text-white" to="/dashboardorder">
                                    產品訂單
                                </router-link>
                            </li>
                        </ul>
                    </div>

                    <a href="" class="btn btn-outline-light p-0 px-4 py-1 signout position-absolute" @click.prevent="sign_out">登出</a>
                </div>
</template>

<script>
export default {
    name: "HelloWorld",
    data() {
        return {
            msg: "Welcome to Your Vue.js App"
        };
    },
    methods:{
        sign_out:function(){
            const api = `${process.env.HTTPAPI}/logout`;
            const vm = this;
            this.$http.post(api).then((response) =>{
                if(response.data.success){
                    vm.$router.push('/');
                }
            })
        }
    },
};
</script>