<template>
  <main>
    <indexnavbar></indexnavbar>
    <div class="container-fluid">
            <section class="news_bg_img text-primary">
                <h1>最新消息</h1>
            </section>

        </div>

        <article class="news_content ">
            
                <ul class="news_list news_ul p-5">
                    <li class="d-flex justify-content-around mb-5 news_class">    
                        <a href="">消息</a>
                        <a href="">活動</a>
                        <a href="">新品</a>
                    </li>
                    <li class="px-4 mb-3">
                        <a href="#" class="d-flex align-items-end justify-content-between btn">
                            <p class="news_title mr-5 text-primary">還在猶豫入手新IPHONE XS/XS MAX？</p>
                            <p class="news_data text-black-50 ml-5 d-none d-md-block">2019-07-10</p>
                        </a>
                    </li>
                    <li class="px-4 mb-3">
                        <a href="#" class="d-flex align-items-end justify-content-between btn">
                            <p class="news_title mr-5 text-primary">VIP會員招募中</p>
                            <p class="news_data text-black-50 ml-5 d-none d-md-block">2019-07-02</p>
                        </a>
                    </li>
                    <li class="px-4 mb-3">
                        <a href="#" class="d-flex align-items-end justify-content-between btn">
                            <p class="news_title mr-5 text-primary">全新小米手環4上市啦</p>
                            <p class="news_data text-black-50 ml-5 d-none d-md-block">2019-07-01</p>
                        </a>
                    </li>
                    <li class="px-4 mb-3">
                        <a href="#" class="d-flex align-items-end justify-content-between btn">
                            <p class="news_title mr-5 text-primary">慶開幕全商店商品全面20%off</p>
                            <p class="news_data text-black-50 ml-5 d-none d-md-block">2019-06-30</p>
                        </a>
                    </li>
                    
                </ul>
        </article>
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
