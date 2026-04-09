import {Router} from 'express'
import {userSearch,followUser,followReq,statusUpdate,getProfile,showFollow} from '../controller/user-search-contrller.js'
import {userVerify} from '../middleware/user-verify.js'

let searchRouter = Router()

searchRouter.get("/search",userVerify,userSearch)
searchRouter.post("/follow/:userId",userVerify, followUser)

searchRouter.get("/followreq",userVerify,followReq)
searchRouter.patch("/requestUpdate/:reqUserid",userVerify,statusUpdate)

searchRouter.get("/profileGet",userVerify,getProfile)
searchRouter.get("/usersGet",userVerify,showFollow)



export default searchRouter