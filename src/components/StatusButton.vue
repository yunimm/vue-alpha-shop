<template>
  <div class="btn">
    <button
    @click="prevStep"
    v-visible="step > 1"
    type="button" class="btn__pre btn--part1 btn--hide">
      &larr; 上一步
    </button>
    <button
    v-if="step < 3"
    @click="nextStep"
    type="button" class="btn__next btn--part1">下一步 &rarr;</button>
    <button 
    v-else
    type="button" class="btn__next btn--part1">確認下單</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 1
    }
  },
  methods: {
    nextStep () {
      if(this.step < 3)
      this.step += 1
      this.$emit('nextStep',{
        step: this.step
    })
      
    },
    prevStep () {
      if(this.step > 1)
      this.step -= 1
      this.$emit('prevStep',{
        step: this.step
      })
    },
    printList () {
      
    }
  },
  directives: {
    'visible': function(el, binding) {
      el.style.visibility = binding.value ? 'visible' : 'hidden'
    }
  }
}
</script>