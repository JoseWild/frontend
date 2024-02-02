import api from '@/services/api'

function obterTodos(){
    return new Promise((resolve, reject) => {
        return api.get('/clientes_enderecos')
            .then(response => resolve(response))
            .catch(error => reject(error));
    });
}

function obterPorId(id){
    return new Promise((resolve, reject) => {
        return api.get(`/clientes_enderecos/${id}`)
            .then(response => resolve(response))
            .catch(error => reject(error));
    });
}

function cadastrar(cliente){
    return new Promise((resolve, reject) => {
        return api.post(`/clientes_enderecos`, cliente)
            .then(response => resolve(response))
            .catch(error => reject(console.log(error)));
        
    });
}

function alterar(cliente){
    return new Promise((resolve, reject) => {
        return api.put(`/clientes_enderecos/${cliente.cli_id}`, cliente)
            .then(response => resolve(response))
            .catch(error => reject(error));
    });
}

function excluir(id){
    return new Promise((resolve, reject) => {
        return api.delete(`/clientes_enderecos/${id}`)
            .then(response => resolve(response))
            .catch(error => reject(error));
    });
}

export default {
    obterTodos,
    obterPorId,
    cadastrar,
    alterar,
    excluir
}