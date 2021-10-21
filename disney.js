let favorite = []


fetch("https://api.disneyapi.dev/characters", {
    "method": "GET",
})
.then((response) => response.json()) 
.then((character) => {
  console.log(character); 
  let disny = character.data;

  console.log(disny)



  for(i in disny){
  let div = document.getElementById("grid")
  let inerdiv = document.createElement("div");
  let img = document.createElement("img");
  let str = disny[i].imageUrl

  let divBTN = document.createElement("but")
  divBTN.setAttribute("class", "divBTN")
  var x = document.createElement("BUTTON");
  var y = document.createElement("BUTTON");

  divBTN.appendChild(x)
  divBTN.appendChild(y)



  
  

  //يقص لي link الصورة 
let myArr = str.split("/revision");
// console.log(myArr);
img.src =myArr[0];




  let name = document.createElement("h6");
  name.innerText = disny[i].name
  inerdiv.appendChild(img);
  inerdiv.appendChild(name);
  div.appendChild(inerdiv); 


  x.innerText="show infromtion"
//   <button onclick="locat...." >
  x.setAttribute("onclick", "location.href='"+disny[i].sourceUrl +"'");   
  y.innerText="add to fiv"

  inerdiv.appendChild(divBTN);
  
  
  img.classList.add("imageof");
  name.classList.add("nameof");
  x.classList.add("button");
  y.classList.add("button");

  

  let obj ={};
  obj["name"]=disny[i].name;
  obj["img"]=img.src;
    
let check=false;
y.addEventListener('click', function(){

        
                for(let j=0 ; j<favorite.length; j++ ){
                    if(obj.name==favorite[j].name){
                         alert("already exist") 
                         check=true
                         break;
                    }
                 
                }

                if(!check){
                        favorite.push(obj)
                        saveFav()
                        alert('add to favort')

                }
    
    console.log(obj)

})  } 




  }
  );


    let testBigDiv= document.getElementById("testCard")
function dispConrtItem (){
   let html = '';
   let favorite = JSON.parse(localStorage.getItem("favorite"))
   favorite.forEach(item => {
    let html= document.createElement("div");
    html.classList.add("card")
    let img = document.createElement("img")
    img.src=item.img
    img.classList.add('card-img-top')
    let text = document.createElement("h5")
    text.innerText=item.name
    text.classList.add('card-title')
    let cartbode = document.createElement("div")
    cartbode.classList.add('card-body')

    cartbode.appendChild(text)
    html.appendChild(img)
    html.appendChild(cartbode)
    testBigDiv.appendChild(html)
      
    });


    document.querySelector('.favorite').innerHTML=html;
  

}

dispConrtItem();



// Save favorite
function saveFav() {
    localStorage.setItem("favorite", JSON.stringify(favorite));
  }
  // Load favorite
  function loadFav() {
    favorite = JSON.parse(localStorage.getItem("favorite"));
  }
  //------------- Check if there is character in the shopping favorite then load it  -------------
  if (localStorage.getItem("favorite") != null) {
    loadFav();
  }

  


  ``