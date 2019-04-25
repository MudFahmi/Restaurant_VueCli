<template>
    
      <div class="main">
      
      <dinner-orders />

      <category-simplebar />

      <menu-bill />
      
    </div>
  
</template>

<script>

import DinnerOrders from '@/components/DinnerOrders.vue'
import CategorySimplebar from '@/components/CategorySimplebar.vue'
import MenuBill from '@/components/MenuBill.vue' 

export default {
  components: {
    DinnerOrders,
    CategorySimplebar,
    MenuBill
  }
};

</script>

<style  >

@media (max-width: 1375px) {
  /* .orderbox {
    height: auto;
    float: left;
  }
  .user {
    margin: auto;
    float: none;
    margin-bottom: 10px;
  }
  .userid {
    width: 100%;
    font-size: 12px;
    text-align: center;
  }
  .price {
    display: inline-block;
  }
  .time {
    display: inline-block;
    margin-left: 10px;
  }
  .worklogo i {
    font-size: 30px;
  }
  .third-box {
    margin-bottom: 0;
  }
  .third-subbox {
    width: calc(100% - 22px);
    margin-bottom: 20px;
  }
  .third {
    width: 25%;
  }
  .fourth {
    width: 30%;
  }
  .fourthsec {
    height: 700px;
    overflow-y: auto;
  } */
}
</style>
