<template>
    <section>
        <ul class="statistic d-none d-sm-flex mt-4 justify-content-center justify-content-md-start flex-wrap">
            <li class="mx-3 mb-4 px-3 py-2">
                <p class="text-secondary">總訂單數</p>
                <hr class="my-1">
                <p class="text_big text-black-50 text-right" v-if="order_loading"><i class="fas fa-circle-notch fa-spin"></i></p>
                <p class="text_big text-right" v-else>
                    {{ order_data_list.length }}
                    <span class="text_small">筆</span>
                </p>
            </li>
            <li class="mx-3 mb-4 px-3 py-2">
                <p class="text-secondary">總銷售金額</p>
                <hr class="my-1">
                <p class="text_big text-black-50 text-right" v-if="order_loading"><i class="fas fa-circle-notch fa-spin"></i></p>
                <p class="text_big text-right" v-else>{{ totalprice | currency }}</p>
            </li>
            <li class="mx-3 mb-4 px-3 py-2">
                <p class="text-secondary">總銷售商品</p>
                <hr class="my-1">
                <p class="text_big text-black-50 text-right" v-if="order_loading"><i class="fas fa-circle-notch fa-spin"></i></p>
                <p class="text_big text-right" v-else>
                    {{ totalsell }}
                    <span class="text_small">個</span>
                </p>
            </li>
            <li class="mx-3 mb-4 px-3 py-2">
                <p class="text-secondary">目前商品</p>
                <hr class="my-1">
                <p class="text_big text-black-50 text-right" v-if="order_loading"><i class="fas fa-circle-notch fa-spin"></i></p>
                <p class="text_big text-right" v-else>
                    {{ products_data_list.length }}
                    <span class="text_small">個</span>
                </p>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name: "HelloWorld",
    data() {
        return {
            order_data_list: [],
            products_data_list: [],
            order_loading:true,

        };
    },
    methods: {
        allData: function() {

            //get order&products data
            const products_api = () => {
                return vm.$http.get(`${process.env.VUE_APP_HTTPAPI}/api/${process.env.VUE_APP_PATHAPI}/products/all`);
            };
            const order_api = () => {
                const id = this.$route.params.id;
                return vm.$http.get(`${process.env.VUE_APP_HTTPAPI}/api/${process.env.VUE_APP_PATHAPI}/admin/orders?page=1`);
            };
            const vm = this;

            vm.$http
                .all([products_api(), order_api()])
                .then(
                    vm.$http.spread((productsdata, orderData) => {
                        if (productsdata.data.success && orderData.data.success) {
                            vm.products_data_list = productsdata.data.products;
                            vm.order_data_list = orderData.data.orders;
                            vm.order_loading = false;
                        }
                    })
                )
                .catch(error => {
                    console.log(error);
                });


        },
    },
    computed: {
        totalprice: function() {
            var total = 0;
            this.order_data_list.forEach(function(item) {
                total += item.total;
            });

            return Math.floor(total);
        },
        totalsell: function() {
            var sell = 0;
            this.order_data_list.forEach(function(item){
                let orderobj = Object.keys(item.products).length;
                for(let i=0;i<orderobj;i++){
                    sell +=item.products[Object.keys(item.products)[i]].qty
                }
                
            })
            return sell;
        },
    },
    created() {
        this.allData();
    },
};
</script>
