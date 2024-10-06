const people = [
    {
      id: 1,
      name: "John Doe",
      age: 30,
      occupation: "Software Engineer",
      contact: {
        email: "john.doe@example.com",
      },
      address: {
        street: "123 Main St",
        city: "San Francisco",
        state: "CA",
        zip: "94105",
      },
      social: {
        twitter: "@johndoe",
      },
      hobbies: ["Coding", "Hiking", "Photography"],
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 25,
      occupation: "Graphic Designer",
      contact: {
        email: "jane.smith@example.com",
        phone: "987-654-3210",
      },
      hobbies: ["Drawing", "Traveling"],
    },
    {
      id: 3,
      name: "Mark Johnson",
      age: 40,
      occupation: "Marketing Manager",
      contact: {
        email: "mark.johnson@example.com",
        phone: "123-456-7890",
      },
      address: {
        street: "789 Oak St",
        city: "Chicago",
        state: "IL",
        zip: "60607",
      },
      hobbies: ["Running", "Golf"],
    },
  ];
  
//  start here

const peopleList=document.getElementById('people-list');
const people1=(person)=>{
    person.map(a=>{
        const li=document.createElement("li");
        li.classList.add('text-2xl','font-bold','cursor-pointer')
        li.innerText=a.name;
        peopleList.appendChild(li);
    
        li.addEventListener('click',()=>{
            handlar(a.id);
        })
    })
}

const personInfo=document.getElementById('person-info')

const showText=(person)=>{
    personInfo.classList.remove('hidden');
    document.getElementById('no-selection').classList.add('hidden')
    personInfo.innerHTML=`
    <h2>${person.name}</h2>
    <p>${person?.contact?.phone || "N/A"}</p>
    <p>${person?.address?.city ||"N/A"}</p>
    <p>Hobbies:  ${person?.hobbies?.map(a=>a)}</p>
    `
}

const handlar=(id1)=>{
    const findperson=people.find(a=>a.id==id1);
    showText(findperson);
}

people1(people);






