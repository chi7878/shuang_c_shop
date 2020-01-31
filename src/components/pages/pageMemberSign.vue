<template>
    <main>
        <section class="sign_body">
            <form class="form-signin text-center">
                <img src="../../assets/shopLogo.png" width="150px" height="150px" alt="img" />
                <h1 class="h3 mb-3 font-weight-normal text-primary">會員登入</h1>
                <div class="emailenter_box text-left mt-3">
                    <label for="inputEmail" class="text-primary">電子信箱</label>
                    <input
                        type="email"
                        id="inputEmail"
                        class="form-control rounded-pill"
                        placeholder="請輸入電子郵件"
                        required
                        autofocus
                    />
                </div>
                <div class="password_box text-left">
                    <label for="inputPassword" class="mt-3 text-primary">密碼</label>
                    <input
                        type="password"
                        id="inputPassword"
                        class="form-control rounded-pill"
                        placeholder="請輸入密碼"
                        required
                    />
                </div>
                <button class="btn btn-primary btn-block my-5 sign_btn w-50 mx-auto" type="submit">登入</button>
                <router-link to="/dashboardsign" class="btn text-black-50 border-bottom p-0">後台登入</router-link>
            </form>
        </section>
    </main>
</template>

<script>
export default {
    name: "HelloWorld",
    data() {
        return {
            msg: "Welcome to Your Vue.js App"
        };
    }
};
</script>
