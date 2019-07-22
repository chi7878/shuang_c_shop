<template>
  <div>
    <div class="order_box container-fluid">
      <div class="d-flex align-items-center flex-column check_finish">
        <p class="h1 text-dark">
          <i class="far fa-check-circle"></i>
        </p>
        <p class="text-dark text-center">
          付款成功!
          <br />感謝購買商品
        </p>
        <div class="mt-4">
          <router-link to='/product' class="btn btn-warning">繼續購物</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      order_id: ""
    };
  },
  methods: {},

  created() {}
};
</script>
