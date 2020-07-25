const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:57308';
const dbName = 'recommender';

MongoClient.connect(url, function(err, client) {

    const db = client.db(dbName);

    });


