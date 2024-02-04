const { MongoClient } = require('mongodb');

// const url = 'mongodb://yourAdminUsername:yourAdminPassword@localhost:27017/admin';
const url = 'mongodb://yourAdminUsername:yourAdminPassword@localhost:27017/test';
const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    console.log('Connected successfully to server');
    // Perform operations...
  } finally {
    await client.close();
  }
}
run().catch(console.dir);