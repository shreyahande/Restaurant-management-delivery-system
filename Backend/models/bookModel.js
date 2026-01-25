import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    name: {type: String, required: true},
    phone: {type: String, required: true},
    date: {type: String, required: true},
    time: {type: String, required: true},
    people: {type: Number, required: true},
})

const bookModel = mongoose.models.Book || mongoose.model('Book', bookSchema);

export default bookModel;
