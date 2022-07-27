const React = require('react')
const Def = require('../default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <div>
                <img scr='public/images/mikhail-vasilyev-NodtnCsLdTE-unsplash.jpg'></img>
              </div>
              <div>Photo by Mikhal Vasilyev<a href='https://unsplash.com/photos/NodtnCsLdTE'></a>Upslash</div>
              <p>Oops, sorry, we can't find this page!</p>
          </main>
      </Def>
    )
  }
  

module.exports = error404
