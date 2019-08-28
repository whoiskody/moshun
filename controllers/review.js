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
const reviewApi = require('../models/review.js')
const artistApi = require('../models/artist.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const reviewRouter = express.Router({mergeParams: true})

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 

reviewRouter.post('/', (req, res) => {
  req.body.artistId = req.params.artistId
  reviewApi.addReview(req.body)
    .then(() => {
      res.redirect(`/artists/${req.params.artistId}`)
    })
})

reviewRouter.get('/:reviewId/edit', (req, res) => {
  reviewApi.getReviewByReviewId(req.params.reviewId)
    .then((review) => {
      res.render('reviews/editReviewForm', {review})
    })
})

reviewRouter.put('/:reviewId', (req, res) => {
  reviewApi.updateReview(req.params.reviewId, req.body)
    .then(() => {
      res.redirect(`/artists/${req.params.artistId}`)
    })
    .catch((err) => {
      res.send(err)
    })
})

reviewRouter.delete('/:reviewId', (req, res) => {
  reviewApi.deleteReview(req.params.reviewId)
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
  reviewRouter
}