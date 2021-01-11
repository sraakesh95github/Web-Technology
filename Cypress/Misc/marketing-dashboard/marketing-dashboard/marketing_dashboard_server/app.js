require('dotenv').config();
const express  = require("express");
const { MongoClient } = require("mongodb");
const parseExcel = require('./api/excellToJson');
const loadJsonFile = require('load-json-file');
const path = require('path');
const assert = require('assert');
const app = express();
const selectedPort = process.env.PORT;
const mongoUrl = process.env.MONGODB_URL;  // mongodb://localhost - will fail
const database = process.env.MONGODB_DATABASE;
const collectionName = process.env.MONGODB_COLLECTION;
const appConfig = require('./configuration');

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/getdata', async (req,res,next) => {
  try {
    const client = await MongoClient.connect(mongoUrl,{ useNewUrlParser: true });
    const dbo = await client.db(database);
    const filteredData = await findDocuments(dbo);
    return res.status(200).json(filteredData); 
  }catch(e){
      console.log(e);
  } 
});

const delCollection = async()=> {
  const client = await MongoClient.connect(mongoUrl,{ useNewUrlParser: true });
  const dbo = await client.db(database);
  dbo.collection(collectionName).drop().then(()=> {
    console.log("Older Collection deleted");
  }).catch(function () {
    console.log("error");
})
}

const findDocuments = (db) => {
  const collection = db.collection(collectionName);
  return new Promise((resolve, reject) => {
    collection.find().toArray(function(err, docs) {
      assert.equal(err, null);
      resolve(docs);
    });
  });
}

const createDbConnection = async ()=> {
  try {
    const client = await MongoClient.connect(mongoUrl,{ useNewUrlParser: true });
    const dbo = await client.db(database);
    dbo.createCollection(collectionName, function(err, res) {
      if (err) throw err;
      console.log(`${collectionName} Collection created!`);
      insertDocuments(dbo, function() {
        client.close();
      });
    });
    return `Mongo DB Connected in the URL ${mongoUrl}`;
  } catch(e) {
    return e;
  }
}

const fetchData = ()=> {
  const status = parseExcel();
  return status;
}

const runServer = async ()=> {
  let status = app.listen(selectedPort,(err)=>{
    if(err){
      return err;
    }else{
      console.log(`Server Running On Port No: ${selectedPort}`);
    }
  });
}

const insertDocuments = async (db,callback) => {
  const outputFileName = appConfig.output.filename;
  const outputFilePath = appConfig.output.location;
  const completeOutputFilePath = `./${outputFilePath}/${outputFileName}`;
  const json = await loadJsonFile(path.resolve(__dirname,completeOutputFilePath));
  const collection = db.collection(collectionName);
  collection.insertMany(json, function(err, result) {
    assert.equal(err, null);
    console.log("Inserted json into the collection");
    callback(result);
  });
}

runServer().then(()=>{
  delCollection().then(res=>{
    fetchData();
    createDbConnection().then(res=>{});
  });
  
});
