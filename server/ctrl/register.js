'use strict'

const bcrypt = require('bcrypt')

const User = require('../models/User')

// module.exports.new = (req, res) => {
//   res.json('Register')
// }

module.exports.create = ({ session, body: { email, password }}, res, err) => {
  // console.log(session)
  User.findOne({ email })
    .then(user => {
      if (user) {
        res.json({ msg: 'User already exists!'})
      }
      else {
        return new Promise((reject, resolve) => {
          bcrypt.hash(password, 13, (err, hash) => {
            if (err) {
              reject(err)
            } else {
              console.log('This is a hash', hash)
              resolve(hash)
            }
          })
        })
      }
    })
    .then(hash => console.log(hash))
    .then(() => res.json( 'Registered successfully' ))
    .catch(err)
}
