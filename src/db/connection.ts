const {connect, disconnect} = require("mongoose");

async function connectToDB(): Promise<void>{
    const mongoURL = process.env.MONGODB_CONNECTION_STRING;

    if(!mongoURL){
        throw new Error("MongoDB connection string is not defined in environment variables");
    }

    try{
        await connect(mongoURL);
        console.log("connected to MongoDB database");
    }
    catch(err){
        console.error("Failed to connect to MongoDB", err);
    }
}

 async function disconnectFromDB(): Promise<void>{
    try{
        await disconnect();
    }
    catch(err){
        console.log(err);
        throw new Error("Failed to disconnect from MongoDb")
    }
}

export {connectToDB, disconnectFromDB};