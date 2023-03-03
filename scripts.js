
let showAll = false;
let pages = ["home"];
let now = 0;
let last = 0;
let loggedIn = false;
let titleTop;
let viewPlay = false
let playlistName;

checkWidth()

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

window.addEventListener("resize", checkWidth)

function handleScroll(event){
    let posY = $("main").scrollTop()
    if(posY<600){
        $("body main .top--bar").css("background-color",`rgba(16, 16, 16, ${0.7+posY*0.0015})`)
    }
    let width = $(".music--list").width()
    let height = $(".player .music--list>.title").height()
    console.log(titleTop, posY)
    if(titleTop-posY>80){
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
                    <div class="nav--play">
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

checkNavState()

function handlePlay(conInd, listInd){
    let imgSrc = $(`.list--container:nth-of-type(${conInd+1}) .list--part:nth-of-type(${listInd+1}) .cover img`).attr("src")
    console.log(imgSrc)

    $("body").append(`<div class="bg--cover"></div>`)
    $("body").append(`
                <div class="play--login--container">
                    <div class="play--login">
                        <img src="${imgSrc}" alt="">
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

function chosePlaylist(conInd, listInd) {
    let imgSrc = $(`.list--container:nth-of-type(${conInd+1}) .list--part:nth-of-type(${listInd+1}) .cover img`).attr("src")
    console.log(imgSrc)
    playlistName = $(`.list--container:nth-of-type(${conInd+1}) .list--part:nth-of-type(${listInd+1}) .list--name`).text();
    let playListDesc = $(`.list--container:nth-of-type(${conInd+1}) .list--part:nth-of-type(${listInd+1}) .list--desc`).text();
    
    $("main .lists").remove();
    $("main").append(`
    <section class="player">
    <header>
        <img src="${imgSrc}" alt="">
        <div class="right">
            <p class="type">Playlist</p>
            <h1>${playlistName}</h1>
            <p class="sub-topic">${playListDesc}</p>
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
        <div class="play"><i class="fa-sharp fa-solid fa-play"></i></div>
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
        <div class="song">
            <span class="number">
                <p>1</p>
                <i class="fa-sharp fa-solid fa-play"></i>
            </span>
            <div class="title">
                <img src="./assets/images/music--cover.jpg" width="40px" height="40px" alt="">
                <div class="name">
                    <p class="song--title">So Far So Good</p>
                    <p class="song--desc">Sun of They</p>
                </div>
            </div>
            <p class="album">Silent Hills</p>
            <p class="date--added">6 Days ago</p>
            <div class="duration">
                <i class="fa-regular fa-heart"></i>
                <p class="time">2:23</p>
                <i class="fa-solid fa-ellipsis"></i>
            </div>
        </div>
        <div class="song">
            <span class="number">
                <p>2</p>
                <i class="fa-sharp fa-solid fa-play"></i>
            </span>
            <div class="title">
                <img src="./assets/images/jazz-drums.jpg" width="40px" height="40px" alt="">
                <div class="name">
                    <p class="song--title">Apricity</p>
                    <p class="song--desc">Imala Zir</p>
                </div>
            </div>
            <p class="album">Apricity</p>
            <p class="date--added">6 Days ago</p>
            <div class="duration">
                <i class="fa-regular fa-heart"></i>
                <p class="time">2:23</p>
                <i class="fa-solid fa-ellipsis"></i>
            </div>
        </div>
        <div class="song">
            <span class="number">
                <p>3</p>
                <i class="fa-sharp fa-solid fa-play"></i>
            </span>
            <div class="title">
                <img src="./assets/images/peaceful--piano.jpg" alt="">
                <div class="name">
                    <p class="song--title">Solatium</p>
                    <p class="song--desc">Imber Sun</p>
                </div>
            </div>
            <p class="album">Solatium</p>
            <p class="date--added">6 Days ago</p>
            <div class="duration">
                <i class="fa-regular fa-heart"></i>
                <p class="time">2:23</p>
                <i class="fa-solid fa-ellipsis"></i>
            </div>
        </div>
        <div class="song">
            <span class="number">
                <p>4</p>
                <i class="fa-sharp fa-solid fa-play"></i>
            </span>
            <div class="title">
                <img src="./assets/images/noimage.jpg" alt="">
                <div class="name">
                    <p class="song--title">efflorescence</p>
                    <p class="song--desc">Far & Beyond</p>
                </div>
            </div>
            <p class="album">efflorescence</p>
            <p class="date--added">6 Days ago</p>
            <div class="duration">
                <i class="fa-regular fa-heart"></i>
                <p class="time">2:23</p>
                <i class="fa-solid fa-ellipsis"></i>
            </div>
        </div>
        <div class="song">
            <span class="number">
                <p>5</p>
                <i class="fa-sharp fa-solid fa-play"></i>
            </span>
            <div class="title">
                <img src="./assets/images/deep-focus.jpg" alt="">
                <div class="name">
                    <p class="song--title">Gather My Thoughts</p>
                    <p class="song--desc">Josef Briem</p>
                </div>
            </div>
            <p class="album">Gather My Thoughts</p>
            <p class="date--added">6 Days ago</p>
            <div class="duration">
                <i class="fa-regular fa-heart"></i>
                <p class="time">2:23</p>
                <i class="fa-solid fa-ellipsis"></i>
            </div>
        </div>
        <div class="song">
            <span class="number">
                <p>6</p>
                <i class="fa-sharp fa-solid fa-play"></i>
            </span>
            <div class="title">
                <img src="./assets/images/music--cover.jpg" width="40px" height="40px" alt="">
                <div class="name">
                    <p class="song--title">So Far So Good</p>
                    <p class="song--desc">Sun of They</p>
                </div>
            </div>
            <p class="album">Silent Hills</p>
            <p class="date--added">6 Days ago</p>
            <div class="duration">
                <i class="fa-regular fa-heart"></i>
                <p class="time">2:23</p>
                <i class="fa-solid fa-ellipsis"></i>
            </div>
        </div>
        <div class="song">
            <span class="number">
                <p>7</p>
                <i class="fa-sharp fa-solid fa-play"></i>
            </span>
            <div class="title">
                <img src="./assets/images/jazz-drums.jpg" width="40px" height="40px" alt="">
                <div class="name">
                    <p class="song--title">Apricity</p>
                    <p class="song--desc">Imala Zir</p>
                </div>
            </div>
            <p class="album">Apricity</p>
            <p class="date--added">6 Days ago</p>
            <div class="duration">
                <i class="fa-regular fa-heart"></i>
                <p class="time">2:23</p>
                <i class="fa-solid fa-ellipsis"></i>
            </div>
        </div>
        <div class="song">
            <span class="number">
                <p>8</p>
                <i class="fa-sharp fa-solid fa-play"></i>
            </span>
            <div class="title">
                <img src="./assets/images/peaceful--piano.jpg" alt="">
                <div class="name">
                    <p class="song--title">Solatium</p>
                    <p class="song--desc">Imber Sun</p>
                </div>
            </div>
            <p class="album">Solatium</p>
            <p class="date--added">6 Days ago</p>
            <div class="duration">
                <i class="fa-regular fa-heart"></i>
                <p class="time">2:23</p>
                <i class="fa-solid fa-ellipsis"></i>
            </div>
        </div>
        <div class="song">
            <span class="number">
                <p>9</p>
                <i class="fa-sharp fa-solid fa-play"></i>
            </span>
            <div class="title">
                <img src="./assets/images/noimage.jpg" alt="">
                <div class="name">
                    <p class="song--title">efflorescence</p>
                    <p class="song--desc">Far & Beyond</p>
                </div>
            </div>
            <p class="album">efflorescence</p>
            <p class="date--added">6 Days ago</p>
            <div class="duration">
                <i class="fa-regular fa-heart"></i>
                <p class="time">2:23</p>
                <i class="fa-solid fa-ellipsis"></i>
            </div>
        </div>
        <div class="song">
            <span class="number">
                <p>10</p>
                <i class="fa-sharp fa-solid fa-play"></i>
            </span>
            <div class="title">
                <img src="./assets/images/deep-focus.jpg" alt="">
                <div class="name">
                    <p class="song--title">Gather My Thoughts</p>
                    <p class="song--desc">Josef Briem</p>
                </div>
            </div>
            <p class="album">Gather My Thoughts</p>
            <p class="date--added">6 Days ago</p>
            <div class="duration">
                <i class="fa-regular fa-heart"></i>
                <p class="time">2:23</p>
                <i class="fa-solid fa-ellipsis"></i>
            </div>
        </div>
        <div class="song">
            <span class="number">
                <p>1</p>
                <i class="fa-sharp fa-solid fa-play"></i>
            </span>
            <div class="title">
                <img src="./assets/images/music--cover.jpg" width="40px" height="40px" alt="">
                <div class="name">
                    <p class="song--title">So Far So Good</p>
                    <p class="song--desc">Sun of They</p>
                </div>
            </div>
            <p class="album">Silent Hills</p>
            <p class="date--added">6 Days ago</p>
            <div class="duration">
                <i class="fa-regular fa-heart"></i>
                <p class="time">2:23</p>
                <i class="fa-solid fa-ellipsis"></i>
            </div>
        </div>
        <div class="song">
            <span class="number">
                <p>2</p>
                <i class="fa-sharp fa-solid fa-play"></i>
            </span>
            <div class="title">
                <img src="./assets/images/jazz-drums.jpg" width="40px" height="40px" alt="">
                <div class="name">
                    <p class="song--title">Apricity</p>
                    <p class="song--desc">Imala Zir</p>
                </div>
            </div>
            <p class="album">Apricity</p>
            <p class="date--added">6 Days ago</p>
            <div class="duration">
                <i class="fa-regular fa-heart"></i>
                <p class="time">2:23</p>
                <i class="fa-solid fa-ellipsis"></i>
            </div>
        </div>
        <div class="song">
            <span class="number">
                <p>3</p>
                <i class="fa-sharp fa-solid fa-play"></i>
            </span>
            <div class="title">
                <img src="./assets/images/peaceful--piano.jpg" alt="">
                <div class="name">
                    <p class="song--title">Solatium</p>
                    <p class="song--desc">Imber Sun</p>
                </div>
            </div>
            <p class="album">Solatium</p>
            <p class="date--added">6 Days ago</p>
            <div class="duration">
                <i class="fa-regular fa-heart"></i>
                <p class="time">2:23</p>
                <i class="fa-solid fa-ellipsis"></i>
            </div>
        </div>
        <div class="song">
            <span class="number">
                <p>4</p>
                <i class="fa-sharp fa-solid fa-play"></i>
            </span>
            <div class="title">
                <img src="./assets/images/noimage.jpg" alt="">
                <div class="name">
                    <p class="song--title">efflorescence</p>
                    <p class="song--desc">Far & Beyond</p>
                </div>
            </div>
            <p class="album">efflorescence</p>
            <p class="date--added">6 Days ago</p>
            <div class="duration">
                <i class="fa-regular fa-heart"></i>
                <p class="time">2:23</p>
                <i class="fa-solid fa-ellipsis"></i>
            </div>
        </div>
        <div class="song">
            <span class="number">
                <p>5</p>
                <i class="fa-sharp fa-solid fa-play"></i>
            </span>
            <div class="title">
                <img src="./assets/images/deep-focus.jpg" alt="">
                <div class="name">
                    <p class="song--title">Gather My Thoughts</p>
                    <p class="song--desc">Josef Briem</p>
                </div>
            </div>
            <p class="album">Gather My Thoughts</p>
            <p class="date--added">6 Days ago</p>
            <div class="duration">
                <i class="fa-regular fa-heart"></i>
                <p class="time">2:23</p>
                <i class="fa-solid fa-ellipsis"></i>
            </div>
        </div>
        <div class="song">
            <span class="number">
                <p>6</p>
                <i class="fa-sharp fa-solid fa-play"></i>
            </span>
            <div class="title">
                <img src="./assets/images/music--cover.jpg" width="40px" height="40px" alt="">
                <div class="name">
                    <p class="song--title">So Far So Good</p>
                    <p class="song--desc">Sun of They</p>
                </div>
            </div>
            <p class="album">Silent Hills</p>
            <p class="date--added">6 Days ago</p>
            <div class="duration">
                <i class="fa-regular fa-heart"></i>
                <p class="time">2:23</p>
                <i class="fa-solid fa-ellipsis"></i>
            </div>
        </div>
        <div class="song">
            <span class="number">
                <p>7</p>
                <i class="fa-sharp fa-solid fa-play"></i>
            </span>
            <div class="title">
                <img src="./assets/images/jazz-drums.jpg" width="40px" height="40px" alt="">
                <div class="name">
                    <p class="song--title">Apricity</p>
                    <p class="song--desc">Imala Zir</p>
                </div>
            </div>
            <p class="album">Apricity</p>
            <p class="date--added">6 Days ago</p>
            <div class="duration">
                <i class="fa-regular fa-heart"></i>
                <p class="time">2:23</p>
                <i class="fa-solid fa-ellipsis"></i>
            </div>
        </div>
        <div class="song">
            <span class="number">
                <p>8</p>
                <i class="fa-sharp fa-solid fa-play"></i>
            </span>
            <div class="title">
                <img src="./assets/images/peaceful--piano.jpg" alt="">
                <div class="name">
                    <p class="song--title">Solatium</p>
                    <p class="song--desc">Imber Sun</p>
                </div>
            </div>
            <p class="album">Solatium</p>
            <p class="date--added">6 Days ago</p>
            <div class="duration">
                <i class="fa-regular fa-heart"></i>
                <p class="time">2:23</p>
                <i class="fa-solid fa-ellipsis"></i>
            </div>
        </div>
        <div class="song">
            <span class="number">
                <p>9</p>
                <i class="fa-sharp fa-solid fa-play"></i>
            </span>
            <div class="title">
                <img src="./assets/images/noimage.jpg" alt="">
                <div class="name">
                    <p class="song--title">efflorescence</p>
                    <p class="song--desc">Far & Beyond</p>
                </div>
            </div>
            <p class="album">efflorescence</p>
            <p class="date--added">6 Days ago</p>
            <div class="duration">
                <i class="fa-regular fa-heart"></i>
                <p class="time">2:23</p>
                <i class="fa-solid fa-ellipsis"></i>
            </div>
        </div>
        <div class="song">
            <span class="number">
                <p>10</p>
                <i class="fa-sharp fa-solid fa-play"></i>
            </span>
            <div class="title">
                <img src="./assets/images/deep-focus.jpg" alt="">
                <div class="name">
                    <p class="song--title">Gather My Thoughts</p>
                    <p class="song--desc">Josef Briem</p>
                </div>
            </div>
            <p class="album">Gather My Thoughts</p>
            <p class="date--added">6 Days ago</p>
            <div class="duration">
                <i class="fa-regular fa-heart"></i>
                <p class="time">2:23</p>
                <i class="fa-solid fa-ellipsis"></i>
            </div>
        </div>
    </div>
</section>
    `)

    titleTop = $(".player .music--list>.title").offset().top;
}

