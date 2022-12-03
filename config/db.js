const mongoose = require('mongoose');

const connect = () => {
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(
        console.log("DB connect successfully!")
    ).catch((error) => {
        console.log("DB connection failed")
        console.log(error)
        process.exit(1)
    })
}

module.exports = connect;