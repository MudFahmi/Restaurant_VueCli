<template>
  <div id="app">
  
  <the-sidebar v-if="$store.getters.sidebar"/>
 
  <router-view />


  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/src/jquery.js";
import "bootstrap/dist/js/bootstrap.min.js";

import "simplebar/dist/simplebar.min.css";
import "simplebar/dist/simplebar.min.js";

import "@/assets/pos-icons/font/flaticon.css";
import "@/assets/js/common.js";

import TheSidebar from "@/components/TheSidebar.vue";


export default {
  components: {
    TheSidebar,
    
  },
  
};
</script>

<style>
body {
  width: 100%;
  height: 100%;
  margin: 0;
  line-height: unset;
}
body {
  font-family: "Montserrat", sans-serif;
  overflow: hidden;
}
a:hover {
  text-decoration: none;
}
.sidebar {
  width: 80px;
  position: fixed;
  height: 100%;
  background-image: url("assets/images/sidebar-2.jpg");
  background-size: cover;
  background-position: center;
  background-color: white;
  overflow: auto;
}
.sidebar::before {
  content: "";
  position: fixed;
  width: inherit;
  height: 100%;
  float: left;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.77);
}
.icon-box {
  width: 100%;
  height: auto;
  padding: 35px 0;
  position: relative;
}
a.icon-box {
  display: block;
}
.icon-box i,
.icon-box > img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.icon-box i::before {
  font-size: 35px;
  margin: 0;
  color: #fff;
}
.line {
  width: 90%;
  height: 1px;
  background-color: #fff;
  margin: 9px 3px 9px auto;
  position: relative;
}
.img-box {
  width: 60px;
  height: 42px;
  position: absolute;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 5px;
}
.img-box img {
  width: 100%;
  float: left;
}

.grass-bg {
  position: relative;
}
.grass-bg::after {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url("assets/images/grass.jpg");
  opacity: 0.1;
  z-index: -1;
  top: 0;
  left: 0;
}

/*----------------main=================*/

.main {
  width: 100%;
  float: left;
  padding-left: 80px;
  box-sizing: border-box;
  height: 100%;
}
.first {
  width: 30%;
  float: left;
  height: 100%;
  overflow: hidden;
  border: 1px solid #ddd;
  box-sizing: border-box;
}

.b-icon {
  width: 100%;
  float: left;
  height: 46px;
  padding-top: 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #d3d3d3;
}
.b-iconbox {
  width: 33.33%;
  float: left;
  box-sizing: border-box;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
}
.b-iconbox i {
  position: relative;
  color: #a4a4a4;
}
.b-iconbox i::before {
  font-size: 30px;
  margin: 0;
}
.b-iconbox span {
  position: absolute;
  top: -15px;
  right: -19px;
  width: 18px;
  height: 18px;
  background: red;
  border-radius: 50%;
  font-size: 11px;
  color: #fff;
  text-align: center;
  display: inline-block;
  padding: 2px;
  box-sizing: border-box;
  font-style: normal;
  font-weight: bold;
}

.orders-filtered {
  height: calc(100% - 46px);
  width: 100%;
  float: left;
}
.inner-tabscon,
.inner-tabs {
  height: 100%;
}

.s-icon {
  width: 100%;
  float: left;
}
.s-iconbox {
  width: 25%;
  float: left;
  padding: 7px 0;
  text-align: center;
  border-bottom: 2px solid #bbb;
  cursor: pointer;
}
.s-iconbox i {
  color: #d3d3d3;
  font-weight: 700;
}
.s-iconbox i::before {
  font-size: 16px;
}
.tabscon .active {
  border-bottom: 3px solid #749f01;
}
.tabscon .active i {
  color: #749f01 !important;
}

.all-orders {
  width: 100%;
  float: left;
  height: calc(100% - 36px);
  /* border-right: 1px solid #ddd; */
  box-sizing: border-box;
  /* padding: 10px; */
}

/* order filter by */
.ofb {
  width: 100%;
  float: left;
  padding: 20px;
  box-sizing: border-box;
  height: 100%;
  font-size: 14px;
}

