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
albumRouter.get('/', (req, res) => {
  albumApi.getAlbumByArtistId(req.params.artistId)
    .then((albums) => {
      res.send('albums/albums')
    })
    .catch((err) => {
      res.send(err)
    })
})

albumRouter.post('/', (req, res) => {
  albumApi.addAlbum(req.params.artistId,req.body)
    .then(() => {
      res.redirect('/albums')
    })
    .catch((err) => {
      res.send(err)
    })
})

albumRouter.post('/:albumId/album', (req, res) => {
  req.body.albumId = req.params.albumId
  console.log(req.body)
  albumApi.addAlbum(req.body)
    .then(() => {
      res.send('Single item created')
    })
})

albumRouter.get('/new', (req, res) => {
  res.render('albums/newAlbumForm')
})

albumRouter.get('/:albumId/edit', (req, res) => {
  albumApi.getAlbumByArtistId(req.params.albumId)
    .then((album) => {
      res.render('albums/editAlbumForm', {album})
    })
})

albumRouter.get('/:albumId', (req, res) => {
  albumApi.getAlbumByArtistId(req.params.albumId)
    .then((album) => {
      singleApi.getSingleByAlbumId(album._id)
      .then((single) => {
        res.render('albums/singleAlbum', {album, single})
      })
  })
})

albumRouter.put('/:albumId', (req, res) => {
  albumApi.updateAlbum(req.params.albumId, req.body)
    .then(() => {
      res.redirect('/albums')
    })
})

albumRouter.delete('/:albumId', (req, res) => {
  albumApi.deleteAlbum(req.params.albumId)
    .then((album) => {
      res.redirect('/albums')
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
