<template>
  <div id="vue-alpha-shop">
    <div class="container">
      <main>
        <StepperPanel />
        <form class="form">
          <router-view 
          :initialCitys="citys"
          :initialUser="users"
          :initialShipStyle="shipStyle"
          :initialPayInformation="payInformation"
          />
          <ProductPanel 
          :initialItems="items"
          :initialShipStyle="shipStyle"
          />
          <StatusButton 
          @nextStep="handle"
          @prevStep="handle"
          />
        </form>
      </main>
    </div>
  </div>
</template>

<script>
import StepperPanel from "./../components/StepperPanel.vue"
import StatusButton from "./../components/StatusButton.vue"
import ProductPanel from "./../components/ProductPanel.vue"

const dummyData = {
  citys: [
    { 
      id: '1',
      name: '基隆市',
      value: 'Keelung City'

    },
    { 
      id: '2',
      name: '新北市',
      value: 'New Taipei City'
    },
    { 
      id: '3',
      name: '台北市',
      value: 'Taipei City'
    },
    { 
      id: '4',
      name: '桃園市',
      value: 'Taoyuan City'
    },
    { 
      id: '5',
      name: '新竹縣',
      value: 'Hsinchu County'
    },
    { 
      id: '6',
      name: '新竹市',
      value: 'Hsinchu City'
    },
    { 
      id: '7',
      name: '苗栗市',
      value: 'Miaoli City'
    },
    { 
      id: '8',
      name: '苗栗縣',
      value: 'Miaoli County'
    },
    { 
      id: '9',
      name: '臺中市',
      value: 'Taichung City'
    },
    { 
      id: '10',
      name: '彰化縣',
      value: 'Changhua County'
    },
    { 
      id: '11',
      name: '彰化市',
      value: 'Changhua City'
    },
    { 
      id: '12',
      name: '南投市',
      value: 'Nantou City'
    },
    { 
      id: '13',
      name: '南投縣',
      value: 'Nantou County'
    },
    { 
      id: '14',
      name: '雲林縣',
      value: 'Yunlin County'
    },
    { 
      id: '15',
      name: '嘉義縣',
      value: 'Chiayi County'
    },
    { 
      id: '16',
      name: '臺南市',
      value: 'Tainan City'
    },
    { 
      id: '17',
      name: '高雄市',
      value: 'Kaohsiung City'
    },
    { 
      id: '18',
      name: '屏東縣',
      value: 'Pingtung County'
    },
    { 
      id: '19',
      name: '屏東市',
      value: 'Pingtung City'
    },
    { 
      id: '20',
      name: '宜蘭縣',
      value: 'Yilan County'
    },
    { 
      id: '21',
      name: '宜蘭市',
      value: 'Yilan City'
    },
    { 
      id: '22',
      name: '花蓮縣',
      value: 'Hualien County'
    },
    { 
      id: '23',
      name: '花蓮市',
      value: 'Hualien  City'
    },
    { 
      id: '24',
      name: '臺東市',
      value: 'Taitung City'
    },
    { 
      id: '25',
      name: '臺東縣',
      value: 'Taitung County'
    },
    { 
      id: '26',
      name: '澎湖縣',
      value: 'Penghu County'
    },
    { 
      id: '27',
      name: '綠島',
      value: 'Green Island'
    },
    { 
      id: '28',
      name: '蘭嶼',
      value: 'Orchid Island'
    },
    { 
      id: '29',
      name: '金門縣',
      value: 'Kinmen County'
    },
    { 
      id: '30',
      name: '馬祖',
      value: 'Matsu'
    },
    { 
      id: '31',
      name: '連江縣',
      value: 'Lienchiang County'
    },
  ],
  users: {
    name: '請輸入姓名',
    tel: '請輸入行動電話',
    email: '請輸入電子郵件',
    address: '請輸入地址',
    title: '請選擇稱謂',
    city: '請選擇縣市'
  },
  shipStyle: {
    value: 0
  },
  payInformation: {
    cardName: 'John Doe',
    number: '1111 2222 3333 4444',
    expDate: 'MM/YY',
    cvv: '123'
  },
  items: [
    {
    id: '1',
    name: '破壞補丁修身牛仔褲',
    cost: 3999,
    num: 1,
    pic: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
    id: '2',
    name: '刷色直筒牛仔褲',
    cost: 1999,
    num: 1,
    pic: 'https://images.unsplash.com/photo-1555689502-c4b22d76c56f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    }
  ],
  step: 1,
}

export default {
  components: {
    StepperPanel,
    StatusButton,
    ProductPanel
  },
  data() {
    return {
      citys: [],
      users: {
        name: '',
        title: '',
        tel: '',
        email: '',
        address: '',
        city: ''
      },
      shipStyle: {},
      payInformation: {
        cardName: '',
        number: '',
        expDate: '',
        cvv: ''
      },
      items: [],
      step: 1,
    }
  },
  created() {
    this.fetchUser()
  },
  methods: {
    fetchUser () {
      const { citys, users, shipStyle, payInformation, items } = dummyData

      const {
        name,
        title,
        tel,
        email,
        address,
        city,
        } = users

      this.users =  { 
        ...this.users,
        name,
        title,
        tel,
        email,
        address,
        city
       }
      
      const { 
        cardName,
        number,
        expDate,
        cvv
      } = payInformation

      this.payInformation = {
        ...this.payInformation,
        cardName,
        number,
        expDate,
        cvv
      }
      this.citys = citys
      this.shipStyle = shipStyle
      this.items = items
    },
    handle (payload) {
      console.log('add')
      const{ step } = payload
      this.step = step
      if(this.step === 1 ) {
        this.$router.push("form-address")
      } else if (this.step === 2) {
        this.$router.push("form-ship")
      } else if (this.step === 3) {
        this.$router.push("form-pay")
      }
      
    }
  },
}
</script>
