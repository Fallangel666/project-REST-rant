const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img src='public/images/alex-munsell-auIbTAcSH6E-unsplash.jpg' ></img>
              </div>
              <div>
                Photo by Alex Musell <a href='https://unsplash.com/photos/auIbTAcSH6E'>Upslash</a>
              </div>
              <a href="/places">
  <button className="btn-primary">Places Page</button>
</a>

          </main>
      </Def>
    )
  }
  

module.exports = home
