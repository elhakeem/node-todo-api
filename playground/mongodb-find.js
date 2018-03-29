//Require MongoClient & ObjectID property from mongodb object as a new constant with the same names;
const {MongoClient, ObjectID} = require('mongodb');


//Connect to database 'TodoApp' if exist, if isn't create new one with the same name and connect to it
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

  //if there are some error in connection
  if (err) {
    console.log('Unable to connect to mongodb server')
  //if connected successfully
  } else {
    console.log('Connected to mongodb server')
  }

  //Navigate to TodoApp Database
  const db = client.db('TodoApp')

  db.collection('Todos').count().then((count) => {
    console.log("Todos: " + count);
  }, (err) => {
    console.log('Unable to fetch todos', err);
  })

  //Close the connection
  client.close();
})
