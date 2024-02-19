<template>
  <form @submit.prevent="submitForm" class="mb-3">
    <input type="text" v-model="title" class="border rounded-md px-3 py-2 mr-2" placeholder="Title" required>
    <input type="number" v-model="price" class="border rounded-md px-3 py-2 mr-2" placeholder="Price" required>
    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
  </form>
</template>
  
<script>
export default {
  data() {
    return {
      title: '',
      price: ''
    };
  },
  methods: {
    submitForm() {
      // Emit event to add the product
      this.$emit('add-product', { title: this.title, price: this.price });

      // Reset form fields
      this.title = '';
      this.price = '';

   
    }
  }
}
</script>
