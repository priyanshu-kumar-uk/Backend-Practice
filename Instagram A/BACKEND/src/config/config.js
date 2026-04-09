import dotenv from 'dotenv'

dotenv.config()


let config = {
    MONGO_URI : process.env.MONGO_URI,
    TOKEN : process.env.TOKEN,
    CLIENT_ID: process.env.CLIENT_ID,     //auth google
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || "http://localhost:5173",
    PRIVATE_KEY:process.env.PRIVATE_KEY
}

console.log(config)
 export default  config
