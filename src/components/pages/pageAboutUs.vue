<template>
  <main>
    <indexnavbar></indexnavbar>
    <div class="container-fluid">
            <section class="about_bg_img text-primary">
                <h1>品牌故事</h1>
            </section>
            
            <article class="text-center about_text text-primary">
                <p>全台遍佈高達100家門市，擁有50年信譽<br>
                    秉持著讓全球每個人都能享受各個品牌科技所帶來的美好生活<br>
                    與不一樣的生活,致力於讓全台每個人都能享用優秀品質與良好<br>
                    的科技產品<br>
                    - <br>
                    SHUANG C 始終對科技懷抱熱情<br>
                    我們不斷追尋無與倫比的商品和體驗更渴望將無與倫比的精神<br>
                    呈現在商品裡<br>
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
