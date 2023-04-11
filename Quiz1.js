//Javascript Test
//Just a quick test to test your javascript understanding.

/*1- What is ES6? A = It is an standard of programming language.
2- Name 3 examples of ES6 features. A = arrow functions, classes, template literals.
3- What is the difference between let and const?  the first difference is that "Let" can be redeclared  while "Const" can not be redeclared 
4- How do you access object values? Give 3 examples */

   //example 1 :  dot notation :

/*        const object = {
            name : "Abraham",
            lastName : "Velazquez",
            cel : "662 593 89 71"
        };

        console.log(object.cel);
        

    //example 2  : braket notation

    const object2 = {
        name : "Abraham",
        lastName : "Velazquez",
        cel : "662 593 89 71"
    };

    
    console.log(object2['name']);
    console.log(object2['lastName']);


    //example 3 : using a variable : 
    
    const object3 = {
        name : "Abraham",
        lastName : "Velazquez",
        cel : "662 593 89 71"
    };

    let lastName = object3.lastName;

    console.log(lastName);*/
    


/*5- What does setInterval and setTimeout do? both are similar, both execute some code afeter a set time, the difference is that,
    setInterval repeat its function as many times as you want just respecting the time gave, 
    setTimeout respect the time gave and after the time passed away the function is execute once. 
    
6- What are promises?
    it is a way to handle asynchronous operation, whit the promises we can handle the results when this take some time to complete or execute.Array
    normally we use resolve and reject.
7- Convert this async function to async/await*/
/*
getQuote().then((quote) => {
  console.log(quote);
}).catch(function(err) {
  console.log(err);
});

// after this line,

async function quoteFunction () {
    try {
        const quote = await getQuote();
        console.log(quote);

    }catch (err){
        console.log(err);

    }

}*/

/*8- Convert this code to arrow function.

function greeting(firstname, lastname) {
  return `Hello ${firstname} ${lastname}`;
}

// after this line,

const greeting1 = (firstname, lastName)=>  `Hello ${firstname} ${lastName} `


console.log(greeting("abraham", "velazquez"));
console.log(greeting1("abraham", "velazquez"));*/


/*9- Explain what a callback function is.
    it is an other function which is put inside other funcion like an argument that means one function inside other function
    how used this depends of the programer and his logic.

10- What does the functions pop and push do to an array?

    push : it adds some element to the array, to the end of the array
    pop : it removes some element of the array, the last element of the array

11- What is the expected answer to this code?*/

let string = "";
let object = { a: 1, b: 2, c: 3 };
for (let key in object) {
  string += object[key];
}
console.log(string);

/*
12- What data type would Array.map() and Array.filter() return?
13- What data type would Array.includes() and Array.some() return?
14- Write down the 4 main methods of rest api
15- What is the difference between JSON and a JavaScript object?*/