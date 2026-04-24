import axios from 'axios'
// do kaam karta hai phele data ko bhejta ha hai API ka throw server par., than await hota hai res kya mil rha hai usko bhi let hai us data ko return lai lete hai hook mai 

export async function register({username,email,password,fullname}){
  try{
     let response = await axios.post("/api/auth/register",{
     username,
     email,
     password,
     fullname
   })
   return response.data
  }catch(errors){
    console.log(errors)
  }
}
export async function login ({usernameOrEmail,password}){
      let emailRezex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      const values = {password}

      if(emailRezex.test(usernameOrEmail)){
        values.email = usernameOrEmail    // obj mai email:"jk@gmail.com"
      }else{
        values.username = usernameOrEmail  // obj mai username = "rajupanjabi"
      }

     try{
       let res=  await axios.post("/api/auth/login",values,{
        withCredentials:true
       })
       return res.data
     }catch(errors){
      console.log(errors.res.data)
     }
}
 export async function getMe(){
   let res = await axios.get("/api/auth/getMe",{
    withCredentials:true
   })
   return res.data
}

