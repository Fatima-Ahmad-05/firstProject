
import "./App.css";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Dreamworks from "./pages/Dreamworks";
import Pixar from "./pages/Pixar";
import Disney from "./pages/Disney";
import {Routes,Route} from "react-router-dom";


function App() {

  return (
   <main className="main-content">
<Routes>
<Route path="/" element= {<Home />} />
<Route path="/favourites" element= {<Favourites />} />
<Route path="/disney" element={<Disney />}/>
<Route path ="/pixar" element={<Pixar />}/>
<Route path="/dreamworks" element={<Dreamworks/>}/>


</Routes>

   </main>
  
  );
}



export default App;