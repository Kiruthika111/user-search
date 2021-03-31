import React, { useState } from "react";
import { Col } from "react-bootstrap";

import DetailsTab from './DetailsTab';

function SearchForm() {
  const [name, setUserName] = useState('');
  const [userDetails, setUserDetails] = useState(null);

  const onSubmitValue = async (event) => {
    event.preventDefault();
    fetch('https://api.github.com/users/' + name)
      .then((response) => response.json())
      .then((data) => setUserDetails(data));
  }

  return (
        <div className="mt-5">
            <form onSubmit={onSubmitValue}>
                <div className="ml-5 pr-5 input-group">
                    <input
                    type="text"
                    className="form-control" 
                    placeholder="Enter the name"
                    value={name}
                    onChange= { event => setUserName(event.target.value)}
                    />
                    <button type="submit" className="btn btn-primary mr-5">
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </form>
            <div className="flex-display pl-5 mt-5">
                <Col sm={3}>
                    { userDetails ? 
                        <div className="col-3 col-md-12">
                            <div>
                                <img width="260" height="260" src={userDetails.avatar_url}></img>
                            </div>
                            <div className="pt-3">
                                <span className="card-fullname">{userDetails.name}</span>
                            </div>
                            <div>
                                <span className="card-username">{userDetails.login}</span>
                            </div>
                            <div className="pt-3">
                                <span>{userDetails.bio}</span>
                            </div>
                        </div> : null}
                </Col>
                <Col sm={9}>
                    <DetailsTab userDetails={userDetails} />
                </Col>
            </div>
        </div>
  );
};

export default SearchForm;