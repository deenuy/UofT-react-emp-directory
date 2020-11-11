import React from 'react';
// fontawesome Explicit import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faSort  } from '@fortawesome/free-solid-svg-icons'

function EmpResults(props) {
  // let users = data.results;
  const { data } = props;
  // console.log(data);

  return (
    <div className="table-wrapper">
      <table className="table table-hover mb-0">
        <thead>
          <tr>
            <th className="th-lg">
              <p>User Profile
              </p>
            </th>
            <th className="th-lg">
              <p>First Name
                <FontAwesomeIcon icon={faSort} onClick={props.sortBy} id="orderByFirst" style={{width: "2rem", cursor: "pointer"}} />
              </p>
            </th>
            <th className="th-lg">
              <p>Last Name
                <FontAwesomeIcon icon={faSort} onClick={props.sortBy} id="orderByLast" style={{width: "2rem", cursor: "pointer"}} />
              </p>
            </th>
            <th className="th-lg">
              <p>Username
                <FontAwesomeIcon icon={faSort} onClick={props.sortBy} id="orderById" style={{width: "2rem", cursor: "pointer"}} />
              </p>
            </th>
            <th className="th-lg">
              <p>Email
                <FontAwesomeIcon icon={faSort} onClick={props.sortBy} id="orderByEmail" style={{width: "2rem", cursor: "pointer"}} />
              </p>
            </th>
            <th className="th-lg">
              <p>Location
                <FontAwesomeIcon icon={faSort} onClick={props.sortBy} id="orderByLocation" style={{width: "2rem", cursor: "pointer"}} />
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          {data && 
            data.map((employee) => {
              return (
                      <tr key={employee.name.first + "-" + employee.name.last}>
                        <td >
                          {
                            <img
                                src={employee.picture.medium}
                                alt={"profile image for " + employee.name.first + " " + employee.name.last}
                                className="userProfile"
                            />
                          }
                        </td>
                        <td>{employee.name.first}</td>
                        <td>{employee.name.last}</td>
                        <td>{employee.login.username}</td>
                        <td>{employee.email}</td>
                        <td>{employee.location.city + ", " + employee.location.state}</td>
                      </tr>
                    );
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default EmpResults;