<template>
  <main>
    <indexnavbar></indexnavbar>
    <section class="container-fluid">
      <div class="about_bg_img contactmethod_bg_img text-light">
        <p>聯絡我們</p>
      </div>

      <article class="text-center about_text text-primary">
        <p class>
            <br>-電話-
            <br>0981010259
            <br>(可連絡時間:周一至周五 AM 10:00-PM 10:00)
            <br>
            <br>-信箱-
            <br>percy860407@gmail.com
        </p>
      </article>
    </section>
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
