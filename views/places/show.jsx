const React = require('react')
const Def = require('../default')

function show(data) {
    return (
<Def>
<main>
  <div className="row">
    <div className="col-sm-6">
      <img src={data.place.pic} alt={data.place.name} />
      <h3>
        Located in {data.place.city}, {data.place.state}
      </h3>
    </div>
    <div className="col-sm-6">
      ...
      <h2>
        Description
      </h2>
      <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                <button type="submit" className="btn btn-danger">
                    Delete
                </button>
                </form>
      ...
  </div>
  </div>
</main>
</Def>
)
}

module.exports = show


