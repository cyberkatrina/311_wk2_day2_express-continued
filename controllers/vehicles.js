const vehicles = require('../data/vehicles')

const list = (req, res) => {
  res.json(vehicles)
}

const show = (req, res) => {
  res.json(vehicles[req.params.id - 1])
}

const create = (req, res) => {
  res.send('success')
  let id = vehicles.length
  req.body._id = id += 1
  vehicles.push(req.body)
}

module.exports = { list, show, create }