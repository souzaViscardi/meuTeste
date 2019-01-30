const saveComment = async (db, data) => {
  try {
    console.log(data)
    const query = `insert into observacoes.comentarios (usuario, texto, client_id) values ("${data.user}", "${data.comments}", "${data.id}")`
    const result = await db.query(query)
    console.log(result)
    return result
  } catch (err) {
    return err
  }
}
const getComments = async (db) => {
  try {
    const query = 'select * from observacoes.comentarios'
    const result = await db.query(query)
    console.log(result)
    return result
  } catch (err) {
    return err
  }
}
const getClient = () => {

}
module.exports = { saveComment, getComments, getClient }
