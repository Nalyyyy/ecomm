import React, {useState} from 'react'

const Search = () => {

    const [keyword, setKeyword] = useState('');
    console.log(window.history);

    const searchHandler =(e)=>{
        e.preventDefault()

        if(keyword.trim()){
            window.history.pushState({},undefined , `/search/${keyword}`);
            window.location.reload(false);

        }else{
            window.history.pushState({}, undefined,'/');
            window.location.reload(false);

        }
    }
  return (
    <form onSubmit={searchHandler}>
        <div className='searchGroup'>
              <input 
                type='text' 
                id='search' 
                className='search' 
                placeholder='Rechercher'
                onChange={(e)=> setKeyword(e.target.value)}
              />
              <button id='searchButton' className='searchButton'/>
        </div>
    </form>
  )
}

export default Search