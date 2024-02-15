const mongoose = require("mongoose")

// mongoose.connect("mongodb://127.0.0.1:27017/Demo")
mongoose.connect("mongodb+srv://vntsolution02:HUQJlLRWxQQh9JnI@cluster0.ys2jhnv.mongodb.net/BooksDB")
    .then(() => {
        console.log("Databse connection Successfully")
    })
    .catch(() => {
        console.log("helloddddddddddd")
    });
