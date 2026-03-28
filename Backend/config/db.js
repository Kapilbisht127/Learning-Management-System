import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://bkapil978_db_user:6gLrG9hrie3c1vdL@cluster0.nltmn8r.mongodb.net/L-M-S').then(() => {
        console.log('DB Connected')
    })
}