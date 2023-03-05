
$("form").click(function(e){
    e.preventDefault();
})

let musicLibrary = [
    {
        name:"Focus",
        list:[
        {   
            type:"Focus",
            header:"Deep Focus",
            description:"Replax and Indulge with beautiful piano pieces",
            url:"./assets/images/noimage.jpg"
        },
        {
            type:"Focus",
            header:"Peaceful Piano0",
            description:"Keep calm and focus with ambient and pos...",
            url:"./assets/images/peaceful--piano.jpg"
        },
        {
            type:"Focus",
            header:"Instrumental Study",
            description:"Focus with soft study music in the...",
            url:"./assets/images/focus101.jpg"
        },
        {   
            type:"Focus",
            header:"Deep Focus",
            description:"Replax and Indulge with beautiful piano pieces",
            url:"./assets/images/noimage.jpg"
        },
        {   
            type:"Focus",
            header:"Deep Focus",
            description:"Replax and Indulge with beautiful piano pieces",
            url:"./assets/images/peaceful--piano.jpg"
        },
        {
            type:"Focus",
            header:"Instrumental Study",
            description:"Focus with soft study music in the...",
            url:"./assets/images/jazz-drums.jpg"
        },
        {   
            type:"Focus",
            header:"Deep Focus",
            description:"Replax and Indulge with beautiful piano pieces",
            url:"./assets/images/music--cover.jpg"
        },
        {
            type:"Focus",
            header:"Peaceful Piano0",
            description:"Keep calm and focus with ambient and pos...",
            url:"./assets/images/deep-focus.jpg"
        },
        {
            type:"Focus",
            header:"Instrumental Study",
            description:"Focus with soft study music in the...",
            url:"./assets/images/jazz-drums.jpg"
        },
        {   
            type:"Focus",
            header:"Deep Focus",
            description:"Replax and Indulge with beautiful piano pieces",
            url:"./assets/images/music--cover.jpg"
        }
    ]},
    {   
        name:"Spotify Playlists",
        list:[
        {
            type:"Focus",
            header:"Instrumental Study",
            description:"Focus with soft study music in the...",
            url:"./assets/images/jazz-drums.jpg"
        },
        {   
            type:"Focus",
            header:"Deep Focus",
            description:"Replax and Indulge with beautiful piano pieces",
            url:"./assets/images/music--cover.jpg"
        },
        {
            type:"Focus",
            header:"Peaceful Piano0",
            description:"Keep calm and focus with ambient and pos...",
            url:"./assets/images/deep-focus.jpg"
        },
        {
            type:"Focus",
            header:"Instrumental Study",
            description:"Focus with soft study music in the...",
            url:"./assets/images/jazz-drums.jpg"
        },
        {   
            type:"Focus",
            header:"Deep Focus",
            description:"Replax and Indulge with beautiful piano pieces",
            url:"./assets/images/music--cover.jpg"
        },
        {   
            type:"Focus",
            header:"Deep Focus",
            description:"Replax and Indulge with beautiful piano pieces",
            url:"./assets/images/noimage.jpg"
        },
        {
            type:"Focus",
            header:"Peaceful Piano0",
            description:"Keep calm and focus with ambient and pos...",
            url:"./assets/images/peaceful--piano.jpg"
        },
        {
            type:"Focus",
            header:"Instrumental Study",
            description:"Focus with soft study music in the...",
            url:"./assets/images/focus101.jpg"
        },
        {   
            type:"Focus",
            header:"Deep Focus",
            description:"Replax and Indulge with beautiful piano pieces",
            url:"./assets/images/noimage.jpg"
        },
        {   
            type:"Focus",
            header:"Deep Focus",
            description:"Replax and Indulge with beautiful piano pieces",
            url:"./assets/images/peaceful--piano.jpg"
        }
    ]}
                        ]

