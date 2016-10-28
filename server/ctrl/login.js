'use strict'

const bcrypt = require('bcrypt')

const User = require('../models/User')

module.exports.index = (req, res, err) => {
  let email = req.session.email
  res.json(email)
}

module.exports.create = ({ session, body: { email, password }}, res, err) => {
  let resolvedUser
  User.findOne({ email })
    .then(user => {
      if (user) {
        return new Promise((resolve, reject) => {
          bcrypt.compare(password, user.password, (err, matches) => {
            if (err) {
              reject(err)
            } else {
              resolvedUser = user
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
        session.email = email
        res.json(resolvedUser)
      } else {
        res.json({ msg: 'Email or password is incorrect' })
      }
    })
    .catch(err)
}
