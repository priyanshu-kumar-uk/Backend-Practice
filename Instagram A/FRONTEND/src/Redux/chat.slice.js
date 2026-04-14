import {createSlice} from '@reduxjs/toolkit'

let chatSlice = createSlice({
    name:'chat',

    initialState:{
        chatUser:{},
        chatUserId:null
    },

reducers:{
    setChatUser:(state,action)=>{
        let actionUser  = action.payload
        state.chatUser = actionUser.reduce((acc,val)=>{  // because using it array coparsion optimize store inside of object easy to acsses
            acc[val._id] = {...val,messages:[]}
            return acc
        },state.chatUser)
    },
    setChatUserId :(state, action)=>{
        state.chatUserId = action.payload
    }
}
})

export const{setChatUser,setChatUserId} = chatSlice.actions
export default chatSlice.reducer