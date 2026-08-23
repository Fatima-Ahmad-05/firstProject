
import './App.css'
import '../components/MovieCard.jsx'
function App() {

  return (<p>
    <h1>Hello</h1>
   
    <Display para1="hi"/></p>
  );
}
function Display({para1}){
  return (<>{para1}</>);
}

export default App
