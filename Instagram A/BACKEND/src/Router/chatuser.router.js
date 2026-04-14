import {getChatUser} from '../controller/chat.controller.js'
import {Router} from 'express'
import {userVerify} from '../middleware/user-verify.js'

let chatRouter = Router()

chatRouter.get("/chatuser",userVerify,getChatUser)

export default chatRouter