const express = require('express');
const {Client, Pool} = require('pg')
const connectionString = 'postgresql://postgres:password@db:5432/people'

const client = new Client({
	connectionString: connectionString
})
var app = express();

client.connect().catch((err) => {
	console.log(err);
});


app.get('/people', (req, res) => {
	console.log('searching people');
	client.query('Select * from people', (err, result)=>{
		res.send(result.rows);
	})
});

app.get('/', (req, res) => {
	console.log('hitting root context');
	res.send("I'm working");
});

app.listen(3000);
