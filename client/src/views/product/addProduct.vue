<template>
  <div class="about">
    <form @submit="addProduct">
        <div class="form-group">
            <label for="formGroupExampleInput">Name</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" v-model="name">
        </div>
        <div class="form-group">
            <label for="formGroupExampleInput2">Description</label>
            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input" v-model="description">
        </div>
                <div class="form-group">
            <label for="formGroupExampleInput2">Price</label>
            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input" v-model="price">
        </div>
        <div class="form-group">
            <label for="exampleFormControlFile1">Upload picture</label>
            <input type="file" class="form-control-file" id="exampleFormControlFile1"  @change="imageUpload">
        </div>
        <button class="btn btn-primary">Add</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'addProduct', 
  data(){
      return{
          name : "",
          description : "",
          image : "",
          price:""
      }
  },
  methods:{
      imageUpload(event){
          this.image = event.target.files[0]
      },
      addProduct(e){
          e.preventDefault()
          axios.post('http://localhost:3000/products/',{
              name:this.name,
              description:this.description,
              price:this.price,
              image:(this.image)
          }).then((res)=>{
                console.log(res)
          }).catch(err=>{console.log(err)}) 
      }
  }

}
</script>