<template>
  <header>
    <div
      class="navbar navbar-expand-lg navbar-light pt-1 px-5 d-flex justify-content-between flex-row-reverse flex-lg-row position-fixed"
    >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <router-link class="navbar-brand logo" to="/" >
        <img src="../../../assets/shopLogo.png" width="70px" height="70px" alt />
      </router-link>
      <nav class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item mx-5">
            <router-link class="nav-link d-flex align-items-center flex-column text-primary nav-hover" to="/">
              首頁
              <div class="line"></div>
            </router-link>
          </li>
          <li class="nav-item mx-5">
            <router-link class="nav-link d-flex align-items-center flex-column text-primary" to="/allproducts">
              全部商品
              <div class="line"></div>
            </router-link>
          </li>
          <li class="nav-item mx-5">
            <router-link class="nav-link d-flex align-items-center flex-column text-primary" to="/news">
              最新消息
              <div class="line"></div>
            </router-link> 
          </li>
          <li class="nav-item mx-5">
            <router-link class="nav-link d-flex align-items-center flex-column text-primary" to="/aboutus">
              品牌故事
              <div class="line"></div>
            </router-link>
          </li>
          <li class="nav-item mx-5 d-block d-lg-none">
            <router-link class="nav-link d-flex align-items-center flex-column" to="/membersign">
              會員登入
              <div class="line"></div>
            </router-link>
          </li>
          <li class="nav-item mx-5 d-block d-lg-none">
            <router-link class="nav-link d-flex align-items-center flex-column" to="/dashboardsign">
              後台登入
              <div class="line"></div>
            </router-link>
          </li>
        </ul>
      </nav>
      <router-link to="/membersign" class="sign rounded-circle btn d-none d-lg-block">
        <span>登入</span>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: ""
    };
  }
};
</script>