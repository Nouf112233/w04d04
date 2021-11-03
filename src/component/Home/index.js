import React from 'react'
import { useHistory } from 'react-router-dom'
import './style.css'

const Home = (props) => {
    const history = useHistory();
    
    const pokemon=props.pokemon;
    console.log(props.pokemon);


    const changeRoute = (id)=>{
        history.push(`/Card/${id}`);
    }
    return (
        <div className="cards">
            {/* {pokemon.map((item,i)=>
            <div className="card"  key={item.id}>
                <h1>{item.name}</h1>
                {/* <h2>{item.country}</h2>
                <img src={item.img} onClick={()=>changeRoute(item.id)} alt="img city" />
                <button  onClick={()=>addLike(item.id)} >{item.liking}</button>
                </div>)} */} 
        </div>
    )
}

export default Home
