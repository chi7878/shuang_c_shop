<template>
    <div>
        <indexnavbar></indexnavbar>
        <main class="banner">
            <h1 class=" banner_title d-none d-lg-block text-primary">讓生活充滿無限可能</h1>
            <h1 class=" banner_title_m d-block d-lg-none text-primary">讓生活充滿無限可能。</h1>
            <article class="news_box d-flex justify-content-between align-items-center p-2 mw-75">
                <aside class="new_news_box d-lg-flex align-items-center d-none">
                    <div class="red_circle rounded-circle mr-2"></div>
                    <p class="h4 text-primary">最新活動</p>
                </aside>
                <ul class="news_list">
                    <li class="px-4">
                        <router-link to="/news" class="d-flex align-items-end btn">
                            <p class="news_title mr-5 text-primary">慶開幕全商店商品全面20%off</p>
                            <p class="news_data ml-5 d-none d-md-block text-black-50">2019-06-30</p>
                        </router-link>
                    </li>
                </ul>
                <router-link to="/news" class="btn d-none d-lg-block text-primary">more...</router-link>
            </article>
        </main>

        <section class="container-fluid my-5">
            <ul class="row justify-content-center px-lg-0 px-md-5 px-3">
                <li class="col-lg-3 col-12 class_box w-100 mb-4 mx-5">
                    <router-link :to="{ name: 'allproducts', query: { class: '手機' } }" class="d-flex btn">
                        <div class="class_img class_img_3c"></div>
                        <div class="class_content px-3 py-3 w-100 d-flex flex-column justify-content-between">
                            <p class="h2 text-left">3C手機</p>
                            <p class="text-right class_more">查看更多..</p>
                        </div>
                    </router-link>
                </li>
                <li class="col-lg-3 col-12 class_box w-100 mb-3 mb-lg-0 mx-5">
                    <router-link :to="{ name: 'allproducts', query: { class: '穿戴' } }" class="d-flex btn">
                        <div class="class_img class_img_wear"></div>
                        <div class="class_content px-3 py-3 w-100 d-flex flex-column justify-content-between">
                            <p class="h2 text-left">智慧穿戴</p>
                            <p class="text-right class_more">查看更多..</p>
                        </div>
                    </router-link>
                </li>
                <li class="col-lg-3 col-12 class_box w-100 mb-3 mb-lg-0 mx-5">
                    <router-link :to="{ name: 'allproducts', query: { class: '生活' } }" class="d-flex btn">
                        <div class="class_img class_img_life"></div>
                        <div class="class_content px-3 py-3 w-100 d-flex flex-column justify-content-between">
                            <p class="h2 text-left">智能生活</p>
                            <p class="text-right class_more">查看更多..</p>
                        </div>
                    </router-link>
                </li>
            </ul>
        </section>

        <section class="hot_container container-fluid mb-5">
            <div class="row align-items-center align-items-stretch">
                <div class="col-lg-3 col-0 p-0">
                    <div class="hot_img"></div>
                </div>
                <div class="col-lg-9 col-12">
                    <div class="hot_title_box pl-2 ">
                        <h1 class="hot_title_ch  m-0 text-primary">熱門商品</h1>
                        <p class="hot_title_en text-small text-black-50">hot product</p>
                    </div>

                    <ul class="product_list_group d-flex justify-content-center flex-wrap">
                        <li class="product_list mx-2 mx-sm-3 mx-md-4" v-for="(item,key) in hot_product" :key="item.id">
                            <router-link
                                class="text-dark d-flex flex-column h-100"
                                href="#"
                                :to="'/productcontent/'+item.id"
                            >
                                <img :src="require('../assets/product/HotProduct0'+(key+1) +'.jpg')" alt="..."/>
                                <div class="product_content pt-2 position-relative text-center pb-4" style="margin-top:180px">
                                    <h6 class="mb-0 ">{{item.name}}</h6>
                                        <p class="text-danger my-2" style="text-decoration: line-through">
                                            {{item.price}}
                                        </p>
                                        <a class="btn  rounded-pill text-secondary">more</a>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="three_offer_box d-flex flex-column align-items-center mx-5 text-primary">
            <h1 class="offer_title h1 mb-4">三大優惠</h1>
            <div class="offer_content text-center my-2">
                <img src="../assets/ShopOffer/shopOfferImg01.png" width="150px" height="150px" alt="img" />
                <p class="h5">全商品通通免運費免手續費</p>
            </div>
            <div class="offer_line my-4 rounded-pill"></div>
            <div class="offer_content text-center my-2">
                <img src="../assets/ShopOffer/shopOfferImg02.png" width="150px" height="150px" alt="img" />
                <p class="h5">超快速宅配三天就到你家門口</p>
            </div>
            <div class="offer_line my-4 rounded-pill"></div>
            <div class="offer_content text-center my-2">
                <img src="../assets/ShopOffer/shopOfferImg03.png" width="150px" height="150px" alt="img" />
                <p class="h5">全部商品全球超級保固1年</p>
            </div>
        </section>

        <section class="email_box d-flex flex-column align-items-center justify-content-center mt-5 mx-auto">
            <h1 class="h2 mb-5 text-primary">獲得最新優惠與活動</h1>
            <div class="input-group" style="width: 50%">
                <input type="email" class="form-control p-3" />
                <div class="input-group-prepend">
                    <a href class="btn btn-primary border-0" style="border-radius:0 50px 50px 0;">發送</a>
                </div>
            </div>
        </section>
        <indexfooter></indexfooter>
    </div>
</template>

<script>
import indexnavbar from "./pages/index_template/index_navbar";
import indexfooter from "./pages/index_template/index_footer";

export default {
    name: "HelloWorld",
    data() {
        return {
            hot_product:[ 
                {
                    id:"-Lk-WIpIRljnO_DU5rJV",
                    name:"iPhone 12 Pro Max",
                    price:"$36999",
                },
                {
                    id:"-MWhf0IqyOTDiw8pWPsj",
                    name:"Apple AirPods Pro",
                    price:"$6090",
                },
                {
                    id:"-Lk-Wg4eNwBAkuV7bE2J",
                    name:"Samsung S21 Ultra",
                    price:"$29900",
                },
                {
                    id:"-Ljylaq-HYasQjdq0jy2",
                    name:"Google Nest Audio",
                    price:"$2830",
                }                
            ]
        };
    },
    components: {
        indexnavbar,
        indexfooter,
    },
};
</script>
