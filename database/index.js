const { MongoClient } = require('mongodb');

// Connection URL
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const dbname = "restaurant"
const collectionName = "data"

async function connectToDB() {
  try{
    await client.connect();
    console.log('Connected successfully to database');
  } catch (error){
    console.log(error)
  } 
}

const databaseFunction = () => {
  return client.db(dbname).collection(collectionName)
}

module.exports = {
  connectToDB,
  client,
  databaseFunction
}