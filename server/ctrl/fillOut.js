'use strict'

const UserBio = require('../models/UserBio')

module.exports.new = (req, res, err) => {
  let email = req.session.email
  console.log('Session', email)
  res.json({ email })
}

module.exports.create = ({ body }, res, err) => {
  UserBio.findOne({ email })
  .then(userBio => {
    if (!userBio) {
      console.log(body)
      // UserBio.create()
    }
  })
}
