<template>
  <div class="home">
      <div v-if="order">
      <h1>orders</h1>
      <ul>
          <li v-for="item in order_items" :key="item.product_id">{{item.name}}*{{item.quantity}} = {{item.price}}</li>
      </ul>
      <p>grand Total: {{grand_total}}</p>
      <p>address: {{address}}| {{description}}</p>
    <button class="btn btn-primary" @click="orderPlaced">Placed</button>
    </div>
    <v-else UserOrders/>
  </div>
</template>

<script>
import axios from 'axios'
import {store} from '../../store'
import UserOrders from '../../components/UserOrders'

export default {
  name: 'createOrders',
  components :{
      UserOrders
  },
  data(){
      return {
          id: '',
          cart:[],
          user_id: '',
          order_items:[],
          flag:true,
          grand_total:0,
          address: '',
          description: '',
          placed_items:[],
          order: true
      }
  },
  created(){
      this.address = this.$store.state.userData[0].address
      this.description = this.$store.state.userData[0].description
      this.user_id = (this.$store.state.userData[0].id)
      this.getAllCart(this.user_id)
      console.log((this.$store.state.userData))
  },
  methods :{
      getAllCart(user_id){
        axios.get(`http://localhost:3000/cart/${user_id}`)
        .then(res=>{  
          this.cart = res.data
          this.orderView()})

      },

      orderView(){
          this.cart.forEach((item)=>{
              this.grand_total+=item.price
              this.flag = true
              if(this.order_items.length > 0){
                  this.order_items.forEach((product,index)=>{  
                    if(product.product_id == item.product_id){
                      this.flag = false
                      product.quantity += 1;
                      product.price += product.price
                    }
                  })
                  if(this.flag){
                      this.order_items.push({id:item.product_id,name:item.name, quantity:item.quantity, price:item.price})
                      this.placed_items.push({id:item.product_id,quantity:item.quantity})

                  }
              }else{
                  this.order_items.push({product_id:item.product_id,name:item.name, quantity:item.quantity, price:item.price})
                  this.placed_items.push({id:item.product_id,quantity:item.quantity})             
              }
          })
      },
      orderPlaced(){
            axios.put('http://localhost:3000/orders',{
                user_id : this.user_id,
                product_id : this.placed_items,
                address: this.address,
                grand_total:this.grand_total,
            }).then((res)=>{
                this.orders = false
            }).catch(err=>{console.log(err)})

      }

      } 

}
</script>