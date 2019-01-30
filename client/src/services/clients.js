import axios from 'axios'

const get = async (id) => {
  const res = (await axios.get(`https://api.superlogica.net/v2/financeiro/clientes/${id}`, {headers: {'app_token': 'tVOs6cs7u4jU', 'access_token': '34EhgQBIfvTJ'}})).data
  return res
}
const create = async (values) => {
  const res = await axios.post('http://localhost:3000/api/comments', values)
  return res
}
const remove = async (id) => {
  const res = await axios.delete(`http://testfront.integrare.in/api/clients/${id}`)
  return res
}
const edit = async (values, id) => {
  values['_method'] = 'PATCH'
  const res = await axios.post(`http://testfront.integrare.in/api/clients/${id}`, values)
  return res
}

export default {
  create,
  get,
  edit,
  remove
}
