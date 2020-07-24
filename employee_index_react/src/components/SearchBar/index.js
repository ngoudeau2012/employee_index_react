import React from "react";

function Search(props) {
    console.log(props.searchState)
  return (
    <div >
    <div className="input-group mb-3 col-4">
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Default
        </span>
      </div>
      <input
        value= {props.searchState}
        onChange={props.onChange}
        type="text"
        className="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
      />
    </div>
    </div>
  );
}

export default Search;