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
// global.sampleModel = [];

/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 *
 */
const AlbumSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  artistName: String,
  rating: {
    type: Number,
    min: 0,
    max: 10
  },
  genre: String,
  imgLink: String,
  artistId: mongoose.Types.ObjectId
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const AlbumCollection = mongoose.model('Album', AlbumSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */

function getAlbumsByArtistId(artistId) {
  return AlbumCollection.find({artistId: artistId})
}

function addAlbum(newAlbum) {
  return AlbumCollection.create(newAlbum)
}

function getAlbumByAlbumId(albumId) {
  return AlbumCollection.findById(albumId)
}

function updateAlbum(albumId, updatedAlbum) {
  return AlbumCollection.findByIdAndUpdate(albumId, updatedAlbum)
}

function deleteAlbum(albumId) {
  return AlbumCollection.findByIdAndDelete(albumId)
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getAlbumsByArtistId,
  addAlbum,
  getAlbumByAlbumId,
  updateAlbum,
  deleteAlbum
}