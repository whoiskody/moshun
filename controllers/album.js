/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `templateApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const albumApi = require('../models/album.js')
const artistApi = require('../models/artist.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const albumRouter = express.Router({mergeParams: true})

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 

albumRouter.post('/', (req, res) => {
  req.body.artistId = req.params.artistId
  albumApi.addAlbum(req.body)
    .then(() => {
      res.redirect(`/artists/${req.params.artistId}`)
    })
}) 

albumRouter.get('/:albumId/edit', (req, res) => {
  albumApi.getAlbumByAlbumId(req.params.albumId)
    .then((album) => {
      res.render('albums/editAlbumForm',{album})
    })
})

albumRouter.put('/:albumId', (req, res) => {
  albumApi.updateAlbum(req.params.albumId, req.body)
    .then(() => {
      res.redirect(`/artists/${req.params.artistId}`)
    })
    .catch((err) => {
      res.send(err)
    })
})

albumRouter.delete('/:albumId', (req, res) => {
  albumApi.deleteAlbum(req.params.albumId)
    .then(() => {
      res.redirect(`/artists/${req.params.artistId}`)
    })
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  albumRouter
}
