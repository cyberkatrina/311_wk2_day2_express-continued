const products = require('../data/products')

const list = (req, res) => {
  res.json(products)
}

const show = (req, res) => {
  res.json(products[req.params.id - 1])
}

const create = (req, res) => {
  res.send('success')
  let id = products.length
  req.body._id = id += 1
  products.push(req.body)
}

module.exports = { list, show, create }