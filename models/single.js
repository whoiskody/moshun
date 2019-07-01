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
const SingleSchema = new mongoose.Schema({
  name: String,
  albumId: mongoose.Types.ObjectId
 })

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const SingleCollection = mongoose.model('Single', SingleSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
function getSingleByAlbumId(albumId) {
  return SingleCollection.find({albumId: albumId})
}

function addSingle(singleObject) {
  return SingleCollection.create(singleObject)
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getSingleByAlbumId,
  addSingle
}