let playlistLibrary = [
        {
            url:"./assets/images/music--cover.jpg",
            song_name:"So Far So Good",
            song_desc:"Sun of They",
            album:"Silent Hills",
            date_added:"6 Days ago",
            duration:"2:23"
        },
        {
            url:"./assets/images/jazz-drums.jpg",
            song_name:"Apricity",
            song_desc:"Imala Zir",
            album:"Apricity",
            date_added:"6 Days ago",
            duration:"2:23"
        },
        {
            url:"./assets/images/peaceful--piano.jpg",
            song_name:"Solatium",
            song_desc:"Imber Sun",
            album:"Solatium",
            date_added:"6 Days ago",
            duration:"2:23"
        },
        {
            url:"./assets/images/noimage.jpg",
            song_name:"efflorescence",
            song_desc:"Far & Beyond",
            album:"efflorescence",
            date_added:"6 Days ago",
            duration:"2:23"
        },
        {
            url:"./assets/images/deep-focus.jpg",
            song_name:"Gather My Thoughts",
            song_desc:"Josef Briem",
            album:"Gather My Thoughts",
            date_added:"6 Days ago",
            duration:"2:23"
        },
        {
            url:"./assets/images/music--cover.jpg",
            song_name:"So Far So Good",
            song_desc:"Sun of They",
            album:"Silent Hills",
            date_added:"6 Days ago",
            duration:"2:23"
        },
        {
            url:"./assets/images/jazz-drums.jpg",
            song_name:"Apricity",
            song_desc:"Imala Zir",
            album:"Apricity",
            date_added:"6 Days ago",
            duration:"2:23"
        },
        {
            url:"./assets/images/peaceful--piano.jpg",
            song_name:"Solatium",
            song_desc:"Imber Sun",
            album:"Solatium",
            date_added:"6 Days ago",
            duration:"2:23"
        },
        {
            url:"./assets/images/noimage.jpg",
            song_name:"efflorescence",
            song_desc:"Far & Beyond",
            album:"efflorescence",
            date_added:"6 Days ago",
            duration:"2:23"
        },
        {
            url:"./assets/images/deep-focus.jpg",
            song_name:"Gather My Thoughts",
            song_desc:"Josef Briem",
            album:"Gather My Thoughts",
            date_added:"6 Days ago",
            duration:"2:23"
        },
        {
            url:"./assets/images/music--cover.jpg",
            song_name:"So Far So Good",
            song_desc:"Sun of They",
            album:"Silent Hills",
            date_added:"6 Days ago",
            duration:"2:23"
        },
        {
            url:"./assets/images/jazz-drums.jpg",
            song_name:"Apricity",
            song_desc:"Imala Zir",
            album:"Apricity",
            date_added:"6 Days ago",
            duration:"2:23"
        },
        {
            url:"./assets/images/peaceful--piano.jpg",
            song_name:"Solatium",
            song_desc:"Imber Sun",
            album:"Solatium",
            date_added:"6 Days ago",
            duration:"2:23"
        },
        {
            url:"./assets/images/noimage.jpg",
            song_name:"efflorescence",
            song_desc:"Far & Beyond",
            album:"efflorescence",
            date_added:"6 Days ago",
            duration:"2:23"
        },
        {
            url:"./assets/images/deep-focus.jpg",
            song_name:"Gather My Thoughts",
            song_desc:"Josef Briem",
            album:"Gather My Thoughts",
            date_added:"6 Days ago",
            duration:"2:23"
        },
        {
            url:"./assets/images/music--cover.jpg",
            song_name:"So Far So Good",
            song_desc:"Sun of They",
            album:"Silent Hills",
            date_added:"6 Days ago",
            duration:"2:23"
        },
        {
            url:"./assets/images/jazz-drums.jpg",
            song_name:"Apricity",
            song_desc:"Imala Zir",
            album:"Apricity",
            date_added:"6 Days ago",
            duration:"2:23"
        },
        {
            url:"./assets/images/peaceful--piano.jpg",
            song_name:"Solatium",
            song_desc:"Imber Sun",
            album:"Solatium",
            date_added:"6 Days ago",
            duration:"2:23"
        },
        {
            url:"./assets/images/noimage.jpg",
            song_name:"efflorescence",
            song_desc:"Far & Beyond",
            album:"efflorescence",
            date_added:"6 Days ago",
            duration:"2:23"
        },
        {
            url:"./assets/images/deep-focus.jpg",
            song_name:"Gather My Thoughts",
            song_desc:"Josef Briem",
            album:"Gather My Thoughts",
            date_added:"6 Days ago",
            duration:"2:23"
        }
                            ]

let showAll = false;
let pages = [{name:"home", func: ()=>listDisplay()}]
let now = 0;
let last = 0;
let loggedIn = false;
let showPlaylist = false;
let titleTop;
let viewPlay = true
let playlistName = ""
let conIndex;
let listIndex;

function checkWidth(){
    let width = $("main").width();
    $(".user--button").css("display", "block")
    $(".partitionX").css("display", "block")
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
        $(".user--button").css("display", "none")
        $(".partitionX").css("display", "none")    
    } 
}

