const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShortenUrl = new Schema({
    urlId:{ type: String, required: true},
    theUrl: { type: String, required: true},
    createdAt: { type: Date, required: true}
});

const shortenUrl = mongoose.model('shortenUrl', ShortenUrl);

module.exports = shortenUrl;

module.exports.randomString = function(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}