<template>
    <main>
        <indexnavbar></indexnavbar>

        <router-link to="/checkorder" class="btn mobile_cart_btn d-block d-sm-none" v-if="cart_data_lsit.length > 0">
            <i class="fas fa-shopping-cart"></i>
        </router-link>

        <aside class="loading_box" v-if="loading == true">
            <img src="../../assets/loading.gif" width="250px" alt="" />
        </aside>
        <aside class="alert_message " :class="{ alert_message_anim: cart_anim == true }" v-if="cart_anim == true">
            <div class="text-dark">
                <p class="h1 text-center"><i class="far fa-grin-squint"></i></p>
                <p>新增至購物車囉!</p>
            </div>
        </aside>

        <aside
            class="alert_message_error"
            :class="{ alert_message_error_anim: error_anim == true }"
            v-if="error_anim == true"
        >
            <div class="text-dark">
                <p class="h1 text-center"><i class="far fa-dizzy"></i></p>
                <p>錯誤!請重新整理</p>
            </div>
        </aside>

        <aside class="cart_btn  d-sm-block d-none">
            <article class="cart_box">
                <p class="cart_link"><i class="fas fa-shopping-cart mr-4"></i>購物車</p>
                <ul class="cart_lsit text-white">
                    <li v-if="cart_data_lsit.length == 0">
                        <p class="mb-2 text-center">目前無購物商品喔!</p>
                    </li>

                    <li v-for="item in cart_data_lsit.slice(0, 4)" :key="item.id">
                        <p class="d-flex justify-content-between">
                            {{ item.product.title }}
                            <span>{{ item.qty }}{{ item.product.unit }}</span>
                        </p>
                        <p class="text-right m-0">{{ item.final_total | currency }}</p>
                        <a href="" class="text-black-50 m-0" @click.prevent="cartDel(item)">
                            <span v-if="del_laoding == false">刪除</span>
                            <span v-else><i class="fas fa-circle-notch fa-spin"></i></span>
                        </a>
                    </li>

                    <li class="py-1 text-center" v-if="cart_data_lsit.length > 4">
                        <router-link to="/checkorder" href="" class="text-white"
                            >還有其他{{ cart_data_lsit.length - 4 }}項商品...</router-link
                        >
                    </li>
                </ul>
                <div class=" mt-3 text-center" v-if="cart_data_lsit.length > 0">
                    <router-link to="/checkorder" class="btn btn-light py-1 px-3">結帳去</router-link>
                </div>
            </article>
        </aside>
        <section class="container-fluid">
            <div class="row product_container justify-content-between align-items-center">
                <div class="col-lg-5 product_picture">
                    <a href="" class="text-black-50" style="font-size: 20px;" @click.prevent="previousPage"
                        ><i class="fas fa-angle-left mr-1"></i>BACK</a
                    >
                    <img :src="product.imageUrl" width="400px" alt="" />
                </div>
                <div class="col-lg-7 product_text_box">
                    <article class="product_text d-flex flex-column p-5 text-primary">
                        <h2 class="">{{ product.title }}</h2>
                        <div class="mb-5">
                            <a class="tag rounded-pill">{{ product.category }}</a>
                        </div>
                        <p class="mb-2">[產品特色]</p>
                        <p>
                            {{ product.description }}
                        </p>
                        <p class="price mb-3 mt-2 mt-sm-5  text-primary">
                            {{ product.origin_price | currency
                            }}<span class="text-danger">{{ product.price | currency }}</span>
                        </p>
                        <div class="d-inline-flex flex-wrap justify-content-between">
                            <div class="d-flex border rounded-pill num_btn my-1">
                                <a href="" class="px-3 py-2 border-right" @click.prevent="numEnd">-</a>
                                <p class="px-3 py-2">{{ num }}</p>
                                <a href="" class="px-3 py-2 border-left" @click.prevent="num += 1">+</a>
                            </div>
                            <a href="" class="btn cart rounded-pill px-3 my-1" @click.prevent="cartAdd">
                                <span v-if="add_laoding == false">加入購物車</span>
                                <span v-else>正在加入中</span>
                            </a>
                        </div>
                    </article>
                </div>
            </div>
        </section>
        <section class="mt-4 like_box d-flex justify-content-center flex-column align-items-center">
            <p class="text-primary h4 like_title mt-5">
                <i class="far fa-thumbs-up"></i>店長推推商品<i class="far fa-thumbs-up"></i>
            </p>
            <ul class="hot_list d-flex justify-content-center flex-wrap">
                <li class="mx-4" v-for="item in products_data_list.slice(0, 4)" :key="item.id">
                    <router-link :to="'/productcontent/' + item.id">
                        <div class="card" style="width: 18rem;background-color:#2d2d2d20">
                            <img :src="item.imageUrl" class="card_img" width="150px" alt="..." />
                            <div class="card-body text-center" style="margin-top: 120px;">
                                <h5 class="card-title">{{ item.title }}</h5>
                                <p class="card-text mb-3 text-danger" style="text-decoration: line-through">
                                    {{ item.origin_price | currency }}
                                </p>
                                <a class="btn btn-light rounded-pill px-5 py-0">more</a>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </section>

        <indexfooter></indexfooter>
    </main>
