<template>
  <div class="app" id="app">
    <Header @open-form="showForm" />
    <Table :products="products" @delete-product="deleteProduct"/>
    <Form @add-product="addProduct" v-if="showFormFlag" />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Table from './components/Table.vue';
import Form from './components/Form.vue';
import axios from 'axios';

export default {
  components: {
    Header,
    Table,
    Form
  },
  data() {
    return {
      products: [],
      showFormFlag: false,
      currentPage: 1 // Add currentPage to keep track of current page
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('/products');
        this.products = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    async addProduct(productData) {
      try {
        const response = await axios.post('/products', productData);
       // this.products.push(response.data);
        this.showFormFlag = false;
        await this.fetchData();  // CATATAN : setelah add, fetchData()  again.  
      } catch (error) {
        console.error('Error adding product:', error);
      }
    },
    async deleteProduct(productId) {
      try {
        await axios.delete(`/products/${productId}`);
        this.products = this.products.filter(product => product.id !== productId);
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    },
    showForm() {
      this.showFormFlag = true;
    }
  },
  mounted() {
    this.fetchData();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
