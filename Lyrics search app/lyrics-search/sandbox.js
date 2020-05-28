const form = document.getElementById('form');
const search = document.getElementById('search');
const result = document.getElementById('result');
const more = document.getElementById('more');



const apiURL ="https://api.lyrics.ovh"
// search by song or artist
 function searchSongs(song){
    fetch(`${apiURL}/suggest/${song}`)
    .then(res => res.json())
    .then(jsonres=> {
        
        jsonres.data.forEach(song =>{
            result.innerHTML += `
            <ul>
            <li>
            <span><strong>${song.artist.name}</strong> -${song.title}</span>
            <button class="btn" data-artist="${song.artist.name}" data-songtitle="${song.title}">Get Lyrics</button>    
            </li>
             
            </ul>     `
            // find out if there is a next page
            if(data.prev || data.next){
                more.innerHTML= `
                ${data.prev? `,button class= "btn" onclick = "getMoresongs('${data.prev}')>prev</button>`:""}
                ${data.prev? `,button class= "btn" onclick = "getMoresongs('${data.next}')>next</button>`:""}

                `;
            }else{
                more.innerHTML = '';
            }

        })
    })

    function 

}




// Event listeners
form.addEventListener('submit', e =>{
    e.preventDefault()
    const searchTerm = search.value.trim();
    if(searchTerm===""){
        alert('please type in a search term')
    }else{
        searchSongs(searchTerm)
    }
    
})