function handleScroll(event){
    let posY = $("main").scrollTop()
    if(posY<600){
        $("body main .top--bar").css("background-color",`rgba(16, 16, 16, ${0.7+posY*0.0015})`)
    }
    let width = $(".music--list").width()
    let height = $(".player .music--list>.title").height()
    console.log(titleTop, posY)
    if(titleTop-posY>80&&viewPlay==false){
        console.log("here")
        $(".player .music--list>.title").removeClass("stick--top")
        $(".player .music--list").css("margin-top", "0")
        $(".player .music--list>.title").css("width", "initial")
        $(".top--bar .music--header").css("opacity", 0)
        setTimeout(()=>{
            $(".top--bar .music--header").remove()
            viewPlay = false
        }, 300)
    } else {
        $(".player .music--list>.title").addClass("stick--top")
        $(".player .music--list>.title").css("width", width)
        $(".player .music--list").css("margin-top", height+25)
        if(!viewPlay){
            $(".top--bar .page--control").after(
                `
                <div class="music--header">
                    <div onclick="handlePlay(${conIndex}, ${listIndex})" class="nav--play">
                        <i class="fa-sharp fa-solid fa-play"></i>
                        </div>
                    <p class="music--title">${playlistName}</p>
                </div>
                `
                ).fadeIn(200)
        }
        $(".top--bar .music--header").css("opacity", 1)
        viewPlay = true
        
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

function handleShowAll(id){
    $("main").scrollTop(0)
    showAll = true
    if(!pages[now+1]||pages[now+1].name != "show"){
        pages.push({name:"show",func:()=>handleShowAll(id)})
        now++;
    } else {
        pages[now+1] = {name:"show",func:()=>handleShowAll(id)}
    }
    
    $("main .lists").children().remove();
    $("main .lists").append(`
        <div class="list--container" id="${id}">
        <div class="list">
        ${
            library.musicLibrary[id].list.map((itm,ind)=>{
            return `
            <div onclick="chosePlaylist(${id},${ind})" class="list--part">
                <div class="cover">
                    <img src="${itm.url}" alt="">
                    <div onclick="handlePlay(${id},${ind})" class="play">
                        <img src="./assets/images/play_arrow_FILL1_wght400_GRAD0_opsz48.svg" alt="">
                    </div>
                </div>
                <p class="list--name">${itm.header}</p>
                <p class="list--desc">${itm.description}</p>
            </div>
            `
        }).join("")

    } </div></div>`)

    console.log(pages, now, pages[now])
    checkWidth();
    checkNavState()
}

function handleNavigation(page){
    $("main").scrollTop(0)
    now+=page;
    if(now < 0 || now > pages.length-1){
        now -= page;
    }

    if(now == 0){
        showAll = false
    }

    pages[now].func()   

    checkWidth()
    checkNavState()
    console.log(pages, now, pages[now])
}

function checkNavState(){
    if(now == 0){
        $("#prev").hover(function(){
            $(this).css("cursor", "not-allowed")
        })
    } else {
        $("#prev").hover(function(){
            $(this).css("cursor", "pointer")
        })
    }

    if(pages.length-1<now+1){
        $("#next").hover(function(){
            $(this).css("cursor", "not-allowed")
        })
    } else {
        $("#next").hover(function(){
            $(this).css("cursor", "pointer")
        })
    }
}

function handlePlay(conInd, listInd){
    let src;
    if(arguments.length == 1){
        src = playlistLibrary[arguments[0]].url
    } else {
        src = musicLibrary[arguments[0]].list[arguments[1]].url
    }

    conIndex = conInd
    listIndex = listInd

    $("main").scrollTop(0)

    $("body").append(`<div class="bg--cover"></div>`)
    $("body").append(`
                <div class="play--login--container">
                    <div class="play--login">
                        <img src="${src}" alt="">
                        <div class="desc">
                            <p class="title--login">Start listening with a free Spotify account</p>
                            <a href="signup.html"><div class="sign--up--free button"><span>S</span>ign up <span>f</span>ree</div></a>
                            <a href="download.html"><div class="download button"><span>D</span>own<span>l</span>oa<span>d</span> app</div></a>
                            <p class="login--link">Already have an account? <a href="login.html">Log in</a></p>
                        </div>
                    </div>
                    <p onclick="closePlayLogin()" class="close"><span>Cl</span>ose</p>
                </div>
    `)
}

function closePlayLogin() {
    $("body .bg--cover").remove()
    $("body .play--login--container").remove() 
}

function chosePlaylist(conInd, listInd){
    $("main").scrollTop(0)

    if(!pages[now+1]||pages[now+1].name != "playlist"){
        pages.push({name:"playlist",func:()=>chosePlaylist(conInd, listInd)})
        now++;
    } else {
        pages[now+1] = {name:"playlist",func:()=>chosePlaylist(conInd, listInd)}
    }

    playlistName = musicLibrary[conInd].list[listInd].header
    $("main .lists").remove();

    $("main").append(`
    <section class="player">
        <header>
            <img src="${musicLibrary[conInd].list[listInd].url}" alt="">
            <div class="right">
                <p class="type">Playlist</p>
                <h1>${musicLibrary[conInd].list[listInd].header}</h1>
                <p class="sub-topic">${musicLibrary[conInd].list[listInd].description}</p>
                <div>
                    <span>
                        <img src="./assets/images/icons8-spotify copy.svg" alt="">
                        <a href="./index.html">Spotify</a>
                    </span>
                    <div class="divider"></div>
                    <p class="likes">3,874,953 likes</p>
                    <div class="divider"></div>
                    <p class="songs">230 songs, <span>about 9hr 30min</span></p>
                </div>
            </div>
        </header>
        <div class="player--control">
            <div onclick="handlePlay(${conInd}, ${listInd})" class="play"><i class="fa-sharp fa-solid fa-play"></i></div>
            <div class="fav"><i class="fa-regular fa-heart"></i></div>
            <div class="more"><i class="fa-solid fa-ellipsis"></i></div>
        </div>
        <div class="music--list">
            <div class="title">
                <p class="number">#</p>
                <p>Title</p>
                <p>Album</p>
                <p>Date Added</p>
                <p class="time"><img src="./assets/images/icons8-clock.svg" alt=""></p>
            </div>
            
            ${playlistLibrary.map((itm, id)=>{
                return `
                <div ondblclick="handlePlay(${id})" class="song">
                    <span onclick="handlePlay(${id})" class="number">
                        <p>${id+1}</p>
                        <i class="fa-sharp fa-solid fa-play"></i>
                    </span>
                    <div class="title">
                        <img src="${itm.url}" alt="">
                        <div class="name">
                            <p class="song--title">${itm.song_name}</p>
                            <p class="song--desc">${itm.song_desc}</p>
                        </div>
                    </div>
                    <p class="album">${itm.album}</p>
                    <p class="date--added">${itm.date_added}</p>
                    <div class="duration">
                        <i class="fa-regular fa-heart"></i>
                        <p class="time">${itm.duration}</p>
                        <i class="fa-solid fa-ellipsis"></i>
                    </div>
                </div>
                `
            }).join("")}
        </div>
    </section>
    `)

    titleTop = $(".player .music--list>.title").offset().top;
    if($(".right h1").height() > 150){
        changeBackground()
    }

    viewPlay = false
    checkNavState()
}

function changeBackground(){
    $("main header>img").addClass("float--img");
    $(".player header").css("background","transparent");
}

function listDisplay(){
    viewPlay = true
    $("main .lists").remove()
    $("main .player").remove()
    let container = musicLibrary.map((item, index)=>{
        return `
        <div class="list--container" id="${index}">
            <div class="list--header">
                <p class="list--type" onclick="handleShowAll('${index}')">${item.name}</p>
                <p class="show--all" onclick="handleShowAll('${index}')">Show All</p>
            </div>
            <div class="list">
                ${
                    item.list.map((itm, ind)=>{
                        return `
                        <div onclick="chosePlaylist(${index},${ind})" class="list--part">
                            <div class="cover">
                                <img src="${itm.url}" alt="">
                                <div onclick="handlePlay(${index},${ind})" class="play">
                                    <img src="./assets/images/play_arrow_FILL1_wght400_GRAD0_opsz48.svg" alt="">
                                </div>
                            </div>
                            <p class="list--name">${itm.header}</p>
                            <p class="list--desc">${itm.description}</p>
                        </div>
                        `
                    }).join("")
                }
            </div>
        </div>
        `
    })

    $("main").append(`
        <section class="lists">
            ${container.join("")}
        </section>
    `)

    $(".top--bar .music--header").remove()
    checkWidth()
}

listDisplay()
window.addEventListener("resize", checkWidth)
checkNavState()