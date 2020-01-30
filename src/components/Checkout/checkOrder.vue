<template>
  <div>
    <indexnavbar></indexnavbar>
    <!-- <div class="loading_box" v-if="loading ==true">
      <img src="" width="250px" alt />
    </div> -->
    <router-view></router-view>
    <indexfooter></indexfooter>
  </div>
</template>

<script>
import indexnavbar from "../pages/index_template/index_navbar";
import indexfooter from "../pages/index_template/index_footer";

export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  components: {
    indexnavbar,
    indexfooter
  }
};
</script>
