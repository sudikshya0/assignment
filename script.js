const keys = document.querySelectorAll(".main__key");
const  back = document.querySelector(".main__display__back");
const display = document.querySelector(".main__display__digit");



keys.forEach(key=>{
display.value= "" ;
key.addEventListener("click", () =>{
display.value += key.innerText;
if(display.value.length >= 10)
    {
        alert('exceed limit');
    }
});
});


back.addEventListener("click",() =>{
    display.value = display.value.substring(0,display.value.length-1);
    if(display.value.length === 0)
    {
        alert("no digit left");
    }
    });