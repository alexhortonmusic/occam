'use strict'

const bcrypt = require('bcrypt')

const User = require('../models/User')

module.exports.create = ({ session, body: { email, password }}, res, err) => {
  User.findOne({ email })
    .then(user => {
      if (user) {
        return new Promise((resolve, reject) => {
          bcrypt.compare(password, user.password, (err, matches) => {
            if (err) {
              reject(err)
            } else {
              resolve(matches)
            }
          })
        })
      } else {
        res.json({ msg: 'Account does not exist' })
      }
    })
    .then(matches => {
      if (matches) {
        session.email = email;
        res.json('signed in!')
      } else {
        res.json('Password does not match')
      }
    })
    .catch(err)
}
