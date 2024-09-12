const { MongoClient } = require("mongodb");
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') }); // טוען את משתני הסביבה

// הגדרת מחרוזת החיבור ל-MongoDB עם משתני סביבה
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const internal = {
  db: null,
};

// פונקציה שמתחברת למסד הנתונים
const connectToDB = async () => {
  try {
    await client.connect();
    console.log('Connected to database:', process.env.DB_NAME);
    internal.db = client.db(process.env.DB_NAME); // שומר את החיבור למסד הנתונים
    return internal.db;
  } catch (error) {
    console.error('Database connection error:', error);
  }
};

// פונקציה לקבלת מסד הנתונים
const getDB = () => {
  return internal.db;
};

// פונקציה לקבלת אוסף (collection) ממסד הנתונים
const getDbWithCollection = (collection) => {
  if (internal.db) {
    return internal.db.collection(collection); // מחזיר אוסף מהמסד נתונים
  } else {
    throw new Error('Database is not connected');
  }
};

module.exports = {
  connectToDB,
  getDB,
  getDbWithCollection,
};
