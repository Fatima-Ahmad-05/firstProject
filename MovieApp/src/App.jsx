   
//main app page that shows up 


import "./App.css";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Dreamworks from "./pages/Dreamworks";
import Pixar from "./pages/Pixar";
import Disney from "./pages/Disney";
import {Routes,Route} from "react-router-dom";
import NavBar from "./components/NavBar";


function App() {

  return (<div>
   <main className="main-content">
    <NavBar/>
<Routes>
<Route path="/" element= {<Home />} />       {/* all routes as route tag within routes tags with 
                                                 path and element  */}
<Route path="/favourites" element= {<Favourites />} />
<Route path="/disney" element={<Disney />}/>
<Route path ="/pixar" element={<Pixar />}/>
<Route path="/dreamworks" element={<Dreamworks/>}/>


</Routes>

   </main>
   </div>
  
  );
}



export default App;