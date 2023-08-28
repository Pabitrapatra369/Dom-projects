var elem =document.querySelectorAll("#elem");


elem.forEach(function(val){

     val.addEventListener("mouseenter",function(){
        console.log("enter")
        val.childNodes[3].style.opacity=1
     })
     val.addEventListener("mouseleave",function(){
        console.log("leave")
        val.childNodes[3].style.opacity=0

     })
     val.addEventListener("mousemove",function(dets){
        val.childNodes[3].style.left=dets.x+"px"
        

     })

})

// val.addEventlistener("mouseenter",function(){
//     // val.childNodes[3].style.opacity =1
//     console.log("hello")
// });
// val.addEventlistener("mouseleave",function(){
//     // val.childNodes[3].style.opacity =0
//     console.log("hey")
// });