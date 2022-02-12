<template>
  <div class="product-panel">
    <h3 class="product-title">購物籃</h3>
    <div class="product-list">
      <div v-for="item in items" :key="item.id" class="product__item">
        <div class="product-img__wrapper">
          <img
            :src="item.pic"
            width="200"
            alt="product on screen"
            class="product-img__img"
          />
        </div>
        <div class="product__info">
          <span class="product__info__name">{{ item.name }}</span>
          <div class="icon-flex">
            <div class="icon-content minus-icon">
              <i @click="deleteNum(item)" class="bi bi-dash-circle-fill"></i>
              <i class="bi__bg"></i>
            </div>
            <span class="product__info__amount">{{ item.num }}</span>
            <div class="icon-content plus-icon">
              <i @click="addNum(item)" class="bi bi-plus-circle-fill"></i>
              <i class="bi__bg"></i>
            </div>
          </div>
          <span class="product__info__price">${{ item.cost | currency }}</span>
        </div>
      </div>
    </div>
    <div class="product-pay-list">
      <div class="product__ship">
        <span class="product__ship__title">運費</span>
        <span class="product__ship__title shipWords">免費</span>
      </div>
      <div class="product__total">
        <span class="product__total__title">小計</span>
        <span class="product__total__title productTotal"
          >${{ countTotal | currency }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    initialItems: {
      type: Array,
      required: true,
    },
    initialShipStyle: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      items: [ ...this.initialItems ],
      totalCount: 0,
      shipStyle: this.initialShipStyle
    };
  },
  filters: {
    currency(val) {
      return Number(parseFloat(val).toFixed(3)
      ).toLocaleString("en", {
        
      })
    }
  },
  computed: {
    countTotal() {
      let totalCount = 0
      for(let i = 0; i < this.items.length; i++) {
        totalCount += this.items[i].num * this.items[i].cost 
      }
      return totalCount + this.shipStyle.value
    }
  },
  methods: {
    addNum(item) {
      item.num += 1;
    },
    deleteNum(item) {
      if (item.num > 0) {
        item.num -= 1;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.product-img__img {
  width: 200px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 10px;
}
</style>