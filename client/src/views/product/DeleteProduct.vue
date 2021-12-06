<template>
  <div class="about">
        <ul>
            <li v-for="(product,index) in products" :key="product.id" @click="click(index)">{{ product.id}}{{index}}</li>
        </ul>
  </div>
</template>

<script>
import axios from 'axios'
import {store} from '../../store'

export default {
  name: 'DeleteProduct',
  data(){
      return {
          products: [],
          id : ''
      }
  },
  created(){
      axios.get('http://localhost:3000/products')
      .then(res=>{this.products = res.data})
  },
  methods:{
      click(index){
        this.id = parseInt(this.products[index].id)
        console.log(this.id)  
        axios.delete(`http://localhost:3000/products/${this.id}`)
        .then(res=>{console.log(res)})
      }
  }  

}
</script>