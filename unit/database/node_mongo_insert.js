// Please install npm package mongoose first
const config = require('./config');
const mongoose = require('mongoose');

const url = `mongodb://${config.mongo.user}:${config.mongo.password}@${config.mongo.host}/${config.mongo.dbname}`

const conn = mongoose.connect(url, { useMongoClient: true }, (err, res) => {
	if (err) console.log('MongoDB connected failed', err);
	else console.log('MongoDB connected success');
});
mongoose.Promise = global.Promise;

const collectionName = 'student';
const schema = new mongoose.Schema({
	id: String,
  name: String,
  cid: [String]
}, { collection: collectionName });

const studentModel = conn.model(collectionName, schema);

const data = new studentModel({
  id: 'N26060258',
	name: 'DADA',
  cid: [
    'B00001'
  ]
});

data.save((err) => {
	if (err) console.log('Data insert failed');
	else console.log('Data insert success');
});
