/* 
 * Place all functions, classes, and/or DB schemas here for a single 
 * model.
 */

/* Step 1
 *
 * TODO: import mongoose connection
 * NOTE: skip this if you are not using mongoose
 *
 */
const mongoose = require('./connection.js')

/* Step 1 alternative
 *
 * TODO: make a global variable to act as an in memory database. 
 * NOTE: doing this WILL NOT persist your data and you will loose
 * your data once you stop running your server.
 *
 */

/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 *
 */
const ArtistSchema = new mongoose.Schema({
 name: {
   type: String,
   required: true
},
rating: {
  type: Number,
  min: 0,
  max: 5
},
category: String,
description: {
  type: String,
  required: true
},
imgLink: String
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const ArtistCollection = mongoose.model('Artist', ArtistSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
function getArtists() {
  return ArtistCollection.find()
}

function addArtist(artistObject){
  return ArtistCollection.create(artistObject)
}

function getArtist(artistId) {
  return ArtistCollection.findById(artistId)
}

function updateArtist(artistId, artistObject) {
  return ArtistCollection.findByIdAndUpdate(artistId, artistObject)
}

function deleteArtist(artistId) {
  return ArtistCollection.findByIdAndDelete(artistId)
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getArtists,
  addArtist,
  getArtist,
  updateArtist,
  deleteArtist
}
