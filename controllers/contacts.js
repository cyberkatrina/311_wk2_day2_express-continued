const contacts = require('../data/contacts')

const list = (req, res) => {
  res.json(contacts)
}

const show = (req, res) => {
  res.json(contacts[req.params.id - 1])
}

const create = (req, res) => {
  res.send('success')
  let id = contacts.length
  req.body._id = id += 1
  contacts.push(req.body)
}

module.exports = { list, show, create }
