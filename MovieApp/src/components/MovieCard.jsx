function MovieCard({Movie}){//pass an object as a  parameter to the functio compnonent
    return(
        <div className="movie-card">
        <div className="movie-poster">
<img src={Movie.url} alt={Movie.title}/>

            </div>
        </div>
    );
}
export default MovieCard;