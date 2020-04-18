<template>
  <div class="hold-transition login-page">
    <div class="login-box">
      <div class="login-logo">
        <a href="#">
          <b>Admin</b>LTE
        </a>
      </div>
      <!-- /.login-logo -->
      <div class="login-box-body">
        <p class="login-box-msg">Sign in to start your session</p>

        <div class="form-group has-feedback">
          <input type="text" class="form-control" placeholder="用户名" v-model="account" />
          <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
        </div>
        <div class="form-group has-feedback">
          <input type="password" class="form-control" placeholder="密码" v-model="password" />
          <span class="glyphicon glyphicon-lock form-control-feedback"></span>
        </div>
        <div class="row login">
          <div class="col-xs-8">
            <div class="checkbox icheck">
              <label>
                <input type="checkbox" /> Remember Me
              </label>
            </div>
          </div>
          <!-- /.col -->
          <div class="col-xs-4">
            <button class="btn btn-primary btn-block btn-flat" @click="login()">登录</button>
          </div>
          <!-- /.col -->
        </div>
      </div>
      <!-- /.login-box-body -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: "",
      password: ""
    };
  },

  mounted() {
    this.login();
  },

  methods: {
    login() {
      let json = {
        account: this.account,
        password: this.password
      };
      this.http.post("backSys/user/login", json).then(msg => {
        if (msg.data.code === 200) {
          this.$store.commit("setHomePageMenu", msg.data.result.menu);
          window.localStorage.setItem("token", msg.data.result.token);
          window.localStorage.setItem("userName", msg.data.result.name);
          this.$router.push("/index");
        }
      });
    }
  }
};
</script>
<style scoped>
.login {
  display: flex;
  justify-content: space-between;
}
</style>