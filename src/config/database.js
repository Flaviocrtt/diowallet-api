import mongoose from 'mongoose';

export async function connectDb(){
    try{   
        await mongoose.connect(process.env.DATABASE_URI);
        console.log("database connected");
    }catch(err){
        console.log(err);
    }
}

export async function disconnectDb(){
    await mongoose.disconnect();
}