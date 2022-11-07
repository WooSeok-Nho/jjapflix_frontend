
window.onload = async function loadMovieRecommend(){
    let User_payload = JSON.parse(localStorage.getItem('payload'))
    if (User_payload === undefined ||  User_payload === null){

        location.href="http://127.0.0.1:5500/login.html";
    } else {
    const movie_id = location.search.replace("?", "")

    movies = await getMovieRecommend(movie_id)

    const movie_list = document.getElementById("movies")

    movies.forEach(movie =>{
        const newMovie = document.createElement("div");

        const movieImage = document.createElement("img")
        

        movieImage.setAttribute("src", `${TmdbApiImageUrl}${movie.image}`)


        newMovie.onclick=function() {
            location.href = `articledetail.html?${movie.id}`
        }

        newMovie.innerText = movie.title
        newMovie.appendChild(movieImage)
        movie_list.appendChild(newMovie)
    });
}
}

function searchButton(){
    const search_id = document.getElementById("search").value
    console.log(search)
    location.href = `search.html?${search_id}`
    
}