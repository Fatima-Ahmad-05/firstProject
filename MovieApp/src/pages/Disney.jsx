import MovieCard from "../components/MovieCard";


function Disney(){
    return(
        <><h2>
            Disney Movies
        </h2>

            <div className="movies-grid">
        {movies.map((movie)=>(
            movie.title.toLowerCase().startsWith(searchQuery) &&<MovieCard  movie={movie} key={movie.id}/>))}
            </div>
        </>
    );
}
export default Disney;