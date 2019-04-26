<template>

<div class="second" data-simplebar data-simplebar-auto-hide="true">
  
        <div class="second-box">
          <div class="second-text">Pizza</div>
        </div>
        <div class="second-box">
          <div class="second-text">Pizza</div>
        </div>
        <div class="second-box">
          <div class="second-text">Pizza</div>
        </div>
        <div class="second-box">
          <div class="second-text">Pizza</div>
        </div>
        <div class="second-box">
          <div class="second-text">Pizza</div>
        </div>
        <div class="second-box">
          <div class="second-text">Pizza</div>
        </div>
        <div class="second-box">
          <div class="second-text">Pizza</div>
        </div>
        <div class="second-box">
          <div class="second-text">Pizza</div>
        </div>
        <div class="second-box">
          <div class="second-text">Pizza</div>
        </div>
        <div class="second-box">
          <div class="second-text">Pizza</div>
        </div>
        <div class="second-box">
          <div class="second-text">Pizza</div>
        </div>
        <div class="second-box">
          <div class="second-text">Pizza</div>
        </div>
        <div class="second-box">
          <div class="second-text">Pizza</div>
        </div>
</div>
</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar'
export default {
  components: {
    vueCustomScrollbar
  },
  data() {
    return {
      settings: {
        maxScrollbarLength: 60
      }
    }
  },
  methods: {
    scrollHanle(evt) {
      console.log(evt)
    }
  }
}
</script>

<style scoped>


/* second Start */

.second {
  width: 15%;
  float: left;
  height: 700px;
  padding: 15px;
  box-sizing: border-box;
  border-right: 1px solid #ddd;
}
.second-box {
  width: 85%;
  height: 100px;
  background: green;
  border-radius: 10px;
  position: relative;
  background-image: url("../assets/images/delivery/secondbox.jpg");
  background-size: cover;
  margin: 0 auto 20px auto;
}
.second-box:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: inherit;
}
.second-text {
  position: absolute;
  color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  font-weight: bold;
}


</style>
