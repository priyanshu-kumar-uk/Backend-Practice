import {createSlice} from '@reduxjs/toolkit'

let postSlice = createSlice({
    name:"Post",

    initialState:{
        post: [null]
    },

    reducers:{
        setPost:(state,action)=>{
            // console.log(action.payload)
            state.post = action.payload
        }
    }


})
export const{setPost} = postSlice.actions
export default postSlice.reducer