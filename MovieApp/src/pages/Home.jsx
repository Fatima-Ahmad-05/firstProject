
//Home page of the app
import movies from "../data/Movies.jsx";
import "../css/index.css";
import MovieCard from "../components/MovieCard";



import {useState} from "react";


const d= "Disney";
const dr="Dreamworks";
const p="Pixar";
const dp="Disneypixar"


function Home(){

const[searchQuery ,setSearchQuery]= useState("");
const handleSearch=(e)=> {
    e.preventDefault(); //default was whenever submit or enter pressed after typing in an input field, the text disappeared
    //prevent default means that the search text stayed after submitting form
    alert(searchQuery);  
};
    return(
        <div className="home">

<form className="search-form" onSubmit={handleSearch}  > 
    <input className="search-input" type="text" placeholder="Search for Movies...."
    
    value={searchQuery}
    onChange={
        (e)=>setSearchQuery(e.target.value)
    }

    
    ></input>
     <button className="search-btn" type="submit-btn">Search</button></form>



            <div className="movies-grid">
        {movies.map((movie)=>(
            movie.title.toLowerCase().startsWith(searchQuery) &&<MovieCard  movie={movie} key={movie.id}/>))}
            </div>
        </div>
        
    );
}
export default Home;
