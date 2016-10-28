'use strict'

const BoardRoster = require('../models/BoardRoster')

module.exports.index = (req, res, err) => {
  console.log(req.session)
  res.json(req.session.email)
}

// module.exports.new = (req, res, err) => {
//
// }
//
// module.exports.create = (req, res, err) => {
//
// }
