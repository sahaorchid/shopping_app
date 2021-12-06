<template>
  <div class="home">
    <form method='POST' @submit="resetPassword">
    <div class="form-group">
        <label for="exampleInputEmail1">Reset Password</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter New Password" v-model="newPassword">
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import {store } from '../store/index'

export default {
  name: 'ResetPassword',
  data(){
      return {
          id: '',
          newPassword : '',
      }
  },
  methods :{
      resetPassword(e){
        e.preventDefault();  
        this.id = this.$store.state.userData[0].id
        console.log(this.id)  
        if(this.id){
            axios.put('http://localhost:3000/user-profile/reset-password',{
                id : this.id,
                password : this.newPassword,
            }).then((res)=>{
                this.$router.push('/home')
            }).catch(err=>{console.log(err)})
        }
      }

      } 

}
</script>