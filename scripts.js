$("form").click(function(e){
    e.preventDefault();
})

window.addEventListener("resize", checkWidth)

var client_id = '87ad29c3f0f74cc1b391baaeef63e811';
var client_secret = '2cbf3df5e0914f8baecede4294eb6d81';
let accessToken;
let datum;

let playlist = []
let categories = []
let searchList;

let classes = {
    artists: ['songs--artist'],

}

let playlists = [
    {name:"Focus", title:'focus'},
    {name:"Spotify Playlists", title:'toplists'}
]//toplists, sleep

function handleTime(){
    let now = new Date().getHours()
    console.log(now)
    if(now>0 && now<6){
        playlists.push({name:"Sleep", title:'0JQ5DAqbMKFCuoRTxhYWow'})
    }
}
handleTime()

var authOptions = (id, secret) => ({
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `grant_type=client_credentials&client_id=` + id + `&client_secret=` + secret
})
  
var authOption1= (tok) => ({
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tok}`
        }
})

let playlistLibrary = []

let showAll = false;
let pages = [{name:"home", func: ()=>listDisplay(playlist)}]
let now = 0;
let last = 0;
let loggedIn = false;
let showPlaylist = false;
let titleTop;
let viewPlay = true
let playlistName = ""
let conIndex;
let listIndex;

function partition(id){
    let arr = $(`body main .lists #${id} .list .list--part`)
    return arr
}

