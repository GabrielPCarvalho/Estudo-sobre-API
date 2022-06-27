const url="http://localhost:5500/api"
const newUser = {
    name: "Gabriel Carvalho",
    avatar: "http://lorempixel.com.br/500/400/?2",
    city: "Rio do Sul"
}

const userUpdated = {
    name: "Marcia Freitas",
    avatar: "http://lorempixel.com.br/500/400/?2",
    city: "Marrocos"
}

function getUser() {
    axios.get(url)
    .then(response => {
        const data = response.data
        renderResults.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))
}

//getUser()

// ENVIAR INFORMAÇÃO PARA API ATRAVÉS DO AXIOS
function addNewUser() {
    axios.post(url, newUser)
    .then(response => {
        alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}

//addNewUser()

// ATUALIZAR INFORMAÇÕES NA API
function updateUser() {
    axios.put(`${url}/1`, userUpdated)
    .then(response => {
        alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}

updateUser()

// DELETAR USUARIOS
function deleteUser() {
    axios.delete(`${url}/17`)
    .then(response => {
        alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}

deleteUser()

// BUSCAR APENAS UM USUARIO
function getOneUser() {
    axios.get(`${url}/1`)
    .then(response => {
        const data = response.data
        renderResults.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))
}  

getOneUser()