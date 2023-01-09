const mongoose = require('mongoose');

const connectionDB = () => {
    try {
        mongoose.set("strictQuery", false)
        const dbConStrictQuery = process.env.MONGODB_URL
        mongoose.connect(dbConStrictQuery, () => {
            console.log('DB Connection Successfully..!');
        })
    } catch (error) {
        console.error(error)
        process.exit(1);
    }
}

module.exports = { connectionDB };