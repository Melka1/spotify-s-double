
function checkWidth(){
    let width = $("main").width();
    let partition1 = $("body main .lists #0 .list .list--part")
    let partition2 = $("body main .lists #1 .list .list--part")
    $("body main .lists .list--container .list .list--part").css("display", "none")

    if(width>1080){
        console.log("hey")
        $("body main .lists .list--container .list").css("grid-template-columns","repeat(5, 1fr)");
        
        let i=0
        while(i<5){
            partition1[i].style.display = "block"
            partition2[i].style.display = "block"
            i++;
        }
    } else if(width>900){
        console.log("hey")
        $("body main .lists .list--container .list").css("grid-template-columns","repeat(4, 1fr)");

        let i=0
        while(i<4){
            partition1[i].style.display = "block"
            partition2[i].style.display = "block"
            i++;
        }
    } else if(width>700){
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
}

window.addEventListener("resize", checkWidth)

function handleScroll(event){
    let posY = $("main").scrollTop()
    console.log($("main").scrollTop())
    if(posY<600){
        $("body main .top--bar").css("background-color",`rgba(16, 16, 16, ${0.7+posY*0.0015})`)
    }

}
let last = 0
function handleDrag(event){
    console.log(event.pageX, event.pageY, "hey")
    let width = (event.pageX!=0?event.pageX:last)
    if(event.pageX<=390&&event.pageX>=130){
        $("body").css("grid-template-columns", `${width}px 1fr`)
    }
    last = event.pageX
    console.log($("main").innerWidth())
    checkWidth();
}

checkWidth()