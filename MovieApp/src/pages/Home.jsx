import MovieCard from "../components/MovieCard";
import insideoutImg from "../images/insideOut.jpg";

function Home(){
const movies=[    //arrray of movies
    {id:1,title:"Madagascar 3", release_date:2013,url:insideoutImg },
   {id:2,title:"Bolt", release_date:2013},
   {id:3,title:"Tinkerbell and the Secret of the Wings", release_date:2013},
   {id:4,title:"Tinkerbell and the Lost Treasure", release_date:2008},
  {id:5,title:"Rise of the Guardians", release_date:2013},
  {id:6,title:"Toy Story", release_date:2013},
  {id:7,title:"Toy Story 2", release_date:2013},
  {id:8,title:"Bee Movie", release_date:2013},
  {id:9,title:"Indide Out", release_date:2013},
  {id:10,title:"Inside Out 2", release_date:2013},
  {id:11,title:"Spiderman into the Spiderverse", release_date:2013}
]
    return(
        <div className="home">
            <div className="movies-grid">
        {movies.map((movie)=>(
            <MovieCard  movie={movie} key={movie.id}/>))}
            </div>
        </div>
        
    );
}
export default Home;