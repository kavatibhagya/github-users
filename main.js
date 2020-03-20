function gitFetch(){
    fetch("https://api.github.com/users")
    .then(function(response) { 
        
        return response.json()
    })
    .then(function (data){
       // console.log(data);
       for(let i = 0; i < data.length; i++ ){
        console.log(data[i].login);
       }
    })


}
gitFetch();