import { register, login, getMe } from '../Services/authApi.js'
import {useDispatch} from 'react-redux'
import {setError, setLoading, setUser} from '../../../Redux/auth.slice.js'
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
    dispatch(setLoading(true))
    try {
      let res = await getMe()
      dispatch(setUser(res.userGet))
      dispatch(setError(null))
      return res
    } catch (error) {
      dispatch(setUser(null))
      dispatch(setError(error?.response?.data?.message || "User is not logged in"))
      return null
    } finally {
      dispatch(setLoading(false))
    }
  }

  return {
    registers,
    loginPage,
    getuser
  }

}
