<template>
  <div>
    <product-list></product-list>
    <Cart></Cart>
    <counter></counter>
  </div>

</template>

<script>
  import Cart from '@/components/cart';
  import ProductList from '@/components/productList';
  import Counter from './counter.vue';
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
      Counter
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
