let btn = document.querySelector('button');

btn.addEventListener("click" , async () =>{
    let fact = await catFact();
    let p = document.querySelector("p");
    p.innerText = fact;
});

let url="https://catfact.ninja/fact";

async function catFact(){
    try {
        let res= await axios.get(url);
        return res.data.fact;
    } catch(e){
        console.log("error :- ",e);
        return "NO fact found";
    }
}