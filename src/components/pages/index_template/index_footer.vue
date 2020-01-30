<template>
    <footer>
        <div class="footer d-sm-flex justify-content-between px-5 position-relative">
            <div class="shop_box d-flex text-center text-sm-left justify-content-center justify-content-sm-start">
                <div class="shop_list d-flex flex-column mr-5 footer_list">
                    <p>商店</p>
                    <router-link :to="{ name: 'allproducts' }">3C商品</router-link>
                    <router-link :to="{ name: 'allproducts', query: { class: '配件' } }">手機周邊</router-link>
                    <router-link :to="{ name: 'allproducts', query: { class: '穿戴' } }">智慧穿戴</router-link>
                    <router-link :to="{ name: 'allproducts', query: { class: '生活' } }">智能生活</router-link>
                </div>
                <div class="service_list d-flex flex-column footer_list">
                    <p>支援服務</p>
                    <router-link to="/returnpackage">商品退換貨須知</router-link>
                    <router-link to="/shopping">商品購物須知</router-link>
                    <router-link to="/faq">常見問題</router-link>
                    <router-link to="/contactmethod">聯絡我們</router-link>
                </div>
            </div>

            <img
                src="../../../assets/shopLogo.png"
                width="150px"
                height="150px"
                class="position-absolute d-none d-sm-block"
                alt=""
            />
            <div class="community_box d-flex flex-column text-center text-sm-right footer_list mt-3 mt-sm-0">
                <p>社群服務</p>
                <a href="https://www.instagram.com/?hl=zh-tw">Instagram</a>
                <a href="https://zh-tw.facebook.com/">FaceBook</a>
                <a href="https://twitter.com/?lang=zh-tw">Twitter</a>
                <a href="https://www.youtube.com/">YouTube</a>
                <a href="https://github.com/chi7878?tab=repositories">GitHub</a>
            </div>
        </div>
        <p class="text-center text-black-50 mt-3">©Copright 2019 CHI 練習作品</p>
    </footer>
</template>

<script>
export default {
    name: "HelloWorld",
    data() {
        return {
            msg: "Welcome to Your Vue.js App",
        };
    },
};
</script>
