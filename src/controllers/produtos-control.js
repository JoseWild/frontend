import api from "@/services/api";

function obterTodos() {
    return new Promise((resolve, reject) => {
        return api.get('/produtos')
        .then (response => resolve(response))
        .catch(error => reject(error))
    })
}

function obterPorID(id) {
    return new Promise((resolve, reject) => {
        return api.get(`/produto/${id}`)
        .then (response => resolve(response))
        .catch(error => reject(error))
    })
}


function adicionar(produto) {
    return new Promise((resolve, reject) => {
        return api.post(`/produto/cadastro`, produto)
        .then (response => resolve(response))
        .catch(error => reject(error))
    })
}

function alterar(produto) {
    return new Promise((resolve, reject) => {
        return api.put(`/produto/alterar/${produto.prod_id}`, produto)
        .then (response => resolve(response))
        .catch(error => reject(error))
    })
}


function excluir(id) {
    return new Promise((resolve, reject) => {
        return api.delete(`/produtos/excluir/${id}`)
        .then (response => resolve(response))
        .catch(error => reject(error))
    })
}

export default {
    obterTodos,
    obterPorID,
    adicionar,
    alterar,
    excluir
}