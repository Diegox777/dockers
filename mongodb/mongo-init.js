// create database
db = db.getSiblingDB('docker');

// db = db.getSiblingDB('aea');

// create user for database
db.createUser({
  user: 'diegox',
  pwd: 'qwerty',
  roles: [{ role: 'readWrite', db: 'docker' }]
});

// db.createUser({
//   user: 'pepe',
//   pwd: 'qwerty',
//   roles: [{ role: 'readWrite', db: 'aea' }]
// });

// create collection
// db.createCollection('products');
