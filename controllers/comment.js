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
const commentApi = require('../models/comment.js')
const artistApi = require('../models/artist.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const commentRouter = express.Router({mergeParams: true})

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 

commentRouter.get('/', (req, res) => {
  commentApi.getCommentByArtistId(req.params.artistId)
  .then((comments) => {
    artistApi.getArtist(req.params.artistId)
      .then((artist) => {
        res.render('comments/comments',{comments, artist})
      })
  })
})

commentRouter.post('/', (req, res) => {
  req.body.artistId = req.params.artistId
  commentApi.addComment(req.body)
    .then(() => {
      res.redirect(`/artists/${req.params.artistId}/comments`)
    })
})

commentRouter.get('/new', (req, res) => {
  artistApi.getArtist(req.params.artistId)
    .then((artist) => {
      res.render('comments/newCommentForm', { artist })
    })
})

commentRouter.delete('/:commentId', (req, res) => {
  commentApi.deleteComment(req.params.commentId)
    .then(() => {
      res.redirect(`/artists/${req.params.artistId}/comments`)
    })
})

commentRouter.get('/:commentId/edit', (req, res) => {
  commentApi.getCommentByCommentId(req.params.commentId)
    .then((comment) => {
      res.render('comments/editCommentForm', { comment })
    })
})

commentRouter.put('/:commentId', (req, res) => {
  commentApi.updateComment(req.params.commentId, req.body)
    .then(() => {
      res.redirect(`/artists/${req.params.artistId}/comments`)
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
  commentRouter
}
