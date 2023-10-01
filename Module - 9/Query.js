use ('test')

// 1. Creating a new collection
db.createCollection("users")
db.createCollection("demo")


// 2. Removing a collection from the database
db.demo.drop()


// 3. Inserting a single document into the collection
db.user.insertOne({
  name:"Radia", 
  email:"radia@gmail.com",
  age:26,
  role:1,
})

db.user.insertOne({
  name:"Jesmin", 
  email:"jesmin@gmail.com",
  age:25,
  role:0,
})


// 4. Delete a single document from the collection
db.user.deleteOne({email:"jesmin@gmail.com"})
