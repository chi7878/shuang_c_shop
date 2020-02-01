<template>
    <div>
        <indexnavbar></indexnavbar>
        <aside class="loading_box" v-if="is_loading == true" style="background-color:#ffffff30">
            <img src="../../assets/loading.gif" width="250px" alt="" />
        </aside>
        <aside
            class="alert_message_error"
            :class="{ alert_message_error_anim: error_anim == true }"
            v-if="error_anim == true"
        >
            <div class="text-dark">
                <p class="h1 text-center">
                    <i class="far fa-dizzy"></i>
                </p>
                <p>錯誤!請重新整理</p>
            </div>
        </aside>

        <router-link to="/checkorder" class="btn mobile_cart_btn d-block d-sm-none" v-if="cart_data_lsit.length > 0">
            <i class="fas fa-shopping-cart text-white"></i>
        </router-link>

        <div class="cart_btn d-sm-block d-none">
            <div class="cart_box">
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
                        <a href class="text-black-50 m-0" @click.prevent="cartDelete(item)">
                            <span v-if="del_loading == false">刪除</span>
                            <span v-else>
                                <i class="fas fa-circle-notch fa-spin"></i>
                            </span>
                        </a>
                    </li>

                    <li class="py-1 text-center" v-if="cart_data_lsit.length > 4">
                        <router-link to="/checkorder" href class="text-white"
                            >還有其他{{ cart_data_lsit.length - 4 }}項商品...</router-link
                        >
                    </li>
                </ul>
                <div class="mt-3 text-center" v-if="cart_data_lsit.length > 0">
                    <router-link to="/checkorder" class="btn btn-light py-1 px-3">結帳去</router-link>
                </div>
            </div>
        </div>
        <main class="container">
            <section
                id="carouselExampleControls"
                class="carousel slide mb-5"
                data-ride="carousel"
                style="margin-top: 120px"
            >
                <div class="carousel-inner rounded">
                    <div class="carousel-item active">
                        <img src="../../assets/Carousel/CarouselImage01.jpg" class="d-block w-100 " alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="../../assets/Carousel/CarouselImage02.jpg" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <a
                    class="carousel_prev text-white mr-3 d-sm-block d-none"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="prev"
                >
                    <span>
                        <i class="fas fa-arrow-left"></i>
                    </span>
                    <span class="sr-only">Previous</span>
                </a>
                <a
                    class="carousel_next text-white mr-3 d-sm-block d-none"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="next"
                >
                    <span>
                        <i class="fas fa-arrow-right"></i>
                    </span>
                    <span class="sr-only">Next</span>
                </a>
            </section>

            <nav class="sort_list d-flex justify-content-between align-items-center flex-wrap">
                <a
                    href="#"
                    @click.prevent="classSort('全部')"
                    class="all_box sort_box mb-3 mx-2 rounded-circle"
                    :class="{ sort_active: class_active == '全部' }"
                >
                    <img src="../../assets/ClassIcon/classIconAll.png" class="w-100" alt="img" />
                </a>
                <a
                    href="#"
                    @click.prevent="classSort('配件')"
                    class="parts_box sort_box mb-3 mx-2 rounded-circle"
                    :class="{ sort_active: class_active == '配件' }"
                >
                    <img src="../../assets/ClassIcon/classIconAccessories.png" class="w-100" alt="img" />
                </a>
                <a
                    href="#"
                    @click.prevent="classSort('手機')"
                    class="phone_box sort_box mb-3 mx-2 rounded-circle"
                    :class="{ sort_active: class_active == '手機' }"
                >
                    <img src="../../assets/ClassIcon/classIconPhone.png" class="w-100" alt="img" />
                </a>
                <a
                    href="#"
                    @click.prevent="classSort('穿戴')"
                    class="watch_box sort_box mb-3 mx-2 rounded-circle"
                    :class="{ sort_active: class_active == '穿戴' }"
                >
                    <img src="../../assets/ClassIcon/classIconWear.png" class="w-100" alt="img" />
                </a>
                <a
                    href="#"
                    @click.prevent="classSort('耳機')"
                    class="headset_box sort_box mb-3 mx-2 rounded-circle"
                    :class="{ sort_active: class_active == '耳機' }"
                >
                    <img src="../../assets/ClassIcon/classIconHeadset.png" class="w-100" alt="img" />
                </a>
                <a
                    href="#"
                    @click.prevent="classSort('生活')"
                    class="life_box sort_box mb-3 mx-2 rounded-circle"
                    :class="{ sort_active: class_active == '生活' }"
                >
                    <img src="../../assets/ClassIcon/classIconLift.png" class="w-100" alt="img" />
                </a>
            </nav>

            <p
                v-if="product_data_class.length == 0 && is_loading == false"
                class="mb-5 mt-5 h5 text-weight-bold text-center"
            >
                商品陸續上架中...
            </p>
            <ul class="row product_list justify-content-around card-group" v-if="is_loading == false">
                <li class="col-lg-2 col-md-4 col-6 mx-lg-1 mx-0" style="margin-bottom:100px" v-for="item in product_data_class" :key="item.key">
                    <router-link class="text-dark" href="#" :to="'/productcontent/' + item.id">
                        <div class="card border-0 h-100">
                            <img :src="item.imageUrl" class="card_img" width="140px" alt="..." />
                            <div class="card-body position-relative">
                                <h6 class="card-title mb-0">{{ item.title }}</h6>
                                <p class="mb-3 text-black-50">{{ item.category }}</p>
                                <div class="card-text mb-3 d-flex flex-wrap">
                                    <p class="text-danger" style="text-decoration: line-through">{{
                                        item.origin_price | currency
                                    }}</p>
                                    <p class="h5 text-primary">{{ item.price | currency }}</p>
                                </div>
                                <div class="text-right position-absolute" style="bottom:10px;right:15px">
                                    <a href="#" class="text-info">更多資訊..</a>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li class="page-item" :class="{ disabled: !pages.has_pre }">
                        <a
                            class="page-link"
                            href="#"
                            aria-label="Previous"
                            @click.prevent="productData(pages.current_page - 1)"
                        >
                            <i class="fas fa-angle-left"></i>
                        </a>
                    </li>
                    <li
                        class="page-item"
                        :class="{ active: pages.current_page == item }"
                        v-for="(item, index) in pages.total_pages"
                        :key="index"
                    >
                        <a class="page-link" href="#" @click.prevent="productData(item)">{{ item }}</a>
                    </li>
                    <li class="page-item" :class="{ disabled: !pages.has_next }">
                        <a
                            class="page-link"
                            href="#"
                            aria-label="Next"
                            @click.prevent="productData(pages.current_page + 1)"
                        >
                            <i class="fas fa-chevron-right"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </main>
        <indexfooter></indexfooter>
    </div>
