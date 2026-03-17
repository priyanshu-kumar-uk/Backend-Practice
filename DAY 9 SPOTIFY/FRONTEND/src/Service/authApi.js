import axios from "axios";

export async function registerUser(email, password, userType) {
  try {
    let response = await axios.post("http://localhost:3000/auth/register", {
      email,
      password,
      userType,
    });
    return response.data;
  } catch (error) {
    let mesErr = error.response?.data?.message;
    alert(mesErr);

  }
}

export async function login(email, password) {
  try {
    let response = await axios.post(
      "http://localhost:3000/auth/login",
      {
        email,
        password,
      },
      { withCredentials: true },
    );
    return response.data;
  } catch (error) {
    let mesErr = error.response?.data?.message;
    alert(mesErr);
  }
}

export async function getme() {
  try{
    let response = await axios.get("http://localhost:3000/auth/getme", {
    withCredentials: true,
  });  
  return response.data

  }
  catch(error){
    const errorMsg = error?.data?.message;
    return false;
  }
}



