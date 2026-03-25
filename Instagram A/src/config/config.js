import dotenv from 'dotenv'

dotenv.config()


let config = {
    MONGO_URI : process.env.MONGO_URI,
    TOKEN : process.env.TOKEN,
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET
}

console.log(config)
 export default  config