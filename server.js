// npm modules
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// app modules
const dbHelpers = require('db/helpers.js')

// constants
const PORT = 3003



// serves static assets from /static folder
app.use(express.static('static'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))



// API
app.post('/api/award-a-student', (req, res) => {
  // TODO: award a student in the DB
  // body: {
  //   studentId: INT,
  //   awardId: INT
  // }

  res.json({ status: 200, msg: 'Student awarded successfully' })
})

app.post('/api/suggest-an-award', (req, res) => {
  // TODO: insert the award into DB
  // body: {
  //   title: STRING,
  //   description: STRING,
  //   pts: INT
  // }

  res.json({ status: 200, msg: 'Award suggestion received successfully.' })
})


// HTML
app.get('/*', (req, res) => {
  res.render('index.html', {data: data})
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
