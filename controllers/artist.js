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
const artistApi = require('../models/artist.js')
const reviewApi = require('../models/review.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const artistRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
artistRouter.get('/', (req, res) => {
  artistApi.getAllArtists()
    .then((artists) => {
      res.render('artists/artists', {artists})
    })
    .catch((err) => {
      res.send(err)
    })
})

artistRouter.get('/new', (req, res) => {
  res.render('artists/newArtistForm')
})

artistRouter.post('/', (req, res) => {
  artistApi.addArtist(req.body)
    .then(() => {
      res.redirect('/artists')
    })
    .catch((err) => {
      res.send(err)
    })
})

artistRouter.get('/:artistId/edit', (req, res) => {
  artistApi.getArtist(req.params.artistId)
    .then((artist) => {
      res.render('artists/updateArtistForm', {artist})
    })
    .catch((err) => {
      res.send(err)
    })
})

artistRouter.delete('/:artistId', (req, res) => {
  artistApi.deleteArtist(req.params.artistId)
    .then(() => {
      res.redirect('/artists')
    })
    .catch((err) => {
      res.send(err)
    })
})

artistRouter.get('/:artistId', (req, res) => {
  artistApi.getArtist(req.params.artistId)
    .then((artist) => {
      reviewApi.getReviewByArtistId(artist._id)
        .then((review) => {
          res.render('artists/artist', {artist, review})
        })
        .catch((err) => {
          res.send(err)
        })
      .catch((err) => {
        res.send(err)
      })
    })
})

artistRouter.get('/:artistId/newReview', (req, res) => {
  artistApi.getArtist(req.params.artistId)
    .then((artist) => {
      res.render('reviews/newReviewForm', {artist})
    })
})

artistRouter.put('/:artistId', (req, res) => {
  artistApi.updateArtist(req.params.artistId, req.body)
    .then(() => {
      res.redirect(`/artists/${req.params.artistId}`)
    })
    .catch((err) => {
      res.send(err)
    })
})





/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  artistRouter
}