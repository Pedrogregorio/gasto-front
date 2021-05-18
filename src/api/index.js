import axios from 'axios'
const api = axios.create({
	baseURL: 'http://10.0.0.104:3000/api/v1'
})

export default {
  async inicio(){
    try {
      return await api.get('/inicio') 
    } catch (error) {
      return error
    }
  },
  
  async listarAjuda(){
    try {
      return await api.get('/historico') 
    } catch (error) {
      return error
    }
  },

  async detalheConta(id){
    try {
      return await api.post('/historico/conta/detalhamento/', {id: id})
    } catch (error) {
      return error
    }
  },

  async pagarContaBanco(request){
    try {
      return await api.post('/desativar_conta', request)
    } catch (error) {
      return error  
    }
  },

  async adicionarContaBanco(request){
    try {
      return await api.post('/add_conta', request)
    } catch (error) {
      return error
    }
  },
  
  async adicionarAjudaBanco(request){
    try {
      return await api.post('/add_ajuda', request)
    } catch (error) {
      return error
    }
  }
}