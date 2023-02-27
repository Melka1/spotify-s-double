
let showAll = false;
let pages = ["home"];
let now = 0;
let last = 0
checkNavState()
checkWidth()

function checkWidth(){
    let width = $("main").width();
    let partition1 = $("body main .lists #0 .list .list--part")
    let partition2 = $("body main .lists #1 .list .list--part")
    showAll?$("body main .lists .list--container .list .list--part").css("display", "blok"):
            $("body main .lists .list--container .list .list--part").css("display", "none")

    if(width>1080){
        $("body main .lists .list--container .list").css("grid-template-columns","repeat(5, 1fr)");
        if(!showAll){
            let i=0
            while(i<5){
                partition1[i].style.display = "block"
                partition2[i].style.display = "block"
                i++;
            }
        } else {
            partition1.css("display", "block")
            partition2.css("display", "block")
        }
    } else if(width>900){
        $("body main .lists .list--container .list").css("grid-template-columns","repeat(4, 1fr)");
        if(!showAll){
            let i=0
            while(i<4){
                partition1[i].style.display = "block"
                partition2[i].style.display = "block"
                i++;
            }
        } else {
            partition1.css("display", "block")
            partition2.css("display", "block")
        }
    } else if(width>700){
        $("body main .lists .list--container .list").css("grid-template-columns","repeat(3, 1fr)");
        if(!showAll){
            let i=0
            while(i<3){
                partition1[i].style.display = "block"
                partition2[i].style.display = "block"
                i++;
            }
        } else {
            partition1.css("display", "block")
            partition2.css("display", "block")
        }
    } else {
        $("body main .lists .list--container .list").css("grid-template-columns","repeat(2, 1fr)");
        if(!showAll){
            let i=0
            while(i<2){
                partition1[i].style.display = "block"
                partition2[i].style.display = "block"
                i++;
            }
        } else {
            partition1.css("display", "block")
            partition2.css("display", "block")
        }
    } 
}

window.addEventListener("resize", checkWidth)

function handleScroll(event){
    let posY = $("main").scrollTop()
    // console.log($("main").scrollTop())
    if(posY<600){
        $("body main .top--bar").css("background-color",`rgba(16, 16, 16, ${0.7+posY*0.0015})`)
    }

}

function handleDrag(event){
    let width = (event.pageX!=0?event.pageX:last)
    if(event.pageX<=390&&event.pageX>=130){
        $("body").css("grid-template-columns", `${width}px 1fr`)
    }
    last = event.pageX
    checkWidth();
}

$("form").click(function(e){
    e.preventDefault();
})

function handleShowAll(id){
    showAll = true
    if(!pages[1]){
        pages.push(id)
        now++;
    } else {
        pages[1] = id
    }
    checkWidth();
    $(".list--container").css("display", "none")
    $(`#${id}`).css("display", "block")
    $(`#${id} .list--header`).css("display", "none")
    console.log(pages, now, pages[now])
    checkNavState()
}

function handleNavigation(page){
    now+=page;
    if(now < 0 || now > pages.length-1){
        now -= page;
    }

    if(now == 0){
        showAll = false
    }

    if(pages[now] == "home"){
        $(".list--container").css("display", "block")
        $(`.list--container .list--header`).css("display", "flex")
    } else {
        handleShowAll(pages[now])
    }

    checkWidth()
    checkNavState()
    console.log(pages, now, pages[now])
}

function checkNavState(){
    if(now == 0){
        $("#prev:hover").css("cursor", "not-allowed")
    } else {
        $("#prev:hover").css("cursor", "pointer")
    }

    if(pages.length-1<now+1){
        $("#next:hover").css("cursor", "not-allowed")
    } else {
        $("#next:hover").css("cursor", "pointer")
    }
}