const api="api_key=9a5b803659db59aa6777066c69cd50f9";
const base_url="https://api.themoviedb.org/3";
const banner_url="https://image.tmdb.org/t/p/original";
const img_url="https://image.tmdb.org/t/p/w500/";
const requests={
    fetchPopular: `${base_url}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&${api}`,
    fatchTrending:`${base_url}/trending/all/week?${api}&language=en-US`,  
    fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_networks=213`,
    fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
    fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
    fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
    fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
    fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`,
}
//used sort description of movie
function truncate(str,n){
    return str?.length>n ? str.substr(0,n-1)+"...": str;
};
/* using XMLHttpRequest
const request_URL=`${base_url}/discover/tv?${api}&with_networks=213`;
const xhr=new XMLHttpRequest();
xhr.open('GET',request_URL);
xhr.onreadystatechange=function(){
    console.log(xhr.readyState);
    if(xhr.readyState===4){
        const data=JSON.parse(this.responseText);
        console.log(data);
        const len=data.results.length-1 ;
        // console.log(len);
        console.log(Math.floor(Math.random() * len));
    //    const setMovie=data.results[]
    //    console.log(setMovie);
    //    var banner_title=document.getElementById("banner_title");
    //    banner_title.innerText=setMovie;
       
    }
};
xhr.send();
*/
//Banner
fetch(requests.fetchPopular).then((res)=>res.json()).then((data)=>{
    // console.log(data.results);
    const setMovie=data.results[(Math.floor(Math.random()*data.results.length-1))]
    console.log(setMovie);
    var banner=document.getElementById("banner");
    banner.style.backgroundImage="url("+banner_url+setMovie.backdrop_path+")";
    var banner_title=document.getElementById("banner_title");
    banner_title.innerHTML=setMovie.original_title;
    var banner_desc=document.getElementById("banner_descpription");
    banner_desc.innerText=truncate(setMovie.overview,150);
});
//Movies rows
fetch(requests.fetchNetflixOrignals).then((res)=>res.json()).then((data)=>{
    const headRow=document.getElementById("head_row");

    const row=document.createElement("div");
    row.className="row";
    row.classList.add("netflixRow");
    headRow.appendChild(row)

    const title=document.createElement("h2");
    title.className="row_title"
    title.innerText="Netflix Orginals";
    row.appendChild(title);

    const row_posters=document.createElement("div");
    row_posters.className="row_posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
        console.log(movie);
        const poster=document.createElement("img");
        poster.className="row_posterLarge";
        // var s=movie.name.replace(/\s+/g,"");
        // poster.id=s;
        poster.src=img_url+movie.poster_path;
        row_posters.appendChild(poster)
    });
});

fetch(requests.fatchTrending).then((res)=>res.json()).then((data)=>{
    const headRow=document.getElementById("head_row");

    const row=document.createElement("div");
    row.className="row";
    row.classList.add("netflixRow");
    headRow.appendChild(row)

    const title=document.createElement("h2");
    title.className="row_title"
    title.innerText="Trending";
    row.appendChild(title);

    const row_posters=document.createElement("div");
    row_posters.className="row_posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
        // console.log(movie);
        const poster=document.createElement("img");
        poster.className="row_posterLarge";
        // var s=movie.name.replace(/\s+/g,"");
        // poster.id=s;
        poster.src=img_url+movie.poster_path;
        row_posters.appendChild(poster)
    });
});
fetch(requests.fetchActionMovies).then((res)=>res.json()).then((data)=>{
    const headRow=document.getElementById("head_row");

    const row=document.createElement("div");
    row.className="row";
    row.classList.add("netflixRow");
    headRow.appendChild(row)

    const title=document.createElement("h2");
    title.className="row_title"
    title.innerText="Action";
    row.appendChild(title);

    const row_posters=document.createElement("div");
    row_posters.className="row_posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
        // console.log(movie);
        const poster=document.createElement("img");
        poster.className="row_posterLarge";
        // var s=movie.name.replace(/\s+/g,"");
        // poster.id=s;
        poster.src=img_url+movie.poster_path;
        row_posters.appendChild(poster)
    });
});
fetch(requests.ffetchComedyMovies).then((res)=>res.json()).then((data)=>{
    const headRow=document.getElementById("head_row");

    const row=document.createElement("div");
    row.className="row";
    row.classList.add("netflixRow");
    headRow.appendChild(row)

    const title=document.createElement("h2");
    title.className="row_title"
    title.innerText="Comedy";
    row.appendChild(title);

    const row_posters=document.createElement("div");
    row_posters.className="row_posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
        // console.log(movie);
        const poster=document.createElement("img");
        poster.className="row_posterLarge";
        // var s=movie.name.replace(/\s+/g,"");
        // poster.id=s;
        poster.src=img_url+movie.poster_path;
        row_posters.appendChild(poster)
    });
});
fetch(requests.fetchHorrorMovies).then((res)=>res.json()).then((data)=>{
    const headRow=document.getElementById("head_row");

    const row=document.createElement("div");
    row.className="row";
    row.classList.add("netflixRow");
    headRow.appendChild(row)

    const title=document.createElement("h2");
    title.className="row_title"
    title.innerText="Horror";
    row.appendChild(title);

    const row_posters=document.createElement("div");
    row_posters.className="row_posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
        // console.log(movie);
        const poster=document.createElement("img");
        poster.className="row_posterLarge";
        // var s=movie.name.replace(/\s+/g,"");
        // poster.id=s;
        poster.src=img_url+movie.poster_path;
        row_posters.appendChild(poster)
    });
});
fetch(requests.fetchRomanceMovies).then((res)=>res.json()).then((data)=>{
    const headRow=document.getElementById("head_row");

    const row=document.createElement("div");
    row.className="row";
    row.classList.add("netflixRow");
    headRow.appendChild(row)

    const title=document.createElement("h2");
    title.className="row_title"
    title.innerText="Romance";
    row.appendChild(title);

    const row_posters=document.createElement("div");
    row_posters.className="row_posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
        // console.log(movie);
        const poster=document.createElement("img");
        poster.className="row_posterLarge";
        // var s=movie.name.replace(/\s+/g,"");
        // poster.id=s;
        poster.src=img_url+movie.poster_path;
        row_posters.appendChild(poster)
    });
});
fetch(requests.fetchDocumentaries).then((res)=>res.json()).then((data)=>{
    const headRow=document.getElementById("head_row");

    const row=document.createElement("div");
    row.className="row";
    row.classList.add("netflixRow");
    headRow.appendChild(row)

    const title=document.createElement("h2");
    title.className="row_title"
    title.innerText="Documentaries";
    row.appendChild(title);

    const row_posters=document.createElement("div");
    row_posters.className="row_posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
        // console.log(movie);
        const poster=document.createElement("img");
        poster.className="row_posterLarge";
        // var s=movie.name.replace(/\s+/g,"");
        // poster.id=s;
        poster.src=img_url+movie.poster_path;
        row_posters.appendChild(poster)
    });
});
