const mongoose = require('mongoose')
const Schema =  mongoose.Schema

const FeedSchema = new Schema({
    name : {
        type : String,
        required: true,
        maxLength: [15,"Name should be less than 15 characters"]
    },
    message : {
        type : String,
        required: true,
        maxLength: [40,"Message should be less than 40 characters"]
    }
},{timestamps:true})

const FEED = mongoose.model('FEED',FeedSchema)

module.exports = {
    FEED
}