<template>
  <div class="stepper-panel">
    <h2 class="stepper-panel__title">結帳</h2>
    <div class="stepper-panel__wrapper">
      <div class="step">
        <span class="step__circle"></span>
        <span class="step__status">寄送地址</span>
      </div>
      <span class="step__line"></span>
      <div class="step step--unselect">
        <span class="step__circle step__circle--unselect"></span>
        <span class="step__status step__status--unselect">運送方式</span>
      </div>
      <span class="step__line step__line--unselect"></span>
      <div class="step step--unselect">
        <span class="step__circle step__circle--unselect"></span>
        <span class="step__status step__status--unselect">付款資訊</span>
      </div>
    </div>
  </div>
</template>
