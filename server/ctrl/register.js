'use strict'

const bcrypt = require('bcrypt')

const User = require('../models/User')

module.exports.create = ({ body: { email, password }}, res, err) => {
  User.findOne({ email })
  .then(user => {
    if (user) {
      res.json({ msg: 'User already exists!'})
    }
    else {
      return new Promise((resolve, reject) => {
        bcrypt.hash(password, 13, (err, hash) => {
          if (err) {
            reject(err)
          } else {
            console.log('This is a hash', hash)
            resolve(hash)
          }
        })
      })
      .then(hash => User.create({ email, password: hash }))
      .then(() => res.json({ email, password }))
    }
  })
  .catch(err)
}
