// //require mongoose
// const { connect, connection } = require("mongoose");
// //mongoose boilerplate
// const connectionString =
//   process.env.MONGOD_URI || "mongodb://localhost:27017/studentsDB";
// //boilerplate mongoose reqs
// connect(connectionString, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// //module.exports
// module.exports = connection;

const { connect, connection } = require('mongoose');

const connectionString =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/socialDB';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;