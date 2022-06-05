let user;
let userData;
let getUserId = () => {
    return new Promise((callback) => {
        setTimeout(() => {
            user = { email: 'ibra@gmail.com', name: 'Ibrahim', id: '1' }
            console.log(user)
            callback(user.email)
        }, 3000)
    })

}

let getDataById = () => {
    return new Promise(() => {
        setTimeout(() => {
            console.log(user.email)
            userData = [{ order: "mobile", customerId: 1, creationDate: "2022-02-02" }]
            console.log(userData)

        }, 1000)
    })

}
async function getData() {
    await getUserId()
    await getDataById()

}
getData()