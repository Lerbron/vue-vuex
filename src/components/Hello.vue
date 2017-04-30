<template>
  <div>
    <product-list></product-list>
    <Cart></Cart>
    <counter></counter>
    <Count></Count>
    <p style="margin-top: 40px">父子组件通信</p>
    <p>子组件传来的数据communication，父组件通过使用相同的名称communication进行监听，获取数据后进行相应的操作</p>
    <p>子组件传递的数据：{{msg}}</p>
    <InputItem item="用户名" val="请输入用户名" @communication="change"></InputItem>
  </div>

</template>

<script>
  import Cart from '@/components/cart';
  import ProductList from '@/components/productList';
  import Counter from './counter.vue';
  import Count from './count.vue';
  import InputItem from './shared/inputItem.vue';
  // import { get, post } from './../utils/fetch';
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      };
    },
    components: {
      Cart,
      ProductList,
      Counter,
      Count,
      InputItem
    },
    methods: {
      change (msg) {
        this.msg = msg;
      }
    },
    created () {
      // console.log('created....');
//      get('https://mainsite-restapi.ele.me/v1/cities')
//        .then(res => console.log(res, 'get方法'));
//      post('https://mainsite-restapi.ele.me/v1/cities')
//        .then(res => console.log(res, 'post方法'));
//      this.$http.get('https://mainsite-restapi.ele.me/v1/cities')
//        .then(res => { this.list = res.body.slice(0, 100); console.log(res); });   // 通过 vueResource 进行数据请求
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
