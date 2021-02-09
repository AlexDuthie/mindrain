//deprecated
// const bodyParser = require('body-parser'); // lets us use res.body object
// const { MongoClient } = require("mongodb"); //mongodb driver
// const assert = require('assert');
// const uri = "mongodb+srv://root:ySSHoC0jIgPbUg7X@back-end-marketplace.9n0kw.mongodb.net/test";
// const client = new MongoClient(uri);

// const dummydata = { name: "json", email: "w@w", password: "password" };
// async function insert(db, coll, data) {
//     try {
//         await client.connect();
//         const database = client.db(db);
//         const collection = database.collection(coll)
//             // create a document to be inserted
//         const result = await collection.insertOne(data);
//         console.log(
//             `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`,
//         );
//     } finally {
//         await client.close();
//     }
// }
// insert('test', 'users', dummydata).catch(console.dir);

// insert('test', 'users', dummydata).catch(console.dir);