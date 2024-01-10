const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.connect(process.env.DATABASE_URL).then((data) => {
    console.log("DataBase Connected to host: " + data.connection.host);
  });
};

module.exports = connectDatabase;
