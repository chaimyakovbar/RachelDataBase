const { MongoClient } = require("mongodb");
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env')})

const uri = process.env.DB
const DBName = process.env.DBNAME
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })


const internal = {
  db: null,
}

const connectToDB = async () => {
  let conn
  try {
    conn = await client.connect();

    console.log('Connecting to database:', uri);
    const db = conn.db(DBName);
    console.log('Connected to database:', DBName);
    
    internal.db = db
    return db
  } catch (e) {
    console.error(e);
  }
}
const getDB = () => internal.db

const getCollictionOpirtion = (collection) => {

}

const getDbWithCollection = (collection) => {
  if(internal.db){
  return internal.db.collection(collection)
}

}

module.exports = {
  connectToDB,
  getDB,
  getDbWithCollection
}