<template>
    <div>
        <div class="footer d-sm-flex justify-content-between px-5 position-relative">
                <div class="shop_box d-flex text-center text-sm-left justify-content-center justify-content-sm-start">
                    <div class="shop_list d-flex flex-column mr-5 footer_list">
                        <p>商店</p>
                        <a href="#">3C商品</a>
                        <a href="#">手機周邊</a>
                        <a href="#">智慧穿戴</a>
                        <a href="#">智能生活</a>
                    </div>
                    <div class="service_list d-flex flex-column footer_list">
                        <p>支援服務</p>
                        <a href="#">商品退換貨須知</a>
                        <a href="#">商品購物須知</a>
                        <a href="#">常見問題</a>
                        <a href="#">聯絡我們</a>
                    </div>
                    
                </div>

                <img src="../../../assets/vue shop logo-03.png" width="150px" height="150px" class="position-absolute d-none d-sm-block" alt="" />
                <div class="community_box d-flex flex-column text-center text-sm-right footer_list mt-3 mt-sm-0">
                    <p>社群服務</p>
                    <a href="#">Instagram</a>
                    <a href="#">FaceBook</a>
                    <a href="#">Twitter</a>
                    <a href="#">YouTube</a>
                    <a href="#">GitHub</a>
                </div>
            </div>
            <p class="text-center text-black-50 mt-3">©Copright 2019 CHI</p>
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
};
</script>