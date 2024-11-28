
const mongoose = require('mongoose');
const User = require('./models/user'); 

mongoose.connect('mongodb://localhost:27017/testProjectDB')
  .then(() => {
    console.log('Connected to MongoDB');

    const newUser = new User({
      username: 'kimia123', 
      password: 'password123', 
      role: 'user', 
      name: 'Kimia',
      email: 'kimia@example.com',
      age: 23
    });

    return newUser.save();
  })
  .then(() => {
    return User.find();
  })
  .then(users => {
    console.log('Users:', users); 
    mongoose.connection.close(); 
  })
  .catch(err => {
    console.error('Error:', err);
    mongoose.connection.close(); 
  });
