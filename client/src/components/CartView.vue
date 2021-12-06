<template>
  <div class="home">
      <div class="row" >
          <h1>cart</h1>
          <div class="col-sm-3" v-for="(product,index) in cart" :key="product.id">
              <div class="card">
              <div class="card-body">
                  <h5 class="card-title">{{product.name}}</h5>
                  <p class="card-title">{{product.price}}</p>
                  <button class="btn btn-primary" @click="deleteCart(index)">delete</button>
              </div>
              </div>
          </div>
      </div>
      <router-link to="/createorder">Order</router-link>
  </div>
</template>

<script>
import axios from 'axios'
import {store } from '../store/index'

export default {
  name: 'cartView',
  data(){
      return {
          cart: [],
          user_id:'',
          product_id:'',
      }
  },
  created(){
      this.user_id = (this.$store.state.userData.id)
      this.getAllCart(this.user_id)
       
  },
  methods :{
      getAllCart(user_id){
        axios.get(`http://localhost:3000/cart/${user_id}`)
        .then(res=>{
          console.log(res)
          this.cart = res.data})
      },

      deleteCart(index){
        this.product_id = parseInt(this.cart[index].id)  
        axios.delete(`http://localhost:3000/cart/${this.product_id}`)
        .then(res=>{
          if(res.data.msg == "success"){
              this.getAllCart()
          }  
          console.log(res)})
      }
    } 

}
</script>