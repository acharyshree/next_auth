import mongoose from "mongoose";
export async function connect(){
    try {
        await mongoose.connect(process.env.MONGO_URI!)
        const connection=mongoose.connection;
        connection.on("connected",()=>
            {console. log( "IMongoDB connected successfully" )});
connection.on( 'error' ,(err)=>{
console. log( 'MongoDB connection error. Please' + err);
process.exit();})
        
    } catch (error) {
        console.log("not connected to db");
        console.log(error);
    }
}