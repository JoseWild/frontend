import api from "@/services/api";


function obterTodos() {
    return new Promise((resolve, reject) => {
        return api.get('/clientes')
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
}

function obterPorID(id) {
    return new Promise((resolve, reject) => {
        return api.get(`/clientes/${id}`)
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
}

function adicionar(cliente) {
    return new Promise((resolve, reject) => {
        return api.post(`/cliente`, cliente)
        .then(response =>  resolve(response)) 
        .catch(error => reject(error))
    })
}

function obterID() {
    return new Promise((resolve, reject) => {
        return api.get(`/clienteid`)
        .then (response => resolve(response))
        .catch (error => reject(error))
    })
}

export default { 
    obterTodos,
    obterPorID,
    adicionar,
    obterID
}