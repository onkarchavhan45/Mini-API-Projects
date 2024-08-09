let url="http://universities.hipolabs.com/search?name=";

// accesing the button 
let btn = document.querySelector("button");

// adding event whenever button click the value of input will given to get call function;
// get call function calling the API using value of input which is the name of country; 
btn.addEventListener("click" , async () =>{
    let input = document.querySelector("#input"); 
    let country =input.value;
    
    //here we get the array of the objects which containg the details about each collage .
    let collageArr = await getcol(country); 
    show(collageArr);
})

// function which show all collages name while is in collage array
function show(collageArr){
    let list =document.querySelector("#list"); // 'list' main unorderd list
    list.innerText="";
    for(collage of collageArr){
        let li =document.createElement("li"); // 'li' is a list item of main 'list'.
        li.innerText=collage.name;
        list.appendChild(li);
    }
}

// function which call the collage API using axios .
// as we are using axios here we get data in JSON format by default.
async function getcol(country){
    try{
        // here the url+country means that the input country name and the url of API is concatinating.
        let res = await axios.get(url+country); 
        return res.data; //
    }catch(e){
        console.log("error = ",e);
    }
}