const myinfo={
    name:'pagla',
    age:23,
    contact:{
        phone:233434324,
        email:'afjs@gmail.com'
    }
}
console.log(myinfo?.name?.age?.kad)

// const {contact:{email}}=myinfo
const {contact}=myinfo;
const {email}=contact
// console.log(email)

// for(let key in myinfo)
// {
//     console.log(myinfo[key])
// }