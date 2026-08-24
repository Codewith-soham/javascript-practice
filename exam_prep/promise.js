//promise -> object that represents the result of operation thay may complete now or in future

const result = new Promise((resolve,reject) => {
    const success = true

    if(success){
        resolve("task completed")
    }
    else {
        reject("task not completed")
    }
})

result
    .then((message) => {
        console.log(message);
    })
    .catch((message) => {
        console.log(message);  
    })   