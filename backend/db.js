const mongoose = require('mongoose');

mongoURI = "mongodb://localhost:27017/user?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

const connect_to_mongo =()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log('connect successfully to mongoDB')
    })
}

module.exports = connect_to_mongo;
