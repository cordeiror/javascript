let p = new Promise((resolve, reject) => {
    
    //resolve('sucesso');
    setTimeout(() => resolve("sucesso"), 5000);
    setTimeout(() => reject(new Error("ueppaa")), 10000);

})

console.log('antes promisse')
p.then((message) => {
    alert(message);
})
console.log('depois promisse')

