import { chatUser } from '../service/chat.api.js'
import {setChatUser,setChatUserId} from '../../../Redux/chat.slice.js'
import {useDispatch} from 'react-redux'
export function chat() {
    let dispatch = useDispatch()

    async function chatUsers() {
        let data = await chatUser()
         dispatch(setChatUser(data.user))
    }

    async function currentUserId(userId) {
       dispatch( setChatUserId(userId))
    }
     
    return {
        chatUsers,
        currentUserId
    }
}