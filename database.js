const { MongoClient } = require("mongodb");

const url = "mongodb+srv://wahidAli:kL4HuOT1nGHANyA1@wali.iuzyg.mongodb.net/";

const client = new MongoClient(url);

const dbName = "database1";

async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("user");

  const data = {
    firstName: "raza",
    lastName: "ali",
    age: 20,
    phoneNumber: 7759971859,
    city: "patna",
    country: "India",
  };

  //write------------
  const insertResult = await collection.insertMany([data]);
  console.log("Inserted documents =>", insertResult);

  //READ-------------
  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

/**
 * no sql (mongodb)
 * --docummnet db , key value db, graph db, wide column db,
 * --multimodel
 */
