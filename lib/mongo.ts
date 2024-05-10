import { MongoClient, ServerApiVersion } from "mongodb";
// Replace the placeholder with your Atlas connection string
const uri = "mongodb+srv://edangol:mongopass@evancluster.hvppq.mongodb.net/?retryWrites=true&w=majority&appName=evancluster";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri,  {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
);
export async function connectToMongoDB() {
    try {
        console.log("before");
        
      await client.connect();
      console.log(client);
      
      console.log("Connected to MongoDB!");

    } catch (error) {
      console.error("Failed to connect to MongoDB:", error);
    }
  }
  
  export async function closeMongoDBConnection() {
    try {
      await client.close();
      console.log("Closed MongoDB connection.");
    } catch (error) {
      console.error("Failed to close MongoDB connection:", error);
    }
  }