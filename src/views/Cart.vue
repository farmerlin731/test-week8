<template>
  <div class="cart">
    <div class="cover"></div>

    <div class="container mt-5">
      <h2>購物車列表</h2>
      <!-- 購物車列表 -->
      <div class="mt-4">
        <div class="text-end">
          <button
            class="btn btn-outline-danger"
            type="button"
            @click="deleteCartAll"
          >
            清空購物車
          </button>
        </div>
        <table class="table align-middle">
          <thead>
            <tr>
              <th></th>
              <th>品名</th>
              <th style="width: 150px">數量/單位</th>
              <th>單價</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="cartData.carts">
              <tr></tr>
              <tr v-for="item in cartData.carts" :key="item.id">
                <td>
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm"
                    @click="deleteCart(item)"
                  >
                    x
                  </button>
                </td>
                <td>
                  {{ item.product.title }}
                  <div class="text-success" v-if="item.coupon">
                    已套用優惠券
                  </div>
                </td>
                <td>
                  <div class="input-group input-group-sm">
                    <div class="input-group mb-3">
                      <input
                        v-model.number="item.qty"
                        @blur="updateCart(item)"
                        min="1"
                        type="number"
                        class="form-control"
                      />
                      <span class="input-group-text" id="basic-addon2">{{
                        item.product.unit
                      }}</span>
                    </div>
                  </div>
                </td>
                <td class="text-end">
                  <small
                    v-if="item.final_total != item.total"
                    class="text-success"
                    >折扣價：</small
                  >
                  {{ item.final_total }}
                </td>
              </tr>
            </template>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="text-end">總計</td>
              <td class="text-end">{{ cartData.total }}</td>
            </tr>
            <tr v-if="cartData.final_total != cartData.total">
              <td colspan="3" class="text-end text-success">折扣價</td>
              <td class="text-end text-success">{{ cartData.final_total }}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <!-- user表單填寫 -->
      <!-- <div class="my-5 row justify-content-center">
        <v-form
          ref="form"
          class="col-md-6"
          v-slot="{ errors }"
          @submit="submitOrder"
        >
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <v-field
              id="email"
              name="email"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors['email'] }"
              placeholder="請輸入 Email"
              rules="email|required"
              v-model="form.user.email"
            ></v-field>
            <error-message
              name="email"
              class="invalid-feedback"
            ></error-message>
          </div>

          <div class="mb-3">
            <label for="name" class="form-label">收件人姓名</label>
            <v-field
              id="name"
              name="姓名"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['姓名'] }"
              placeholder="請輸入姓名"
              rules="required"
              v-model="form.user.name"
            ></v-field>
            <error-message name="姓名" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label for="tel" class="form-label">收件人電話</label>
            <v-field
              id="tel"
              name="電話"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['電話'] }"
              placeholder="請輸入電話"
              rules="required|min:8|max:10"
              v-model="form.user.tel"
            ></v-field>
            <error-message name="電話" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label for="address" class="form-label">收件人地址</label>
            <v-field
              id="address"
              name="地址"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['地址'] }"
              placeholder="請輸入地址"
              rules="required"
              v-model="form.user.address"
            ></v-field>
            <error-message name="地址" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">留言</label>
            <textarea
              id="message"
              class="form-control"
              cols="30"
              rows="10"
              v-model="form.message"
            ></textarea>
          </div>
          <div class="text-end">
            <button type="submit" class="btn btn-danger">送出訂單</button>
          </div>
        </v-form>
      </div> -->

      <div class="my-5 row justify-content-center">
        <Form
          ref="form"
          class="col-md-6"
          v-slot="{ errors }"
          @submit="submitOrder"
        >
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <Field
              id="email"
              name="email"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors['email'] }"
              placeholder="請輸入 Email"
              rules="email|required"
              v-model="form.user.email"
            ></Field>
            <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
          </div>

          <div class="mb-3">
            <label for="name" class="form-label">收件人姓名</label>
            <Field
              id="name"
              name="姓名"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['姓名'] }"
              placeholder="請輸入姓名"
              rules="required"
              v-model="form.user.name"
            ></Field>
            <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
          </div>

          <div class="mb-3">
            <label for="tel" class="form-label">收件人電話</label>
            <Field
              id="tel"
              name="電話"
              type="tel"
              class="form-control"
              :class="{ 'is-invalid': errors['電話'] }"
              placeholder="請輸入電話"
              rules="required|min:8|max:10"
              v-model="form.user.tel"
            ></Field>
            <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
          </div>

          <div class="mb-3">
            <label for="address" class="form-label">收件人地址</label>
            <Field
              id="address"
              name="地址"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['地址'] }"
              placeholder="請輸入地址"
              rules="required"
              v-model="form.user.address"
            ></Field>
            <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">留言</label>
            <textarea
              name=""
              id="message"
              class="form-control"
              cols="30"
              rows="10"
              v-model="form.message"
            ></textarea>
          </div>
          <div>
            <button class="btn btn-success">送出訂單</button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cover {
  width: 100%;
  min-height: 400px;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80)
      center/100%;
}
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
      cartData: {},
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
        },
        message: "",
      },
    };
  },
  methods: {
    getCart() {
      emitter.emit("loading");
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .get(url)
        .then((res) => {
          emitter.emit("un-loading");
          this.cartData = res.data.data;
        })
        .catch((err) => {
          emitter.emit("un-loading");
          alert("CART ERROR");
          console.dir(err);
        });
    },
    test(item) {
      alert("change.!");
      console.log("test", item);
    },
    updateCart(item) {
      emitter.emit("loading");
      let tmpCart = {
        product_id: item.id,
        qty: item.qty,
      };
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      this.$http
        .put(url, { data: tmpCart })
        .then(() => {
          this.getCart();
        })
        .catch((err) => {
          console.dir(err);
          emitter.emit("un-loading");
        });
    },
    deleteCart(item) {
      emitter.emit("loading");
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      this.$http
        .delete(url)
        .then(() => {
          this.getCart();
        })
        .catch((err) => {
          console.dir(err);
          emitter.emit("un-loading");
        });
    },
    deleteCartAll() {
      emitter.emit("loading");
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`;
      this.$http
        .delete(url)
        .then(() => {
          this.getCart();
        })
        .catch((err) => {
          console.dir(err);
          emitter.emit("un-loading");
        });
    },
    submitOrder() {
      const order = this.form;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`;
      this.$http
        .post(url, { data: order })
        .then((response) => {
          alert(response.data.message);
          // this.$refs.form.resetForm();
          // this.form.message = "";
          // this.getCart();
          this.$router.push(`/orders/${response.data.orderId}`);
        })
        .catch((err) => {
          alert(err.data.message);
          this.getCart();
        });
    },

    testOrder() {
      console.log("submit - ", this.form);
    },
  },
  mounted() {
    this.getCart();
  },
};
</script>