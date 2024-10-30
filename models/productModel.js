import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    title: String,
    author: String,
    publishedDate: String,
    pages: Number,
    coverImage: String,
    description: String
});

export default mongoose.model('Product', productSchema);