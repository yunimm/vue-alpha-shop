<template>
  <div class="part">
    <h2 class="part__title">寄送地址</h2>
    <div class="add-panel">
      <div class="form-row">
        <label for="sex">稱謂</label>
        <!-- @change="onChange($event)" -->
        <select name="sex" id="sex" class="sex" v-model="users.title">
          <option value="-1" disabled>請選擇性別</option>
          <option value="mr">先生</option>
          <option value="miss">女士</option>
          <option value="others">其他</option>
        </select>
      </div>
      <div class="form-row">
        <label for="fname">姓名</label>
        <input
          v-model="users.name"
          type="text"
          id="fname"
          name="fname"
          placeholder="請輸入姓名"
          class="fname"
        />
      </div>
      <div class="form-row">
        <label for="phone">電話</label>
        <input
          v-model="users.tel"
          id="phone"
          type="text"
          placeholder="請輸入行動電話"
          class="phone"
        />
      </div>
      <div class="form-row">
        <label for="email">Email</label>
        <input
          v-model="users.email"
          id="email"
          type="email"
          placeholder="請輸入電子郵件"
          class="email"
        />
      </div>
      <div class="form-row">
        <label for="city">縣市</label>
        <select  name="city" id="city" class="city" v-model="users.city">
          <option disabled value="">請選擇縣市</option>
          <option 
          :value="city.value"
          v-for=" city in citys"
          :key="city.id"
          
          >{{ city.name }}
          </option>
        </select>
      </div>
      <div class="form-row">
        <label for="address">地址</label>
        <input
          v-model="users.address"
          type="text"
          id="address"
          name="address"
          placeholder="請輸入地址"
          class="address"
        />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    initialCitys: {
      type: Array,
      required: true
    },
    initialUser: {
      type: Object,
      default: () => ({
        name: '',
        title: '',
        tel: '',
        email: '',
        address: '',
        city: ''
      })
    }
  },
  data() {
    return {
      users: {...this.initialUser},
      citys: this.initialCitys,
    }
  },

}
</script>