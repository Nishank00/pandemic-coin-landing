import mongoose from "mongoose"

export async function register(){
    await mongoose.connect(process.env.DB_STRING)
    console.log('DB connected')
    console.log('===============================')
}