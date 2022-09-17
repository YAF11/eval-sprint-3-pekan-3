let user = ''

function listUsers (page) {
    const init = {
        method: 'GET',
    
    }
    // for (let x = 0; x < data.length; x++){

        fetch(`https://reqres.in/api/users?page=${page}`, init)
        .then(response => response.json())
        .then(response => {
            user = response.data
            console.log(user)
        })
        .catch(err => console(err))
    // }

    return 'Fetching List Users. . .'
}

function singleUser(id){
    const init = {
        method: 'GET',
        
    }

    fetch(`https://reqres.in/api/users/${id}`, init)
    .then(response => response.json())
    .then(response => { 
        first = response.data.first_name
        last = response.data.last_name
        contact = response.data.email
        console.log(`Hello!, My name is ${first} ${last}, you can contact me at ${contact} `)
    })
    .catch(err => console.log(err))
    

    return 'Fetching Single User'
}

function create () {
    let data = {
        "name": "morpheus",
        "job": "leader"
    }
    const init = {
        method: 'POST',
        body: JSON.stringify(data)
    }

    fetch(`https://reqres.in/api/users`, init)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.log(err))

    return data
}