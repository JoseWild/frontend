import api from '@/services/api'

function obterTodos(){
    return new Promise((resolve, reject) => {
        return api.get('/clientes')
            .then(response => resolve(response))
            .catch(error => reject(error));
    });
}

function obterPorId(id){
    return new Promise((resolve, reject) => {
        return api.get(`/clientes/${id}`)
            .then(response => resolve(response))
            .catch(error => reject(error));
    });
}

function cadastrar(cliente){
    return new Promise((resolve, reject) => {
        return api.post(`/clientes`, cliente)
            .then(response => resolve(response))
            .catch(error => reject(console.log(error)));
        
    });
}

function alterar(cliente){
    return new Promise((resolve, reject) => {
        return api.put(`/clientes/${cliente.cli_id}`, cliente)
            .then(response => resolve(response))
            .catch(error => reject(error));
    });
}

function excluir(id){
    return new Promise((resolve, reject) => {
        return api.delete(`/clientes/${id}`)
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