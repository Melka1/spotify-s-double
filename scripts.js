
window.addEventListener("resize", function(event){
    let width = $("aside").width();
    let partition1 = $("body main .lists #0 .list .list--part")
    let partition2 = $("body main .lists #1 .list .list--part")
    $("body main .lists .list--container .list .list--part").css("display", "none")

    
    if(event.target.innerWidth-width>1000){
        console.log("hey")
        $("body main .lists .list--container .list").css("grid-template-columns","repeat(5, 1fr)");
        
        let i=0
        while(i<5){
            partition1[i].style.display = "block"
            partition2[i].style.display = "block"
            i++;
        }
    } else if(event.target.innerWidth-width>900){
        console.log("hey")
        $("body main .lists .list--container .list").css("grid-template-columns","repeat(4, 1fr)");

        let i=0
        while(i<4){
            partition1[i].style.display = "block"
            partition2[i].style.display = "block"
            i++;
        }
    } else if(event.target.innerWidth-width>700){
        console.log("hey")
        $("body main .lists .list--container .list").css("grid-template-columns","repeat(3, 1fr)");
        
        let i=0
        while(i<3){
            partition1[i].style.display = "block"
            partition2[i].style.display = "block"
            i++;
        }
    } else {
        console.log("hey")
        $("body main .lists .list--container .list").css("grid-template-columns","repeat(2, 1fr)");
        
        let i=0
        while(i<2){
            partition1[i].style.display = "block"
            partition2[i].style.display = "block"
            i++;
        }
    } 
})


function handleScroll(event){
    let posY = $("main").scrollTop()
    console.log($("main").scrollTop())
    if(posY<600){
        $("body main .top--bar").css("background-color",`rgba(16, 16, 16, ${0.7+posY*0.0015})`)
    }

}

$("main").on("scroll"), ()=>{
}
