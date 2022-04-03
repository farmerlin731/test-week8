<template>
  <div>
    <div class="cover"></div>
    <div class="container mt-5">
      <h2>訂單查詢</h2>
      <div class="row mt-5 d-flew flex-column align-items-center">
        <div class="col-md-7">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="輸入訂單編號"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              v-model="orderId"
            />
            <button class="btn btn-danger" @click="testFunc" type="button" id="button-addon2 ">
              送出 <i class="bi bi-send"></i>
            </button>
          </div>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cover {
  width: 100%;
  min-height: 400px;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(https://images.unsplash.com/photo-1575037614876-c38a4d44f5b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)
      top/100%;
}
</style>

<script>
export default {
  data() {
    return {
      orderId:'',
    };
  },
  methods: {
    testFunc() {
      this.$router.push(`/orders/${this.orderId}`);
    },
  },
  mounted() {},
};
</script>