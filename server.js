// //put your constants here
// const express = require("express");
// const db = require("./config/connection");
// const routes = require("./routes");
// //port boilerplate
// const PORT = process.env.PORT || 3001;
// const app = express();
// //app.use
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(routes);
// //listen up!
// db.once("open", () => {
//   app.listen(PORT, () => {
//     console.log(`That's a good copy on port ${PORT}!`);
//   });
// });

const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
