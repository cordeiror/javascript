const LoadData = async () => {
    try{
        const url = 'https://jsonplaceholder.typicode.com/todos/1';
        const res = await fetch(url);
        const data = await res.json();
      //  data.then(data => console.log(data));

        return data;
        //console.log(data);
    }catch(err) {
        console.log(err);
    }

 

}

//let dataOk 
 LoadData().then( data => console.log(data));
//console.log(dataOk);

//sync await
/*const LoadData = async () => {
    try{
        const url = 'https://jsonplaceholder.typicode.com/todos/1';
        const res = await fetch(url);
        const data = await res.json();
    }catch(err) {
        console.log(err);
    }

    console.log(data);

} */

/*const url = 'https://jsonplaceholder.typicode.com/todos/1';
fetch(url)
    .then(res => {
        return res.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.error(err);
    })
    */