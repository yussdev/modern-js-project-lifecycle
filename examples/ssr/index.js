const { createElement, Fragment } = require('react')
const { renderToString } = require('react-dom/server')
const express = require('express')
const { Ellipsis, Ring, Ripple } = require('test-repo')

const port = 3000
const app = express()

app.get('*', (req, res) => {
  const html = renderToString(
    createElement(
      Fragment,
      null,
      createElement(Ellipsis),
      createElement(Ring),
      createElement(Ripple)
    )
  )
  res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <title>CJS Example</title>
    </head>
    <body>
        ${html}
    </body>
    </html>`)
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
