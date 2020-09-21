require('dotenv').config()
const {MongoClient} = require('mongodb')
const ObjectID = require('mongodb').ObjectID

let client

function connect(locals) {

    console.log("Connecting")
    const uri = `mongodb+srv://Hloveday99:${process.env.DB_PASSWORD}@cluster0.i2ar2.mongodb.net/<dbname>?retryWrites=true&w=majority`

    client = new MongoClient(uri,{useUnifiedTopology: true})

    return client.connect()
    .then((connection) => {
        
        locals.collectionUsers = connection.db(`${process.env.DB_DATABASE}`).collection('users')
    })
    .catch(err => {
        console.log(err.message)
        process.exit()
    })

}

function close() {
    client.close()
}

module.exports.connect = connect
module.exports.close= close