import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('MongoDB Connected...')
    } catch (error) {
        console.error("DB error")
    }
}


export default connectDB