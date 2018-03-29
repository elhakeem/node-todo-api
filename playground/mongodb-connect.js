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

  // Insert one document into Todos collection
  /*db.collection("Todos").insertOne({
    title: 'To go to market',
    completed: true
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo', err)
    }
    console.log(JSON.stringify(result.ops, undefined, 4))
  })*/

  //Close the connection
  client.close();
})