.order-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.orderbox {
  width: 100%;
  height: 80px;
  background: #fff;
  border: 1px solid #749f01;
  box-shadow: 0 3px 15px rgba(116, 159, 1, 0.432),
    0 3px 15px rgba(116, 159, 1, 0.13);
  padding: 10px;
  box-sizing: border-box;
  margin-bottom: 20px;
  transition: transform 0.4s ease-out;
}

.orderbox:hover {
  transform: translateY(-5px);
}

.user.user-icon i {
  margin-top: -15px;
  display: block;
  color: #7ca60b;
}

.shadow-danger {
  border: 1px solid #eb0404;
  box-shadow: 0 3px 15px rgba(159, 1, 1, 0.432),
    0 3px 15px rgba(159, 1, 9, 0.13);
}
.shadow-danger .time,
.shadow-danger .user.user-icon i {
  color: #eb0404;
}

.shadow-warning {
  border: 1px solid #ebc804;
  box-shadow: 0 3px 15px rgba(159, 156, 1, 0.432),
    0 3px 15px rgba(159, 156, 1, 0.13);
}
.shadow-warning .time,
.shadow-warning .user.user-icon i {
  color: #d26e1a;
}

.user {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  /* background: green; */
  line-height: 80px;
  float: left;
  overflow: hidden;
}
.user.user-icon {
  border-radius: 0;
}

.user.user-icon i:before {
  font-size: 50px;
  margin: 0;
}

.user img {
  width: 100%;
  float: left;
}
.userid {
  width: 50%;
  float: left;
  padding-left: 12px;
  box-sizing: border-box;
  font-size: 15px;
  margin: 0;
}
.userid p {
  margin: 0;
  font-weight: 550;
  color: #000;
}
.order-time {
  font-weight: normal !important;
  margin-top: 15px !important;
  font-size: 0.88em;
}
.worklogo {
  float: left;
}
.worklogo i {
  margin-left: -10px;
}
.worklogo i.fa {
  margin-left: 10px;
}
.userprice {
  float: right;
}
.price {
  margin: 0;
  font-weight: 700;
}
.time {
  color: #749f01;
  margin-bottom: 0;
}

/* Custom OrderBox Start (ignore the className "orderid" "delivery" it's a misunderstanding)*/
.orderbox.delivery .orderid {
  background-color: #ddd;
  /* display: flex; */
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  text-align: center;
  padding: 3px;
  box-sizing: border-box;
}

.delivery .user.user-icon i {
  margin-top: -10px;
}

.orderbox.delivery .orderid p {
  display: inline-block;
  margin: 0;
  font-weight: bold;
}

.orderbox.delivery {
  position: relative;
  /* overflow: hidden; */
  height: 90px;
}

.orderbox.delivery .order-time {
  margin-top: 10px !important;
}

.orderbox.delivery .time {
  margin-top: 10px;
}

.orderbox.delivery .user {
  width: 50px;
  height: 50px;
  line-height: 70px;
}
/* Delivery OrderBox End*/

/* hotel tabs items */
.order-table-icons {
  width: 120px;
  background-image: url("assets/pos-icons/svg/018-table.svg");
  height: 100px;
  background-size: cover;
  margin: 20px;
  position: relative;
  cursor: pointer;
}
.order-table-icons img {
  width: 30px;
  position: absolute;
  top: 5px;
  left: calc(50% - 15px);
}

.order-table-icons p {
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: -30px;
  font-weight: 600;
}

