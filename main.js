//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
function faveDishes(){
    for(let i in person3){
        if(Array.isArray(person3[i])){
            for(j of person3[i]){
                if(typeof j === 'object'){
                    for(let k in j){
                        console.log(j[k])
                    }
                } else {
                    console.log(j)
                }
            }
        } else {
            console.log(person3[i])
        }
        
    }
    }
faveDishes()


       

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

class Person{
    constructor(name, age){
        this.age = age;
        this.name = name;
    }

    printInfo=()=> {
        return `Name: ${this.name} \nAge: ${this.age}`
    }

    ageUp=(x=1)=>{
        this.age +=x
    } 
}

let Klhee = new Person('Klhee', 32)
let Justin = new Person('Justin', 33)

console.log(Klhee.printInfo())
Klhee.ageUp()
console.log(Klhee.printInfo())
Justin.ageUp(3)
console.log(Justin.printInfo())
// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
//

// Create a Promised based function that will check a string to determine if it's length is greater than 10.
// If the length is greater than ten console log "Big word". 
// If the length of the string is less than 10 console log "Small Number"

const isBigString = (sentence) => {
    return new Promise ((resolve, reject) => {
        if((sentence).length > 10){
            resolve(true)
        } else {
            reject(false)
        }
    })
}

isBigString("Hello my")

.then((result) => {
    console.log("Big word")
})
.catch( (error) => {
    console.log("Small Number")
})
