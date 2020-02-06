<template>
    <header class="col-12 col-sm-2  deashboard_menu text-center p-0 position--relative ">
        <section class="">
            <img src="../../../assets/shopLogo.png" class="w-25 w-sm-50" alt="" />
            <div class="mt-3 mt-sm-5">
                <p class="text-white-50 mb-4">管理員</p>
                <ul class="nav flex-row flex-sm-column justify-content-around">
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

            <a href="" class="btn btn-outline-light p-0 px-4 py-1 mb-2 rounded-pill" @click.prevent="signOut"
                >登出</a
            >
        </section>
    </header>
</template>

<script>
export default {
    name: "HelloWorld",
    data() {
        return {
            msg: "Welcome to Your Vue.js App",
        };
    },
    methods: {
        signOut: function() {
            const api = `${process.env.VUE_APP_HTTPAPI}/logout`;
            const vm = this;
            this.$http.post(api).then(response => {
                if (response.data.success) {
                    vm.$router.push("/");
                }
            });
        },
    },
};
</script>
