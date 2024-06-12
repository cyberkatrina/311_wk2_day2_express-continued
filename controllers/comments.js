const comments = require('../data/comments')

const list = (req, res) => {
  res.json(comments)
}

const show = (req, res) => {
  res.json(comments[req.params.id - 1])
}

const create = (req, res) => {
  res.send('success')
  let id = comments.length
  req.body._id = id += 1
  req.body.postId = 1
  comments.push(req.body)
}

module.exports = { list, show, create }
