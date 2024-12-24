// import { MongoClient } from 'mongodb'

// const uri = process.env.MONGODB_URI
// const options = {}

// let client
// let clientPromise

// if (!process.env.MONGODB_URI) {
//   throw new Error('Add Mongo URI to .env.local')
// }

// if (process.env.NODE_ENV !== 'development') {
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri, options)
//     global._mongoClientPromise = client.connect()
//   }
//   clientPromise = global._mongoClientPromise
// } else {
//   client = new MongoClient(uri, options)
//   clientPromise = client.connect()
//   console.log("connected to: ",process.env.MONGODB_URI)
// }

// export default clientPromise
import mongoose from "mongoose";

const connect = async () => {
  try{
    await mongoose.connect(process.env.MONGODB_URI,{});
    console.log("Connected to MongoDB");
  }
  catch(err){
    console.log(err);
  }
}

export default connect;