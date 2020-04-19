<template>
  <div class="con">
    <div class="box">
      <div class="img">
        <img src="@/assets/img/logo.png" alt />
      </div>
      <div class="text">
        <div class="selfh1">省饲儿智能猪场</div>
        <div class="selfh3">后台管理系统</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {},

  methods: {}
};
</script>
<style lang='stylus' scoped>
.con {
  height: 100%;
  padding-top:22%;
  display: flex;
  justify-content: center;
  align-items: center;

  .box {
    display: flex;
    color: #0588d3;
    .img {
       margin:0 10px;
       margin-top -30px;
    }

    .selfh1 {
      font-size: 36px;
      letter-spacing: 10px;
    }

    .selfh3 {
      font-size: 24px;
      margin-left: 110px;
      letter-spacing: 5px;
    }
  }
}
</style>