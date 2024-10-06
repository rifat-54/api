const myinfo={
    name:'pagla',
    age:23,
    subject:['bangla','english','math']
}

const sentence=`amr name ${myinfo.name} ame age ${myinfo.age} 
my subject => ${myinfo.subject.map(a=>a).join(' ')}`
console.log(sentence)