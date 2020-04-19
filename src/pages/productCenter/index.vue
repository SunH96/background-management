<template>
  <div>
    <nav class="navbar">
      <ul>
        <router-link  to="allProduct" tag="li">所有产品</router-link>
        <router-link  to="picture" tag="li">图片管理</router-link>
        <router-link  to="entering" tag="li">快速录入</router-link>
      </ul>
    </nav>
    <div class="content-product">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {},

  methods: {
    
  }
};
</script>
<style lang='stylus' scoped>
.navbar {
  ul {
    display: flex;
    height: 70px;

    li {
      font-size: 18px;
      margin: 0 40px;
      line-height: 80px;
      cursor pointer
      user-select none
    }

    li.router-link-active {
      color: #3479D7;
      border-bottom: 2px solid #3479d7;
    }
  }
}

.content-product {
  margin-left: 150px;
  background-color: #fff;
  position: absolute;
  left: 40px;
  right: 40px;
  top: 80px;
  bottom: 40px;
  transition: margin-left 0.3s ease-in-out;
  overflow-y scroll
}

@media (max-width: 992px) {
  .content-product {
    margin-left: 0;
  }
}

@media (min-width: 992px) {
  .sidebar-mini.sidebar-collapse .content-wrapper .content-product {
    margin-left: 4.6rem !important;
  }
}
</style>