const listaUsuarios = document.getElementById("listaUsuarios");
  
fetch("https://jsonplaceholder.typicode.com/users")
  .then((Response)=> Response.json())
  .then((data) => {
    console.log(data)


const users = data
    for (const user of users){
const age = Math.floor(Math.random() * 45) + 18;
const userImage = `assets/img/${user.id}.jpeg`;
    
   
        listaUsuarios.innerHTML +=`
        <li id="li"><br><br><hr>
            <strong> Name </strong>: ${user.name} <br>
            <strong>Age</strong>: ${age}<br>
             <img src="${userImage}" alt="User Image"><br>
            <strong> Username </strong>:${user.username} <br> 
            <strong>Phone </strong>:${user.phone}<br>
            <strong>Email </strong>:${user.email} <br><br> 
            <div class="info-container">
                        <strong class="company"> Company </strong>: ${user.company.name} <br> 
                        <strong class="address"> Address </strong>: ${user.address.street}, ${user.address.suite}, ${user.address.city} <br>
            </div>
        </li>`
    }
   
  
})
   .catch((error)=>{
        console.error("Error en la solicitud:", error);
  
    });




    /*

let imgs = ["assets/img/1.jpeg", "assets/img/2.jpeg", "assets/img/3.jpeg", "assets/img/4.jpeg", "assets/img/5.jpeg", "assets/img/6.jpeg", "assets/img/7.jpeg", "assets/img/8.jpeg", "assets/img/9.jpeg", "assets/img/10.jpeg"]; 

for(let imgSrc of imgs) {
    const img = document.createElement("img");
    img.src = imgSrc;
    console.log(img.src);
    document.body.appendChild(img);
}


const nuevoUsers = {
  Age: 67,
  Imagem: 78
}

const TodoUsers={
    ...listaUsuarios, ...nuevoUsers
};
console.log(TodoUsers)

*/