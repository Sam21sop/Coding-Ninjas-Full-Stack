// Please don't change the pre-written code
// Import the necessary modules here
import {getDB} from "../../config/mongodb.js";

class BucketListRepository {
  async addBucketListItem(bucketListItem){

    // Write your code here
    try{
      const db = getDB();
      await db.collection("bucketListItems").insertOne(bucketListItem);
  
      return bucketListItem;
    }catch(err){
      return err;
    }
  
  }

  async findOneBucketListItem(title) {
    // Write your code here
   // console.log("title",title);
    const db = getDB();
    const item = await db.collection("bucketListItems").findOne({ title });
  // console.log("item tis is what we found",item)
    return item;
   }
 }


export default BucketListRepository;
