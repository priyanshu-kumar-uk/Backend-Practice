import axios from 'axios'

export async function getPost() {
  let response = await axios.get("http://localhost:3000/api/post/getPost")
  return response.data
}

export async function createPost({files,caption}){

  let formData =  new FormData()  // data formdata form hoga  so isliye
  formData.append("caption",caption)
  Array.from(files).forEach((file)=>{      // jo input mai files image agngi bo could be multiple so ham ham un files ka array bana rhe hai or ek ek karke formdata mai dal rhe ehai 
    formData.append("Post",file)    // post jo multer name diye hai bo hai
  })

   let response = await axios.post("http://localhost:3000/api/post/upload",formData,{
    withCredentials:true
   })
   console.log(response)
   return response.data
}


