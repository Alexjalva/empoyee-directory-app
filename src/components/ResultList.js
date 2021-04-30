import userEvent from "@testing-library/user-event";
import React from "react";

function ResultList(props) {
  
  return (
    <table style={{width: "100%"}}>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(employee => 
          <tr style = {{borderTop: "5px dashed black"}}>
            <td>
              <img src={employee.picture.thumbnail} />
            </td>
            <td>
              {employee.name.first}{employee.name.last}
            </td>
            <td>
              {employee.phone}
            </td>
            <td>
              {employee.email}
            </td>
            <td>
              {employee.location.state},{employee.location.country}
            </td>
          </tr>)}
      </tbody>
    </table>
    // <ul className="list-group">

    //   {console.log(props.results)}
    // </ul>
  );
}

export default ResultList;
