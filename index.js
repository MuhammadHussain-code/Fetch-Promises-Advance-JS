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


// let prom = _=>{
//     fetch('https://jsonplaceholder.typicode.com/todos/')
//     .then(result => result.json())
//     .then(result => {
//         console.log(document.body.childNodes.values)
//         console.log(result[0])})
//     .catch(error => {
//       console.log(error)
//     }) 
//   }
//   prom()
//   console.log("hello")


// Async Await

// async function asd() {}

// let prom = async _ =>{
// try {
//   let responsejson = await fetch('https://jsonplaceholder.typicode.com/todos/');
//   let result = await responsejson.json(); 
//   console.log(result)
// }catch(err) {
//   console.log(err)
// }
  
// }

// (async _=> {
//   try {
//     let responsejson = await fetch('https://jsonplaceholder.typicode.com/todos/');
//     let result = await responsejson.json(); 
//     console.log(result)
//   }catch(err) {
//     console.log(err)
//   } 
// })()


let asd = new Promise((resolve, reject)=> {
  resolve(prom())
}); 
asd.then(_ => {
  console.log("hello")
})
