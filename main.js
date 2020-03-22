function gitFetch(){
    fetch("https://api.github.com/users")
    .then(function(response) { 
        
        return response.json()
    })
    .then(function (data)
    {
       // console.log(data);
            const result = document.getElementById('result');
            for(let i = 0; i < data.length; i++ ){
          
             const output = document.createElement('div');
             
             output.classList.add('container');
             const name = document.createElement('div');
              name.innerText = data[i].login;
              output.appendChild(name);
             
             const image = document.createElement('img');
             image.setAttribute("src" , data[i]['avatar_url']);
             image.setAttribute("height","300");
             image.setAttribute("width" , "300");
             image.classList.add('image');

             output.appendChild(image);
             result.appendChild(output);
            }
    })


}
gitFetch();