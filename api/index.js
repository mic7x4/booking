import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'

const app = express()
dotenv.config()


const connect = async () =>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('Connected to mongodb')
      } catch (error) {
        throw error
      }

}

// mongoose.connection.on('connected',()=>{
//     console.log('Database connected')
// })
// mongoose.connection.on('disconnected',()=>{
//     console.log('Database disconnected')
// })

const PORT = 8000

app.listen(PORT,()=>{
    connect()
    console.log(`Server is listening on PORT ${PORT}`)
})

