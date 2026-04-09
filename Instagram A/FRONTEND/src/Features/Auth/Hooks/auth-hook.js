import { register, login, getMe } from '../Services/authApi.js'
import {useDispatch} from 'react-redux'
import {setUser} from '../../../Redux/auth.slice.js'
export function auth() {

  let dispatch = useDispatch()

  async function registers({ username, email, password, fullname }) {
    let data = await register({ username, email, password, fullname })
    dispatch(setUser(data.userData))
    return data
  }

  async function loginPage({ usernameOrEmail, password }) {
    let loginData = await login({ usernameOrEmail, password })
    dispatch(setUser(loginData.userGet))
    return loginData
  }

  async function getuser() {
    let res = await getMe()
    dispatch(setUser(res.userGet))
    return res
  }

  return {
    registers,
    loginPage,
    getuser
  }

}
