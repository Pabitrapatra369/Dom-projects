var arr= [
    {
        dp:"https://images.unsplash.com/photo-1567878673942-be055fed5d30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGtyaXNobmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",story:"https://images.unsplash.com/photo-1590228947498-a2a86df7b19d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtyaXNobmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
       
    },{
        dp:"https://images.unsplash.com/photo-1598090216740-eb040d8c3f82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGtyaXNobmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",story:"https://images.unsplash.com/photo-1634698813343-e2b78707c06b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGtyaXNobmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },{
        dp:"https://images.unsplash.com/photo-1631691003610-ba2c96433bb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGtyaXNobmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",story:"https://images.unsplash.com/photo-1629639083646-9120347a4ff8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGtyaXNobmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },{
        dp:"https://plus.unsplash.com/premium_photo-1673474112205-037558e54995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",story:"https://plus.unsplash.com/premium_photo-1690481529194-6087914e096e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },{
        dp:"https://plus.unsplash.com/premium_photo-1691854353825-e233672f2fd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",story:"https://images.unsplash.com/photo-1691859323561-16fda0b543f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    }
]
var storyian=document.querySelector("#storyheader")
var clutter =""
arr.forEach(function(elem,idx){
    clutter +=`<div id="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div> `
})
storyian.innerHTML=clutter
storyian.addEventListener("click",function(dets){
    document.querySelector("#fullscreen").style.display ="block"
    document.querySelector("#fullscreen").style.backgroundImage =`url(${arr[dets.target.id].story})`
    setTimeout(function(){
        document.querySelector("#fullscreen").style.display="none"
    },3000)
})