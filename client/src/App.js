import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import EmpResults from './components/EmpResults'
// fontawesome Explicit import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faSort  } from '@fortawesome/free-solid-svg-icons'

function App() {
  const[employees, setEmployees] = useState([]);
  const[search, setSearch] = useState("");
  const[query, setQuery] = useState('chicken');

  useEffect(() =>{
    console.log("Effect has been run");
    genRandomUsers();
  }, [query]);

  const genRandomUsers = async () => {
    const response = await fetch(`https://randomuser.me/api/?results=50`);
    const data = await response.json();
    setEmployees(data);
    console.log(data);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault(); //To stop page refresh
    setQuery(search);
  }

  return (
    <div className="App">
      <header>
        <div className="blue-gradient">
          <h3 className="table-title"> Employee Directory </h3>
          <div className="search-block">
            <div className="search-panel">
              <input type="text" value={search} onChange={updateSearch} placeholder="Search for employee..." className="search-input"/>
            </div>
            <FontAwesomeIcon icon={faSearch} onClick={getSearch} style={{width: "7rem", height: "2rem", paddingTop: "6px", cursor: "pointer"}} />
          </div>
        </div>
      </header>
      <main>
        <EmpResults 
          {...employees}
        />
      </main>
    </div>
  );
}

export default App;
