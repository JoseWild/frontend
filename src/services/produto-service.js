import api from '../services/api';

function obterTodos(){
    return new Promise((resolve, reject) => {
        return api.get('/produtos')
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
}

function obterPorId(id){
    return new Promise((resolve, reject) => {
        return api.get(`/produtos/${id}`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
}

function cadastrar(produto){
    return new Promise((resolve, reject) => {
        return api.post(`/produtos`, produto)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
}

function alterar(produto){
    return new Promise((resolve, reject) => {
        return api.put(`/produtos/${produto.prod_id}`, produto)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
}

function excluir(id){
    return new Promise((resolve, reject) => {
        return api.delete(`/produtos/${id}`)
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