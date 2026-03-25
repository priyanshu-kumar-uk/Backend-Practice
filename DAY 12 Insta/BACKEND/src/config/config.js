import dotenv from 'dotenv'

dotenv.config()

let config = {
    MONGO_URI : process.env.MONGO_URI,
    PRIVATE_KEY : process.env.PRIVATE_KEY,
    TOKEN : process.env.TOKEN
}

export default config