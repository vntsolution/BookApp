// const mongoose = require("mongoose")

// // mongoose.connect("mongodb://127.0.0.1:27017/Demo")
// mongoose.connect("mongodb+srv://vntsolution02:HUQJlLRWxQQh9JnI@cluster0.ys2jhnv.mongodb.net/BooksDB")
//     .then(() => {
//         console.log("Databse connection Successfully")
//     })
//     .catch(() => {
//         console.log("helloddddddddddd")
//     });

const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connection = mongoose
  .connect(
    "mongodb+srv://vntsolution02:HUQJlLRWxQQh9JnI@cluster0.ys2jhnv.mongodb.net/BooksDB",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("DataBase Connection successfully");
  })
  .catch((err) => {
    console.log("hello world");
  });

module.exports = connection;

// mongodb+srv://dudhaTdarshangmailcom:5Fxt2hOXbK1A86O8@cluster0.nzjaafo.mongodb.net/hotel