</template>

<script>
import indexnavbar from "../pages/index_template/index_navbar";
import indexfooter from "../pages/index_template/index_footer";

export default {
    name: "HelloWorld",
    data() {
        return {
            product: {},
            num: 1,
            loading: true,
            cart_data_lsit: [],
            cart_anim: false,
            error_anim: false,
            del_laoding: false,
            add_laoding: false,
            products_data_list: [],
        };
    },
    methods: {
        productsData: function() {

          //get allproducts data
            const all_api = `${process.env.VUE_APP_HTTPAPI}/api/${process.env.VUE_APP_PATHAPI}/products/all`;
            const vm = this;
            vm.is_loading = true;
            this.$http.get(all_api).then(response => {
                if (response.data.success) {
                    vm.products_data_list = response.data.products;
                } else {
                    vm.error_anim = true;
                }
            });
        },
        productData: function() {

          //get allproducts data
            const id = this.$route.params.id;
            const api = `${process.env.VUE_APP_HTTPAPI}/api/${process.env.VUE_APP_PATHAPI}/product/${id}`;
            const vm = this;
            vm.animLoading();

            this.$http.get(api).then(response => {
                if (response.data.success) {
                    vm.product = response.data.product;
                    vm.loading = false;
                } else {
                    vm.error_anim = true;
                    vm.loading = false;
                }
            });
        },
        animLoading: function() {

          //loading animation
            const vm = this;
            setTimeout(function() {
                vm.loading = false;
            }, 1000);
        },
        numEnd: function() {

          //product num 
            if (this.num > 0) {
                this.num -= 1;
            }
        },
        previousPage: function() {

          //previous
            this.$router.push("/product");
        },
        animClose: function() {

          //add cart animation
            const vm = this;
            setTimeout(function() {
                vm.cart_anim = false;
            }, 1000);
        },
        cartData: function() {

          //get carts data
            const api = `${process.env.VUE_APP_HTTPAPI}/api/${process.env.VUE_APP_PATHAPI}/cart`;
            const vm = this;

            this.$http.get(api).then(response => {
                if (response.data.success) {
                    vm.cart_data_lsit = response.data.data.carts;
                } else {
                    vm.error_anim = true;
                }
            });
        },
        cartAdd: function() {

          //add cart
            const api = `${process.env.VUE_APP_HTTPAPI}/api/${process.env.VUE_APP_PATHAPI}/cart`;
            const vm = this;
            vm.add_laoding = true;
            const cart_data = {
                product_id: vm.$route.params.id,
                qty: vm.num,
            };

            this.$http.post(api, { data: cart_data }).then(response => {
                if (response.data.success) {
                    vm.cart_anim = true;
                    vm.animClose();
                    vm.cartData();
                    vm.add_laoding = false;
                } else {
                    vm.error_anim = true;
                    vm.add_laoding = false;
                }
            });
        },
        cartDel: function(cart_product) {

          //delete cart
            const api = `${process.env.VUE_APP_HTTPAPI}/api/${process.env.VUE_APP_PATHAPI}/cart/${cart_product.id}`;
            const vm = this;
            vm.del_laoding = true;
            this.$http.delete(api).then(response => {
                if (response.data.success) {
                    vm.cartData();
                    vm.del_laoding = false;
                } else {
                    vm.error_anim = true;
                    vm.del_laoding = false;
                }
            });
        },
    },

    created() {
        this.productData();
        this.cartData();
        this.productsData();
    },
    components: {
        indexnavbar,
        indexfooter,
    },
};
</script>
