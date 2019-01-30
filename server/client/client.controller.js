const db = require('../dataBase')
const model = require('./client.model')
const getComments = async (req, res) => {
  try {
    const result = await model.getComments(db)
    console.log(result)
    res.json({result, msg: 'comentarios retornados com sucesso'})
  } catch (err) {
    console.log(err)
  }
}
const saveComment = async (req, res) => {
  try {
    console.log(req.body)
    const result = await model.saveComment(db, req.body)
    console.log(result)
    res.json({result, msg: 'cadastrado com sucesso'})
  } catch (err) {
    console.log(err)
  }
}
module.exports = { saveComment, getComments }
