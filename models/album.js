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
const AlbumSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  artistId: {
    type: String,
    required: true,
  }
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
function getAlbumByArtistId(artistId) {
  return AlbumCollection.find({artistId: artistId})
}

function addAlbum(albumObject) {
  //albumObject.artistId = artistId
  return AlbumCollection.create(albumObject)
}

function getAlbum(artistId) {
  return AlbumCollection.findById(artistId)
}

function updateAlbum(albumId, albumObject) {
  return AlbumCollection.findByIdAndUpdate(albumId, albumObject)
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
  getAlbumByArtistId,
  addAlbum,
  getAlbum,
  updateAlbum,
  deleteAlbum
}
