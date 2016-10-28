'use strict'

const User = require('../models/User')
// const UserBio = require('../models/UserBio')

module.exports.index = ({ session: { email }}, res, err) => {
  User.findOne({ email })
  .then( user => {
    res.json(user)
  })
}

module.exports.create = ({ session, body }, res, err) => {
  let email = session.email
  console.log('fillout stuff', body, email)
  User.findOneAndUpdate({ email }, body, { upsert: true, new: true }, function(err, doc) {
    if (err) {
      console.log('Something went wrong')
    }
    console.log("DOC", doc)
    res.json(doc)
  })
  // User.findOneAndUpdate({ email }, {})
  // .then(userBio => {
  //   if (!userBio) {
  //     console.log(body)
  //     UserBio.create(body)
  //     .then(() => console.log('done'))
  //   }
  // })
  // .then(thing => res.json(thing))
  // .catch(err)
}
