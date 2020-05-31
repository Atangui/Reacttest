import React from 'react';

const Card = props =>
    <div className="col-md-6 col-lg-3">
      <div className="card mb-3">
        <div className="card-body">
          <p className="card-title"><span>Nom : </span>{props.info.name}</p>
          <p className="card-text">
            <span>Age : </span>{props.info.age}
          </p>
        </div>
      </div>
    </div>;

export default Card
