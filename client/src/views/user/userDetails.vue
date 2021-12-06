<template>
  <div class="about">
    <div v-if="flag">
          <button type="button" class="btn btn-primary" @click='changeFlag'>Reset Password</button>
    <router-link to="/addproduct">Add product</router-link>
    <div class="row" >
        <div class="col-sm-1">
        </div>
        <div class="col-sm-10">
            <div class="card">
            <div class="card-body">
                <h5 class="card-title">{{user_data[0].name}}</h5>
                <p class="card-text">{{user_data[0].email}}</p>
                <p class="card-text">{{user_data[0].address}}</p>
                <p class="card-text">{{user_data[0].description}}</p>
            </div>
            </div>
        </div>
        <div class="col-sm-1"></div>
    </div>
    </div>
    <div v-else>
    <ResetPassword/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {store} from '../../store'
import ResetPassword from '../../components/ResetPassword'

export default {
  name: 'userDetails',
    components: {
    ResetPassword
  },
  data(){
      return {
          user_data: [],
          flag : true,
      }
  },
  created(){
      console.log("jkj")
      if(Object.keys(this.$store.state.userData).length != 0){
        this.user_id = (this.$store.state.userData.id)
        console.log(this.user_id)
        axios.get(`http://localhost:3000/user-profile/details/${this.user_id}`)
        .then(res=>{
            console.log(res)
            this.user_data = res.data
            
        })
      }else{
        this.user_data = [{id:"",name:"",email:"",address:"",description:"",}]
      }
  } ,
  methods :{
      changeFlag(){
        console.log("he")
        this.flag = false
      }
      
  } 

}
</script>