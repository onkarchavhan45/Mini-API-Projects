let url="https://dog.ceo/api/breeds/image/random";
let btn=document.querySelector("button");

btn.addEventListener("click" , async () => {
    let link = await getimage();
    console.log(link);
    let img=document.querySelector("img");
    img.setAttribute("src",link);
});

async function getimage(){
    try{
        let res = await axios.get(url);
        return res.data.message;
    }catch{
        return "No image found ";
    }
}