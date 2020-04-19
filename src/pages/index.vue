<template>
  <div class="wrapper">
    <!-- Navbar -->
    <nav class="main-header navbar navbar-expand navbar-white navbar-light navbar-fixed-top">
      <!-- Left navbar links -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" data-widget="pushmenu" href="#" role="button">
            <i class="fas fa-bars"></i>
          </a>
        </li>
        <li class="user user-menu">
          <span class="hidden-xs">用户 : {{userName}}</span>
          <!-- The user image in the navbar-->
          <img src="../assets/img/head.jpg" class="user-image" alt="User Image" />
          <!-- hidden-xs hides the username on small devices so only the image appears. -->

          <span class="hidden-xs">退出</span>
        </li>
      </ul>
    </nav>
    <!-- /.navbar -->

    <aside class="main-sidebar sidebar-dark-self">
      <div class="logobox">
        <div class="logo"></div>
      </div>
      <div class="sidebar">
        <nav class="mt-2">
          <ul
            class="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li
              :class="['nav-item', item.menuName == curName ? 'cur' : '']"
              @click="go(item)"
              v-for="(item,index) in menu"
              :key="index"
            >{{item.menuName}}</li>
            <li class="height" style="height:50px"></li>
          </ul>
        </nav>
      </div>
    </aside>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <router-view></router-view>
    </div>
    <!-- /.content-wrapper -->

    <!-- Main Footer -->
    <footer class="main-footer">
      <!-- To the right -->
      <div class="float-right d-none d-sm-inline">Anything you want</div>
      <!-- Default to the left -->
      <strong>
        Copyright &copy; 2014-2019
        <a href="https://adminlte.io">AdminLTE.io</a>.
      </strong> All rights reserved.
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      curName: "后台首页"
    };
  },

  computed: {
    menu() {
      return this.$store.state.homePageMenu;
    },
    userName() {
      return window.localStorage.getItem("userName");
    }
  },

  mounted() {
    console.log(this.menu);
  },

  methods: {
    go(item) {
      if (this.curName != item.menuName) {
        this.curName = item.menuName;
        this.$router.push({ path: "/index" + item.url });
      }
    }
  }
};
</script>
<style lang='stylus' scoped>
@media (min-width: 768px) {
  body:not(.sidebar-mini-md) .content-wrapper, body:not(.sidebar-mini-md) .main-footer, body:not(.sidebar-mini-md) .main-header {
    transition: margin-left 0.3s ease-in-out;
    margin-left: 150px;
  }
}

@media (max-width: 991.98px) {
  body:not(.sidebar-mini-md) .content-wrapper, body:not(.sidebar-mini-md) .content-wrapper::before, body:not(.sidebar-mini-md) .main-footer, body:not(.sidebar-mini-md) .main-footer::before, body:not(.sidebar-mini-md) .main-header, body:not(.sidebar-mini-md) .main-header::before {
    margin-left: 0;
  }

  .main-sidebar, .main-sidebar::before {
    transition: margin-left 0.3s ease-in-out, width 0.3s ease-in-out;
    width: 150px;
  }
}

.main-sidebar, .main-sidebar::before {
    transition: margin-left .3s ease-in-out,width .3s ease-in-out;
    width: 150px;
}

.logobox {
  height: 90px;
  padding: 10px 0;
  background-color: #a4cdff;

  .logo {
    width: 83px;
    height: 69px;
    margin: 0 auto;
    background: url('../assets/img/logo.png');
  }
}

.navbar-nav {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-right: 20px;

  li {
    display: flex;
    align-items: center;
  }

  .user {
    display: flex;
    align-items: center;
  }

  .user-image {
    margin: 0 20px;
    border-radius: 50%;
    border: 1px solid gray;
  }
}

.sidebar-dark-self {
  background-color: #3479d7;

  .sidebar {
    margin-top: 0 !important;
  }

  .nav-item {
    color: #fdfffb;
    font-size: 16px;
    padding: 12px 0;
    cursor: pointer;
    text-align: center;
    user-select: none;
    border-bottom 1px solid #5aebff
  }

  .nav-item:hover, .cur {
    color: #5aebff;
    background-color: #2267c1;
  }
}

.content-wrapper {
  background-color: #f4f4f4;
}
</style>