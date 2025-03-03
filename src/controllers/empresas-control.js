import api from '@/services/api';

function obterTodos() {
    return new Promise((resolve, reject) => {
        return api.get('/empresas')
        .then( response => resolve(response))
        .catch(error => reject(error))
    })
}

function obterCnpj() {
    return new Promise((resolve, reject) => {
        return api.get(`/empresas/{$cnpj}`)
        .then( response => resolve(response))
        .catch(error => reject(error))
    })
}

function Insert(empresa) {
    return new Promise((resolve, reject) => {
        return api.post(`/empresa`, empresa)
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
}

function Update(empresa) {
    return new Promise((resolve, reject) => {
        return api.put(`/empresa/{$empresa.emp_id}`, empresa)
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
}

function Delete(id) {
    return new Promise((resolve, reject) => {
        return api.delete(`/empresa/{$id}`, id)
        .then(response => resolve(response) )
        .catch(error => reject(error))
    })
}

export default { 
    obterTodos,
    obterCnpj,
    Insert,
    Update,
    Delete
}