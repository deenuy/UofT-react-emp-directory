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
  const[searchParam, setSearchParam] = useState("");
  const[sort, setSort] = useState('descending');

  // default on load react hook
  useEffect(() =>{
    console.log("Effect has been run");
    genRandomUsers();
  }, []);

  const genRandomUsers = async () => {
    const response = await fetch(`https://randomuser.me/api/?results=50`);
    const data = await response.json();
    setEmployees(data);
    console.log(data);
  };

  // Table data filter function
  const setFilter = employees => {
    let users = employees.results;
    console.log(users);
    if(users) return users.filter(
      (row) => 
        row.name.first.toLowerCase().indexOf(searchParam) > -1 ||
        row.name.last.toLowerCase().indexOf(searchParam) > -1 ||
        row.login.username.toLowerCase().indexOf(searchParam) > -1 ||
        row.email.toLowerCase().indexOf(searchParam) > -1 ||
        row.location.city.toLowerCase().indexOf(searchParam) > -1 ||
        row.location.state.toLowerCase().indexOf(searchParam) > -1
      );
  }

  // Sort function
  const sortBy = str => {
    console.log(str);
    setSort(str);
  }

  // update search parameter
  const updateSearch = e => {
    setSearchParam(e.target.value);
  }

  return (
    <div className="App">
      <header>
        <div className="blue-gradient">
          <h3 className="table-title"> Employee Directory </h3>
          <div className="search-block">
            <div className="search-panel">
              <input type="text" value={searchParam} onChange={updateSearch} placeholder="Search for employee..." className="search-input"/>
            </div>
            <FontAwesomeIcon icon={faSearch} onClick={setFilter} style={{width: "7rem", height: "2rem", paddingTop: "6px", cursor: "pointer"}} />
          </div>
        </div>
      </header>
      <main>
        <EmpResults 
          data = {setFilter(employees)}
          sortBy = {sortBy}
        />
      </main>
    </div>
  );
}

export default App;
