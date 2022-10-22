//require mongoose
const { connect, connection } = require("mongoose");
//mongoose boilerplate
const connectionString =
  process.env.MONGOD_URI || "mongodb://localhose:27017/socialDB";
//boilerplate mongoose reqs
connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//module.exports
module.exports = connection;
