import {createSlice} from '@reduxjs/toolkit'

let userSlice = createSlice({
    name:"user",

    initialState:{
        usersearch: [],
        following:[],
        followRequest:[],
        followAccept:[],
        profile:null,
        followingData:null,
        followerData: null
    },

    reducers:{
        setUsersearch:(state,action)=>{
            state.usersearch = action.payload
        },
        setFollowing:((state,action)=>{
            state.following = action.payload
        }),
        setFollowRequest:((state,action)=>{
            state.followRequest = action.payload
        }),
        setFollowAccept:((state,action)=>{
            state.followAccept = action.payload
        }),
        setProfile:((state,action)=>{
            state.profile = action.payload
        }),
        setFollowingData:((state,action)=>{
            state.followingData = action.payload
        }),
        setFollowerData:((state,action)=>{
            state.followerData = action.payload
        })
       
    }
})

export let{setUsersearch,setFollowing,setFollowRequest,setFollowAccept,setProfile,setFollowingData,setFollowerData}  = userSlice.actions

export default userSlice.reducer