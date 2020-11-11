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
  }, [sort]);

  const genRandomUsers = async () => {
    const response = await fetch(`https://randomuser.me/api/?results=50`);
    const data = await response.json();
    setEmployees(data.results);
    // console.log(data);
  };

  // Table data filter function
  const setFilter = employees => {
    let users = employees;
    console.log(users);
    if(users) return users.filter(
      (row) => 
        row.name.first.toLowerCase().indexOf(searchParam.toLowerCase()) > -1 ||
        row.name.last.toLowerCase().indexOf(searchParam.toLowerCase()) > -1 ||
        row.login.username.toLowerCase().indexOf(searchParam.toLowerCase()) > -1 ||
        row.email.toLowerCase().indexOf(searchParam.toLowerCase()) > -1 ||
        row.location.city.toLowerCase().indexOf(searchParam.toLowerCase()) > -1 ||
        row.location.state.toLowerCase().indexOf(searchParam.toLowerCase()) > -1
      );
  }

  // Sort function
  let sortBy = (e) => {
    var sortedList;
    var emp = employees;

    var getStorageSortType = localStorage.getItem('sortType');

    if (e.target.id === "orderByFirst") {
      if(!getStorageSortType || getStorageSortType === 'ascending') {
        localStorage.setItem('sortType', 'descending');
        sortedList = emp.sort((a, b) => a.name.first > b.name.first ? 1 : a.name.first < b.name.first ? -1 : 0);
      } else {
        sortedList = emp.sort((a, b) => a.name.first > b.name.first ? -1 : a.name.first < b.name.first ? 1 : 0);
        localStorage.setItem('sortType', 'ascending');
      }
    }
    if (e.target.id === "orderByLast") {
      if(!getStorageSortType || getStorageSortType === 'ascending') {
        localStorage.setItem('sortType', 'descending');
        sortedList = emp.sort((a, b) => a.name.last > b.name.last ? 1 : a.name.last < b.name.last ? -1 : 0);
      } else {
        sortedList = emp.sort((a, b) => a.name.last > b.name.last ? -1 : a.name.last < b.name.last ? 1 : 0);
        localStorage.setItem('sortType', 'ascending');
      }
    }
    if (e.target.id === "orderById") {
      if(!getStorageSortType || getStorageSortType === 'ascending') {
        localStorage.setItem('sortType', 'descending');
        sortedList = emp.sort((a, b) => a.login.username > b.login.username ? 1 : a.login.username < b.login.username ? -1 : 0);
      } else {
        sortedList = emp.sort((a, b) => a.login.username > b.login.username ? -1 : a.login.username < b.login.username ? 1 : 0);
        localStorage.setItem('sortType', 'ascending');
      }
    }
    if (e.target.id === "orderByEmail") {
      if(!getStorageSortType || getStorageSortType === 'ascending') {
        localStorage.setItem('sortType', 'descending');
        sortedList = emp.sort((a, b) => a.email > b.email ? 1 : a.email < b.email ? -1 : 0);
      } else {
        sortedList = emp.sort((a, b) => a.email > b.email ? -1 : a.email < b.email ? 1 : 0);
        localStorage.setItem('sortType', 'ascending');
      }
    }
    if (e.target.id === "orderByLocation") {
      if(!getStorageSortType || getStorageSortType === 'ascending') {
        localStorage.setItem('sortType', 'descending');
        sortedList = emp.sort((a, b) => a.location.city > b.location.city ? 1 : a.location.city < b.location.city ? -1 : 0);
      } else {
        sortedList = emp.sort((a, b) => a.location.city > b.location.city ? -1 : a.location.city < b.location.city ? 1 : 0);
        localStorage.setItem('sortType', 'ascending');
      }
    }
    if(sortedList) setEmployees([...sortedList]);
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
              <input type="text" value={searchParam} onChange={updateSearch} placeholder="Search for an employee by name, email, city.." className="search-input"/>
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
