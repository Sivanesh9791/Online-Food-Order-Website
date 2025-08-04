var pop=document.querySelector(".pop")
var bar=document.querySelector("#bar")
bar.addEventListener("click",function(){
    pop.style.left="0px"
})
function closenav(){
    pop.style.left="-330px"
}


var ip=document.getElementById("ip")
var container=document.querySelector(".items-container")
var div=container.querySelectorAll(".itemsdiv")
console.log(div)
ip.addEventListener("keyup",function(){
    for(i=0;i<div.length;i++){
        if(div[i].querySelector("p").textContent.toLowerCase().indexOf(ip.value.toLowerCase())<0){
             div[i].style.display="none"
        }
        else{
             div[i].style.display="block"
        }
    }})

