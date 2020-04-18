<template>
   <div>
       <section class="content">
      <div class="error-page">
        <h2 class="headline text-warning"> 404</h2>

        <div class="error-content">
          <h3><i class="fas fa-exclamation-triangle text-warning"></i> 网页未找到</h3>

          <p>
            非常抱歉，我们找不到您要访问的内容，该功能可能还没有上线，敬请期待。
          </p>
        </div>
        <!-- /.error-content -->
      </div>
      <!-- /.error-page -->
    </section>
   </div>
</template>

<script>
export default {
   data () {
      return {

      };
   },

   mounted () {},

   methods: {}
}
</script>
<style lang='stylus' scoped>
.error-page {
    margin 0
}
.content {
    display:flex;
    align-items center;
    justify-content center;
    padding-top 50px;
}
</style>