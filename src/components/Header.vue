<template>
  <div class="mx-auto">
    <button @click="openForm" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-aouto">
      Add Product Form
    </button>
  </div>
</template>
  
  <script>
  export default {
    methods: {
      openForm() {
        this.$emit('open-form');
      }
    }
  }
  </script>

