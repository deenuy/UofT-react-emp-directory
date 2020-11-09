import React from 'react';
// fontawesome Explicit import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faSort  } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <header>
      {/* <div className="blue-gradient">
        <h3> Employee Directory </h3>
      </div>
      <div className="search-block">
        <div className="search-panel">
          <input type="text" value={search} onChange={updateSearch} placeholder="Search books from Google API" className="search-input"/>
        </div>
        <FontAwesomeIcon icon={faSearch} onClick={getSearch} style={{width: "10rem", height: "2.8rem", paddingTop: ".6rem", cursor: "pointer"}} />
      </div> */}
    </header>
  );
}

export default Navbar;