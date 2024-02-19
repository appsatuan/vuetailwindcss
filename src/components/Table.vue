<template>
  <div>
    <table class="table-auto mx-auto">
      <thead class="bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase ">Title</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase ">Price</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase ">Action</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="(product, index) in displayedProducts" :key="index">
          <td class="px-6 py-4 whitespace-nowrap">{{ product.title }}</td>
          <td class="px-6 py-4 whitespace-nowrap">{{ product.price }}</td>
          <td class="px-6 py-4 whitespace-nowrap">
            <button @click="deleteProduct(product.id)" class="bg-red-400 hover:bg-red-900  text-white font-bold py-2 px-4 rounded">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <nav class="mt-4" aria-label="Page navigation">
      <ul class="inline-flex space-x-4">
        <li v-if="currentPage > 1">
          <button @click="prevPage" class="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded">Previous</button>
        </li>
        <li v-for="page in totalPages" :key="page">
          <button @click="gotoPage(page)" :class="{ 'bg-blue-500 text-white': currentPage === page, 'bg-gray-200 hover:bg-gray-300': currentPage !== page }" class="px-3 py-1 rounded">{{ page }}</button>
        </li>
        <li v-if="currentPage < totalPages">
          <button @click="nextPage" class="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded">Next</button>
        </li>
      </ul>
    </nav>
  </div>
</template>
  
  <script>
  export default {
    props: ['products'],
    data() {
      return {
        currentPage: 1,
        itemsPerPage: 5 // Change this to adjust the number of items per page
      };
    },
    computed: {
      displayedProducts() {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        return this.products.slice(startIndex, endIndex);
      },
      totalPages() {
        return Math.ceil(this.products.length / this.itemsPerPage);
      }
    },
    methods: {
      deleteProduct(productId) {
        this.$emit('delete-product', productId);
      },
      prevPage() {
        if (this.currentPage > 1) {
          this.currentPage--;
        }
      },
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
        }
      },
      gotoPage(page) {
        this.currentPage = page;
      }
    }
  }
  </script>
  
  