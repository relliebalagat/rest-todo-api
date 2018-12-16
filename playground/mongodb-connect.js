// const MongoClient = require('mongodb').MongoClient;

const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}

	console.log('Connected to MongoDB server');
	const db = client.db('TodoApp');

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if(err) {
	// 		return console.log('Unable to insert to do', err);
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// })

	// Insert new doc into Users (name, age, location)
	// db.collection('Users').insertOne({
	// 	name: 'Rellie Balagat',
	// 	age: 24,
	// 	location: 'Philippines'
	// }, (err, result) => {
	// 	if(err) {
	// 		return console.log('Unable to insert user');
	// 	}

	// 	console.log(result.ops[0]._id.getTimestamp());
	// });


	client.close();

});
