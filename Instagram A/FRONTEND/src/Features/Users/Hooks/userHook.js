import {searchUser,followUser,followReq,acceptedReq,getProfiles,getUsers} from '../Service/userApi.js'
import {useDispatch} from 'react-redux'
import {setUsersearch,setFollowing,setFollowRequest,setFollowAccept,setProfile,setFollowingData,setFollowerData} from '../../../Redux/user.slice.js'
export function users(){
  
  let dispatch = useDispatch()

  async function searchUsers({query}) {
     let data = await searchUser({query})
     dispatch(setUsersearch(data.user))
     return data
  }

  async function followUsers({userId}) {
    let data = await followUser({userId})
    dispatch(setFollowing(data.follow))
    return data  
  }

  async function followRequ(){ 
   let data = await followReq()
   dispatch(setFollowRequest(data.data))
   return data
  }
  
  async function acceptedRequest({reqUserid}) {
    let data =  await acceptedReq({reqUserid})
    dispatch(setFollowAccept(data.followData))
    return data
  }

 async function profileUser(){
  let data = await getProfiles()
  dispatch(setProfile(data.profileData))
  return data
  }

 async function connectUser(){
  let data = await getUsers()
  dispatch(setFollowingData(data.followingUser))
  return data
  }

   async function connectUserFollower(){
  let data = await getUsers()
  dispatch(setFollowerData(data.followerUsers))
  return data
  }

  return {
    searchUsers,
    followUsers,
    followRequ,
    acceptedRequest,
    profileUser,
    connectUser,
    connectUserFollower
  }

}