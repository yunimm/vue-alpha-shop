<template>
  <div class="part">
    <h2 class="part__title">運送方式</h2>
    <div class="ship-panel">
      <div class="form-check ship-default">
        <input
          :value="0"
          v-model="shipStyle.value"
          class="form-check__input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault"
        />
        <div class="form-check__title">
          <label class="form-check__label" for="flexRadioDefault">
            標準運送
          </label>
          <span class="form-check__info">約3~7個工作天</span>
        </div>
        <span class="form-check__price">免費</span>
      </div>
      <div class="form-check ship-dhl">
        <input
          :value="500"
          v-model="shipStyle.value"
          class="form-check__input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefaultDHL"
        />
        <div class="form-check__title">
          <label class="form-check__label" for="flexRadioDefaultDHL">
            DHL貨運
          </label>
          <span class="form-check__info">48小時內送達</span>
        </div>
        <span class="form-check__price">$500</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialShipStyle: {
      type: Object,
      default: () => ({
        value: '',
      })
    }
  },
  data() {
    return { 
      shipStyle: this.initialShipStyle
    }
  }
}
</script>