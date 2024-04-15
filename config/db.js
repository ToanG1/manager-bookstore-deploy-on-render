require('dotenv').config();
module.exports = {
    DB: {
        URL: process.env.PRODUCTION_DATABASE_URL || "mongodb://localhost:27017/bookstore",
        CONFIG: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    }
};
