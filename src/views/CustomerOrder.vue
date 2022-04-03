<template>
  <div class="container mt-5">
    <h4>訂單編號：{{ orderId }}</h4>
    <div v-if="!orderData.user.email">
      <h4 class="mt-5" style="color: coral; font-weight: bold">
        Sorry, 查詢不到您的訂單喲！～ <i class="bi bi-emoji-dizzy"></i>
      </h4>
    </div>
    <div v-else class="my-5 row justify-content-center">
      <form class="col-md-6" @submit.prevent="payOrder">
        <table class="table align-middle">
          <thead>
            <th>品名</th>
            <th>數量</th>
            <th>單價</th>
          </thead>
          <tbody>
            <tr v-for="item in orderData.products" :key="item.id">
              <td>{{ item.product.title }}</td>
              <td>{{ item.qty }}/{{ item.product.unit }}</td>
              <td class="text-end">{{ item.final_total }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2" class="text-end">總計</td>
              <td class="text-end">{{ orderData.total }}</td>
            </tr>
          </tfoot>
        </table>

        <table class="table">
          <tbody>
            <tr>
              <th width="100">Email</th>
              <td>{{ orderData.user.email }}</td>
            </tr>
            <tr>
              <th>姓名</th>
              <td>{{ orderData.user.name }}</td>
            </tr>
            <tr>
              <th>收件人電話</th>
              <td>{{ orderData.user.tel }}</td>
            </tr>
            <tr>
              <th>收件人地址</th>
              <td>{{ orderData.user.address }}</td>
            </tr>
            <tr>
              <th>付款狀態</th>
              <td>
                <span v-if="!orderData.is_paid">尚未付款</span>
                <span v-else class="text-success">付款完成</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <button v-if="orderData.is_paid === false" class="btn btn-success">
            前往付款 <i class="bi bi-gem"></i>
          </button>
          <button v-else class="btn btn-warning" disabled>
            此訂單已付款 <i class="bi bi-check-all"></i>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.btn {
  transition: 0.3s all ease;
}
.btn:hover {
  transform: scale(1.2);
}
</style>


<script>
import emitter from "@/methods/mitt";

export default {
  data() {
    return {
      orderId: "",
      orderData: {
        user: {},
      },
    };
  },
  methods: {
    getCusOrder() {
      emitter.emit("loading");
      this.orderId = this.$route.params.orderId;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
      this.$http
        .get(url)
        .then((res) => {
          this.orderData = res.data.order;
          emitter.emit("un-loading");
        })
        .catch((err) => {
          emitter.emit("un-loading");
          console.dir(err);
        });
    },

    payOrder() {
      emitter.emit("loading");
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`;
      this.$http
        .post(url)
        .then(() => {
          //   this.isLoading = false;
          alert('付款已完成！：）');
          this.getCusOrder();
        })
        .catch((error) => {
          console.dir(error);
        });
    },
  },
  mounted() {
    this.getCusOrder();
  },
};
</script>