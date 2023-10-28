// create database
db = db.getSiblingDB('docker');

// db = db.getSiblingDB('aea');

// create user for database
db.createUser({
  user: 'diegox',
  pwd: 'qwerty',
  roles: [{ role: 'dbOwner', db: 'docker' }]
});

db.createCollection('tuvieja')