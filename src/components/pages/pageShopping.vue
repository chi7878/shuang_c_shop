<template>
  <main>
    <indexnavbar></indexnavbar>
    <div class="container-fluid">
      <section class="about_bg_img shopping_bg_img text-light">
        <h1>商品購物須知</h1>
      </section>

      <article class="text-left about_text text-primary w-75 container">
        <p >
          <br>於網路商店購物消費時，選擇付款方式後，須於三日內付款完成，超過三日未付款完成，即取消訂單
          <br>
          <br><span class="font-weight-bold h4">商品配送工作時間-</span>
          <br>●本商店皆以宅配方式寄出商品，於每次出貨時，寄發出貨通知信，還請多加留意
          <br>●商品配送時間一律為3-7個工作天送達商品。配送時間以每筆訂單完成付款時間開始算起，因商品數量有限，需要時間做調度作業，敬請見諒
          <br>●若有特別需求，請於下訂單時備註說明，以利出貨作業
          <br>
          <br><span class="font-weight-bold h4">商品配送運費-</span>
          <br>●台灣地區：每筆訂單一律為60元
          <br>●外島地區：每筆訂單一律為150元
          <br>(商品以黑貓宅急便配送地區為主，外島部分地區不提供配送服務，敬請見諒。詳情請見「商品配送範圍」說明)
          <br>
          <br><span class="font-weight-bold h4">商品配送範圍-</span>
          <br>●台灣本島各地各縣市、澎湖部分地區、金門部分地區(大金門、小金門)、小琉球、馬祖全部地區、綠島
          <br>●不提供配送、收件服務地區：
          <br>宜蘭縣-釣魚台列嶼(全)，高雄市-東沙(全)、南沙(全)，澎湖縣-馬公(虎井島、桶盤島)、望安(全)、七美(全)、白沙(大倉嶼、員貝嶼、鳥嶼、吉貝嶼)，金門縣-烈嶼(大膽島、二膽島)、烏坵(全)、台東縣-蘭嶼(全)
          <br>●不提供海外配送服務
          <br>
          <br><span class="font-weight-bold h4">付款方式-</span>
          <br>●本商店提供付款方式為信用卡(一次付清)、信用卡(分期：3、6期)、虛擬帳號ATM
          <br>●選擇使用「虛擬帳號ATM」的消費者，須在3日內轉帳付款完成，若超過3 日未付款，此虛擬帳號即無法使用，此筆訂單即取消，還請多加注意
          <br>
          <br><span class="font-weight-bold h4">缺貨狀況注意事項-</span>
          <br>●因每款商品皆數量有限，將有可能發生缺貨情形若您在購物時對於缺貨商品有需求，歡迎您點選「到貨通知」按鈕做申請，我們將會與您聯繫
          <br>●本網路商店每筆訂單成立時間皆不一樣，將依完成付款時間順序為準，有可能會遇到商品缺貨情形，我們將會第一時間通知您。敬請見諒
          <br>●因全台庫存皆為共有，販售出的時間皆不固定，網路商店庫存無法立即更新，因此可能會出現缺貨的情形，敬請見諒！
          <br>
          <br>因電腦螢幕顯色設定不同，所顯示之商品顏色與實際會有些許色差。敬請見諒
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
