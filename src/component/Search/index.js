import React from 'react'
import './style.css'


const Search = (props) => {
    
    const searchCharacter=(e)=>{
        const value=e.target.toLowerCase();
       
        const filterItem=props.pokemon.filter((item)=>{
            return (
                item.name.toLowerCase().includes(value)
            );
        })
        
    }
    const changeCharacter=(e)=>{
        e.target.value=""
    }
    return (
        <div>
            <input
          type="text"
          name="searchBare"
          key="searchBar"
          placeholder="Search for a character..."
          onKeyUp="searchCharacter"
          onChange="changeCharacter"
        />
            
        </div>
    )
}

export default Search
