<template>
  <div class="about">
    <div v-if="flag">
      <button class="btn btn-primary" @click="viewCart(index)">View Cart</button>
      <router-link to="/user">Profile</router-link>
      <div class="row">
          <div class="col-sm-3" v-for="(product,index) in products" :key="product.id">
              <div class="card">
              <div class="card-body">
                  <img class="card-img-top"  alt="Card image cap" src="../../assets/products/logo.png">
                  <h5 class="card-title">{{product.name}}</h5>
                  <p class="card-text">{{product.description}}</p>
                  <button class="btn btn-primary" @click="addToCart(index)">Add to Cart</button>
              </div>
              </div>
          </div>
      </div>
    </div> 
    <div v-else>
      <cartView/>
      </div> 
  </div>
</template>

<script>
import axios from 'axios'
import {store} from '../../store'
import cartView from '../../components/CartView'

export default {
  name: 'HomePage',
  components: {
    cartView
  },
  data(){
      return {
          products: [],
          user_id: '',
          product_id: '',
          cart_product:[],
          quantity: 1,
          isExist: false,
          flag:true
      }
  },
  created(){
      axios.get('http://localhost:3000/products')
      .then(res=>{this.products = res.data})
  },
  methods:{
    addToCart(index){
        if(this.cart_product.length > 0){
          this.cart_product.forEach((product,ind)=>{
            if(this.cart_product[ind].id == this.products[index].id){
              this.cart_product[ind].quantity += 1
              this.isExist = true
            }
          })
        }
        if(!this.isExist){
          this.quantity = 1
          this.cart_product.push({id:this.products[index].id,quantity:this.quantity});
        }
        this.isExist = false
        this.user_id = (this.$store.state.userData.id)
        this.product_id = parseInt(this.products[index].id)
        axios.post(`http://localhost:3000/cart/${this.user_id}`,{
            product_id : this.product_id,
            quantity : 1
        }).then((res)=>{
            console.log(res)
            this.$router.push('/home')
        }).catch(err=>{console.log(err)})
    },
    viewCart(){
      this.flag = false

    }

  }  

}
</script>