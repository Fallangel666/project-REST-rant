const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img src="/public/images/homeimage.jpg" />
              </div>
              <div>
                Photo by Alex Musell <a href='https://unsplash.com/photos/auIbTAcSH6E'>Upslash</a>
              </div>
              <a href="/places/index.jsx">
  <button className="btn-primary">Places Page</button>
</a>

          </main>
      </Def>
    )
  }
  

module.exports = home