function checkWidth(){
    let width = $("main").width();
    $(".user--button").css("display", "block")
    $(".partitionX").css("display", "block")
    showAll?$("body main .lists .list--container .list .list--part").css("display", "block"):
            $("body main .lists .list--container .list .list--part").css("display", "none")

    if(width>1080){
        $("body main .lists .list--container .list").css("grid-template-columns","repeat(5, 1fr)");
        if(!showAll){
            let i=0
            while(i<5){
                let j=0
                while(j<playlists.length){
                    let arr = partition(j)
                    arr[i].style.display = "block"
                    j++;
                }
                i++;
            }
        } else {
            let j=0
            while(j<playlists.length){
                let arr = partition(j)
                arr.css("display", "block")
                j++;
            }
        }
    } else if(width>900){
        $("body main .lists .list--container .list").css("grid-template-columns","repeat(4, 1fr)");
        if(!showAll){
            let i=0
            while(i<4){
                let j=0
                while(j<playlists.length){
                    let arr = partition(j)
                    arr[i].style.display = "block"
                    j++;
                }
                i++;
            }
        } else {
            let j=0
            while(j<playlists.length){
                let arr = partition(j)
                arr.css("display", "block")
                j++;
            }
        }
        
    } else if(width>700){
        $("body main .lists .list--container .list").css("grid-template-columns","repeat(3, 1fr)");
        if(!showAll){
            let i=0
            while(i<3){
                let j=0
                while(j<playlists.length){
                    partition(j)[i].style.display = "block"
                    j++
                }
                i++;
            }
        } else {
            let j=0
            while(j<playlists.length){
                let arr = partition(j)
                arr.css("display", "block")
                j++;
            }
        }
    } else {
        $("body main .lists .list--container .list").css("grid-template-columns","repeat(2, 1fr)");
        if(!showAll){
            let i=0
            while(i<2){
                let j=0
                while(j<playlists.length){
                    partition(j)[i].style.display = "block"
                    j++
                }
                i++;
            }
        } else {
            let j=0
            while(j<playlists.length){
                let arr = partition(j)
                arr.css("display", "block")
                j++;
            }
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
        if(!viewPlay && pages[now].name =="playlist"){
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
            playlist[id].lists.map((itm,ind)=>{
            return `
            <div onclick="chosePlaylist(${id},${ind})" class="list--part">
                <div class="cover">
                    <img src="${itm.images[0].url}" alt="">
                    <div onclick="handlePlay(${id},${ind})" class="play">
                        <img src="./assets/images/play_arrow_FILL1_wght400_GRAD0_opsz48.svg" alt="">
                    </div>
                </div>
                <p class="list--name">${itm.name}</p>
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

    playlistName = playlist[conInd].lists[listInd].name
    let playlistId = playlist[conInd].lists[listInd].id
    $("main .lists").remove();

    getMusicList(playlistId, authOption1(datum))

    

    $("main").append(`
    <section class="player">
        <header>
            <img src="${playlist[conInd].lists[listInd].images[0].url}" alt="">
            <div class="right">
                <p class="type">${playlist[conInd].lists[listInd].type}</p>
                <h1>${playlistName}</h1>
                <p class="sub-topic">${playlist[conInd].lists[listInd].description}</p>
                <div>
                    <span>
                        <img src="./assets/images/icons8-spotify copy.svg" alt="">
                        <a href="./index.html">Spotify</a>
                    </span>
                    <div class="divider"></div>
                    <p class="likes">3,874,953 likes</p>
                    <div class="divider"></div>
                    <p class="songs">${playlist[conInd].lists[listInd].tracks.total} songs, <span>about 9hr 30min</span></p>
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
                <p class="title">Title</p>
                <p class="album">Album</p>
                <p class="date--added">Date Added</p>
                <p class="time"><img src="./assets/images/icons8-clock.svg" alt=""></p>
            </div>
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

function listDisplay(arr){
    viewPlay = true
    $("main .top--bar").next().remove()
    let container = arr.map((item, index)=>{
        return `
        <div class="list--container" id="${index}">
            <div class="list--header">
                <p class="list--type" onclick="handleShowAll('${index}')">${item.name}</p>
                <p class="show--all" onclick="handleShowAll('${index}')">Show All</p>
            </div>
            <div class="list">
                ${
                    arr[index].lists.map((itm, ind)=>{
                        return `
                        <div onclick="chosePlaylist(${index},${ind})" class="list--part">
                            <div class="cover">
                                <img src="${itm.images[0].url}" alt="">
                                <div onclick="handlePlay(${index},${ind})" class="play">
                                    <img src="./assets/images/play_arrow_FILL1_wght400_GRAD0_opsz48.svg" alt="">
                                </div>
                            </div>
                            <p class="list--name">${itm.name}</p>
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
    $(".top--bar .search--bar").remove()
    checkWidth()
}

async function data(id, item){
         await fetch(`https://api.spotify.com/v1/browse/categories/${item.title}/playlists`, id)
            .then(res => res.json())
            .then(data=>{
                // console.log(data.playlists.items)
                playlist.push({name:item.name, lists:data.playlists.items})
                console.log(playlist)
                // listDisplay(playlist)
                checkNavState()
        })
    return playlist
}    

async function getToken(){
    await fetch("https://accounts.spotify.com/api/token", authOptions(client_id, client_secret))
        .then(res => res.json())
        .then(data=>{
            datum = data.access_token
        })
    console.log(datum)
    showToken()
}

function showToken(){
    let par = authOption1(datum)
    playlists.forEach((item) => {
        data(par, item)
    })
}

getToken()

async function getMusicList(id, params){
    await fetch(`https://api.spotify.com/v1/playlists/${id}/tracks?limit=50`, params)
            .then(res => res.json())
            .then(data=>{
                playlistLibrary= data.items
                console.log(playlistLibrary)
                appendLists()
        }).catch(err => console.log(err))
    return playlistLibrary
}

function appendLists(){
    let musicList = playlistLibrary.map((itm, id)=>{
        return `
        <div ondblclick="handlePlay(${id})" class="song">
            <span onclick="handlePlay(${id})" class="number">
                <p>${id+1}</p>
                <i class="fa-sharp fa-solid fa-play"></i>
            </span>
            <div class="title">
                <img src="${itm.track.album.images[2].url}" alt="">
                <div class="name">
                    <p class="song--title">${itm.track.name}</p>
                    <p class="song--desc">${itm.track.artists[0].name}</p>
                </div>
            </div>
            <p class="album">${itm.track.album.name}</p>
            <p class="date--added">${dateDifference(itm.added_at)+" Days"}</p>
            <div class="duration">
                <i class="fa-regular fa-heart"></i>
                <p class="time">${msToMinSec(itm.track.duration_ms)}</p>
                <i class="fa-solid fa-ellipsis"></i>
            </div>
        </div>
        `
    }).join("")

    $("main .player .music--list").append(musicList)
}

function msToMinSec(ms){
    let sec = Math.floor(ms / 1000)
    let min = Math.floor(sec / 60)
    sec = sec % 60
    return `${min}:${sec<10?`0${sec}`:sec}`
}

function dateDifference(day){
    let date = new Date(now).getTime()
    let addedAt = new Date(day).getTime()
    let differ = addedAt-date
    let days = Math.floor(differ/(1000*3600*24*3600))
    return days
}

async function getCategories(params){
    await fetch(`https://api.spotify.com/v1/browse/categories?limit=50`, params)
    .then(res => res.json())
    .then(data=>{
        categories = data.categories.items
        console.log(categories)
        appendCategories()
}).catch(err => console.log(err))
return categories
}

function goToSearch(){
    $("main").scrollTop(0)

    if(pages[now].name != "search"){
        $("main .top--bar .page--control").after(`
        <div class="search--bar">
            <img src="./assets/images/icons8-search (2).svg" alt="">
            <input type="text" placeholder="What do you want to listen to?">
        </div>
        `)
    }

    $("main .top--bar").next().remove()

    if(!pages[now+1]||pages[now+1].name != "search"){
        pages.push({name:"search",func:()=>appendCategories()})
        now++;
    } else {
        pages[now+1] = {name:"search",func:()=>appendCategories()}
    }

    getCategories(authOption1(datum))
}

function appendCategories(){
    
    let category = categories.map(item =>{
        return `
        <div onclick="chooseCategory(${item.id})" class="category">
            <img src="${item.icons[0].url}" alt="${item.name + '-category'}">
            <h2>${item.name}</h2>
        </div>
        `
    }).join("") 

    

    $("main").append(`
    <section class="search--container">
            <h1>Browse all</h1>
            <div class="category--list">
                ${category}
            </div>
        </section>
    `)

    checkNavState()
}

function goToHome(){
    pages = [{name:"home", func: ()=>listDisplay(playlist)}]
    listDisplay(playlist)
    checkNavState()
}

function addElipsis(str){
    let elipsis = []
    if(str.length > 50){
        elipsis = [...str].slice(0, 47)
        elipsis.push(" ...")
        elipsis = elipsis.join("")
        str = elipsis
    }
    console.log(elipsis)
    return str
}

// checkNavState()

function addUserButtons(){
    $("main .top--bar .page--control").after(`
        <div class="user--button">
            <a href=""><button class="preference"><p><span>P</span>remium</p></button></a>
            <a href=""><button class="support"><p><span>S</span>uppor<span>t</span></p></button></a>
            <a href="./download.html" target="_blank"><button class="download"><p><span>D</span>own<span>l</span>oa<span>d</span></p></button></a>
        </div>
        <div class="partitionX"></div>
    `)
}

function controlNavState(){//check active navigation and change color to white

}

async function searchAll(param, name){
    await fetch(`https://api.spotify.com/v1/search?q=${name}&type=artist%2Ctrack%2Calbum%2Cplaylist%2Caudiobook%2Cshow%2Cepisode&limit=5`, param)
        .then(res=>res.json())
        .then(data=> {
            searchList = data
            console.log(searchList)   
            initialSearch()
            addArtistSongs(searchList.artists.items[0], searchList.tracks.items)
            addArtists(searchList.artists.items)
        })
}

function literalSearch(){
    searchAll(authOption1(datum), "ju")
}

function artists(arr){
    let result = [...arr]
    console.log(result)
    // result.sort((a, b)=>b.popularity - a.popularity)
    result.sort((a, b)=>b.followers.total - a.followers.total)
    result.length = 5
    console.log(result)
}

function initialSearch(){
    let top = `
    <section class="search--display">
        <div class="search--items">
            <div class="items active">All</div>
            <div class="items">Artists</div>
            <div class="items">Songs</div>
            <div class="items">Playlists</div>
            <div class="items">Albums</div>
            <div class="items">Podcasts & Shows</div>
        </div>
    </section>
    `
    $("main").append(top)
}
function addArtistSongs(artist, songs){
    songs.length = 4
    let artistSong = `
    <div class="songs--artist">
    <div class="artist">
        <h1>Top Result</h1>
        <div class="artist--container">
            <img src="${artist.images[2].url}" alt="">
            <h1 class="name">${artist.name}</h1>
            <p class="type">${capitalizeFirstLetter(artist.type)}</p>
            <div onclick="handlePlay()" class="play">
                <img src="./assets/images/play_arrow_FILL1_wght400_GRAD0_opsz48.svg" alt="">
            </div>
        </div>
    </div>
    <div class="songs">
        <h1>Songs</h1>
        <div class="song--list">
            ${songs.map((item, index) =>{
                return `
                    <div class="list--item">
                        <div class="image--container">
                            <img src="${item.album.images[2].url}" alt="">
                            <img src="./assets/images/play_arrow_FILL1_wght400_GRAD0_opsz48.svg" class="play" alt="">
                            <div class="cover"></div>
                        </div>
                        <div class="track--info">
                            <p class="track--name">${item.name}</p>
                            <div class="track--artist">
                                ${item.explicit?`<div class="explicit"><p>E</p></div>`:""}
                                <p class="name">${item.artists.map(itm=>`<span>${itm.name}</span>`).join(", ")}</p>
                            </div>
                        </div>
                        <div class="actions">
                            <i class="fa-regular fa-heart"></i>
                            <p class="duration">${msToMinSec(item.duration_ms)}</p>
                            <i class="fa-solid fa-ellipsis"></i>
                        </div>
                    </div>
                `
            }).join("")}
        </div>
    </div>
</div>
    `

    $("main .search--display").append(artistSong)
}

function addArtists(artists){
    let artistList = `
    <div class="artists row--list tm">
        <h1 class="title">Artists</h1>
        <div class="artists--list">
        ${artists.map(item => {
            return `
                <div class="list--part">
                    <div class="profile--container">
                        <img src="${item.images[1].url}" alt="" class="profile--img">
                        <div onclick="handlePlay()" class="play">
                            <img src="./assets/images/play_arrow_FILL1_wght400_GRAD0_opsz48.svg" alt="">
                        </div>
                    </div>
                    <p class="name">${item.name}</p>
                    <p class="type">${capitalizeFirstLetter(item.type)}</p>
                </div>
            `
        }).join("")}
        </div>
    </div>
    `
    $("main .search--display").append(artistList)
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
