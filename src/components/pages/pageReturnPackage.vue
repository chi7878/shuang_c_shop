<template>
    <main>
        <indexnavbar></indexnavbar>
        <div class="container-fluid">
            <section class="about_bg_img return_bg_img text-primary">
                <p>商品退換貨須知</p>
            </section>

            <article class="text-left about_text text-primary w-75 container">
                <p class="">
                    <span class="font-weight-bold h4">退貨說明-</span>
                    <br />依照消費者保護法規定，消費者享有商品到貨7天鑑賞期（包含例假日)之權益，七日鑑賞期屬『考慮期』並非『試用期』，若商品如經拆
                    封、使用、以致缺乏完整性即失去再販售價值時，恕無法退貨。 <br />●7日鑑賞期計算：
                    以消費者簽收取件完成的當日算起到第7天止 <br />(例: 10月12號完成取件,
                    7天鑑賞期的起訖時間為10月12號~10月18號) <br />●辦理退貨期限：消費者免負擔寄回運費辦理退貨乙次.
                    請於收到商品當日算起七日內告知賣家辦理，逾期恕不受理
                    <br />
                    <br /><span class="font-weight-bold h4">退款計算說明-</span> <br />原訂單未達免運門檻:
                    退款為退貨商品+原始運費 <br />退貨後未達免運門檻:若訂單退貨後的實際消費未達免運門檻(兩件免運),
                    退款為退貨商品金額扣除運費的金額 <br />退貨後仍達免運門檻:若訂單中退貨後的實際消費仍達免運門檻,
                    退款為退貨商品金額 <br />退款時程: 退貨便物流送回退貨為一周一次,
                    我們將在收到退貨包裹後於7個工作天內完成退款.您寄出退貨到收到退款約需14-21天
                    (遇國定假期或特殊情況則順延)
                    <br />
                    <br /><span class="font-weight-bold h4">-請注意以下情況無法受理退貨-</span> <br />超過7天鑑賞期
                    <br />商品明細不全、吊牌已剪或弄丟發票(電子發票則免)
                    <br />*若您有索取紙本或公司戶紙本發票,請於退貨時一併寄回*
                    <br />滿額活動贈品未寄回(寄回贈品須為全新未拆封使用) <br />已註明不可退換貨的優惠活動特價商品
                    <br />海外訂單尚不提供退換貨服務,下單前請注意. 敬請見諒
                </p>
            </article>
        </div>
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
            msg: "",
        };
    },
    components: {
        indexnavbar,
        indexfooter,
    },
};
</script>
