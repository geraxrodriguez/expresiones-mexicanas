const mongoose = require('mongoose')

const DichoSchema = new mongoose.Schema({
    dicho: {
        type: String,
        required: true,
    },
    actual: {
        type: String,
        required: true,
    },
    literal: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('Dicho', DichoSchema)

// Define a model using the schema
// Mongoose will look for a collection named 'books' by default
// const Book = mongoose.model('Book', bookSchema);
// If you want to specify a different collection name, you can do so
// const CustomBook = mongoose.model('CustomBook', bookSchema, 'my_books');
// In this example, Mongoose will use the 'my_books' collection instead of the default 'custombooks'


// {
//     "_id": {"$oid":"6577e7c6849d5fdde1e00d62"},
//     "dicho": "darle vuelo a la hilacha",
//     "actual": "to allow a desire to come true",
//     "literal": "give flight to the thread"
// }