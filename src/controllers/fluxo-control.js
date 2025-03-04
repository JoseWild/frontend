import api from "@/services/api";

function obterTodos() {
    return new Promise((resolve, reject) => {
        return api.get('/fluxodecaixa')
        .then( response => resolve(response))
        .catch(error => reject(error))
    })
}

function adicionar(fluxodecaixa) {
    return new Promise((resolve, reject) => {
        return api.post('/fluxodecaixa/cadastro',fluxodecaixa)
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
}

function alterar(fluxodecaixa) {
    return new Promise((resolve, reject) => {
        return api.put(`/fluxodecaixa/alterar/${fluxodecaixa.flux_id}`, fluxodecaixa)
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
    adicionar,
    alterar,
    excluir
}