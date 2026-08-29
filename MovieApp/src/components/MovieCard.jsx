function MovieCard({movie}){//pass an object as a  parameter to the functio compnonent
    function OnFavClick(){
        alert("Added to favourites")
    }
   
   
   
    return(
    <div className="movie-card">
        <div className="movie-poster">
<img src={movie.url} alt={movie.title}/>

<div className="Movie-overlay">
    <div  className="movie-info">
    <h3>{movie.title}</h3>

    <h3>{movie.release_date}</h3>

</div>

</div>


            </div>
        </div>
    );
}
export default MovieCard;