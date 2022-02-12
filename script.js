var li_items=document.querySelectorAll(".wrapper ul li");
li_items.forEach(function(a_item){
    a_item.addEventListener("click",function(){
        li_items.forEach(function(a_item){
            a_item.classList.remove("active")
        });
        a_item.classList.add("active");
    })
})