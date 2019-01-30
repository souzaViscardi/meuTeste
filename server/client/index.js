const controller = require('./client.controller')
module.exports = (app) => {
  app.post('/api/comments', controller.saveComment)
  app.get('/api/comments', controller.getComments)
}
