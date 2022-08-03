const React = require('react')
const Def = require('./default')

function index(data) {
    let placesFormatted = data.places.map((place, index) => {
        return (
            <div key={'index'} className="col-sm-6">
                <h2>
                  <a href={/places/`${place.id}`}>
                  {place.name}</a></h2>
                <img src={place.pic} alt={place.name} />
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>Places to Rant or Rave About</h1>
                <div className="row">
                    {placesFormatted}
                </div>
            </main>
        </Def>
    )
}

let placesFormatted = data.places.map((place, index) => {
    return (
      <div className="col-sm-6">
        <h2>
          <a href={`/places/${index}`} >
            {place.name}
          </a>
        </h2>
        <p className="text-center">
          {place.cuisines}
        </p>
        <img src={place.pic} alt={place.name} />
        <p className="text-center">
          Located in {place.city}, {place.state}
        </p>
      </div>
    )
  })
  

res.render('places/index', { places })

let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'public/images/kyle-johnson-TEZZzuQTt8g-unsplash.jpg'
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: 'public/images/ishan-seefromthesky-TobZaa8ZwI4-unsplash.jpg'
}]







