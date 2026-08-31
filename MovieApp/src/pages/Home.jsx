
//Home page of the app
import "../../data/Movies.jsx";
import "../css/index.css";
import MovieCard from "../components/MovieCard";

import cars3 from "../images/cars3.jpg";
import cars2 from "../images/cars2.jpg";
import kungfupanda2 from "../images/kungfupanda2.jpg";
import pussinboots from "../images/pussinboots.jpg";
import planes from "../images/planes.jpg";
import madagascar from "../images/madagascar.jpg";
import coc from "../images/coc.jpg";
import cars from "../images/cars.jpeg";
import toystory1 from "../images/toystory1.webp";
import brave from "../images/brave.jpg";
import acrossspiderverse from "../images/acrossspiderverse.jpg";
import rio from "../images/rio.jpg";
import incredibles2 from "../images/incredibles2.jpg";
import frozen2 from "../images/frozen2.jpg";
import toystory2 from "../images/toystory2.jpg";
import beemovie from "../images/beemovie.jpg";
import home from "../images/home.jpg";
import charlie from "../images/charlie.jpg";
import onward from "../images/onward.jpg";
import tinkerbell5 from "../images/tinkerbell5.jpg";
import nemo from "../images/nemo.jpg";
import legomovie2 from "../images/legomovie2.jpg";
import walle from "../images/walle.jpg";
import sing2 from "../images/sing2.jpg";
import overhedge from "../images/overhedge.jpg";
import dory from "../images/dory.jpg";
import frozen from "../images/frozen.jpg";
import epic from "../images/epic.jpeg";
import legomovie from "../images/legomovie.jpg";
import toystory3 from "../images/toystory3.jpg";
import rio2 from "../images/rio2.jpg";
import sing from "../images/sing.jpg";
import encanto from "../images/encanto.jpg";
import croods from "../images/croods.jpg";
import intospiderverse from "../images/intospiderverse.jpg";
import paddington2 from "../images/paddington 2.jpg";
import wreckitralph from "../images/wreckitralph.jpg";
import dragon from "../images/dragon.jpg";
import tangled from "../images/tangled.jpg";
import paddington from "../images/paddingon.jpg";
import bighero6 from "../images/bighero6.jpeg";
import mu from "../images/mu.jpg";
import bugslife from "../images/bugslife.jpg";
import moana from "../images/moana.jpg";
import riseofguardians from "../images/riseofguardians.jpg";
import tinkerbell2 from "../images/tinkerbell2.jpg";
import tinkerbell4 from "../images/tinkerbell4.jpg";
import incredibles1 from "../images/incredibles1.jpg";
import bolt from "../images/bolt.jpg";
import insideOut from "../images/insideOut.jpg";
import insideOut2 from "../images/insideOut2.jpg";
import tinkerbell3 from "../images/tinkerbell3.jpg";
import kungfupanda from "../images/kungfupanda.jpg";
import tintin from "../images/tintin.jpg";
import muInc from "../images/mu_inc.jpeg";
import tinkerbell6 from "../images/tinkerbell6.jpg";
import wildrobot from "../images/wildrobot.jpg";
import turbo from "../images/turbo.jpg";
import wreckitralph2 from "../images/wreckitralph2.jpg";
import storks from "../images/storks.jpg";


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
