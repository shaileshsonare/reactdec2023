// fetch("https://reqres.in/api/users?page=1&delay=3")
// .then(res => res.json())
// .then(res => console.log(res['data']))


async function getUsers() {
   
    var res = await fetch("https://reqres.in/api/users?page=2&delay=3")
    var data = await res.json()
    console.log(data['data'])
    
}

getUsers()



















/*

var dress = new Promise((res, err) => {

    console.log("Dress banana start ho gaya hai")

    setTimeout(() => {
        res("Dress is ready Tejas you can pickup dress")
    }, 8000)

})

var cake = new Promise((res, err) => {

    console.log("Cake banana start ho gaya hai")

    setTimeout(() => {
        res("Cake is ready Tejas you can pickup barbie cake")
    }, 4000)

})

var party = new Promise((res, err) => {

    console.log("Party ke liye khane pine ka arrangement start ho gaya hai")

    setTimeout(() => {
        res("Party ke liye sab kuch ready hai Tejas you can come and enjoy party")
    }, 2000)

})

dress.then(res => {
    console.log(res)
})

cake.then(res => {
    console.log(res)
})

party.then(res => {
    console.log(res)
})

*/