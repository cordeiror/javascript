function alerta(sucessCallBack, errorCallBack) {
    //alert('test');
    let msg = 'sucesso2';
    setTimeout(() => sucessCallBack(msg), 5000);
}

/*let alerta2 = new Promise(function(resolve, reject) {
    // the function is executed automatically when the promise is constructed
  
    // after 1 second signal that the job is done with the result "done"
    setTimeout(() => resolve("done"), 10000);
  });*/


function sucessCallback(msg){
    alert(msg);
}

function errorCallBack(){
    alert('error');
}
console.log('1');
alerta(sucessCallback, errorCallBack);
console.log('2')