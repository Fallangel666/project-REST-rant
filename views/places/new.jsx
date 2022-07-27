const React = require('react')
const Def = require('../default')

function new_form () {
    return (
        <Def>
          <main>
          <form method="POST" action="/places">
  <div>
    <label htmlFor="name">Place Name</label>
    <input id="name" name="name" required />
  </div>
  <div>
    <label htmlFor="pic">Place Picture</label>
    <input id="pic" name="pic" />
  </div>
  <div>
    <label htmlFor="city">City</label>
    <input id="city" name="city" />
  </div>
  <div>
    <label htmlFor="state">State</label>
    <input id="state" name="state" />
  </div>
  <div>
    <label htmlFor="cuisines">Cuisines</label>
    <input id="cuisines" name="cuisines" required />
  </div>
  <input type="submit" value="Add Place" />
</form>

          <form method="POST" action="/places">
  <div>
    <label htmlFor="name">Place Name</label>
    <input id="name" name="name" />
  </div>
</form>

          </main>
        </Def>
    )
}

module.exports = new_form
