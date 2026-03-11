import dotenv from 'dotenv'
dotenv.config()

let config = {
    MONGO_URI : process.env.MONGO_URI
}

export default config