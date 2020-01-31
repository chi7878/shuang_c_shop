<template>
  <main>
    <indexnavbar></indexnavbar>
    <div class="container-fluid">
            <section class="about_bg_img faq_bg_img text-light">
                <h1>常見問題</h1>
            </section>
            
            <article class="text-left about_text text-primary w-75 container">
                <p class=""><span class="font-weight-bold h4">Q-完成訂單後多久可以收到商品?</span>
                  <br>[現貨訂單]完成後約三至五個工作日內出貨
                  <br>如訂單內容包含[預購商品]，將會於預購商品到貨完成時一併寄出
                  <br>※產品標示[預購]，其他皆為現貨供應
                  <br>※若適逢佳節連續假期間與不可抗拒因素，如春節、中秋節、颱風等，因物流量大，包裹將以實際配送時間為主
                  <br>
                  <br><span class="font-weight-bold h4">Q-如何取消訂單?</span>
                  <br>請盡速在收到出貨通知前，主動聯繫客服信箱：percy860407@gmail.com
                  <br>主旨：[訂單號碼：XXXXX 取消訂單]
                  <br>
                  <br><span class="font-weight-bold h4">Q-如何計算7天鑑賞期?</span>
                  <br>根據消費者保護法之規定，本網站提供您享有商品到貨的七日鑑賞期權益，是由消費者完成簽收取件的隔日開始算起至第7天止（如您的收件地址有管理員代收，則以代收的隔日起算喔，請留意送件通知），為七日鑑賞期限。
                  <br>※例如:完成簽收的時間是10/10，其七天鑑賞期起訖日即為10/11~10/17。您如欲辦理退貨需於「10/17前」聯絡「本網站客服」提出退貨申請，我們將有專人為您服務辦理。
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
      msg: ""
    };
  },
  components: {
    indexnavbar,
    indexfooter
  }
};
</script>
