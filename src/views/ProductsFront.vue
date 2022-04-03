<template>
  <div>
    <div class="cover"></div>
    <div class="container mt-5">
      <h2>酒單列表</h2>

      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 mt-5">
        <div class="col mb-3" v-for="item in products" :key="item.id">
          <div class="card" style="height: 100%">
            <div class="test" style="overflow: hidden; background-color: wheat">
              <img
                :src="item.imageUrl"
                class="card-img-top"
                style="height: 300px; object-fit: cover"
                alt="..."
              />
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text" style="height: 4.5rem; overflow: hidden">
                {{ item.content }}
              </p>
            </div>
            <div class="card-footer bg-light">
              <button
                class="btn btn-warning d-inline-block"
                style="width: 7rem; margin-right: 10px"
                @click="addToCart(item)"
              >
                加入購物車
              </button>
              <button
                class="btn btn-info d-inline-block"
                style="width: 7rem"
                @click="checkProdInfo(item)"
              >
                商品詳情
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.cover {
  width: 100%;
  min-height: 400px;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)
      center/100%;
}

.card img {
  transition: 0.3s all ease;
}

.card:hover img {
  transform: scale(1.4);
}
.btn {
  transition: 0.3s all ease;
}
.btn:hover {
  transform: scale(1.15);
}
</style>

<script>
import emitter from "@/methods/mitt";

export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    getData() {
      emitter.emit("loading");
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products`;
      this.$http
        .get(url)
        .then((res) => {
          emitter.emit("un-loading");
          this.products = res.data.products;
        })
        .catch((err) => {
          emitter.emit("un-loading");
          console.dir(err);
          alert("擷取失敗。 ");
        });
    },

    addToCart(item, quantity = 1) {
      emitter.emit("loading");
      let tmpCart = {
        product_id: item.id,
        qty: quantity,
      };
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .post(url, { data: tmpCart })
        .then(() => {
          emitter.emit("un-loading");
        })
        .catch((err) => {
          console.dir(err);
          emitter.emit("un-loading");
        });
    },

    checkProdInfo(item) {
      this.$router.push(`/product/${item.id}`);
    },
  },
  mounted() {
    this.getData();
  },
};
</script>