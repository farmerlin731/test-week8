<template>
  <div>
    <div class="cover"></div>
    <h2>商品名稱：{{ this.tmpProd.title }}</h2>
    <h2>商品價格：{{ this.tmpProd.price }}</h2>
    <img height="400" :src="this.tmpProd.imageUrl" alt="" />
    <button @click="buyProd" type="button" class="btn btn-success">
      我要購買
    </button>
  </div>
</template>

<style lang="scss">
.cover {
  width: 100%;
  min-height: 400px;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)
      center/100%;
}

img {
  display: block;
  margin: 20px auto;
}
button {
  margin-bottom: 20px;
}
</style>
<script>
export default {
  data() {
    return {
      tmpProd: {},
      tmpString: "",
      //   loadingStatus: false,
    };
  },
  methods: {
    getProdData() {
      const { id } = this.$route.params;
      this.loadingStatus = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`;
      this.$http
        .get(url)
        .then((response) => {
          this.tmpProd = response.data.product;
          this.loadingStatus = false;
          alert("success");
        })
        .catch((err) => {
          alert(err.data.message);
          this.loadingStatus = false;
          alert("failed.");
        });
    },
    testFunc() {
      const { id } = this.$route.params;
      alert(id);
    },
    buyProd() {
      this.loadingStatus = true;

      let tmpCart = {
        product_id: this.$route.params.id,
        qty: 1,
      };

      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .post(url, { data: tmpCart })
        .then(() => {
          this.loadingStatus = false;
          this.$router.push("/products/");
        })
        .catch((err) => {
          this.loadingStatus = false;
          console.dir(err);
        });
    },
  },
  mounted() {
    this.getProdData();
  },
};
</script>
