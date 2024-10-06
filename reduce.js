const number=[1,2,3,4];

// const result=number.reduce((previous,current)=>previous*current,2);
// console.log(result)

const obj=[{a:1},{a:2},{a:3},{a:4}]

const result=obj.reduce((prev,current)=>prev*current.a,1)
console.log(result)

// arryName.reduce((previous,current)=>precious+current,0);