let user;
let userData;
let getUserId = (callback) => {
    setTimeout(() => {
        user = { email: 'ibra@gmail.com', name: 'Ibrahim', id: '1' }
        console.log(user)
        callback()
    }, 3000)
}

let getDataById = () => {

    setTimeout(() => {
        console.log(user.email)
        userData = [{ order: "mobile", customerId: 1, creationDate: "2022-02-02" }]
        console.log(userData)

    }, 1000)
}
getUserId(() => { getDataById() })