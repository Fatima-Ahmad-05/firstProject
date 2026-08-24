function MovieCard({Movie}){//pass an object as a  parameter to the functio compnonent
    function OnFavClick(){
        alert("Added to favourites")
    }
   
   
   
    return(
        <div className="movie-card">
        <div className="movie-poster">
<img src={Movie.url} alt={Movie.title}/>
<div className="Movie-overlay">
<button className="Favourite-btn" onClick={"OnFavClick"}>
🤍
</button>
</div>
<div  className="movie-info">
    <h3>
        {Movie.title}

    </h3>
    <h3>{Movie.release_date}</h3>
</div>

            </div>
        </div>
    );
}
export default MovieCard;