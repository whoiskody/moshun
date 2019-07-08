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
const singleApi = require('../models/single.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const singleRouter = express.Router({mergeParams: true})

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
singleRouter.get('/', (req, res) => {
  singleApi.getSingleByArtistId(req.params.artistId)
  .then((singles) => {
    const artistId = req.params.artistId;
    res.render('albums/singles',{artistId, singles})
  })
  .catch((err) => {
    res.send(err)
  })
})

singleRouter.post('/', (req, res) => {
  console.log(req.params)
  
  req.body.artistId = req.params.artistId
  console.log(req.body)
  singleRouter.post('/', (req, res) => {
    console.log(req.params)
    
    req.body.artistId = req.params.artistId
    console.log(req.body)
      })
      .catch((err) => {
        res.send(err)
    })
  })

    // singleRouter.post('/', (req, res) => {
//   req.body.singleId = req.params.singleId
//   console.log(req.body)
//   singleApi.addSingle(req.body)
//     .then(() => {
//       res.send('Single item created')
//     })
// })

// singleRouter.get('/new', (req, res) => {
//   let artistId =  req.params.artistId
//   res.render('albums/newSingleForm', {artistId})
// })

singleRouter.get('/:singleId/edit', (req, res) => {
  singleApi.getSingleByArtistId(req.params.artistId)
    .then((single) => {
      const artistId = req.params.artistId;
      res.render('singles/editSingleForm/singles', {artistId, single})
    })
})











singleRouter.put('/:singleId', (req, res) => {
  singleApi.updateSingle(req.params.artistId, req.body)
    .then(() => {
      res.redirect('/artists')
    })
})

singleRouter.delete('/:singleId', (req, res) => {
  singleApi.deleteSingle(req.params.singleId)
    .then((single) => {
      res.redirect('/singles', {artistId, single})
    })
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  singleRouter
}