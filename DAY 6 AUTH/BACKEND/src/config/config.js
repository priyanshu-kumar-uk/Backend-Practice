import dotenv from 'dotenv'
dotenv.config()

 let config = {
    MONGO_URI : process.env.MONGO_URI,
    TOKEN : process.env.TOKEN,
    PRIVATE : process.env.PRIVATE
}

export default config