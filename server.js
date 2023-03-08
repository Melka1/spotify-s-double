console.log("hello every one")
var client_id = '87ad29c3f0f74cc1b391baaeef63e811';
var client_secret = '2cbf3df5e0914f8baecede4294eb6d81';
let datum;

let playlist = []

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
    
let data = async(id) =>{
    await fetch(`https://api.spotify.com/v1/browse/categories/focus/playlists`, id)
        .then(res => res.json())
        .then(data=>{
            console.log(data.playlists.items)
            playlist = data.playlists.items

            listDisplay(playlist)
    })
    return playlist
}    

let getToken = async()=>{
    await fetch("https://accounts.spotify.com/api/token", authOptions(client_id, client_secret))
        .then(res => res.json())
        .then(data=>{
            datum = data.access_token
        })
    console.log(datum)
}



