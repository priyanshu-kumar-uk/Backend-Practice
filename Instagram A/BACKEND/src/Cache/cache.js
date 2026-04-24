import Redis from 'ioredis'
import config from '../config/config.js'

const redis = new Redis({
    host: config.REDIS_HOST,
    port: config.REDIS_PORT,
    password: config.REDIS_PASSWORD
})

redis.on("connect",()=>{
    console.log("Server is connected to Redis")
})
redis.on("error", (err) => {
    console.log("Redis Connection Error Details:", err.message);
});



export default redis