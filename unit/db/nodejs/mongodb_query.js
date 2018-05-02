#!/usr/bin/env node
const config = require('./config')
const mongoose = require('mongoose')

const url = `mongodb://${config.mongodb.user}:${config.mongodb.passwd}@${config.mongodb.host}:${config.mongodb.port}/${config.mongodb.dbname}`

const conn = mongoose.connect(url, { useMongoClient: true }, (err, res) => {
	if (err) console.log('MongoDB connected failed', err)
	else console.log('MongoDB connected success')
})
mongoose.Promise = global.Promise

const courseCollectionName = 'course'
const courseSchema = new mongoose.Schema({
  id: String,
  name: String,
  students: [String]
}, { collection: courseCollectionName })
const courseModel = conn.model(courseCollectionName, courseSchema)

courseModel.findOne({id: "B0001"}).exec((err, res) => {
  if (err) console.log('Course query failed')
  else {
    console.log(res.name + ' have students ' + res.students)
    conn.close()
  }
})
