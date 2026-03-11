import dotenv from 'dotenv'
dotenv.config()

const configs = {
    MYURI : process.env.MONGO_URI,
    SETOKEN : process.env.SECRET_TOKEN 
}

export default configs