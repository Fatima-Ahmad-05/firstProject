import MovieCard from "../components/MovieCard";
import tinkerbell3 from "../images/tinkerbell3.jpg";
import tinkerbell2 from "../images/tinkerbell2.jpg";

import tinkerbell4 from "../images/tinkerbell4.jpg";
import tinkerbell5 from "../images/tinkerbell5.jpg";

import riseofguardians from "../images/riseofguardians.jpg";

import toystory from "../images/toystory.jpg";
import toystory from "../images/toystory.jpg";
import toystory2 from "../images/toystory2.jpg";
import toystory3 from "../images/toystory3.jpg";
import beemovie from "../images/beemovie.jpg";
import insideOut from "../images/insideOut.jpg";
import intospiderverse from "../images/intospiderverse.jpg";
import bugslife from "../images/bugslife.jpg";
import mu from "../images/mu.jpg";
import legomovie from "../images/legomovie.jpg";
import dory from "../images/dory.jpg";
import pussinboots from "../images/pussinboots.jpg";
import frozen from "../images/frozen.jpg";
import frozen2 from "../images/frozen2.jpg";
import incredibles2 from "../images/incredibles2.jpg";
import overhedge from "../images/overhedge.jpg";


function Home(){
const movies=[    //arrray of movies
    {id:1,title:"Inside Out", release_date:2013,url:insideoutImg },
   {id:2,title:"Bolt", release_date:2013, url},
   
   {id:3,title:"Tinkerbell and the Secret of the Wings", release_date:2013,url:tinkerbell4},
   {id:4,title:"Tinkerbell and the Lost Treasure", release_date:2008,url:tinkerbell2},
  {id:5,title:"Rise of the Guardians", release_date:2013,url:riseofguardians},
  {id:6,title:"Toy Story", release_date:1995,url:toystory},
  {id:7,title:"Toy Story 2", release_date:1999,url:toystory2},
  
  {id:8,title:"Bee Movie", release_date:2013,url:beemovie},
  {id:9,title:"Inside Out", release_date:2013,url:insideOut},
  {id:10,title:"Inside Out 2", release_date:2013},
  {id:11,title:"Spiderman into the Spiderverse", release_date:2018,url:intospiderverse}
  , {id:12,title:"Bug's Life", release_date:1998,url:bugslife}
  , {id:13,title:"Monster's University", release_date:2013,url:mu},
   {id:14,title:"Lego Movie", release_date:2014,url:legomovie},
    {id:15,title:"Finding Dory", release_date:2016,url:dory},
     {id:16,title:"Puss in Boots", release_date:2011,url:pussinboots},
      {id:17,title:"Frozen", release_date:2013,url:frozen},
       {id:18,title:"Frozen 2", release_date:2019,url:frozen2},
       {id:19 ,title:"Incredibles 2", release_date:2018, url:incredibles2}
       ,{id:20,title:"Over the Hedge",release_date:2006,url:overhedge},
         {id:21,title:"Toy Story 3", release_date:2010,url:toystory3},
          {id:22,title:"Tinkerbell and the Pirate Fairy", release_date:2014,url:tinkerbell5},
          
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