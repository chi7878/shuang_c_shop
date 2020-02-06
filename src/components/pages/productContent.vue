<template>
    <main>
        <indexnavbar></indexnavbar>

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

        <router-link to="/checkorder" class="btn mobile_cart_btn d-block d-sm-none text-white" v-if="cart_data_list    .length > 0">
            <i class="fas fa-shopping-cart"></i>
        </router-link>

        <aside class="cart_btn  d-sm-block d-none">
            <article class="cart_box">
                <p class="cart_link"><i class="fas fa-shopping-cart mr-4"></i>購物車</p>
                <ul class="cart_lsit text-white">
                    <li v-if="cart_data_list    .length == 0">
                        <p class="mb-2 text-center">目前無購物商品喔!</p>
                    </li>

                    <li v-for="item in cart_data_list   .slice(0, 4)" :key="item.id">
                        <p class="d-flex justify-content-between">
                            {{ item.product.title }}
                            <span>{{ item.qty }}{{ item.product.unit }}</span>
                        </p>
                        <p class="text-right m-0">{{ item.final_total | currency }}</p>
                        <a href="" class="text-black-50 m-0" @click.prevent="cartDel(item)">
                            <span v-if="del_loading == false">刪除</span>
                            <span v-else><i class="fas fa-circle-notch fa-spin"></i></span>
                        </a>
                    </li>

                    <li class="py-1 text-center" v-if="cart_data_list   .length > 4">
                        <router-link to="/checkorder" href="" class="text-white"
                            >還有其他{{ cart_data_list  .length - 4 }}項商品...</router-link
                        >
                    </li>
                </ul>
                <div class=" mt-3 text-center" v-if="cart_data_list .length > 0">
                    <router-link to="/checkorder" class="btn btn-light py-1 px-3">結帳去</router-link>
                </div>
            </article>
        </aside>
        <section class="container-fluid">
            <div class="row product_container justify-content-between align-items-center">
                <div class="col-lg-5 product_picture">
                    <router-link to="/allproducts" class="text-black-50" style="font-size: 20px;"
                        ><i class="fas fa-angle-left mr-1"></i>BACK</router-link
                    >
                    <img :src="product.imageUrl" width="350px" alt="" />
                </div>
                <div class="col-lg-7 product_text_box">
                    <article class="product_text d-flex flex-column p-5 text-primary">
                        <h3 class="">{{ product.title }}</h3>
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
                                <a href="" class="px-3 py-2 border-right" @click.prevent="addcart_num>0?addcart_num-=1:0">-</a>
                                <p class="px-3 py-2">{{ addcart_num }}</p>
                                <a href="" class="px-3 py-2 border-left" @click.prevent="addcart_num += 1">+</a>
                            </div>
                            <a href="" class="btn cart rounded-pill px-3 my-1" :class="{'disabled':add_loading}" @click.prevent="cartAdd">
                                <span v-if="!add_loading">加入購物車</span>
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

            <ul class="product_list_group d-flex justify-content-center flex-wrap">
                <li
                    class="product_list mx-2 mx-sm-3 mx-md-4"
                    v-for="item in products_data_list.slice(0, 4)"
                    :key="item.id"
                >
                    <router-link class="text-dark d-flex flex-column h-100" href="#" :to="'/productcontent/' + item.id">
                        <img :src="item.imageUrl" alt="..." />
                        <div class="pt-2 position-relative text-center pb-4" style="margin-top:180px">
                            <h6 class="mb-0 ">{{ item.title }}</h6>
                            <p class="text-danger my-2" style="text-decoration: line-through">
                                {{ item.origin_price | currency}}
                            </p>
                            <a class="btn  rounded-pill text-secondary">more</a>
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
            products_data_list: [],
            cart_data_list  : [],
            addcart_num: 1,
            cart_anim: false,
            error_anim: false,
            loading: true,
            del_loading: false,
            add_loading: false,
            
        };
    },
    methods: {
        productsData: function() {

            //get allproducts data
            const all_api = () => {
                return vm.$http.get(`${process.env.VUE_APP_HTTPAPI}/api/${process.env.VUE_APP_PATHAPI}/products/all`);
            };
            const api = () => {
                const id = this.$route.params.id;
                return vm.$http.get(`${process.env.VUE_APP_HTTPAPI}/api/${process.env.VUE_APP_PATHAPI}/product/${id}`);
            };
            const vm = this;

            vm.$http
                .all([all_api(), api()])
                .then(
                    vm.$http.spread((alldata, productData) => {
                        if (alldata.data.success && productData.data.success) {
                            vm.products_data_list = alldata.data.products;
                            vm.product = productData.data.product;
                        } else {
                            vm.error_anim = true;
                        }
                    })
                )
                .catch(error => {
                    console.log(error);
                });

            setTimeout(function() {
                vm.loading = false;
            }, 1500);

        },
        cartData: function() {

            //get carts data
            const api = `${process.env.VUE_APP_HTTPAPI}/api/${process.env.VUE_APP_PATHAPI}/cart`;
            const vm = this;

            this.$http.get(api).then(response => {
                if (response.data.success) {
                    vm.cart_data_list    = response.data.data.carts;
                } else {
                    vm.error_anim = true;
                }
            });

        },
        cartAdd: function() {

            //add cart
            const api = `${process.env.VUE_APP_HTTPAPI}/api/${process.env.VUE_APP_PATHAPI}/cart`;
            const vm = this;
            vm.add_loading = true;;
            const cart_data = {
                product_id: vm.$route.params.id,
                qty: vm.addcart_num,
            };

            this.$http.post(api, { data: cart_data }).then(response => {
                if (response.data.success) {
                    vm.cart_anim = true;
                    vm.cartData();
                    vm.add_loading = false;
                    setTimeout(function() {
                        vm.cart_anim = false;
                        vm.addcart_num = 1
                    }, 1000);
                } else {
                    vm.error_anim = true;
                    vm.add_loading = false;
                }
            });

        },
        cartDel: function(cart_product) {

            //delete cart
            const api = `${process.env.VUE_APP_HTTPAPI}/api/${process.env.VUE_APP_PATHAPI}/cart/${cart_product.id}`;
            const vm = this;
            vm.del_loading = true;
            this.$http.delete(api).then(response => {
                if (response.data.success) {
                    vm.cartData();
                    vm.del_loading = false;
                } else {
                    vm.error_anim = true;
                    vm.del_loading = false;
                }
            })

        },
    },

    created() {
        this.cartData();
        this.productsData();
    },
    components: {
        indexnavbar,
        indexfooter,
    },
};
</script>
