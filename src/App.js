import axios from 'axios';
import React ,{useEffect,useState} from 'react';
// eslint-disable-next-line
import { Route, Switch , useParams } from 'react-router-dom';
import Nav from './component/Nav';
import Search from './component/Search';
import Home from './component/Home';
import Favorit from './component/Favorit';
import About from './component/About';
import Card from './component/Card';
import SearchItem from './component/SearchItem'
import './App.css';

function App() {

  const [pokemon , setPokemon] = useState ([]);

  useEffect(()=>{
    axios.get("https://api.pokemontcg.io/v2/cards?pageSize=10")
    .then((response)=>setPokemon(response.data.data));
  },[]);

  console.log(pokemon);


  return (
    <>

    <Nav />
    <Search pokemon={pokemon}/>
    <Switch >
    <Route exact path="/Home" render={()=><Home pokemon={pokemon}  />} />
    <Route exact path="/Favorit" component={Favorit} />
    <Route exact path="/About" component={About} />
    <Route exact path="/Card/:id" component={Card} />
    <Route exact path="/Search" component={SearchItem} />
    <Route path="*" render={()=>{return <h1>404</h1>}} />
    </ Switch >
    </> 
    
  );
}

export default App;
