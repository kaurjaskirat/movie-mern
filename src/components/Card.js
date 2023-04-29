import React from 'react';
import './Card.css';

export default function Card(props) {




  return (
    <div>
      <div>

        <div className="card mt-3 p-3 text-bg-info mb-3 " style={{ "width": "17rem", "maxHeight": "380px", "backgroundColor": "pink", "border": "2px solid grey" }}>
          <img style={{ "border": "2px solid grey", "height": "140px", "objectFit": "fill" }} src={props.imgSrc} alt="Card image cap" />
          <div className="card-body">
            <h4 className="card-title">{props.foodName}</h4>
            <h5 className="card-title">{props.foodCat}</h5>
            <a href="/" className="btn btn-primary">Show More</a>
            <div className="con" >{props.deS}</div>

          </div>
        </div>
      </div>
    </div>
  )
}