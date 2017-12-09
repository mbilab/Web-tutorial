// Please install npm package mongoose first
const config = require('./config');
const mongoose = require('mongoose');

const url = `mongodb://${config.mongo.user}:${config.mongo.password}@localhost:27017/${config.mongo.dbname}`

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

const model = conn.model(collectionName, schema);

const courseCollName = 'course';
const courseSchema = new mongoose.Schema({
  id: String,
  cname: String
}, { collection: courseCollName });

const courseModel = conn.model(courseCollName, courseSchema);

var cid = [];
model.findOne({name: 'DADA'}).exec((err, sresult) => {
	if (err) console.log('Query failed');
	else {
    console.log(sresult);
    cid = sresult.cid;
    console.log(cid);
    courseModel.find({id: { $all: cid }}).exec((err, cresults) => {
      if (err) console.log('Query failed');
      else {
        res = sresult.name + " have cources ";
        for(i in cresults)
          res += cresults[i].cname + " ";
        console.log(res);
      }
    });
	}
});