/* Fourth Section Start */
.fourth {
  width: 25%;
  float: left;
  height: 100%;
  position: relative;
}
.fourthsec {
  width: 100%;
  float: left;
  height: calc(100% - 265px);
}
.fourth-box {
  width: 100%;
  float: left;
  height: auto;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  margin-bottom: 10px;
  border-right: none;
  border-left: none;
}
.fourth-box:first-child {
  border-top: none;
}
.fourth-head {
  border-bottom: 1px solid #d3d3d3;
  width: 100%;
  float: left;
  height: auto;
  padding: 14px 30px 10px 30px;
  box-sizing: border-box;
}
.fourth-head-left {
  float: left;
  display: inline-block;
  font-size: 14px;
}
.fourth-head-right {
  float: right;
  display: inline-block;
  font-size: 14px;
}
.label {
  width: 30px;
  background: #749f01;
  display: inline-block;
  border-radius: 25px;
  float: left;
  text-align: center;
  padding: 3px;
  color: #fff;
  font-size: 12px;
}
.name {
  padding-left: 5px;
  font-size: 14px;
  font-weight: 700;
  margin-top: 2px;
  display: inline-block;
}
.price-label {
  background: #749f01;
  display: inline-block;
  border-radius: 25px;
  float: right;
  text-align: center;
  padding: 3px 5px;
  color: #fff;
  margin-left: 10px;
  font-size: 12px;
  box-sizing: border-box;
}
.euro {
  display: inline-block;
  margin-top: 2px;
  color: #a4a4a4;
}
.fourth-con {
  width: 100%;
  float: left;
  padding: 0px 20px;
  box-sizing: border-box;
  color: #a4a4a4;
}
.fourth-first {
  width: 100%;
  float: left;
  padding: 7px 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #d3d3d3;
  text-align: right;
  font-size: 14px;
  display: flex;
  align-items: center;
}
.food-extra {
  display: inline-block;
  float: left;
}
.food-price {
  display: inline-block;
  margin-left: auto;
}
.deleat {
  display: inline-block;
  float: right;
  cursor: pointer;
}
.deleat:hover {
  color: red;
}

.fourth-secound {
  width: 100%;
  float: left;
  padding: 7px 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #d3d3d3;
  text-align: right;
  font-size: 14px;
  display: flex;
  align-items: center;
}
.fourth-thired {
  width: 100%;
  float: left;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}
.food-deleat {
  width: 30px;
  background: #eb402e;
  display: inline-block;
  border-radius: 25px;
  float: left;
  text-align: center;
  padding: 3px;
  color: #fff;
  font-size: 12px;
  cursor: pointer;
}
.food-deleat i::before {
  margin: 0;
  font-size: 14px;
}
.food-deleat:hover {
  color: #ddd;
}
.add {
  width: 30px;
  background: #a4a4a4;
  display: inline-block;
  border-radius: 25px;
  text-align: center;
  padding: 3px;
  font-weight: 700;
  color: #262626;
  font-size: 14px;
  margin-left: auto;
  cursor: pointer;
}
.add:hover {
  background: #749f01;
  color: #fff;
}
.add i::before {
  margin: 0;
  font-size: 14px;
}
.complate-order {
  position: absolute;
  background: red;
  width: 100%;
  float: left;
  bottom: 0;
}
.updown {
  width: 100%;
  float: left;
  padding: 5px;
  box-sizing: border-box;
  font-size: 25px;
  font-weight: 700;
  color: #a4a4a4;
  background: #fff;
  border: 1px solid #d3d3d3;
  border-bottom: none;
}
.up {
  width: 50%;
  float: left;
  text-align: center;
  border-right: 1px solid #d3d3d3;
  box-sizing: border-box;
  cursor: pointer;
}
.up i {
}
.down {
  width: 50%;
  float: left;
  text-align: center;
  cursor: pointer;
}
.down i {
}
.totalsec {
  width: 100%;
  float: left;
  padding: 10px;
  color: #fff;
  box-sizing: border-box;
  font-size: 14px;
  border: 1px solid #fff;
  padding-bottom: 0;
}
.totalsecpart {
  width: 100%;
  float: left;
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #fff;
}
.total-left {
  display: inline-block;
  float: left;
}
.total-right {
  display: inline-block;
  float: right;
}
.total-center {
}
.complateorder {
  width: 100%;
  float: left;
  text-align: center;
}
.complateorder button {
  background-color: transparent;
  border: none;
  font-weight: 700;
  color: inherit;
  padding: 10px;
}
.complateorder button:hover {
  color: black;
}
.complateorder button:focus {
  outline: none;
}
/* Fourth Section End */

/* Customize website's scrollbar like Mac OS
Not supports in Firefox and IE */
</style>
