// function prom() {
//     var pro = prompt().toLowerCase();
//     var promise = new Promise((resolve, reject) =>{
//         if (pro === 'hassan') {
//           resolve("Stuff worked!");
          
//         }
//         else {
//           reject(Error("It broke"));
//         }
//       });

//     promise.then(result => {
//         alert("Worked")
//         console.log(result)
//     })
//     .catch(error => {
//         console.log(error)
//     })
// }

// API is Application Programmable Interface 
// It is for application communication

// let prom = _ => {
    // Bad Practice
    // fetch(`https://jsonplaceholder.typicode.com/todos/`)
    // .then(result => {
    //     result.json()
    //     .then(result => {
    //         console.log(result)
    //     })
    // })
    // .catch(error => {
    //     console.log(error);
    // })
// this is called promise chaining
    // Better way
    // fetch(`https://jsonplaceholder.typicode.com/todos/`)
    // .then(result => result.json())
    // .then(result => console.log(result))
    // .catch(error => {
    //     console.log(error);
    // })
// }