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
      const artistId = req.params.artistId;
      res.render('albums/albums',{artistId, albums})
    })
    .catch((err) => {
      res.send(err)
    })
})

// albumRouter.post('/:artistId/album', (req, res) => {
//   req.body.artistId = req.params.artistId
//   console.log(req.body)
//   albumApi.addAlbum(req.body)
//     .then(() => {
//       res.send('Album item created')
//     })
//     .catch((err) => {
//       res.send(err)
//     })
// })

albumRouter.post('/', (req, res) => {
  req.body.artistId = req.params.artistId
  console.log(req.body)
  albumApi.addAlbum(req.body)
    .then(() => {
      res.redirect('/artists')
    })
})

albumRouter.get('/new', (req, res) => {
  let artistId =  req.params.artistId
  res.render('albums/newAlbumForm', {artistId})
})

albumRouter.get('/:albumId/edit', (req, res) => {
  albumApi.getAlbumByArtistId(req.params.artistId)
    .then((album) => {
      const artistId = req.params.artistId;
      res.render('albums/editAlbumForm/albums', {artistId, album})
    })
})

// albumRouter.get('/:albumId', (req, res) => {
//   albumApi.getAlbumByArtistId(req.params.albumId)
//     .then((album) => {
//       singleApi.getSingleByAlbumId(album._id)
//       .then((single) => {
//         res.render('albums/singleAlbum', {artistId, single})
//       })
//   })
// })

albumRouter.put('/:albumId', (req, res) => {
  albumApi.updateAlbum(req.params.artistId, req.body)
    .then(() => {
      res.redirect('/artists')
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
