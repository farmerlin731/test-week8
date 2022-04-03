<template>
  <div class="home-page">
    <div class="cover">
      <h1>9453 - 酒肆吾觴訂酒網</h1>
      <br />

      <router-link to="/products">
        <button type="button" class="btn btn-warning">
          <b
            ><i class="bi bi-book-half" style="color: green"></i>
            想喝酒請點我
            <i class="bi bi-book-half" style="color: green"></i>
          </b></button
      ></router-link>
    </div>
    <div class="container">
      <div class="introduction">
        <h2 class="mb-5">酒類介紹</h2>
        <div class="row mt-md-5">
          <div class="col-md-4">
            <!-- src="https://learn.foxconnedu.com/img/06.6fb3d218.jpg" -->
            <img
              src="https://channel.circles.tw/uploads/2020-12/893902c4bdf233fb230b8624f2819864.jpg"
              alt=""
              srcset=""
            />
            <h3 class="mt-3">白蘭地 Brandy</h3>
            <p class="mt-2">
              白蘭地原文是「燒葡萄酒」的意思，但廣義而言凡是以水果酒為基底，再加以蒸餾製作而成的酒都算是白蘭地哦！
            </p>
          </div>
          <div class="col-md-4">
            <!-- src="https://learn.foxconnedu.com/img/05.17a22aa2.jpg" -->
            <img
              src="https://channel.circles.tw/uploads/2020-12/6c9401cf03df6de0e06cc6ddb3ce43fd.jpg"
              alt=""
              srcset=""
            />
            <h3 class="mt-3">威士忌 Whiskey</h3>
            <p class="mt-2">
              跟白蘭地不同，威士忌主要是以發酵穀物為原料所製成的蒸餾酒，常見的原料有大麥、黑麥、小麥、玉米等。威士忌通常陳放於木桶中，因此「年紀」的計算也是從蒸餾至裝瓶所經過的時間。
            </p>
          </div>
          <div class="col-md-4">
            <img
              src="https://channel.circles.tw/uploads/2021-01/55c67410541202515db95b83e645ad92.png"
              alt=""
              srcset=""
            />
            <h3 class="mt-3">蘭姆酒 Rum</h3>
            <p class="mt-2">
              蘭姆酒由甘蔗的副產品糖蜜，透過發酵和蒸餾製作而成，又可以稱為「糖酒」。從他的名字就可以想像，蘭姆酒通常都帶有醇厚的果香或甘蔗焦香，算是味道強烈、甜膩、又風味十足的酒款。
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="fullSection">
      <h3 class="mb-4">品牌故事</h3>
      <p>
        IE (Industrial
        Engineering)知识与手法学习是富士康人的必修课﹐从干部到一线员工均参加学习﹐
        从基本改善技能和管理理念上提升学员的改善能力﹐然后辅导学员回到本职岗位进行工作改善﹐使全员在设计、制造、品管、
        物流等各方面运用IE思想去发掘、分析问题﹐运用IE手法去解决问题。其中如开展“快马加鞭”专案，对集团25,000位线组长及近200,000万现场作业人员进行IE手法培训，将IE及改善理念扎根到员工心中，运用到每个角落。
        学院建有E-learning网上学习平台﹐该平台拥有网路学院和VOD随选式两套系统，充分利用其低成本的优势﹐通过IT及数位技术﹐为学员提供“多元化”学习资源、“弹性化”学习时间、“简易化”学习介面、“人性化”学习环境。
      </p>
    </div>

    <div class="container mt-5">
      <div class="row d-flex">
        <div class="col-md-5">
          <img
            src="https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
            srcset=""
            width="100%"
          />
        </div>
        <div
          class="col-md-6 d-flex flex-column justify-content-center"
        >
          <h4 class="mt-3 mb-2">富士康大学功能</h4>
          <p>
            具创新思维及创业企图心之人才养成
            配合留才开展学历教育，指导毕业生结合研发、生产及相关专业岗位开展研究与实验，撰写高品质论文
            关键人才管理技能及技术提升训练。干部管理技能提升训练
            配合技委会之应知应会训练
            申报建立博士后工作站，开展校企交流与合作，以暑期实习、奖教助学吸引优秀人才加入集团
            新产品/新制程/错误工程示范/提案改善摄影纪录及教育训练
          </p>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.4s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.cover {
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80)
      center/100% fixed;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.cover h1 {
  color: whitesmoke;
  line-height: 1.5;
}
.cover button {
  margin-top: 50px;
  transition: 0.3s all ease;
}

.cover button:hover {
  transform: scale(1.2);
}

.introduction {
  margin-top: 100px;
}
.introduction img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.fullSection {
  margin-top: 100px;
  margin-bottom: 100px;
  width: 100%;
  height: 60vh;

  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(https://images.unsplash.com/photo-1436076863939-06870fe779c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80);
  background-size: cover;

  text-align: left;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px 50px;
  color: whitesmoke;
}

@media (max-width: 992px) {
  .fullSection {
    height: 90vh;
    text-align: center;
  }
}
</style>



<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
};
</script>