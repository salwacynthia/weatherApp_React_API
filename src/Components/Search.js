import React from "react";

const error = props => {
  return (
    <div className="alert alert-warning mx-5" role="alert">
      Enter City and Country!
    </div>
  );
};

const Search = props => {
  return (
    <div className="container" id="search">
      <form onSubmit={props.loadweather}>
        <div>
            {props.error ? error() : ""}
        </div>
        <div className="row"  id="search">
          <div className="col-md-6" id = "form">
            <input
              type="text"
              className="form-control"
              placeholder="City"
              name="city"
              autoComplete="off"
            />
          </div>
          <div className="col-md-6" id="form">
            <input
              type="text"
              className="form-control"
              placeholder="Country"
              name="country"
              autoComplete="off"
            />
          </div>
          <div className="col-md-3 mt-md-0 mt-2 text-md-left ">
            <button className="btn btn-danger">Weather Today!</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;