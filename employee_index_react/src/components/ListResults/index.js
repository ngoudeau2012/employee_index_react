import React from "react";

function ListResults(props) {
    return (
        <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Photo</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
          </tr>
        </thead>
        <tbody>
        {props.results.map(result => (
          <tr key={result.email} >
            <th scope="row"><img alt="" src={result.picture.thumbnail} className="img-fluid" /></th>
            <td>{result.name.first} {result.name.last}</td>
            <td>{result.email}</td>
            <td>{result.cell}</td>
          </tr>
        ))}
        </tbody>
      </table>

    //   <ul className="list-group">
    //     {props.results.map(result => (
    //       <li key={result.email} className="list-group-item">
    //         <img alt="Dog" src={result.picture.thumbnail} className="img-fluid" />
    //         <p>{result.name.first} {result.name.last}</p>
    //         <p>{result.email}</p>
    //         <p>{result.cell}</p>

    //       </li>
    //     ))}
    //   </ul>
      
    );
  }
  
  export default ListResults;
  