const people = [
    {
        id: 1,
        name: "John Doe",
        age: 30,
        occupation: "Software Engineer",
        contact: {
            email: "john.doe@example.com"
        },
        address: {
            street: "123 Main St",
            city: "San Francisco",
            state: "CA",
            zip: "94105"
        },
        social: {
            twitter: "@johndoe"
        },
        hobbies: ["Coding", "Hiking", "Photography"]
    },
    {
        id: 2,
        name: "Jane Smith",
        age: 25,
        occupation: "Graphic Designer",
        contact: {
            email: "jane.smith@example.com",
            phone: "987-654-3210"
        },
        hobbies: ["Drawing", "Traveling"]
    },
    {
        id: 3,
        name: "Mark Johnson",
        age: 40,
        occupation: "Marketing Manager",
        contact: {
            email: "mark.johnson@example.com",
            phone: "123-456-7890"
        },
        address: {
            street: "789 Oak St",
            city: "Chicago",
            state: "IL",
            zip: "60607"
        },
        hobbies: ["Running", "Golf"]
    }
];

// people.map(a=>{
//     const sentence=`the person name is: ${a.name} and city: ${a.address?.city || "N/A"} `
//     console.log(sentence)
// })

const boyos=people.find(a=>a.age===40);
console.log(boyos)
