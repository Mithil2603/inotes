import React from 'react';
import './Collapse.css';

export default function Collapse(props) {
  return (
    <>
      <p className="d-inline-flex gap-1">
        <button className="btn btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          {props.title}
        </button>
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body card1">
          <p className='text-primary'>{props.shortForm}</p>
          <p>{props.desc}</p>
        </div>
      </div>
    </>
  )
}
