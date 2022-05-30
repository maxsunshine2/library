import mongoose from 'mongoose';

var Schema = mongoose.Schema;

var GenreSchema = new Schema({
    name: { type: String, min: 3, max: 100, required: true }

});

GenreSchema
    .virtual('url')
    .get(function() {
        return `/catalog/genre/${this._id}`;
    });

export default mongoose.model('Genre', GenreSchema);