var main=document.querySelector("#main")
var crcs =document.querySelector("#cursor")

main.addEventListener("mousemove",function(dets){
    crcs.style.left =dets.x+"px"
    crcs.style.top =dets.y+"px"

})