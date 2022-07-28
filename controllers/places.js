const router = require('express').Router()

router.get('/', (req, res) => {
  res.send('GET /places')
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('places/show', { place: places[id] })

  }
  else {
    res.render('places/show')
  }
})


module.exports = router
