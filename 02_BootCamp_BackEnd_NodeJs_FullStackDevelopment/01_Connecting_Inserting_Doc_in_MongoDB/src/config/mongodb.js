// 1. Import MongoDB Client
import { MongoClient } from "mongodb";

const url = "mongodb://127.0.0.1:27017/confession";

let client;

// 2. Function to connect to the database
export const connectToMongoDB = () => {
    try {
        client = MongoClient.connect(url)
            .then(clientInstance => {
            console.log("Connected To MongoDB");
            client = clientInstance;
            })
            .catch(err => {
                console.log(err);
            })
    } catch (error) {
        console.log("Connection Failed: ", error);
    };
};


// 3. Function to access the database
export const getDB = () => {
    return client.db();
};
