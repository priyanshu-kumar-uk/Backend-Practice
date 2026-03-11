import dotenv from 'dotenv'
dotenv.config()

 let config = {
    MONGO_URI : process.env.MONGO_URI,
    TOKEN : process.env.TOKEN

}

export default config