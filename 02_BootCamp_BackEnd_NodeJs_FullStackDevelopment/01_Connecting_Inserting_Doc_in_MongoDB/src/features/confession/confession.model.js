import { getDB } from "../../config/mongodb.js";

export default class ConfessionModel {
  constructor(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
  }

  static async create(title, body, author) {
    try {
      // 1. Get the database
      const db = getDB();
      // 2. Get the collection
      // const collections = db.collections("user_confession")
      const user_conf = db.collection("user_confession")

      // 3. Insert the document
      const newConfession = new ConfessionModel(title, body, author);
      await user_conf.insertOne(newConfession)
      // console.log(`A document was inserted with the _id: ${result.insertedId}`);
      return newConfession;
    } 
    catch (err) {
      throw new Error(err.message);
    }
  }
}
