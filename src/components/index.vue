<template>
  <div>
    <indexnavbar></indexnavbar>
    <div class="banner">
      <p class="h1 banner_title d-none d-lg-block text-primary">讓生活充滿無限可能</p>
      <p class="h1 banner_title_m d-block d-lg-none text-primary">讓生活充滿無限可能。</p>
      <div class="news_box d-flex justify-content-between align-items-center p-2 mw-75">
        <div class="new_news_box d-lg-flex align-items-center d-none">
          <div class="red_circle rounded-circle mr-2"></div>
          <p class="h4 text-primary">最新活動</p>
        </div>
        <ul class="news_list">
          <li class="px-4">
            <router-link to="/news" class="d-flex align-items-end btn">
              <p class="news_title mr-5 text-primary">慶開幕全商店商品全面20%off</p>
              <p class="news_data ml-5 d-none d-md-block text-black-50">2019-06-30</p>
            </router-link>
          </li>
        </ul>
        <router-link to="/news" class="btn d-none d-lg-block text-primary">more...</router-link>
      </div>
    </div>

    <div class="container-fluid my-5">
      <div class="row justify-content-center px-lg-0 px-5">
        <div class="col-lg-3 col-12 class_box w-100 mb-4 mx-5">
          <router-link :to="{name:'product',query:{class:'手機'}}" class="d-flex btn">
            <div class="class_img class_img_3c"></div>
            <div class="class_content px-3 py-3 w-100 d-flex flex-column justify-content-between">
              <p class="h2 text-left">3C手機</p>
              <p class="text-right class_more">查看更多..</p>
            </div>
          </router-link>
        </div>
        <div class="col-lg-3 col-12 class_box w-100 mb-3 mb-lg-0 mx-5">
          <router-link :to="{name:'product',query:{class:'穿戴'}}" class="d-flex btn">
            <div class="class_img class_img_wear"></div>
            <div class="class_content px-3 py-3 w-100 d-flex flex-column justify-content-between">
              <p class="h2 text-left">智慧穿戴</p>
              <p class="text-right class_more">查看更多..</p>
            </div>
          </router-link>
        </div>
        <div class="col-lg-3 col-12 class_box w-100 mb-3 mb-lg-0 mx-5">
          <router-link :to="{name:'product',query:{class:'生活'}}" class="d-flex btn">
            <div class="class_img class_img_life"></div>
            <div class="class_content px-3 py-3 w-100 d-flex flex-column justify-content-between">
              <p class="h2 text-left">智能生活</p>
              <p class="text-right class_more">查看更多..</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <div class="hot_container container-fluid mb-5">
      <div class="row align-items-center align-items-stretch">
        <div class="col-lg-3 col-0 p-0">
          <div class="hot_img"></div>
        </div>
        <div class="col-lg-9 col-12">
          <div class="hot_title_box pl-2 ">
            <p class="hot_title_ch h1 m-0 text-primary">熱門商品</p>
            <p class="hot_title_en text-small text-black-50">hot product</p>
          </div>

          <ul class="hot_list d-flex justify-content-center flex-wrap">
            <li class="mx-4">
              <router-link to="/productcontent/-Li3ug7PpOXsVMUzfJHo">
                <div class="card" style="width: 15rem;">
                  <img
                    src="../assets/product/HotProduct01.png"
                    class="card_img"
                    width="200px"
                    alt="..."
                  />
                  <div class="card-body text-center">
                    <h5 class="card-title">APPLE AirPods</h5>
                    <p
                      class="card-text mb-3 text-danger"
                      style="text-decoration: line-through"
                    >$5490</p>
                    <a class="btn btn-light rounded-pill px-5 py-0">more</a>
                  </div>
                </div>
              </router-link>
            </li>
            <li class="mx-4">
              <router-link to="/productcontent/-LiJGtR-6sLDIek3r1bd">
                <div class="card" style="width: 15rem;">
                  <img
                    src="../assets/product/HotProduct02.png"
                    class="card_img"
                    width="200px"
                    alt="..."
                  />
                  <div class="card-body text-center">
                    <h5 class="card-title">ASUS ZenFone6</h5>
                    <p
                      class="card-text mb-3 text-danger"
                      style="text-decoration: line-through"
                    >$5490</p>
                    <a  class="btn btn-light rounded-pill px-5 py-0">more</a>
                  </div>
                </div>
              </router-link>
            </li>
            <li class="mx-4">
              <router-link to="/productcontent/-LiJGwKtPuvw82bExub_">
                <div class="card" style="width: 15rem;">
                  <img
                    src="../assets/product/HotProduct03.png"
                    class="card_img"
                    width="200px"
                    alt="..."
                  />
                  <div class="card-body text-center">
                    <h5 class="card-title">Xiaomi 小米手環4</h5>
                    <p
                      class="card-text mb-3 text-danger"
                      style="text-decoration: line-through"
                    >$5490</p>
                    <a hrf class="btn btn-light rounded-pill px-5 py-0">more</a>
                  </div>
                </div>
              </router-link>
            </li>
            <li class="mx-4">
              <router-link to="/productcontent/-Ljylaq-HYasQjdq0jy2">
                <div class="card" style="width: 15rem;">
                  <img
                    src="../assets/product/HotProduct04.png"
                    class="card_img"
                    width="200px"
                    alt="..."
                  />
                  <div class="card-body text-center">
                    <h5 class="card-title">Xiaomi 小米AI音箱</h5>
                    <p
                      class="card-text mb-3 text-danger"
                      style="text-decoration: line-through"
                    >$5490</p>
                    <a  class="btn btn-light rounded-pill px-5 py-0">more</a>
                  </div>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="three_offer_box d-flex flex-column align-items-center mx-5 text-primary">
      <div class="offer_title h1 mb-4">三大優惠</div>
      <div class="offer_content text-center my-2">
        <img src="../assets/shopOfferImg01.png" width="150px" height="150px" alt="img" />
        <p class="h5">全商品通通免運費免手續費</p>
      </div>
      <div class="offer_line my-4 rounded-pill"></div>
      <div class="offer_content text-center my-2">
        <img src="../assets/shopOfferImg02.png" width="150px" height="150px" alt="img" />
        <p class="h5">超快速宅配三天就到你家門口</p>
      </div>
      <div class="offer_line my-4 rounded-pill"></div>
      <div class="offer_content text-center my-2">
        <img src="../assets/shopOfferImg03.png" width="150px" height="150px" alt="img" />
        <p class="h5">全部商品全球超級保固1年</p>
      </div>
    </div>

    <div
      class="email_box d-flex flex-column align-items-center justify-content-center mt-5 mx-auto"
    >
      <p class="h2 mb-5 text-primary">獲得最新優惠與活動</p>
      <div class="input-group" style="width: 50%">
        <input type="email" class="form-control p-3" />
        <div class="input-group-prepend">
          <a href class="btn btn-primary border-0" style="border-radius:0 50px 50px 0;">發送</a>
        </div>
      </div>
    </div>
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
      msg: ""
    };
  },
  components: {
    indexnavbar,
    indexfooter
  }
};
</script>
