import api from "@/services/api";

function obterTodos() {
    return new Promise((resolve, reject) => {
        return api.get('/fluxodecaixa')
        .then( response => resolve(response))
        .catch(error => reject(error))
    })
}

function obterPorID(id) {
    return new Promise((resolve, reject) => {
        return api.get(`/fluxodecaixa/${id}`)
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
}

function adicionar(fluxo) {
    return new Promise((resolve, reject) => {
        return api.post('/fluxodecaixa/cadastro',fluxo)
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
}

function alterar(fluxo) {
    return new Promise((resolve, reject) => {
        return api.put(`/fluxodecaixa/alterar/${fluxo.flux_id}`, fluxo)
        .then ( response => resolve(response))
        .catch( error => reject(error))
    })
}

function excluir(id) {
    return new Promise((resolve, reject) => {
        return api.delete(`/fluxodecaixa/${id}`)
        .then(response => resolve(response))
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