import api from '@/services/api';

function obterTodos() {
    return new Promise((resolve, reject) => {
        return api.get('/empresas')
        .then( response => resolve(response))
        .catch(error => reject(error))
    })
}

function obterPorID(id) {
    return new Promise((resolve, reject) => {
        return api.get(`/empresa/${id}`)
        .then( response => resolve(response))
        .catch(error => reject(error))
    })
}

function adicionar(empresa) {
    return new Promise((resolve, reject) => {
        return api.post(`/empresa/cadastro`, empresa)
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
}

function alterar(empresa) {
    return new Promise((resolve, reject) => {
        return api.put(`/empresa/alterar/${empresa.emp_id}`, empresa)
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
}

function excluir(id) {
    return new Promise((resolve, reject) => {
        return api.delete(`/empresas/excluir/${id}`)
        .then(response => resolve(response) )
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