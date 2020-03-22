function myGitFetch() {
    fetch("https://api.github.com/users/kavatibhagya")
    .then(response => response.json())
    .then(data => 
        {
            const myData = document.getElementById('myData');
            const myname = document.createElement('div');
            myname.innerText = data.name;
            myname.classList.add('name');
            myData.appendChild(myname);

            const loginId = document.createElement('div');
            loginId.innerText = data.login;
            myData.appendChild(loginId);
            loginId.classList.add('loginStyle');
        

        

            const myImage = document.createElement('img');
            myImage.setAttribute("src", data['avatar_url']);
            myImage.setAttribute("height","300");
            myImage.setAttribute("width" , "300");
            myImage.classList.add('image');
            myData.appendChild(myImage);

            const myLocation = document.createElement('div');
            myLocation.innerText = data.location;
            myData.appendChild(myLocation);


        })

    

}


myGitFetch();


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
              name.classList.add('name');
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