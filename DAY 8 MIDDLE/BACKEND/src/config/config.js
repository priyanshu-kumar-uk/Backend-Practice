import dotenv from 'dotenv'
dotenv.config()

let config ={
    MONGO_URI: process.env.MONGO_URI,
    PRIVATE: process.env.PRIVATE,
    PRIVATEKEY: process.env.PRIVATEKEY
}

export default config