</template>

<script>
import indexnavbar from "../pages/index_template/index_navbar";
import indexfooter from "../pages/index_template/index_footer";
import $ from "jquery";

export default {
    name: "HelloWorld",
    data() {
        return {
            product_data_list: [],
            product_data_all: [],
            product_data_class: [],
            cart_data_lsit: [],
            pages: {},
            class_active: "全部",
            is_loading: false,
            error_anim: false,
            del_loading: false,
        };
    },
    methods: {
        productData: function(page = 1) {

            //get allproducts data
            const all_api = () => {
                return vm.$http.get(`${process.env.VUE_APP_HTTPAPI}/api/${process.env.VUE_APP_PATHAPI}/products/all`);
            };
            const api = () => {
                return vm.$http.get(
                    `${process.env.VUE_APP_HTTPAPI}/api/${process.env.VUE_APP_PATHAPI}/products?page=${page}`
                );
            };
            const vm = this;
            vm.is_loading = true;

            if (vm.$route.query.class != undefined ) {
                vm.class_active = vm.$route.query.class;
            }

            vm.$http
                .all([all_api(), api()])
                .then(
                    vm.$http.spread((alldata, pagedata) => {
                        if (alldata.data.success && pagedata.data.success) {
                            vm.product_data_all = alldata.data.products;

                            vm.product_data_class = pagedata.data.products;
                            vm.product_data_list = pagedata.data.products;
                            vm.pages = pagedata.data.pagination;
                        } else {
                            vm.error_anim = true;
                        }
                    })
                )
                .catch(error => {
                    console.error(error);
                });
            vm.animLoading();
        },
        animLoading: function() {

            //loading animation
            const vm = this;
            setTimeout(function() {
                vm.is_loading = false;
                vm.classSort(vm.class_active);
            }, 1000);
        },
        classSort: function(product_class) {

            //sort products data
            const data = this.product_data_all;

            switch (product_class) {
                case "全部":
                    this.class_active = "全部";
                    this.product_data_class = this.product_data_list;
                    break;
                case "配件":
                    this.class_active = "配件";
                    this.product_data_class = [];
                    data.forEach(el => {
                        if (el.category == "配件") {
                            this.product_data_class.push(el);
                        }
                    });
                    break;
                case "手機":
                    this.class_active = "手機";
                    this.product_data_class = [];
                    data.forEach(el => {
                        if (el.category == "手機") {
                            this.product_data_class.push(el);
                        }
                    });
                    break;
                case "穿戴":
                    this.class_active = "穿戴";
                    this.product_data_class = [];

                    data.forEach(el => {
                        if (el.category == "穿戴") {
                            this.product_data_class.push(el);
                        }
                    });
                    break;
                case "耳機":
                    this.class_active = "耳機";
                    this.product_data_class = [];
                    data.forEach(el => {
                        if (el.category == "耳機") {
                            this.product_data_class.push(el);
                        }
                    });
                    break;
                case "生活":
                    this.class_active = "生活";
                    this.product_data_class = [];
                    data.forEach(el => {
                        if (el.category == "生活") {
                            this.product_data_class.push(el);
                        }
                    });
                    break;
            }
        },
        cartData: function() {

            //carts data
            const api = `${process.env.VUE_APP_HTTPAPI}/api/${process.env.VUE_APP_PATHAPI}/cart`;
            const vm = this;
            this.$http
                .get(api)
                .then(response => {
                    if (response.data.success) {
                        vm.cart_data_lsit = response.data.data.carts;
                    } else {
                        vm.error_anim = true;
                    }
                })
                .catch(error => {
                    vm.error_anim = true;
                });
        },
        cartDelete: function(cart_product) {

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
            });
        },
    },
    created() {
        this.productData();
        this.cartData();
    },
    mounted() {
        $(".carousel").carousel({ interval: 3000 });
    },
    components: {
        indexnavbar,
        indexfooter,
    },
};
</script>
