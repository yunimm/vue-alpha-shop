<template>
  <div class="part">
    <h2 class="part__title">付款資訊</h2>
    <div class="pay-panel">
      <div class="form-row">
        <label for="card-name">持卡人姓名</label>
        <input
          v-model="payInformation.cardName"
          type="text"
          id="card-name"
          name="card-name"
          placeholder="John Doe"
          class="card-name"
        />
      </div>
      <div class="form-row">
        <label for="card-number">卡號</label>
        <input
          v-model="payInformation.number"
          id="card-number"
          type="text"
          placeholder="1111 2222 3333 4444"
          class="card-number"
        />
      </div>
      <div class="form-row">
        <label for="card-date">有效期限</label>
        <input
          v-model="payInformation.expDate"
          type="text"
          id="card-date"
          name="card-date"
          placeholder="MM/YY"
          class="card-date"
        />
      </div>
      <div class="form-row">
        <label for="card-code">CVC/CCV</label>
        <input
          v-model="payInformation.cvv"
          type="text"
          id="card-code"
          name="card-code"
          placeholder="123"
          class="card-code"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialPayInformation: {
      type: Object,
      default: () => ({
        cardName: '',
        number: '',
        expDate: '',
        cvv: ''
      })
    }
  },
  data() {
    return{
      payInformation: {...this.initialPayInformation}
    }
  }
}
</script>